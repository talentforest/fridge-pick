import { CookingMenuFilterKey } from '@/types/filter';
import { Ingredient } from '@/types/ingredient';

export type CookingMenu = {
  name: string;
  time: number;
  filterList: CookingMenuFilterKey[];
  ingredientList: Ingredient[];
};
