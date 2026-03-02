import { DishFilterKey } from '@/types/filter';
import { Ingredient } from '@/types/ingredient';

export type Dish = {
  name: string;
  time: number;
  filterList: DishFilterKey[];
  ingredientList: Ingredient[];
};
