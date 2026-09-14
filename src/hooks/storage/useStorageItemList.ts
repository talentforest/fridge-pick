import {
  allStorageItemListAtom,
  itemListByStorageAtom,
  storageItemListByExpirationStatusAtom,
} from '@/atom/storageAtom';
import { EnrichedStorageItem, StorageTypeId } from '@/types/storage';
import { getRemainingDays } from '@/utils';
import { useAtomValue } from 'jotai';

export const useStorageItemList = () => {
  const allStorageItemList = useAtomValue(allStorageItemListAtom);

  const freezerItemList = useAtomValue(itemListByStorageAtom('freezer'));
  const fridgeItemList = useAtomValue(itemListByStorageAtom('fridge'));
  const pantryItemList = useAtomValue(itemListByStorageAtom('pantry'));

  const expiredStorageItemList = useAtomValue(
    storageItemListByExpirationStatusAtom('expired'),
  );

  const expiredSoonStorageItemList = useAtomValue(
    storageItemListByExpirationStatusAtom('expiredSoon'),
  );

  const safeStorageItemList = useAtomValue(storageItemListByExpirationStatusAtom('safe'));

  const getExpiredItemListByStorage = (storageType: StorageTypeId) => {
    return expiredStorageItemList.filter(
      ({ storageItem }) => storageItem.storage.type === storageType,
    );
  };

  const getRecentlyUpdateByStorage = (itemList: EnrichedStorageItem[]): number => {
    if (itemList.length === 0) return 0;

    const purchasedAtList = itemList.map((item) => getRemainingDays(item.storedAt));
    return Math.max(...purchasedAtList);
  };

  return {
    allStorageItemList,
    freezerItemList,
    fridgeItemList,
    pantryItemList,
    expiredStorageItemList,
    expiredSoonStorageItemList,
    safeStorageItemList,
    getExpiredItemListByStorage,
    getRecentlyUpdateByStorage,
  };
};
