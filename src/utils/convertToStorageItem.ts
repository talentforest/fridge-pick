import { DEFAULT_EXPIRATION_DAYS } from '@/constants';
import { Ingredient } from '@/types/ingredient';
import { StorageItemWithIngredientId } from '@/types/storage';
import { formatDateString } from '@/utils/formatDate';
import { calculateExpiresAt } from '@/utils/getExpirationDate';
import { nanoid } from 'nanoid/non-secure';

/** 식재료 아이템에서 스토리지 아이템으로 변환하기
 * @param item 식재료 정보
 */
export const convertIngredientToStorageItem = (
  ingredient: Ingredient,
): StorageItemWithIngredientId & { ingredient: Ingredient } => {
  const now = new Date();

  const { id, defaultStorage, expirationDays } = ingredient;

  return {
    id: nanoid(),
    storage: {
      type: defaultStorage,
    },
    expiresAt: calculateExpiresAt(
      now,
      expirationDays[defaultStorage] || DEFAULT_EXPIRATION_DAYS,
    ),
    purchasedAt: formatDateString(now, 'yyyy-MM-dd'),
    ingredientId: id,
    ingredient,
  };
};
