import { MealFilterKey } from '@/types/filter';
import { Ingredient, MealKey } from '@/types/ingredient';

export type Meal = {
  mealId: MealKey;
  customName: string;
  time: number;
  filterList: MealFilterKey[];
  ingredientList: Ingredient[];
};
