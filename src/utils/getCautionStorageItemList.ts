import { EnrichStorageItem, ExpirationStatus, StorageItem } from '@/types/storage';
import { getExpirationStatus, getRemainingDays } from '@/utils/getExpirationDate';
import { findIngredient, findMeal } from '@/utils/findItem';

type CautionStorageItem = { storageItem: EnrichStorageItem; remainingDays: number };

/** 소비기한 주의 식재료 목록
 * @param storageItemList - 모든 보관함 아이템 데이터
 * @param type - 타입별 데이터 반환
 * - caution: 소비기한이 "민료" + "임박(3일)" 모두 포함 데이터 리턴
 * - expired: 소비기한이 "민료"된 데이터 리턴
 * - expiredSoon: 소비기한이 "임박"(3일 이내)한 데이터만 리턴
 */
export const getCautionStorageItemList = (
  storageItemList: StorageItem[],
  type: 'caution' | Extract<ExpirationStatus, 'expired' | 'expiredSoon'>,
): CautionStorageItem[] => {
  return storageItemList
    .filter((item) => {
      const remainingDays = getRemainingDays(item.expiresAt);
      const expirationStatus = getExpirationStatus(remainingDays);
      if (type === 'caution') {
        return expirationStatus === 'expired' || expirationStatus === 'expiredSoon';
      }
      return expirationStatus === type;
    })
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
    .sort((a, b) => a.remainingDays - b.remainingDays);
};
