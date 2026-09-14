import { favoriteFoodListAtom } from '@/atom/favoritesAtom';
import {
  allStorageItemListAtom,
  storageItemListByExpirationStatusAtom,
} from '@/atom/storageAtom';
import { filterObj, allFoodList } from '@/constants';
import { useDebounce } from '@/hooks/common/useDebounce';
import { FoodFilterKey } from '@/types/filter';
import {
  EnrichedFoodStructure,
  FoodWithEnrichedFoodStructure,
  Food,
  SelectableItem,
} from '@/types/selectableItem';
import { EnrichedStorageItem } from '@/types/storage';
import {
  checkHasStorageItem,
  createSelectableItemKey,
  findTrackedItemWithKey,
  getFoodListWithEnrichedFoodStructure,
  hasFoodInStorage,
  StorageItemWithExpiration,
} from '@/utils';
import { useAtomValue } from 'jotai';
import { useCallback, useMemo, useState } from 'react';

/** 높은 재료 보유율 기준 */
const HIGH_POSSESSION_THRESHOLD = 60;

export type PossessionData = {
  possessedList: StorageItemWithExpiration[];
  requiredPossessedList: StorageItemWithExpiration[];
  requiredCount: number;
  requiredPossessionPercent: number;
  essentialPossessionPercent: number;
  commonPossessionPercent: number;
  seasoningPossessionPercent: number;
};

export type ExpirationData = {
  expiredSoonList: StorageItemWithExpiration[];
  expiredSoonRemainingDays: number;
};

export type EnrichedFoodWithFilter = FoodWithEnrichedFoodStructure &
  PossessionData &
  ExpirationData & { filterList: FoodFilterKey[] };

type UseGetFoodListProps = {
  maxLength?: number;
};

export const useGetFoodList = ({ maxLength }: UseGetFoodListProps = {}) => {
  const storageItems = useAtomValue(allStorageItemListAtom);

  const favoriteList = useAtomValue(favoriteFoodListAtom);

  const availableStorageItemList = useAtomValue(
    storageItemListByExpirationStatusAtom('available'),
  );

  const [activeFilter, setActiveFilter] = useState<FoodFilterKey | 'all'>('all');

  const changeActiveFilter = (filter: FoodFilterKey) => setActiveFilter(filter);

  const filterList = Object.values(filterObj['food']);

  const [searchKeyword, setSearchKeyword] = useState('');

  const debouncedSearchKeyword = useDebounce(searchKeyword, 300);

  const allFood = useMemo(() => {
    return [...allFoodList];
  }, []);

  /* -------------------------------------------------------------------------- */
  /*                               필터 검증 함수들                                 */
  /* -------------------------------------------------------------------------- */
  const getPossessedStorageItems = useCallback(
    (requiredItems: SelectableItem[]) => {
      return requiredItems.flatMap((requiredItem) => {
        const { id } = requiredItem;

        const matched = availableStorageItemList.find(({ storageItem }) => {
          return !!checkHasStorageItem(storageItem, id);
        });

        return matched ? [matched] : [];
      });
    },
    [availableStorageItemList],
  );

  const getMissingCount = (
    targetList: readonly SelectableItem[],
    possessedList: readonly StorageItemWithExpiration[],
  ) => {
    return targetList.filter(
      ({ kind, id }) =>
        !possessedList.some(
          ({ storageItem }) =>
            storageItem.type === kind && checkHasStorageItem(storageItem, id),
        ),
    ).length;
  };

  const initialPossession: PossessionData = useMemo(() => {
    return {
      possessedList: [],

      requiredPossessionPercent: 0,
      requiredPossessedList: [],
      requiredCount: 0,

      essentialPossessionPercent: 0,
      commonPossessionPercent: 0,
      seasoningPossessionPercent: 0,
    };
  }, []);

  const initialExpiration: ExpirationData = useMemo(() => {
    return {
      expiredSoonList: [],
      expiredSoonRemainingDays: Infinity,
    };
  }, []);

  /** 재료보유율 관련 데이터
   * optional을 제외한 모든 식재료를 갖고 있는지 검사
   * filterLabel = '식재료 보유율 높음' / possessionPercent > HIGH_POSSESSION_THRESHOLD
   * filterLabel = '모든 재료 있음' / possessionPercent === 100
   */
  const getPossessionData = useCallback(
    (foodId: string, foodStructure?: EnrichedFoodStructure): PossessionData => {
      // NOTE: 완성요리 자체에 만약 식재료구조 정보는 없는데 냉장고에 갖고 있는 경우는 추천
      if (!foodStructure && hasFoodInStorage(storageItems, foodId))
        return { ...initialPossession, requiredPossessionPercent: 100 };

      // NOTE: 완성요리가 냉장고에도 없는데 식재료 구조도 없는 경우는 바로 제거
      if (!foodStructure) return initialPossession;

      const { essential, common, seasoning, optional } = foodStructure;
      const requiredItems = [...essential, ...common, ...seasoning];

      const total = requiredItems.length;
      if (total === 0) return initialPossession;

      // NOTE: 완성요리가 있을때
      /** 재료 보유 확인, 소비기한이 남아 있는 경우만 추가.
       * - 보유했지만 소비기한이 지난 경우에는 재료 보유 인정 안함.
       * - 재료 보유한 식재료의 경우 소비기한일이 적게 남았을수록 추천.
       */
      const possessedList = getPossessedStorageItems([...requiredItems, ...optional]);
      const requiredPossessedList = getPossessedStorageItems(requiredItems);
      const requiredPossessionPercent = Math.round(
        (requiredPossessedList.length / total) * 100,
      );

      const getPossessionPercent = (list: readonly SelectableItem[]) => {
        const missingCount = getMissingCount(list, requiredPossessedList);
        return list.length === 0
          ? 100
          : Math.round(((list.length - missingCount) / list.length) * 100);
      };

      const essentialPossessionPercent = getPossessionPercent(essential);
      const commonPossessionPercent = getPossessionPercent(common);
      const seasoningPossessionPercent = getPossessionPercent(seasoning);

      return {
        requiredCount: total,
        possessedList,
        requiredPossessedList,
        requiredPossessionPercent,
        essentialPossessionPercent,
        commonPossessionPercent,
        seasoningPossessionPercent,
      };
    },
    [getPossessedStorageItems, initialPossession, storageItems],
  );

  const getExpirationData = useCallback(
    (foodStructure?: EnrichedFoodStructure): ExpirationData => {
      // NOTE: 완성요리가 냉장고에도 없는데 식재료 구조도 없는 경우는 바로 제거
      if (!foodStructure) return initialExpiration;

      const { essential, common, seasoning } = foodStructure;
      const requiredItems = [...essential, ...common, ...seasoning];

      const possessedList = getPossessedStorageItems(requiredItems);

      const expiredSoonList = possessedList.filter(
        ({ expirationStatus }) => expirationStatus === 'expiredSoon',
      );

      const expiredSoonRemainingDays =
        expiredSoonList.length > 0
          ? Math.min(...expiredSoonList.map((item) => item.remainingDays))
          : Infinity;

      return {
        expiredSoonList,
        expiredSoonRemainingDays,
      };
    },
    [getPossessedStorageItems, initialExpiration],
  );

  /** filterLabel = "나의 픽" 검증 */
  const isFavoriteFood = useCallback(
    (foodId: string) => favoriteList.find(({ id }) => id === foodId),
    [favoriteList],
  );

  /* -------------------------------------------------------------------------- */
  /*                               Base Food List                               */
  /*                                  -필터별 목록                                 */
  /* -------------------------------------------------------------------------- */
  /** 각각 부합하는 필터를 filterList에 넣은 foodList 함수
   * @param foodList - 모든 FoodList || 검색 필터링된 FoodList
   * 필수재료, 재료보유율, 임박식재료보유여부도 계산
   */
  const addFilterInFoodList = useCallback(
    (foodList: Food[]): EnrichedFoodWithFilter[] => {
      const foodWithEnrichedFoodStructure: FoodWithEnrichedFoodStructure[] =
        getFoodListWithEnrichedFoodStructure(foodList);

      const filterResult = foodWithEnrichedFoodStructure.map((food) => {
        const initialData: EnrichedFoodWithFilter = {
          ...food,
          ...initialPossession,
          ...initialExpiration,
          filterList: [],
        };

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
          return { ...food, ...initialData, filterList };
        }

        const possession = getPossessionData(food.id, food.foodStructure);

        const expiration = getExpirationData(food.foodStructure);

        const { requiredPossessionPercent } = possession;

        const { expiredSoonList } = expiration;

        /** NOTE: 소비기한 임박 식재료를 보유한 경우 */
        if (expiredSoonList.length > 0) {
          filterList.push('expiredSoon' as const);
        }

        /** NOTE: 식재료 보유율이 높을 때 */
        if (requiredPossessionPercent > HIGH_POSSESSION_THRESHOLD) {
          filterList.push('highPossession');
        }

        return {
          ...food,
          ...possession,
          ...expiration,
          filterList,
        };
      });

      return filterResult;
    },
    [
      getExpirationData,
      getPossessionData,
      initialExpiration,
      initialPossession,
      isFavoriteFood,
    ],
  );

  const allFoodListWithFilterList = addFilterInFoodList(allFood);

  /* -------------------------------------------------------------------------- */
  /*                           SEARCH KEYWORD LIST                              */
  /*                              "검색어 결과" 목록                                */
  /* -------------------------------------------------------------------------- */
  const filteredFoodList = useMemo(() => {
    const foodListWithSearchKeyword = allFood.filter((food) => {
      const includingLabel = food.label.includes(debouncedSearchKeyword);

      const includingSynonyms = food.synonyms?.some((synonym) =>
        synonym.includes(debouncedSearchKeyword),
      );

      return includingLabel || includingSynonyms;
    });

    const foodList =
      debouncedSearchKeyword.length !== 0
        ? addFilterInFoodList(foodListWithSearchKeyword)
        : allFoodListWithFilterList;

    const foodListWithFilter =
      activeFilter === 'all'
        ? foodList
        : foodList.filter((food) => food.filterList.includes(activeFilter));

    const result = foodListWithFilter.sort((a, b) => {
      // 1. Essential 보유율
      if (a.essentialPossessionPercent !== b.essentialPossessionPercent) {
        return b.essentialPossessionPercent - a.essentialPossessionPercent;
      }

      // 2. 전체 재료 보유율
      if (a.requiredPossessionPercent !== b.requiredPossessionPercent) {
        return b.requiredPossessionPercent - a.requiredPossessionPercent;
      }

      // 3. Common 부족 개수
      if (a.commonPossessionPercent !== b.commonPossessionPercent) {
        return b.commonPossessionPercent - a.commonPossessionPercent;
      }

      // 4. Seasoning 부족 개수
      if (a.seasoningPossessionPercent !== b.seasoningPossessionPercent) {
        return b.seasoningPossessionPercent - a.seasoningPossessionPercent;
      }

      // 5. 소비기한 임박 재료 활용 개수
      if (a.expiredSoonList.length !== b.expiredSoonList.length) {
        return b.expiredSoonList.length - a.expiredSoonList.length;
      }

      // 5. 필요한 재료 개수
      if (a.requiredCount !== b.requiredCount) {
        return a.requiredCount - b.requiredCount;
      }

      // 6. 가장 임박한 소비기한
      if (a.expiredSoonRemainingDays !== b.expiredSoonRemainingDays) {
        return a.expiredSoonRemainingDays - b.expiredSoonRemainingDays;
      }

      return 0;
    });

    return maxLength ? result.slice(0, maxLength) : result;
  }, [
    allFood,
    addFilterInFoodList,
    debouncedSearchKeyword,
    allFoodListWithFilterList,
    activeFilter,
    maxLength,
  ]);

  /* -------------------------------------------------------------------------- */
  /*                        보유한 식재료를 갖고 있는 메뉴 목록                         */
  /*                              ex) 계란 활용 메뉴                               */
  /* -------------------------------------------------------------------------- */
  const getHasStorageItemFoodList = useCallback(
    (storageItem: EnrichedStorageItem) => {
      return allFoodListWithFilterList
        .filter((enrichedFood) => {
          const hasIngredientItem = (food: SelectableItem) => {
            const key = createSelectableItemKey(food);
            return findTrackedItemWithKey(storageItem, key);
          };

          if (!enrichedFood.foodStructure) return false;

          const { essential } = enrichedFood.foodStructure;

          return essential.find(hasIngredientItem);
        })
        .slice(0, 8);
    },
    [allFoodListWithFilterList],
  );

  /* -------------------------------------------------------------------------- */
  /*                         "오늘 먹을 메뉴 추천" 필터링 목록                            */
  /*                                - 기타 목록                                   */
  /* -------------------------------------------------------------------------- */
  /** "오늘 먹을 메뉴 추천" 필터링 목록
   * 오늘 먹을 메뉴 추천 로직
   * - 소비기한 임박 식재료 존재(소비기한 지난 것은 추가하면 안됨.)
   * - 1순위 재료 보유율이 HIGH_POSSESSION_THRESHOLD; 이상인 경우
   */
  const recommendedTodayFoodList: EnrichedFoodWithFilter[] = useMemo(() => {
    return filteredFoodList
      .filter((food) => food.filterList.includes('highPossession'))
      .sort((a, b) => a.requiredPossessionPercent - b.requiredPossessionPercent)
      .slice(0, 8);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    filterList,
    filteredFoodList,
    getHasStorageItemFoodList,
    recommendedTodayFoodList,
    // 키워드
    searchKeyword,
    setSearchKeyword,
    // 필터
    changeActiveFilter,
    activeFilter,
  };
};
