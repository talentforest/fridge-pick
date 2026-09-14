import { ingredientCategoryObj, foodCategoryObj, noCategoryObj } from '@/constants';

type IngredientCategoryMap = typeof ingredientCategoryObj;
export type IngredientCategoryItem = IngredientCategoryMap[IngredientCategoryKey];
export type IngredientCategoryKey = keyof IngredientCategoryMap;
export type IngredientCategoryLabel = IngredientCategoryItem['label'];

type FoodCategoryMap = typeof foodCategoryObj;
export type FoodCategoryItem = FoodCategoryMap[FoodCategoryKey];
export type FoodCategoryKey = keyof FoodCategoryMap;
export type FoodCategoryLabel = FoodCategoryItem['label'];

type NoCategoryMap = typeof noCategoryObj;
export type NoCategoryItem = NoCategoryMap[NoCategoryKey];
export type NoCategoryKey = keyof NoCategoryMap;
export type NoCategoryLabel = NoCategoryItem['label'];

export type CategoryKey = IngredientCategoryKey | FoodCategoryKey;
export type Category = IngredientCategoryItem | FoodCategoryItem;
