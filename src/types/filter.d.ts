import { filterObj } from '@/constants';

export type FilterColor = 'green' | 'red' | 'blue' | 'yellow';

export type Filters = typeof filterObj;

export type CookingMenuFilterKey = keyof Filters['cookingMenu'];
export type CookingMenuFilterLabel =
  Filters[keyof Filters][CookingMenuFilterKey]['label'];

export type FilterValue = Filters[keyof Filters][CookingMenuFilterKey];

export type Filter = { name: CookingMenuFilter; color: FilterColor };
