import { StorageItem } from '@/types/storage';
import { enrichIngredient } from '@/utils/enrichIngredient';
import { getRemainingDays } from '@/utils/getExpirationDate';

export const getExpiredStorageItemList = (storageItemList: StorageItem[]) => {
  return storageItemList
    .map((item) => {
      const remainingDays = getRemainingDays(new Date(item.expiresAt));
      return { item, remainingDays };
    })
    .filter(({ remainingDays }) => remainingDays <= 3)
    .sort((a, b) => a.remainingDays - b.remainingDays)
    .map(({ item }) => enrichIngredient(item));
};
