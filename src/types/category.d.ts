import {
  ingredientCategoryObj,
  preparedFoodCategoryObj,
  mealCategoryObj,
  noCategoryObj,
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

type NoCategoryMap = typeof noCategoryObj;
export type NoCategoryItem = NoCategoryMap[NoCategoryKey];
export type NoCategoryKey = keyof NoCategoryMap;
export type NoCategoryLabel = NoCategoryItem['label'];

export type FoodCategoryKey =
  | IngredientCategoryKey
  | MealCategoryKey
  | PreparedFoodCategoryKey
  | 'no_category';
