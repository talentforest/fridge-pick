import { allStorageItemListAtom } from '@/atom/storageItemAtom';
import { MealWithEnrichIngredient } from '@/types/meal';
import { createSelectableItemKey, findTrackedItemWithKey } from '@/utils';
import { useAtomValue } from 'jotai';
import { useCallback } from 'react';

export const useGetMealInfo = (meal: MealWithEnrichIngredient) => {
  const storageItemList = useAtomValue(allStorageItemListAtom);

  const getIngredientStructureList = useCallback(
    (type?: 'required' | 'optional') => {
      if (!meal?.ingredientStructure) return [];

      const { essential, common, seasoning, optional } = meal.ingredientStructure;

      const requiredIngredientList = [
        {
          label: '필요한 식재료',
          itemList: [...essential, ...common],
          color: 'blue' as const,
        },
        { label: '양념 재료', itemList: seasoning, color: 'yellow' as const },
      ];

      const optionalIngredientList =
        optional.length > 0
          ? [{ label: '있으면 좋은 재료', itemList: optional, color: 'neutral' as const }]
          : [];

      if (type === 'required') {
        return requiredIngredientList;
      }

      if (type === 'optional') {
        return optionalIngredientList;
      }

      return [...requiredIngredientList, ...optionalIngredientList];
    },
    [meal.ingredientStructure],
  );

  const allIngredientStructureList = getIngredientStructureList();
  const requiredIngredientStructureList = getIngredientStructureList('required');
  const allIngredientItemList = allIngredientStructureList
    .map((item) => item.itemList)
    .flat();

  // 식재료 구조 중에 내가 가진 식재료 목록
  const hasStorageItemList = allIngredientStructureList
    .map((item) => {
      return item.itemList.filter((item) => {
        const key = createSelectableItemKey(item);

        return storageItemList.find((storageItem) =>
          findTrackedItemWithKey(storageItem, key),
        );
      });
    })
    .flat();

  const requiredTotal = requiredIngredientStructureList
    .map((item) => item.itemList.length)
    .reduce((curr, acc) => curr + acc, 0);

  const percentage =
    requiredTotal === 0
      ? 0
      : Math.round((hasStorageItemList.length / requiredTotal) * 100);

  return {
    allIngredientStructureList,
    percentage,
    requiredTotal,
    hasStorageItemList,
  };
};
