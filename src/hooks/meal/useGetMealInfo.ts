import { allStorageItemListAtom } from '@/atom/storageItemAtom';
import { MealWithEnrichIngredient } from '@/types/meal';
import { createSelectableItemKey, findTrackedItemWithKey } from '@/utils';
import { useAtomValue } from 'jotai';
import { useCallback } from 'react';

export const useGetMealInfo = (meal: MealWithEnrichIngredient) => {
  const storageItemList = useAtomValue(allStorageItemListAtom);

  const getIngredientList = useCallback((type?: 'required' | 'optional') => {
    if (!meal?.ingredientStructure) return [];

    const { essential, common, seasoning, optional } = meal.ingredientStructure;

    const requiredIngredientList = [
      { label: '필수 재료', itemList: [...essential, ...common] },
      { label: '양념 재료', itemList: seasoning },
    ];

    const optionalIngredientList =
      optional.length > 0 ? [{ label: '있으면 좋은 재료', itemList: optional }] : [];

    if (type === 'required') {
      return requiredIngredientList;
    }

    if (type === 'optional') {
      return optionalIngredientList;
    }

    return [...requiredIngredientList, ...optionalIngredientList];
  }, []);

  const allIngredientList = getIngredientList();
  const requiredIngredientList = getIngredientList('required');

  const requiredTotal = requiredIngredientList
    .map((item) => item.itemList.length)
    .reduce((curr, acc) => curr + acc, 0);

  const hasStorageItemList = requiredIngredientList
    .map((item) => {
      return item.itemList.filter((item) => {
        const key = createSelectableItemKey(item);

        return storageItemList.find((storageItem) =>
          findTrackedItemWithKey(storageItem, key),
        );
      });
    })
    .flat();

  const percentage =
    requiredTotal === 0
      ? 0
      : Math.round((hasStorageItemList.length / requiredTotal) * 100);

  return {
    allIngredientList,
    requiredIngredientList,
    percentage,
    requiredTotal,
    hasStorageItemList,
  };
};
