import { itemListByStorageAtom } from '@/atom/storageItemAtom';
import { ingredientCategoryObj, storageObj } from '@/constants';
import { CategoryKey } from '@/types/category';
import {
  EnrichStorageItem,
  StorageSide,
  StorageSideId,
  StorageSpace,
} from '@/types/storage';
import { findIngredient, findMeal } from '@/utils';
import { useAtomValue } from 'jotai';
import { useMemo } from 'react';

interface useStorageItemListProps {
  storage: StorageSpace;
}

/**
 * 현재 보관위치 정보(StorageTypeId, SideKey, SectionKey) 파라미터 전달
 * 각 보관위치 정보에 맞는 아이템 전달
 *
 * MVP 버전에서는 SideKey와 SectionKey는 다루지 않음.
 * - side: 'inner;
 * - section: '1'
 * 로 값 넣기
 */
export const useStorageItemList = ({ storage }: useStorageItemListProps) => {
  const storageItemList = useAtomValue(itemListByStorageAtom(storage.type));

  const { side } = storageObj[storage.type];

  const currentSideItems = useMemo(() => {
    return storageItemList.filter((item) => item.storage.side === storage.side);
  }, [storageItemList, storage.side]);

  const storageItemCountBySide = useMemo(() => {
    return storageItemList.reduce(
      (acc, item) => {
        if (!item.storage.side) return acc;
        acc[item.storage.side] = (acc[item.storage.side] ?? 0) + 1;
        return acc;
      },
      {} as Record<StorageSideId, number>,
    );
  }, [storageItemList]);

  const hasSide = false; // TODO: 사용자가 문쪽 안쪽을 구분해서 사용하길 원하는 경우 처리

  const storageItemListByCategory = useMemo(() => {
    const grouped: Partial<Record<CategoryKey, EnrichStorageItem[]>> = {};

    const currStorageItemList = hasSide ? currentSideItems : storageItemList;

    currStorageItemList.forEach((storageItem) => {
      let category: CategoryKey = 'noCategory';
      let enrichedItem: EnrichStorageItem = storageItem;

      switch (storageItem.type) {
        case 'ingredient': {
          const ingredient = findIngredient(storageItem.ingredientId);
          category = ingredient?.category ?? 'noCategory';
          enrichedItem = {
            ...storageItem,
            ...(ingredient ? { ingredient } : {}),
          };
          break;
        }

        case 'meal': {
          category = 'meal';
          const meal = findMeal(storageItem.mealId);
          enrichedItem = {
            ...storageItem,
            ...(meal ? { meal } : {}),
          };
          break;
        }

        case 'custom': {
          category = 'noCategory';
          enrichedItem = storageItem;
          break;
        }
      }

      if (!grouped[category]) {
        grouped[category] = [];
      }

      grouped[category]!.push(enrichedItem);
    });

    return Object.values(ingredientCategoryObj)
      .map((category) => ({
        category,
        items: grouped[category.id] ?? [],
      }))
      .filter((group) => group.items.length > 0);
  }, [currentSideItems, storageItemList, hasSide]);

  const sideList = useMemo(
    () => Object.values(side) as StorageSide[keyof StorageSide][],
    [side],
  );

  return {
    sideList,
    storageItemCountBySide,
    storageItemListByCategory,
  };
};
