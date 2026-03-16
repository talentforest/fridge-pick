import { itemListByStorageAtom } from '@/atom/storageItemAtom';
import { CategoryKey, categoryObj, storageObj } from '@/constants';
import {
  EnrichStorageItem,
  StorageSide,
  StorageSideId,
  StorageSpace,
} from '@/types/storage';
import { findIngredient } from '@/utils';
import { getRemainingDays } from '@/utils/getExpirationDate';
import { useAtomValue } from 'jotai';
import { useMemo } from 'react';

interface useStorageItemListProps {
  storage: StorageSpace;
}

/**
 * 현재 보관함 정보(StorageTypeId, SideKey, SectionKey) 파라미터 전달
 * 각 보관함 정보에 맞는 아이템 전달
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

  const itemCountBySide = useMemo(() => {
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

  const groupedItemsByCategory = useMemo(() => {
    const grouped: Partial<Record<CategoryKey, EnrichStorageItem[]>> = {};

    const itemList = hasSide ? currentSideItems : storageItemList;

    itemList.forEach((item) => {
      const ingredient = item.ingredientId
        ? findIngredient(item.ingredientId)
        : undefined;

      const category: CategoryKey = ingredient?.category ?? 'noCategory';

      if (!grouped[category]) {
        grouped[category] = [];
      }

      grouped[category].push({
        ...item,
        ...(ingredient ? { ingredient } : {}),
      });
    });

    return Object.values(categoryObj)
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

  const expiredStorageItemList = useMemo(() => {
    const allStorageItemList = groupedItemsByCategory.map(
      ({ items }) => items,
    )[0];

    if (!allStorageItemList) return [];

    return allStorageItemList
      .map((item) => {
        const remainingDays = getRemainingDays(new Date(item.expiresAt));

        return { item, remainingDays };
      })
      .filter(({ remainingDays }) => remainingDays <= 3)
      .sort((a, b) => a.remainingDays - b.remainingDays)
      .map(({ item }) => item);
  }, [groupedItemsByCategory]);

  const allStorageItemList = useMemo(() => {
    return groupedItemsByCategory.map(({ items }) => items).flat();
  }, [groupedItemsByCategory]);

  return {
    sideList,
    itemCountBySide,
    groupedItemsByCategory,
    expiredStorageItemList,
    allStorageItemList,
  };
};
