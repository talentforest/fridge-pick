import { favoriteMealListAtom } from '@/atom/favoritesAtom';
import {
  allStorageItemListAtom,
  cautionStorageItemListAtom,
} from '@/atom/storageItemAtom';
import { allMealList, filterObj } from '@/constants';
import { allPreparedFoodList } from '@/constants/preparedFood/preparedFood';
import { useDebounce } from '@/hooks/common/useDebounce';
import { FoodFilterKey } from '@/types/filter';
import {
  EnrichedFoodStructure,
  Cookable,
  ConsumableFoodWithEnrichedFoodStructure,
  ConsumableFood,
  SelectableItem,
} from '@/types/selectableItem';
import { EnrichedStorageItem } from '@/types/storage';
import { enrichFoodStructure, getRecommendMealScore } from '@/utils';
import { useAtomValue } from 'jotai';
import { useCallback, useMemo, useState } from 'react';

/** 높은 재료 보유율 기준 */
const HIGH_POSSESSION_THRESHOLD = 60;

export type EnrichedConsumableFoodWithFilterList =
  ConsumableFoodWithEnrichedFoodStructure & {
    filterList: FoodFilterKey[];
    /** 소비기한 임박 재료 목록 (만료 제외) */
    expiredSoonList: SelectableItem[];
    /** 필수 재료 개수 */
    requiredIngredientCount: number;
    /** 필수 재료 중 보유 개수 */
    possessedIngredientCount: number;
    /** 필수 재료 대비 재료 보유율: possessedIngredientCount/requiredIngredientCount */
    possessionPercent: number;
    /** 보유한 재료 목록 */
    possessedList: SelectableItem[];
  };

type UseGetMealListProps = {
  maxLength?: number;
};

export const useGetMealList = ({ maxLength }: UseGetMealListProps = {}) => {
  const storageItems = useAtomValue(allStorageItemListAtom);

  const favoriteMealList = useAtomValue(favoriteMealListAtom);

  const expiredSoonStorageItemList = useAtomValue(
    cautionStorageItemListAtom('expiredSoon'),
  );

  const [activeFilter, setActiveFilter] = useState<FoodFilterKey | 'all'>('all');

  const changeActiveFilter = (filter: FoodFilterKey) => setActiveFilter(filter);

  const filterList = Object.values(filterObj['food']);

  const [searchKeyword, setSearchKeyword] = useState('');

  /* -------------------------------------------------------------------------- */
  /*                               필터 검증 함수들                                 */
  /* -------------------------------------------------------------------------- */

  /** filterLabel = '소비기한 임박'
   * 메뉴 내 소비기한 임박한 식재료 목록 리턴 */
  const getHasExpiredSoonIngredient = useCallback(
    (foodStructure: EnrichedFoodStructure): SelectableItem[] => {
      const { essential, common, seasoning } = foodStructure;
      const requiredIngredientList = [...essential, ...common, ...seasoning];

      return requiredIngredientList.filter((i) => {
        return expiredSoonStorageItemList.find(({ storageItem }) => {
          if (storageItem.type === 'meal') {
            return storageItem.mealId === i.id;
          }
          if (storageItem.type === 'preparedFood') {
            return storageItem.preparedFoodId === i.id;
          }
          return storageItem.ingredientId === i.id;
        });
      });
    },
    [expiredSoonStorageItemList],
  );

  type Possession = {
    requiredIngredientCount: number;
    possessedList: SelectableItem[];
    possessedIngredientCount: number;
    possessionPercent: number;
  };
  /** 재료보유율 확인
   * optional을 제외한 모든 식재료를 갖고 있는지 검사
   * filterLabel = '식재료 보유율 높음' / possessionPercent > HIGH_POSSESSION_THRESHOLD
   * filterLabel = '모든 재료 있음' / possessionPercent === 100
   */
  const getPossession = useCallback(
    (foodId: string, foodStructure?: EnrichedFoodStructure): Possession => {
      // NOTE: 완성요리 자체에 만약 식재료구조 정보는 없는데 냉장고에 갖고 있는 경우는 추천
      const hasMealInStorage = storageItems.find((item) => {
        if (item.type !== 'meal') return;
        return item.mealId === foodId;
      }); // TODO: 여기 preparedFood도 되도록 변경하기

      const initial = {
        requiredIngredientCount: 0,
        possessedIngredientCount: 0,
        possessionPercent: 0,
        possessedList: [],
      };

      if (!foodStructure && hasMealInStorage)
        return { ...initial, possessionPercent: 100 };

      // NOTE: 완성요리가 냉장고에도 없는데 식재료 구조도 없는 경우는 바로 제거
      if (!foodStructure) return initial;

      const { essential, common, seasoning } = foodStructure;
      const requiredItems = [...essential, ...common, ...seasoning];

      const total = requiredItems.length;

      if (total === 0) return initial;

      const possessedList = requiredItems.filter(({ kind, id }) => {
        return storageItems.some((storageItem) => {
          // ingredient 비교
          if (kind === 'ingredient' && storageItem.type === 'ingredient') {
            return storageItem.ingredientId === id;
          }

          // meal 비교
          if (kind === 'meal' && storageItem.type === 'meal') {
            return storageItem.mealId === id;
          }

          // preparedFood 비교
          if (kind === 'preparedFood' && storageItem.type === 'preparedFood') {
            return storageItem.preparedFoodId === id;
          }

          return false;
        });
      });

      const possessionPercent = Math.round((possessedList.length / total) * 100);

      return {
        requiredIngredientCount: total,
        possessedList,
        possessedIngredientCount: possessedList.length,
        possessionPercent,
      };
    },
    [storageItems],
  );

  /** filterLabel = '쉬운 메뉴' 검증 */
  const isEasyFood = (difficulty: Cookable['difficulty']): boolean => {
    return difficulty === 'easy';
  };

  /** filterLabel = "나의 픽" 검증 */
  const isFavoriteFood = useCallback(
    (foodId: string) => favoriteMealList.find(({ id }) => id === foodId),
    [favoriteMealList],
  );

  /* -------------------------------------------------------------------------- */
  /*                               Base Meal List                               */
  /*                                  -필터별 목록                                 */
  /* -------------------------------------------------------------------------- */

  const enrichConsumableFoodList = useCallback(
    (foodList: ConsumableFood[]): ConsumableFoodWithEnrichedFoodStructure[] => {
      return foodList.map((food) => {
        const { foodStructure: i, ...rest } = food;
        if (!i) return rest;
        const foodStructure = enrichFoodStructure(i);
        return { ...food, foodStructure };
      });
    },
    [],
  );

  /** 각각 부합하는 필터를 filterList에 넣은 foodList 함수
   * @param foodList - 모든 consumableFoodList || 검색 필터링된 consumableFoodList
   * 필수재료, 재료보유율, 임박식재료보유여부도 계산
   */
  const addFilterInFoodList = useCallback(
    (foodList: ConsumableFood[]): EnrichedConsumableFoodWithFilterList[] => {
      const list: ConsumableFoodWithEnrichedFoodStructure[] =
        enrichConsumableFoodList(foodList);

      const initial = {
        requiredIngredientCount: 0,
        possessedIngredientCount: 0,
        possessionPercent: 0,
        possessedList: [] as SelectableItem[],
        expiredSoonList: [] as SelectableItem[],
      };

      const filterResult = list.map((food) => {
        const filterList: FoodFilterKey[] = [];

        if (food?.difficulty && isEasyFood(food.difficulty)) {
          filterList.push('easy' as const);
        }

        if (isFavoriteFood(food.id)) {
          filterList.push('favorite' as const);
        }

        /** NOTE: 식재료 구조가 없는 식사인 경우
         * : '쉬운 메뉴', '나의 픽' 위의 두가지 필터만 적용 가능하며 바로 아래로 리턴 */
        if (!food?.foodStructure) {
          return {
            ...food,
            ...initial,
            filterList,
          };
        }

        const expiredSoonList = getHasExpiredSoonIngredient(food.foodStructure);

        if (expiredSoonList.length > 0) {
          filterList.push('expiredSoon' as const);
        }

        const possession = getPossession(food.id, food.foodStructure);

        /** 보유한 식재료가 없을 때 */
        if (!possession) {
          return {
            ...food,
            ...initial,
            filterList,
          };
        }

        const { possessionPercent } = possession;

        // 보유한 식재료가 있을 때
        if (possessionPercent > HIGH_POSSESSION_THRESHOLD) {
          filterList.push('highPossession');
        }

        const item = {
          ...food,
          ...possession,
          expiredSoonList,
        };

        return { ...item, filterList };
      });

      return filterResult;
    },
    [
      enrichConsumableFoodList,
      getHasExpiredSoonIngredient,
      getPossession,
      isFavoriteFood,
    ],
  );

  const allEnrichFoodList = addFilterInFoodList([...allMealList]);

  /* -------------------------------------------------------------------------- */
  /*                           Consumable Food List                             */
  /*                                - 기타 목록                                   */
  /* -------------------------------------------------------------------------- */

  /** "오늘의 식사 추천" 필터링 목록
   * 오늘의 식사 추천 로직
   * - 0순위 isSideMeal(밥, 단무지, ...)이 아닌 경우
   * - 소비기한 임박 식재료 존재 // TODO
   * - 1순위 재료 보유율이 HIGH_POSSESSION_THRESHOLD; 이상인 경우
   */
  const recommendedTodayMealList: EnrichedConsumableFoodWithFilterList[] = useMemo(() => {
    return allEnrichFoodList.filter((food) => {
      return food.filterList.includes('highPossession');
    });
  }, [allEnrichFoodList]);

  /* -------------------------------------------------------------------------- */
  /*                           SEARCH KEYWORD LIST                              */
  /*                              "검색어 결과" 목록                                */
  /* -------------------------------------------------------------------------- */
  const debouncedSearchKeyword = useDebounce(searchKeyword, 300);

  const searchKeywordFoodList = useMemo(() => {
    const list = [...allPreparedFoodList, ...allMealList];

    const filterSearchKeyword = list.filter((food) => {
      const includingLabel = food.label.includes(debouncedSearchKeyword);

      const includingSynonyms = food.synonyms?.some((synonym) =>
        synonym.includes(debouncedSearchKeyword),
      );

      return includingLabel || includingSynonyms;
    });

    const result = addFilterInFoodList(filterSearchKeyword);

    const getSearchMatchScore = (
      food: EnrichedConsumableFoodWithFilterList,
      keyword: string,
    ) => {
      if (!keyword) return 0;

      if (food.label === keyword) return 10000;

      if (food.label.startsWith(keyword)) return 5000;

      if (food.label.includes(keyword)) return 3000;

      const synonyms = food.synonyms ?? [];

      if (synonyms.some((synonym) => synonym === keyword)) {
        return 2000;
      }

      if (synonyms.some((synonym) => synonym.includes(keyword))) {
        return 1000;
      }

      return 0;
    };

    return result.sort((a, b) => {
      const searchScoreDiff =
        getSearchMatchScore(b, debouncedSearchKeyword) -
        getSearchMatchScore(a, debouncedSearchKeyword);

      if (searchScoreDiff !== 0) {
        return searchScoreDiff;
      }

      return (
        getRecommendMealScore(b, activeFilter) - getRecommendMealScore(a, activeFilter)
      );
    });
  }, [activeFilter, addFilterInFoodList, debouncedSearchKeyword]);

  const filteredMealList = useMemo(() => {
    const list =
      debouncedSearchKeyword.length !== 0 ? searchKeywordFoodList : allEnrichFoodList;

    const filtered =
      activeFilter === 'all'
        ? list
        : list.filter((data) => data.filterList.includes(activeFilter));

    const getSearchScore = (
      food: EnrichedConsumableFoodWithFilterList,
      keyword: string,
    ) => {
      if (food.label === keyword) return 10000;

      if (food.label.startsWith(keyword)) return 5000;

      return 0;
    };

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
        getRecommendMealScore(b, activeFilter) - getRecommendMealScore(a, activeFilter)
      );
    });

    return maxLength ? result.slice(0, maxLength) : result;
  }, [
    debouncedSearchKeyword,
    searchKeywordFoodList,
    allEnrichFoodList,
    activeFilter,
    maxLength,
  ]);

  /* -------------------------------------------------------------------------- */
  /*                        보유한 식재료를 갖고 있는 메뉴 목록                         */
  /*                              ex) 계란 활용 메뉴                               */
  /* -------------------------------------------------------------------------- */
  const getHasStorageItemFoodList = useCallback(
    (storageItem: EnrichedStorageItem) => {
      return allEnrichFoodList.filter((enrichedFood) => {
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
    [allEnrichFoodList],
  );

  return {
    filterList,
    filteredMealList,
    getHasStorageItemFoodList,
    recommendedTodayMealList,
    // 키워드
    searchKeyword,
    setSearchKeyword,
    // 필터
    changeActiveFilter,
    activeFilter,
  };
};
