import { DEFAULT_EXPIRATION_DAYS } from '@/constants';
import {
  Ingredient,
  Meal,
  MealKey,
  PreparedFood,
  PreparedFoodKey,
} from '@/types/selectableItem';

import {
  IngredientStorageItem,
  MealStorageItem,
  StorageTypeId,
  PreparedFoodStorageItem,
} from '@/types/storage';
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

  const { id, defaultStorage, expirationDays } = ingredient;

  const storage = currStorage ?? defaultStorage;

  const expiresAtValue = expirationDays[storage] || DEFAULT_EXPIRATION_DAYS;

  return {
    type: 'ingredient',
    id: nanoid(),
    storage: { type: storage },
    expiresAt: calculateExpiresAt(now, expiresAtValue),
    purchasedAt: formatDateString(now, 'yyyy-MM-dd'),
    ingredientId: id,
    ingredient,
  };
};

export const convertMealToStorageItem = (
  meal: Meal,
  currStorage?: StorageTypeId,
): MealStorageItem & { meal: Meal } => {
  const now = new Date();

  const { id } = meal;

  // 보관위치별 소비기한 설정
  const convenienceExpirationDays = {
    freezer: 365,
    fridge: 7,
    pantry: 365,
  };

  const storage = currStorage || 'fridge';

  return {
    type: 'meal',
    id: nanoid(),
    mealId: id as MealKey,
    storage: { type: storage },
    foodSource: 'convenience',
    expiresAt: calculateExpiresAt(now, convenienceExpirationDays[storage]),
    purchasedAt: formatDateString(now, 'yyyy-MM-dd'),
    meal,
  };
};

export const convertPreparedFoodToStorageItem = (
  preparedFood: PreparedFood,
  currStorage?: StorageTypeId,
): PreparedFoodStorageItem & { preparedFood: PreparedFood } => {
  const now = new Date();

  const { id, availableFoodSources } = preparedFood;

  // 보관위치별 소비기한 설정
  const convenienceExpirationDays = {
    freezer: 365,
    fridge: 7,
    pantry: 365,
  };

  const storage = currStorage ?? preparedFood.defaultStorage;

  return {
    type: 'preparedFood',
    id: nanoid(),
    preparedFoodId: id as PreparedFoodKey,
    storage: { type: storage },
    foodSource: availableFoodSources ? availableFoodSources[0] : 'convenience',
    expiresAt: calculateExpiresAt(now, convenienceExpirationDays[storage]),
    purchasedAt: formatDateString(now, 'yyyy-MM-dd'),
    preparedFood,
  };
};
