import {
  allStorageItemListAtom,
  cautionStorageItemListAtom,
  searchKeywordAtom,
} from '@/atom/storageItemAtom';
import { allMealList, filterObj } from '@/constants';
import { MealFilterKey } from '@/types/filter';
import { Ingredient } from '@/types/ingredient';
import {
  MealIngredientItem,
  IngredientStructure,
  Meal,
  EnrichMealIngredientStructure,
  MealWithEnrichIngredient,
  SeasoningIngredientItem,
} from '@/types/meal';
import { EnrichStorageItem } from '@/types/storage';
import { findIngredient, findMeal, findSeasoning } from '@/utils';
import { useAtom, useAtomValue } from 'jotai';
import { useCallback, useMemo } from 'react';

export const useGetMealList = () => {
  const [searchKeyword] = useAtom(searchKeywordAtom);

  const mealFilterList = Object.values(filterObj['meal']);

  const storageItems = useAtomValue(allStorageItemListAtom);

  const expiredStorageItemList = useAtomValue(cautionStorageItemListAtom('caution'));

  /** 오늘의 식사 메뉴 추천
   * - 1순위 전체 식재료가 다 있는 경우
   * - 2순위 메인 음식일 것
   * - 3순위 최소한의 식재료로 만들 수 있는지
   */
  const isRecommendedTodayMeal = (meal: MealWithEnrichIngredient) => {
    return;
  };

  /** 간단하게 만들수 있는 메뉴인지 검사
   * filterLabel = '간단완성'
   */
  const isEasyMeal = (meal: MealWithEnrichIngredient): boolean => {
    return meal.difficulty === 'easy' && meal.cookTime <= 20;
  };

  /** 빠르게 만들수 있는 메뉴인지 검사
   * * filterLabel = '빠르게완성'
   */
  const isFastestMeal = (meal: MealWithEnrichIngredient): boolean => {
    return meal.cookTime <= 15;
  };

  /** 최소한의 식재료 메뉴인지 검사
   * * filterLabel = '최소 식재료 사용'
   */
  const isMinimumMeal = (ingredientStructure: EnrichMealIngredientStructure): boolean => {
    if (!ingredientStructure) return false;
    const { essential, common, optional } = ingredientStructure;
    const counts = essential.length + common.length + optional.length;
    return counts <= 4;
  };

  /** 모든 식재료를 갖고 있는 메뉴인지 검사
   * * filterLabel = '모든 재료 있음'
   */
  const hasAllMeal = useCallback(
    (ingredientStructure: EnrichMealIngredientStructure): boolean => {
      if (!ingredientStructure) return false;

      const { essential, common } = ingredientStructure;
      // essential + common 기준으로 검사
      const requiredItems = [...essential, ...common];

      return requiredItems.every(({ type, id }) => {
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
    },
    [storageItems],
  );

  /** 소비기한 임박 식재료를 갖고 있는 메뉴인지 검사
   * * filterLabel = '소비기한 임박'
   */
  const hasExpiredSoonIngredientMeal = useCallback(
    (meal: MealWithEnrichIngredient): boolean => {
      if (!meal?.ingredientStructure) return false;

      const { essential, common, seasoning } = meal.ingredientStructure;

      return [...essential, ...common, ...seasoning].some((i) => {
        return expiredStorageItemList.find(({ storageItem }) => {
          if (storageItem.type === 'meal') {
            return storageItem.mealId === i.id;
          }
          return storageItem.ingredientId === i.id;
        });
      });
    },
    [expiredStorageItemList],
  );

  /** 모든 필터링 적용 가능한 결과 메뉴 리스트
   * 아래 필터링의 베이스 함수
   * @param mealList - 모든 mealList || 검색 필터링된 mealList
   * 각 meal 아이템에 맞는 필터를 추가한 결과를 리턴
   */
  const addFilterInMealList = useCallback(
    (
      mealList: Meal[],
    ): (MealWithEnrichIngredient & {
      filterList: (MealFilterKey | 'recommendedTodayMeal')[];
    })[] => {
      const resolveItem = ({
        type,
        id,
      }: MealIngredientItem | SeasoningIngredientItem) => {
        if (type === 'meal') return findMeal(id);
        if (type === 'seasoning') return findSeasoning(id);
        return findIngredient(id);
      };

      const mapStructure = (
        structure: IngredientStructure,
      ): EnrichMealIngredientStructure => ({
        essential: structure.essential ? structure.essential.map(resolveItem) : [],
        common: structure.common ? structure.common.map(resolveItem) : [],
        seasoning: structure.seasoning
          ? (structure.seasoning.map(resolveItem) as Ingredient[])
          : [],
        optional: structure.optional ? structure.optional.map(resolveItem) : [],
      });

      const list: MealWithEnrichIngredient[] = mealList.map((meal) => {
        const { ingredientStructure, ...rest } = meal;
        return ingredientStructure
          ? {
              ...meal,
              ingredientStructure: mapStructure(ingredientStructure),
            }
          : rest;
      });

      const filterResult = list.map((meal) => {
        const filterList: MealFilterKey[] = [];

        if (isEasyMeal(meal)) {
          filterList.push('easy' as const);
        }

        if (hasExpiredSoonIngredientMeal(meal)) {
          filterList.push('expiredSoon' as const);
        }

        //
        if (isFastestMeal(meal)) {
          filterList.push('fastest' as const);
        }

        //식재료 관련
        if (meal?.ingredientStructure) {
          // 최소한의 식재료
          if (isMinimumMeal(meal.ingredientStructure)) {
            filterList.push('minimum' as const);
          }
          // 모든 식재료
          if (hasAllMeal(meal.ingredientStructure)) {
            filterList.push('hasAll' as const);
          }
        }

        return { ...meal, filterList };
      });

      return filterResult;
    },
    [hasAllMeal, hasExpiredSoonIngredientMeal],
  );

  // --------------- Meal List -------------------

  /** "소비기한 임박" 필터링 목록 */
  const expiredSoonMealList = useMemo(() => {
    return addFilterInMealList(allMealList).filter((item) =>
      item.filterList.includes('expiredSoon'),
    );
  }, [addFilterInMealList]);

  /** "소비기한 임박한 식재료"가 있는 메뉴 목록 */
  const getMealListByExpiredSoonIngredient = useCallback(
    (focusedItem: EnrichStorageItem) => {
      if (!focusedItem) return [];

      const findItem = (item: Meal | Ingredient, storageItem: EnrichStorageItem) => {
        if (storageItem.type === 'ingredient') {
          return item.id === storageItem.ingredientId;
        }
        if (storageItem.type === 'meal') {
          return item.id === storageItem.mealId;
        }
        return item.label === storageItem.customLabel;
      };

      return expiredSoonMealList.filter((meal) => {
        if (!meal.ingredientStructure) return;

        const essential = meal.ingredientStructure.essential.find((item) => {
          return findItem(item, focusedItem);
        });
        return essential;
      });
    },

    [expiredSoonMealList],
  );

  /** "빠르게 완성" 필터링 목록 */
  const fastestMealList = useMemo(() => {
    const mealList = addFilterInMealList(allMealList);
    return mealList.filter((meal) => meal.filterList.includes('fastest'));
  }, [addFilterInMealList]);

  /** "오늘의 식사 추천" 필터링 목록 */
  const recommendedTodayMealList = useMemo(() => {
    const mealList = addFilterInMealList(allMealList);
    return mealList.filter((meal) => meal.filterList.includes('recommendedTodayMeal'));
  }, [addFilterInMealList]);

  /** "모든 재료가 있음" 필터링 목록 */
  const hasAllMealList = useMemo(() => {
    return addFilterInMealList(allMealList).filter((item) =>
      item.filterList.includes('hasAll'),
    );
  }, [addFilterInMealList]);

  /** "검색어 결과" 필터링 목록 */
  const searchKeywordMealList = useMemo(() => {
    const filterSearchKeyword = allMealList.filter((meal) => {
      const includingLabel = meal.label.includes(searchKeyword);

      const includingSynonyms = meal.synonyms?.some((synonym) =>
        synonym.includes(searchKeyword),
      );

      return includingLabel || includingSynonyms;
    });
    return addFilterInMealList(filterSearchKeyword);
  }, [addFilterInMealList, searchKeyword]);

  /** 특정 식재료를 갖고 있는 메뉴 목록
   * - ex) 계란 활용 메뉴
   */
  const getHasStorageItemInMealList = useCallback(
    (storageItem: EnrichStorageItem) => {
      return addFilterInMealList(allMealList).filter((meal) => {
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

        const { essential, common, seasoning } = meal.ingredientStructure;

        return [...essential, ...common, ...seasoning].find(hasIngredientItem);
      });
    },
    [addFilterInMealList],
  );

  const allFilteredMealList = addFilterInMealList(allMealList);

  return {
    mealFilterList,
    expiredSoonMealList,
    fastestMealList,
    hasAllMealList,
    getMealListByExpiredSoonIngredient,
    searchKeywordMealList,
    allFilteredMealList,
    getHasStorageItemInMealList,
    recommendedTodayMealList,
  };
};
