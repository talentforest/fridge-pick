import { allStorageItemListAtom, searchKeywordAtom } from '@/atom/storageItemAtom';
import { allMealList, filterObj } from '@/constants';
import { MealFilterKey } from '@/types/filter';
import { Ingredient } from '@/types/ingredient';
import {
  MealIngredientItem,
  IngredientStructure,
  Meal,
  EnrichMealIngredientStructure,
} from '@/types/meal';
import { EnrichStorageItem } from '@/types/storage';
import { findIngredient, findMeal, getExpirationStatus, getRemainingDays } from '@/utils';
import { useAtom, useAtomValue } from 'jotai';
import { useCallback, useMemo } from 'react';

export const useGetMealList = () => {
  const [searchKeyword] = useAtom(searchKeywordAtom);

  const mealFilterList = Object.values(filterObj['meal']);

  const storageItems = useAtomValue(allStorageItemListAtom);

  /** 간단하게 만들수 있는 메뉴인지 검사
   * filterLabel = '간단완성'
   */
  const isEasyMeal = (meal: Meal): boolean => {
    return meal.difficulty === 'easy' && meal.cookTime <= 20;
  };

  /** 빠르게 만들수 있는 메뉴인지 검사
   * * filterLabel = '빠르게완성'
   */
  const isFastestMeal = (meal: Meal): boolean => {
    return meal.cookTime <= 15;
  };

  /** 최소한의 식재료 메뉴인지 검사
   * * filterLabel = '최소 식재료 사용'
   */
  const isMinimumMeal = (ingredientStructure: IngredientStructure): boolean => {
    if (!ingredientStructure) return false;
    const { essential, common, optional } = ingredientStructure;
    const counts = essential.length + common.length + optional.length;
    return counts <= 4;
  };

  /** 모든 식재료를 갖고 있는 메뉴인지 검사
   * * filterLabel = '모든 재료 있음'
   */
  const hasAllMeal = useCallback(
    (ingredientStructure: IngredientStructure): boolean => {
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

  /** 소비기한 임박 메뉴인지 검사
   * * filterLabel = '소비기한 임박'
   */
  const isExpiredSoonMeal = useCallback(
    (meal: Meal): boolean => {
      const soonIngredients = storageItems
        .filter((i) => {
          const remainingDays = getRemainingDays(i.expiresAt);
          const expirationStatus = getExpirationStatus(remainingDays);
          return i.type !== 'custom' && expirationStatus === 'expiredSoon';
        })
        .map((item) => {
          if (item.type === 'meal') {
            return { type: 'meal' as const, id: item.mealId };
          }

          return { type: 'ingredient' as const, id: item.ingredientId };
        });

      if (meal.mealType === 'instant') return false;

      if (!meal.ingredientStructure) return false;

      return meal.ingredientStructure.essential.some((i: MealIngredientItem) => {
        return soonIngredients.find(({ id }) => id === i.id);
      });
    },
    [storageItems],
  );

  /** 모든 필터링 적용 가능한 결과 메뉴 리스트
   * 아래 필터링의 베이스 함수
   * @param mealList - 모든 mealList || 검색 필터링된 mealList
   * 각 meal 아이템에 맞는 필터를 추가한 결과를 리턴
   */
  const addFilterInMealList = useCallback(
    (
      mealList: Meal[],
    ): (Meal & {
      ingredientStructure: EnrichMealIngredientStructure;
      filterList: MealFilterKey[];
    })[] => {
      const resolveItem = ({ type, id }: MealIngredientItem) =>
        type === 'ingredient' ? findIngredient(id) : findMeal(id);

      const mapStructure = (
        structure: IngredientStructure,
      ): EnrichMealIngredientStructure => ({
        essential: structure.essential.map(resolveItem),
        common: structure.common.map(resolveItem),
        optional: structure.optional.map(resolveItem),
      });

      const list = mealList
        .filter((meal) => meal.mealType !== 'instant')
        .map((meal) => ({
          ...meal,
          ingredientStructure: mapStructure(meal.ingredientStructure),
        }));

      const filterResult = list.map((meal) => {
        const filterList: MealFilterKey[] = [];

        if (isEasyMeal(meal)) {
          filterList.push('easy' as const);
        }

        if (isExpiredSoonMeal(meal)) {
          filterList.push('expiredSoon' as const);
        }

        if (isMinimumMeal(meal.ingredientStructure)) {
          filterList.push('mininum' as const);
        }

        if (isFastestMeal(meal)) {
          filterList.push('fastest' as const);
        }

        if (hasAllMeal(meal.ingredientStructure)) {
          filterList.push('hasAll' as const);
        }

        return { ...meal, filterList };
      });

      return filterResult;
    },
    [hasAllMeal, isExpiredSoonMeal],
  );

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
    return addFilterInMealList(allMealList).filter((item) =>
      item.filterList.includes('fastest'),
    );
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
  const getHasStorageItemInMealList = useCallback((storageItem: EnrichStorageItem) => {
    return allMealList.filter((meal) => {
      if (storageItem.type === 'custom' || meal.mealType === 'instant') return false;

      const findItem = (item: MealIngredientItem, storageItem: EnrichStorageItem) => {
        if (storageItem.type === 'ingredient') {
          return item.id === storageItem.ingredientId;
        }
        if (storageItem.type === 'meal') {
          return item.id === storageItem.mealId;
        }
      };

      // common에 있는건 하지 말자 필수주재료인것만
      const essential = meal.ingredientStructure.essential.find((item) => {
        return findItem(item, storageItem);
      });

      return essential;
    });
  }, []);

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
  };
};
