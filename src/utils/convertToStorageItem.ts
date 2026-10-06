import { DEFAULT_EXPIRATION_DURATION } from '@/constants';
import { Ingredient, Food, FoodKey } from '@/types/selectableItem';

import { IngredientStorageItem, FoodStorageItem, StorageTypeId } from '@/types/storage';
import { formatDateString } from '@/utils/formatDate';
import { calculateExpiresAt } from '@/utils/getExpirationDate';
import { nanoid } from 'nanoid/non-secure';

/** 등록식재료 아이템 => 보관함 아이템으로 변환
 * @param ingredient 등록된 식재료 정보
 */
export const convertIngredientToStorageItem = (
  ingredient: Ingredient,
  currStorage?: StorageTypeId,
): IngredientStorageItem & { ingredient: Ingredient } => {
  const now = new Date();

  const baseData = {
    type: 'ingredient',
    id: nanoid(),
    storedAt: formatDateString(now, 'yyyy-MM-dd'),
  } as const;

  const { id, defaultStorage, expiration } = ingredient;

  const storage = currStorage ?? defaultStorage;

  const duration =
    expiration.recommendedDurations?.[storage] ?? DEFAULT_EXPIRATION_DURATION;

  return {
    ...baseData,
    storage: { type: storage },
    expiresAt: calculateExpiresAt(now, duration),
    ingredientId: id,
    ingredient,
  };
};

export const convertFoodToStorageItem = (
  food: Food,
  currStorage?: StorageTypeId,
): FoodStorageItem & { food: Food } => {
  const now = new Date();

  const { id } = food;

  // 보관위치별 소비기한 설정
  const convenienceDuration = {
    freezer: { value: 1, unit: 'year' },
    fridge: { value: 1, unit: 'week' },
    pantry: { value: 1, unit: 'year' },
  } as const;

  const storage = currStorage || 'fridge';

  return {
    type: 'food',
    id: nanoid(),
    foodId: id as FoodKey,
    storage: { type: storage },
    expiresAt: calculateExpiresAt(now, convenienceDuration[storage]),
    storedAt: formatDateString(now, 'yyyy-MM-dd'),
    food,
  };
};
