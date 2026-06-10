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

  // 식재료 구조 중에 내가 가진 식재료 목록
  const getStorageItemListInIngredientStructure = useCallback(
    (type?: 'required') => {
      const list = getIngredientStructureList(type);

      return list
        .map((item) => {
          return item.itemList.filter((item) => {
            const key = createSelectableItemKey(item);

            return storageItemList.find((storageItem) =>
              findTrackedItemWithKey(storageItem, key),
            );
          });
        })
        .flat();
    },
    [getIngredientStructureList, storageItemList],
  );

  const requiredTotal = getIngredientStructureList('required').reduce(
    (sum, { itemList }) => sum + itemList.length,
    0,
  );

  const percentage =
    requiredTotal === 0
      ? 0
      : Math.round(
          (getStorageItemListInIngredientStructure('required').length / requiredTotal) *
            100,
        );

  // 보유한 식재료인지 검증
  const storageItemIdSet = new Set(
    getStorageItemListInIngredientStructure().map(({ id }) => id),
  );

  const needMoreIngredientNum =
    requiredTotal - getStorageItemListInIngredientStructure('required').length;

  const status =
    percentage === 100 ? 'complete' : percentage === 0 ? 'empty' : 'shortage';

  const possessionPercentStatus = {
    complete: {
      label: '모든 식재료를 갖고 있어요',
      icon: 'HandPlatter',
      iconColor: 'green',
      textClassName: 'text-green-7',
    },
    shortage: {
      label: `식재료 ${needMoreIngredientNum}개가 부족해요`,
      icon: 'TriangleAlert',
      iconColor: 'red',
      textClassName: 'text-red-7',
    },
    empty: {
      label: '갖고 있는 식재료가 없어요',
      icon: 'TriangleAlert',
      iconColor: 'red',
      textClassName: 'text-red-7',
    },
  } as const;

  const percentStatus = possessionPercentStatus[status];

  return {
    getIngredientStructureList,
    getStorageItemListInIngredientStructure,
    percentage,
    requiredTotal,
    storageItemIdSet,
    percentStatus,
  };
};
