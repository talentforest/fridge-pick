import { favoriteMealListAtom } from '@/atom/favoritesAtom';
import {
  allStorageItemListAtom,
  cautionStorageItemListAtom,
} from '@/atom/storageItemAtom';
import { allMealList, filterObj } from '@/constants';
import { useDebounce } from '@/hooks/common/useDebounce';
import { MealFilterKey } from '@/types/filter';
import { Ingredient } from '@/types/ingredient';
import {
  Meal,
  EnrichMealIngredientStructure,
  MealWithEnrichIngredient,
  Difficulty,
} from '@/types/meal';
import { SelectableItem } from '@/types/selectableItemAndTrackedItem';
import { EnrichStorageItem } from '@/types/storage';
import { enrichMealIngredientStructure, getRecommendMealScore } from '@/utils';
import { useAtomValue } from 'jotai';
import { useCallback, useMemo, useState } from 'react';

/** 높은 재료 보유율 기준 */
const HIGH_POSSESSION_THRESHOLD = 60;

export type EnrichedMealWithFilterList = MealWithEnrichIngredient & {
  filterList: MealFilterKey[];

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

  const [activeFilter, setActiveFilter] = useState<MealFilterKey | 'all'>('all');
  const changeActiveFilter = (mealFilter: MealFilterKey) => setActiveFilter(mealFilter);
  const mealFilterList = Object.values(filterObj['meal']);

  const [searchKeyword, setSearchKeyword] = useState('');

  /* -------------------------------------------------------------------------- */
  /*                               필터 검증 함수들                                 */
  /* -------------------------------------------------------------------------- */

  /** filterLabel = '소비기한 임박'
   * 메뉴 내 소비기한 임박한 식재료 목록 리턴 */
  const getHasExpiredSoonIngredientByMeal = useCallback(
    (ingredientStructure: EnrichMealIngredientStructure): SelectableItem[] => {
      const { essential, common, seasoning } = ingredientStructure;
      const requiredIngredientList = [...essential, ...common, ...seasoning];

      return requiredIngredientList.filter((i) => {
        return expiredSoonStorageItemList.find(({ storageItem }) => {
          if (storageItem.type === 'meal') {
            return storageItem.mealId === i.id;
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
  const getMealPossession = useCallback(
    (mealId: string, ingredientStructure?: EnrichMealIngredientStructure): Possession => {
      // NOTE: 완성요리 자체에 만약 식재료구조 정보는 없는데 냉장고에 갖고 있는 경우는 추천
      const hasMealInStorage = storageItems.find((item) => {
        if (item.type !== 'meal') return;
        return item.mealId === mealId;
      });

      const initial = {
        requiredIngredientCount: 0,
        possessedIngredientCount: 0,
        possessionPercent: 0,
        possessedList: [],
      };

      if (!ingredientStructure && hasMealInStorage)
        return { ...initial, possessionPercent: 100 };

      // NOTE: 완성요리가 냉장고에도 없는데 식재료 구조도 없는 경우는 바로 제거
      if (!ingredientStructure) return initial;

      const { essential, common, seasoning } = ingredientStructure;
      const requiredItems = [...essential, ...common, ...seasoning];

      const total = requiredItems.length;

      if (total === 0) return initial;

      const possessedList = requiredItems.filter(({ type, id }) => {
        return storageItems.some((storageItem) => {
          // ingredient 비교
          if (type === 'ingredient' && storageItem.type === 'ingredient') {
            return storageItem.ingredientId === id;
          }

          // meal 비교
          if (type === 'meal' && storageItem.type === 'meal') {
            return storageItem.mealId === id;
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
  const isEasyMeal = (difficulty: Difficulty): boolean => {
    return difficulty === 'easy';
  };

  /** filterLabel = "나의 픽" 검증 */
  const isFavoriteMeal = useCallback(
    (mealId: string) => favoriteMealList.find(({ id }) => id === mealId),
    [favoriteMealList],
  );

  /* -------------------------------------------------------------------------- */
  /*                               Base Meal List                               */
  /*                                  -필터별 목록                                 */
  /* -------------------------------------------------------------------------- */

  const enrichMealList = (mealList: Meal[]): MealWithEnrichIngredient[] => {
    return mealList.map((meal) => {
      const { ingredientStructure: i, ...rest } = meal;
      if (!i) return rest;
      const ingredientStructure = enrichMealIngredientStructure(i);
      return { ...meal, ingredientStructure };
    });
  };

  /** 각각 부합하는 필터를 filterList에 넣은 mealList 함수
   * @param mealList - 모든 mealList || 검색 필터링된 mealList
   * 필수재료, 재료보유율, 임박식재료보유여부도 계산
   */
  const addFilterInMealList = useCallback(
    (mealList: Meal[]): EnrichedMealWithFilterList[] => {
      const list: MealWithEnrichIngredient[] = enrichMealList(mealList);

      const initial = {
        requiredIngredientCount: 0,
        possessedIngredientCount: 0,
        possessionPercent: 0,
        possessedList: [] as SelectableItem[],
        expiredSoonList: [] as SelectableItem[],
      };

      const filterResult = list.map((meal) => {
        const filterList: MealFilterKey[] = [];

        if (isEasyMeal(meal.difficulty)) {
          filterList.push('easy' as const);
        }

        if (isFavoriteMeal(meal.id)) {
          filterList.push('favorite' as const);
        }

        /** NOTE: 식재료 구조가 없는 식사인 경우
         * : '쉬운 메뉴', '나의 픽' 위의 두가지 필터만 적용 가능하며 바로 아래로 리턴 */
        if (!meal?.ingredientStructure) {
          return {
            ...meal,
            ...initial,
            filterList,
          };
        }

        const expiredSoonList = getHasExpiredSoonIngredientByMeal(
          meal.ingredientStructure,
        );

        if (expiredSoonList.length > 0) {
          filterList.push('expiredSoon' as const);
        }

        const possession = getMealPossession(meal.id, meal.ingredientStructure);

        /** 보유한 식재료가 없을 때 */
        if (!possession) {
          return {
            ...meal,
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
          ...meal,
          ...possession,
          expiredSoonList,
        };

        return { ...item, filterList };
      });

      return filterResult;
    },
    [getHasExpiredSoonIngredientByMeal, getMealPossession, isFavoriteMeal],
  );

  const allEnrichMealList = addFilterInMealList(allMealList);

  /* -------------------------------------------------------------------------- */
  /*                                  Meal List                                 */
  /*                                  - 기타 목록                                 */
  /* -------------------------------------------------------------------------- */

  /** "오늘의 식사 추천" 필터링 목록
   * 오늘의 식사 추천 로직
   * - 0순위 isSideMeal(밥, 단무지, ...)이 아닌 경우
   * - 소비기한 임박 식재료 존재 // TODO
   * - 1순위 재료 보유율이 HIGH_POSSESSION_THRESHOLD; 이상인 경우
   */
  const recommendedTodayMealList: EnrichedMealWithFilterList[] = useMemo(() => {
    return allEnrichMealList.filter((meal) => {
      return !meal.isSideMeal && meal.filterList.includes('highPossession');
    });
  }, [allEnrichMealList]);

  /* -------------------------------------------------------------------------- */
  /*                           SEARCH KEYWORD LIST                              */
  /*                              "검색어 결과" 목록                                */
  /* -------------------------------------------------------------------------- */
  const debouncedSearchKeyword = useDebounce(searchKeyword, 300);

  const searchKeywordMealList = useMemo(() => {
    const filterSearchKeyword = allMealList.filter((meal) => {
      const includingLabel = meal.label.includes(debouncedSearchKeyword);

      const includingSynonyms = meal.synonyms?.some((synonym) =>
        synonym.includes(debouncedSearchKeyword),
      );

      return includingLabel || includingSynonyms;
    });

    const result = addFilterInMealList(filterSearchKeyword);

    const getSearchMatchScore = (meal: EnrichedMealWithFilterList, keyword: string) => {
      if (!keyword) return 0;

      if (meal.label === keyword) return 10000;

      if (meal.label.startsWith(keyword)) return 5000;

      if (meal.label.includes(keyword)) return 3000;

      const synonyms = meal.synonyms ?? [];

      if (synonyms.some((synonym) => synonym === keyword)) {
        return 2000;
      }

      if (synonyms.some((synonym) => synonym.includes(keyword))) {
        return 1000;
      }

      return 0;
    };

    return [...result].sort((a, b) => {
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
  }, [activeFilter, addFilterInMealList, debouncedSearchKeyword]);

  const filteredMealList = useMemo(() => {
    const list =
      debouncedSearchKeyword.length !== 0 ? searchKeywordMealList : allEnrichMealList;

    const filtered =
      activeFilter === 'all'
        ? list
        : list.filter((data) => data.filterList.includes(activeFilter));

    const getSearchScore = (meal: EnrichedMealWithFilterList, keyword: string) => {
      if (meal.label === keyword) return 10000;

      if (meal.label.startsWith(keyword)) return 5000;

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
    searchKeywordMealList,
    allEnrichMealList,
    activeFilter,
    maxLength,
  ]);

  /* -------------------------------------------------------------------------- */
  /*                        보유한 식재료를 갖고 있는 메뉴 목록                         */
  /*                              ex) 계란 활용 메뉴                               */
  /* -------------------------------------------------------------------------- */
  const getHasStorageItemMealList = useCallback(
    (storageItem: EnrichStorageItem) => {
      return allEnrichMealList.filter((meal) => {
        if (storageItem.type === 'custom') return false;

        const hasIngredientItem = (ingredientItem: Meal | Ingredient) => {
          const { id } = ingredientItem;

          if (storageItem.type === 'ingredient') {
            return id === storageItem.ingredientId;
          }

          if (storageItem.type === 'meal') {
            return id === storageItem.mealId;
          }
        };

        if (!meal.ingredientStructure) return false;

        const { essential } = meal.ingredientStructure;

        return essential.find(hasIngredientItem);
      });
    },
    [allEnrichMealList],
  );

  return {
    mealFilterList,
    filteredMealList,
    getHasStorageItemMealList,
    recommendedTodayMealList,
    // 키워드
    searchKeyword,
    setSearchKeyword,
    // 필터
    changeActiveFilter,
    activeFilter,
  };
};
