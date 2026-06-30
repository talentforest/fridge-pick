import { favoriteMealListAtom } from '@/atom/favoritesAtom';
import {
  allStorageItemListAtom,
  storageItemListByExpirationStatusAtom,
} from '@/atom/storageAtom';
import { allMealList, filterObj, allPreparedFoodList } from '@/constants';
import { useDebounce } from '@/hooks/common/useDebounce';
import { FoodFilterKey } from '@/types/filter';
import {
  EnrichedFoodStructure,
  ConsumableFoodWithEnrichedFoodStructure,
  ConsumableFood,
  SelectableItem,
} from '@/types/selectableItem';
import { EnrichedStorageItem } from '@/types/storage';
import {
  getConsumableFoodListWithEnrichedFoodStructure,
  getRecommendConsumableFoodScore,
  getSearchMatchScore,
  getSearchScore,
  hasConsumableFoodInStorage,
  RecommendMenuFactors,
} from '@/utils';
import { useAtomValue } from 'jotai';
import { useCallback, useMemo, useState } from 'react';

/** 높은 재료 보유율 기준 */
const HIGH_POSSESSION_THRESHOLD = 60;

export type EnrichedConsumableFoodWithFilterList =
  ConsumableFoodWithEnrichedFoodStructure &
    RecommendMenuFactors & { filterList: FoodFilterKey[] };

type Possession = Pick<
  RecommendMenuFactors,
  | 'expiredSoonRemainingDays'
  | 'possessedIngredientCount'
  | 'possessedList'
  | 'possessionPercent'
  | 'requiredIngredientCount'
>;

type UseGetMenuListProps = {
  maxLength?: number;
};

export const useGetMenuList = ({ maxLength }: UseGetMenuListProps = {}) => {
  const storageItems = useAtomValue(allStorageItemListAtom);

  const favoriteMealList = useAtomValue(favoriteMealListAtom);

  const expiredSoonStorageItemList = useAtomValue(
    storageItemListByExpirationStatusAtom('expiredSoon'),
  );

  const availableStorageItemList = useAtomValue(
    storageItemListByExpirationStatusAtom('available'),
  );

  const [activeFilter, setActiveFilter] = useState<FoodFilterKey | 'all'>('all');

  const changeActiveFilter = (filter: FoodFilterKey) => setActiveFilter(filter);

  const filterList = Object.values(filterObj['food']);

  const [searchKeyword, setSearchKeyword] = useState('');

  const debouncedSearchKeyword = useDebounce(searchKeyword, 300);

  const allConsumableFood = useMemo(() => {
    const consumablePreparedFood = allPreparedFoodList.filter(
      (food) => food.category === 'side_dish',
    );
    return [...allMealList, ...consumablePreparedFood];
  }, []);

  /* -------------------------------------------------------------------------- */
  /*                               필터 검증 함수들                                 */
  /* -------------------------------------------------------------------------- */
  /** filterLabel = '소비기한 임박'
   * 메뉴 내 소비기한 임박한 식재료 목록 리턴 */
  const getHasExpiredSoonIngredient = useCallback(
    (foodStructure: EnrichedFoodStructure): SelectableItem[] => {
      const { essential, common, seasoning } = foodStructure;

      const requiredIngredientList = [...essential, ...common, ...seasoning];

      return requiredIngredientList.filter((item) => {
        return expiredSoonStorageItemList.find(({ storageItem }) => {
          if (storageItem.type === 'meal') return storageItem.mealId === item.id;

          if (storageItem.type === 'preparedFood')
            return storageItem.preparedFoodId === item.id;

          return storageItem.ingredientId === item.id;
        });
      });
    },
    [expiredSoonStorageItemList],
  );

  const getPossessedStorageItems = useCallback(
    (requiredItems: SelectableItem[]) => {
      return requiredItems.flatMap((requiredItem) => {
        const { kind, id } = requiredItem;

        const matched = availableStorageItemList.find(({ storageItem }) => {
          if (kind === 'ingredient' && storageItem.type === 'ingredient') {
            return storageItem.ingredientId === id;
          }

          if (kind === 'meal' && storageItem.type === 'meal') {
            return storageItem.mealId === id;
          }

          if (kind === 'preparedFood' && storageItem.type === 'preparedFood') {
            return storageItem.preparedFoodId === id;
          }

          return false;
        });

        return matched ? [matched] : [];
      });
    },
    [availableStorageItemList],
  );

  const initialPossession: Possession = useMemo(() => {
    return {
      expiredSoonRemainingDays: 365,
      requiredIngredientCount: 0,
      possessedIngredientCount: 0,
      possessionPercent: 0,
      possessedList: [],
    };
  }, []);

  /** 재료보유율 확인
   * optional을 제외한 모든 식재료를 갖고 있는지 검사
   * filterLabel = '식재료 보유율 높음' / possessionPercent > HIGH_POSSESSION_THRESHOLD
   * filterLabel = '모든 재료 있음' / possessionPercent === 100
   */
  const getPossession = useCallback(
    (foodId: string, foodStructure?: EnrichedFoodStructure): Possession => {
      // NOTE: 완성요리 자체에 만약 식재료구조 정보는 없는데 냉장고에 갖고 있는 경우는 추천
      if (!foodStructure && hasConsumableFoodInStorage(storageItems, foodId))
        return { ...initialPossession, possessionPercent: 100 };

      // NOTE: 완성요리가 냉장고에도 없는데 식재료 구조도 없는 경우는 바로 제거
      if (!foodStructure) return initialPossession;

      const { essential, common, seasoning } = foodStructure;
      const requiredItems = [...essential, ...common, ...seasoning];

      const total = requiredItems.length;
      if (total === 0) return initialPossession;

      // NOTE: 완성요리가 있을때
      /** 재료 보유 확인, 소비기한이 남아 있는 경우만 추가.
       * - 보유했지만 소비기한이 지난 경우에는 재료 보유 인정 안함.
       * - 재료 보유한 식재료의 경우 소비기한일이 적게 남았을수록 추천.
       */
      const possessedStorageItemList = getPossessedStorageItems(requiredItems);

      const possessedList = requiredItems.filter(({ kind, id }) => {
        return availableStorageItemList.find(({ storageItem }) => {
          if (kind === 'ingredient' && storageItem.type === 'ingredient') {
            return storageItem.ingredientId === id;
          }

          if (kind === 'meal' && storageItem.type === 'meal') {
            return storageItem.mealId === id;
          }

          if (kind === 'preparedFood' && storageItem.type === 'preparedFood') {
            return storageItem.preparedFoodId === id;
          }

          return false;
        });
      });

      const possessionPercent = Math.round((possessedList.length / total) * 100);

      return {
        expiredSoonRemainingDays: 365,
        requiredIngredientCount: total,
        possessedList,
        possessedIngredientCount: possessedList.length,
        possessionPercent,
      };
    },
    [availableStorageItemList, initialPossession, storageItems],
  );

  /** filterLabel = "나의 픽" 검증 */
  const isFavoriteFood = useCallback(
    (foodId: string) => favoriteMealList.find(({ id }) => id === foodId),
    [favoriteMealList],
  );

  /* -------------------------------------------------------------------------- */
  /*                               Base Meal List                               */
  /*                                  -필터별 목록                                 */
  /* -------------------------------------------------------------------------- */
  /** 각각 부합하는 필터를 filterList에 넣은 foodList 함수
   * @param foodList - 모든 consumableFoodList || 검색 필터링된 consumableFoodList
   * 필수재료, 재료보유율, 임박식재료보유여부도 계산
   */
  const addFilterInFoodList = useCallback(
    (foodList: ConsumableFood[]): EnrichedConsumableFoodWithFilterList[] => {
      const list: ConsumableFoodWithEnrichedFoodStructure[] =
        getConsumableFoodListWithEnrichedFoodStructure(foodList);

      const initial: RecommendMenuFactors = {
        ...initialPossession,
        expiredSoonList: [],
        expiredSoonRemainingDays: 0,
      };

      const filterResult = list.map((food) => {
        const filterList: FoodFilterKey[] = [];

        if (food?.difficulty === 'easy') {
          filterList.push('easy' as const);
        }

        if (isFavoriteFood(food.id)) {
          filterList.push('favorite' as const);
        }

        /** NOTE: 식재료 구조가 없는 식사인 경우
         * : '쉬운 메뉴', '나의 픽' 위의 두가지 필터만 적용 가능하며 바로 아래로 리턴 */
        if (!food?.foodStructure) {
          return { ...food, ...initial, filterList };
        }

        /** NOTE: 식재료 구조 관련 추천 점수 */
        const expiredSoonList = getHasExpiredSoonIngredient(food.foodStructure);

        if (expiredSoonList.length > 0) {
          filterList.push('expiredSoon' as const);
        }

        const possession = getPossession(food.id, food.foodStructure);

        /** NOTE: 보유한 식재료가 없을 때 */
        if (!possession) {
          return { ...food, ...initial, filterList };
        }

        const { possessionPercent } = possession;

        /** 보유한 식재료가 있을 때 */
        if (possessionPercent > HIGH_POSSESSION_THRESHOLD) {
          filterList.push('highPossession');
        }

        return {
          ...food,
          ...possession,
          expiredSoonList,
          filterList,
        };
      });

      return filterResult;
    },
    [getHasExpiredSoonIngredient, getPossession, initialPossession, isFavoriteFood],
  );

  const allConsumableFoodListWithFilterList = addFilterInFoodList(allConsumableFood);

  /* -------------------------------------------------------------------------- */
  /*                           SEARCH KEYWORD LIST                              */
  /*                              "검색어 결과" 목록                                */
  /* -------------------------------------------------------------------------- */
  const filteredMenuList = useMemo(() => {
    const filterSearchKeyword = allConsumableFood.filter((food) => {
      const includingLabel = food.label.includes(debouncedSearchKeyword);

      const includingSynonyms = food.synonyms?.some((synonym) =>
        synonym.includes(debouncedSearchKeyword),
      );

      return includingLabel || includingSynonyms;
    });

    const searchKeywordFoodList = addFilterInFoodList(filterSearchKeyword).sort(
      (a, b) => {
        const searchScoreDiff =
          getSearchMatchScore(b, debouncedSearchKeyword) -
          getSearchMatchScore(a, debouncedSearchKeyword);

        if (searchScoreDiff !== 0) return searchScoreDiff;

        return (
          getRecommendConsumableFoodScore(b, activeFilter) -
          getRecommendConsumableFoodScore(a, activeFilter)
        );
      },
    );

    const list =
      debouncedSearchKeyword.length !== 0
        ? searchKeywordFoodList
        : allConsumableFoodListWithFilterList;

    const filtered =
      activeFilter === 'all'
        ? list
        : list.filter((data) => data.filterList.includes(activeFilter));

    const result = [...filtered].sort((a, b) => {
      if (debouncedSearchKeyword.length > 0) {
        const searchScoreDiff =
          getSearchScore(b, debouncedSearchKeyword) -
          getSearchScore(a, debouncedSearchKeyword);

        if (searchScoreDiff !== 0) {
          return searchScoreDiff;
        }
      }

      return (
        getRecommendConsumableFoodScore(b, activeFilter) -
        getRecommendConsumableFoodScore(a, activeFilter)
      );
    });

    return maxLength ? result.slice(0, maxLength) : result;
  }, [
    allConsumableFood,
    addFilterInFoodList,
    debouncedSearchKeyword,
    allConsumableFoodListWithFilterList,
    activeFilter,
    maxLength,
  ]);

  /* -------------------------------------------------------------------------- */
  /*                        보유한 식재료를 갖고 있는 메뉴 목록                         */
  /*                              ex) 계란 활용 메뉴                               */
  /* -------------------------------------------------------------------------- */
  const getHasStorageItemFoodList = useCallback(
    (storageItem: EnrichedStorageItem) => {
      return allConsumableFoodListWithFilterList.filter((enrichedFood) => {
        if (storageItem.type === 'custom') return false;

        const hasIngredientItem = (food: SelectableItem) => {
          const { id } = food;

          if (storageItem.type === 'ingredient') {
            return id === storageItem.ingredientId;
          }

          if (storageItem.type === 'preparedFood') {
            return id === storageItem.preparedFoodId;
          }

          if (storageItem.type === 'meal') {
            return id === storageItem.mealId;
          }
        };

        if (!enrichedFood.foodStructure) return false;

        const { essential } = enrichedFood.foodStructure;

        return essential.find(hasIngredientItem);
      });
    },
    [allConsumableFoodListWithFilterList],
  );

  /* -------------------------------------------------------------------------- */
  /*                         "오늘의 식사 추천" 필터링 목록                            */
  /*                                - 기타 목록                                   */
  /* -------------------------------------------------------------------------- */
  /** "오늘의 식사 추천" 필터링 목록
   * 오늘의 식사 추천 로직
   * - 소비기한 임박 식재료 존재(소비기한 지난 것은 추가하면 안됨.)
   * - 1순위 재료 보유율이 HIGH_POSSESSION_THRESHOLD; 이상인 경우
   */
  const recommendedTodayMenuList: EnrichedConsumableFoodWithFilterList[] = useMemo(() => {
    return allConsumableFoodListWithFilterList
      .filter((food) => food.filterList.includes('highPossession'))
      .sort((a, b) => {
        return (
          getRecommendConsumableFoodScore(b, activeFilter) -
          getRecommendConsumableFoodScore(a, activeFilter)
        );
      });
  }, [activeFilter, allConsumableFoodListWithFilterList]);

  return {
    filterList,
    filteredMenuList,
    getHasStorageItemFoodList,
    recommendedTodayMenuList,
    // 키워드
    searchKeyword,
    setSearchKeyword,
    // 필터
    changeActiveFilter,
    activeFilter,
  };
};
