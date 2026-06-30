import {
  ingredientCategoryObj,
  preparedFoodCategoryObj,
  mealCategoryObj,
} from '@/constants';

type IngredientCategoryMap = typeof ingredientCategoryObj;
export type IngredientCategoryItem = IngredientCategoryMap[IngredientCategoryKey];
export type IngredientCategoryKey = keyof IngredientCategoryMap;
export type IngredientCategoryLabel = IngredientCategoryItem['label'];

type PreparedFoodCategoryMap = typeof preparedFoodCategoryObj;
export type PreparedFoodCategoryItem = PreparedFoodCategoryMap[PreparedFoodCategoryKey];
export type PreparedFoodCategoryKey = keyof PreparedFoodCategoryMap;
export type PreparedFoodCategoryLabel = PreparedFoodCategoryItem['label'];

type MealCategoryMap = typeof mealCategoryObj;
export type MealCategoryItem = MealCategoryMap[MealCategoryKey];
export type MealCategoryKey = keyof MealCategoryMap;
export type MealCategoryLabel = MealCategoryItem['label'];

export type FoodCategoryKey =
  | IngredientCategoryKey
  | MealCategoryKey
  | PreparedFoodCategoryKey
  | 'noCategory';
