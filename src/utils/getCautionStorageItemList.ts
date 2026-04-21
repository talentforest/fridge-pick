import { EnrichStorageItem, StorageItem } from '@/types/storage';
import { getRemainingDays } from '@/utils/getExpirationDate';
import { findIngredient, findMeal } from '@/utils/findItem';

type CautionStorageItem = { storageItem: EnrichStorageItem; remainingDays: number };

export const getCautionStorageItemList = (
  storageItemList: StorageItem[],
): CautionStorageItem[] => {
  return storageItemList
    .map((item) => {
      const remainingDays = getRemainingDays(item.expiresAt);

      if (item.type === 'ingredient') {
        const ingredient = findIngredient(item.ingredientId)!;
        const enrich = { ingredient };

        return {
          storageItem: { ...item, ...enrich },
          remainingDays,
        };
      }

      if (item.type === 'meal') {
        const meal = findMeal(item.mealId)!;
        const enrich = { meal };

        return {
          storageItem: { ...item, ...enrich },
          remainingDays,
        };
      }

      return { storageItem: item, remainingDays };
    })
    .filter(({ remainingDays }) => remainingDays <= 3)
    .sort((a, b) => a.remainingDays - b.remainingDays);
};
