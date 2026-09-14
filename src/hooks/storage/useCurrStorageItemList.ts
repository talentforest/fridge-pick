import { itemListByStorageAtom } from '@/atom/storageAtom';
import { ingredientCategoryObj, foodCategoryObj, storageObj } from '@/constants';
import { CategoryKey } from '@/types/category';
import {
  EnrichedStorageItem,
  StorageSide,
  StorageSideId,
  StorageLocation,
} from '@/types/storage';
import { useAtomValue } from 'jotai';
import { useMemo } from 'react';

interface UseCurrStorageItemListProps {
  currStorage: StorageLocation;
}

export const useCurrStorageItemList = ({ currStorage }: UseCurrStorageItemListProps) => {
  const freezerItemList = useAtomValue(itemListByStorageAtom('freezer'));
  const fridgeItemList = useAtomValue(itemListByStorageAtom('fridge'));
  const pantryItemList = useAtomValue(itemListByStorageAtom('pantry'));

  const storageItemList = useAtomValue(itemListByStorageAtom(currStorage.type));

  const { side } = storageObj[currStorage.type];

  const currentSideItems = useMemo(() => {
    return storageItemList.filter((item) => item.storage.side === currStorage.side);
  }, [storageItemList, currStorage.side]);

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
    const grouped: Partial<Record<CategoryKey, EnrichedStorageItem[]>> = {};

    const currStorageItemList = hasSide ? currentSideItems : storageItemList;

    currStorageItemList.forEach((storageItem) => {
      let category: CategoryKey = 'vegetable';
      let enrichedItem: EnrichedStorageItem = storageItem;

      switch (storageItem.type) {
        case 'ingredient': {
          category = storageItem.ingredient?.category ?? 'vegetable';

          enrichedItem = { ...storageItem };

          break;
        }

        case 'food': {
          category = storageItem.food?.category ?? 'side_dish';

          enrichedItem = { ...storageItem };

          break;
        }
      }

      if (!grouped[category]) {
        grouped[category] = [];
      }

      grouped[category]!.push(enrichedItem);
    });

    return Object.values({
      ...ingredientCategoryObj,
      ...foodCategoryObj,
    })
      .map((category) => ({
        category,
        itemList:
          grouped[category.id]?.sort(
            (a, b) => new Date(a.storedAt).getTime() - new Date(b.storedAt).getTime(),
          ) ?? [],
      }))
      .filter((group) => group.itemList.length > 0);
  }, [currentSideItems, storageItemList, hasSide]);

  const sideList = useMemo(
    () => Object.values(side) as StorageSide[keyof StorageSide][],
    [side],
  );

  return {
    storageItemList,
    freezerItemList,
    fridgeItemList,
    pantryItemList,
    sideList,
    storageItemCountBySide,
    storageItemListByCategory,
  };
};
