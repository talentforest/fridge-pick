import { DEFAULT_EXPIRATION_DAYS } from '@/constants';
import { Ingredient } from '@/types/ingredient';
import { Meal } from '@/types/meal';
import { IngredientStorageItem, MealStorageItem } from '@/types/storage';
import { formatDateString } from '@/utils/formatDate';
import { calculateExpiresAt } from '@/utils/getExpirationDate';
import { nanoid } from 'nanoid/non-secure';

/** 등록식재료 아이템 => 보관함 아이템으로 변환
 * @param ingredient 등록된 식재료 정보
 */
export const convertIngredientToStorageItem = (
  ingredient: Ingredient,
): IngredientStorageItem & { ingredient: Ingredient } => {
  const now = new Date();

  const { id, defaultStorage, expirationDays } = ingredient;

  const expiresAtValue = expirationDays[defaultStorage] || DEFAULT_EXPIRATION_DAYS;

  return {
    type: 'ingredient',
    id: nanoid(),
    storage: { type: defaultStorage },
    expiresAt: calculateExpiresAt(now, expiresAtValue),
    purchasedAt: formatDateString(now, 'yyyy-MM-dd'),
    ingredientId: id,
    ingredient,
  };
};

export const convertMealToStorageItem = (
  meal: Meal,
): MealStorageItem & { meal: Meal } => {
  const now = new Date();

  const { id, defaultStorage, expirationDays } = meal;

  const expiresAtValue = expirationDays[defaultStorage] || DEFAULT_EXPIRATION_DAYS;

  return {
    type: 'meal',
    id: nanoid(),
    storage: { type: defaultStorage },
    expiresAt: calculateExpiresAt(now, expiresAtValue),
    purchasedAt: formatDateString(now, 'yyyy-MM-dd'),
    mealId: id,
    meal,
  };
};
