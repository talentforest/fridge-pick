import { DEFAULT_EXPIRATION_DURATION } from '@/constants';
import { Ingredient, Food, FoodKey, ExpirationDuration } from '@/types/selectableItem';

import { IngredientStorageItem, FoodStorageItem, StorageTypeId } from '@/types/storage';
import { formatDateString } from '@/utils/formatDate';
import { getExpirationDate } from '@/utils/getExpirationDate';
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

  const { id, defaultStorage, recommendedDurations } = ingredient;

  const storage = currStorage ?? defaultStorage;

  // NOTE: Ingredient는 defaultStorage 값이 무조건 있고 이 값에 대한 권장값을 찾아야함. 보통 'raw'만 있음.
  const duration: ExpirationDuration = recommendedDurations
    ? (Object.values(recommendedDurations).find((item) => item[storage]?.value)?.[
        storage
      ] ?? DEFAULT_EXPIRATION_DURATION)
    : DEFAULT_EXPIRATION_DURATION;

  return {
    ...baseData,
    storage: { type: storage },
    expiresAt: getExpirationDate(duration),
    ingredientId: id,
    ingredient,
  };
};

export const convertFoodToStorageItem = (
  food: Food,
  currStorage?: StorageTypeId,
): FoodStorageItem & { food: Food } => {
  const now = new Date();

  const { id, recommendedDurations, defaultStorage } = food;

  const storage = currStorage || defaultStorage || 'fridge';

  const foodDuration = Object.values(recommendedDurations || {}).find(
    (item) => item[storage]?.value,
  )?.[storage];

  const duration: ExpirationDuration = foodDuration ?? DEFAULT_EXPIRATION_DURATION;

  return {
    type: 'food',
    id: nanoid(),
    foodId: id as FoodKey,
    storage: { type: storage },
    expiresAt: getExpirationDate(duration),
    storedAt: formatDateString(now, 'yyyy-MM-dd'),
    food,
  };
};
