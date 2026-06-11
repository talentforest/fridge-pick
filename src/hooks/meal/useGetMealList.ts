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
} from '@/types/meal';
import { EnrichStorageItem } from '@/types/storage';
import { enrichMealIngredientStructure } from '@/utils';
import { useAtomValue } from 'jotai';
import { useCallback, useMemo, useState } from 'react';

interface UseGetMealListProps {
  maxLength?: number;
}

export const useGetMealList = ({ maxLength }: UseGetMealListProps = {}) => {
  const [searchKeyword, setSearchKeyword] = useState('');

  const mealFilterList = Object.values(filterObj['meal']);

  const storageItems = useAtomValue(allStorageItemListAtom);

  const expiredStorageItemList = useAtomValue(cautionStorageItemListAtom('caution'));

  /** 간단하게 만들수 있는 메뉴인지 검사
   * filterLabel = '간단완성'
   */
  const isEasyMeal = (meal: MealWithEnrichIngredient): boolean => {
    return meal.difficulty === 'easy';
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
   * * optional을 제외한 모든 식재료를 갖고 있는지 검사
   */
  const hasAllMeal = useCallback(
    (mealId: string, ingredientStructure?: EnrichMealIngredientStructure): boolean => {
      // NOTE: 완성요리 자체에 만약 식재료구조정보는 없는데 냉장고에 갖고 있는 경우는 추천
      const hasMealInStorage = storageItems.find((item) => {
        if (item.type !== 'meal') return;
        return item.mealId === mealId;
      });

      if (!ingredientStructure && hasMealInStorage) return true;

      // NOTE: 완성요리가 냉장고에도 없는데 식재료 구조도 없는 경우는 바로 제거
      if (!ingredientStructure) return false;

      const { essential, common, seasoning } = ingredientStructure;
      const requiredItems = [...essential, ...common, ...seasoning];

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
      filterList: MealFilterKey[];
    })[] => {
      const list: MealWithEnrichIngredient[] = mealList.map((meal) => {
        const { ingredientStructure, ...rest } = meal;
        return ingredientStructure
          ? {
              ...meal,
              ingredientStructure: enrichMealIngredientStructure(ingredientStructure),
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

        //식재료 관련
        if (meal?.ingredientStructure) {
          // 최소한의 식재료
          if (isMinimumMeal(meal.ingredientStructure)) {
            filterList.push('minimum' as const);
          }
          // 모든 식재료
          if (hasAllMeal(meal.id, meal.ingredientStructure)) {
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

  /** "오늘의 식사 추천" 필터링 목록 */
  const recommendedTodayMealList = useMemo(() => {
    const mealList = addFilterInMealList(allMealList);
    /** 오늘의 식사 추천 로직
     * - 0순위 isSideMeal(밥, 단무지, ...)이 아닌 경우
     * - 1순위 전체 식재료가 다 있는 경우
     * - 2순위 최소한의 식재료(4개 이하)로 만들 수 있는지
     */
    const isRecommendedTodayMeal = (meal: MealWithEnrichIngredient) => {
      return hasAllMeal(meal.id, meal.ingredientStructure);
    };

    return mealList
      .filter((meal) => {
        return !meal.isSideMeal && isRecommendedTodayMeal(meal);
      })
      .slice(0, maxLength);
  }, [addFilterInMealList, hasAllMeal, maxLength]);

  /** "소비기한 임박" 필터링 목록 */
  const expiredSoonMealList = useMemo(() => {
    return addFilterInMealList(allMealList)
      .filter((item) => item.filterList.includes('expiredSoon'))
      .slice(0, maxLength);
  }, [addFilterInMealList, maxLength]);

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

      return expiredSoonMealList
        .filter((meal) => {
          if (!meal.ingredientStructure) return;

          const essential = meal.ingredientStructure.essential.find((item) => {
            return findItem(item, focusedItem);
          });
          return essential;
        })
        .slice(0, maxLength);
    },

    [expiredSoonMealList, maxLength],
  );

  /** "모든 재료가 있음" 필터링 목록 */
  const hasAllMealList = useMemo(() => {
    return addFilterInMealList(allMealList)
      .filter((item) => item.filterList.includes('hasAll'))
      .slice(0, maxLength);
  }, [addFilterInMealList, maxLength]);

  const debouncedSearchKeyword = useDebounce(searchKeyword, 300);

  /** "검색어 결과" 필터링 목록 */
  const searchKeywordMealList = useMemo(() => {
    const filterSearchKeyword = allMealList.filter((meal) => {
      const includingLabel = meal.label.includes(debouncedSearchKeyword);

      const includingSynonyms = meal.synonyms?.some((synonym) =>
        synonym.includes(debouncedSearchKeyword),
      );

      return includingLabel || includingSynonyms;
    });
    return addFilterInMealList(filterSearchKeyword).slice(0, maxLength);
  }, [addFilterInMealList, debouncedSearchKeyword, maxLength]);

  /** 특정 식재료를 갖고 있는 메뉴 목록
   * - ex) 계란 활용 메뉴
   */
  const getHasStorageItemMealList = useCallback(
    (storageItem: EnrichStorageItem) => {
      const mealList = addFilterInMealList(allMealList);
      return mealList
        .filter((meal) => {
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
        })
        .slice(0, maxLength);
    },
    [addFilterInMealList, maxLength],
  );

  const allFilteredMealList = addFilterInMealList(allMealList);

  return {
    mealFilterList,
    expiredSoonMealList,
    hasAllMealList,
    getMealListByExpiredSoonIngredient,
    searchKeywordMealList,
    allFilteredMealList,
    getHasStorageItemMealList,
    recommendedTodayMealList,
    searchKeyword,
    setSearchKeyword,
  };
};
