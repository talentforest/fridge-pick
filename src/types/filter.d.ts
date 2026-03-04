import { filterObj } from '@/constants';

export type FilterColor = 'green' | 'red' | 'blue' | 'yellow';

export type Filters = typeof filterObj;

export type DishFilterKey = keyof Filters['dish'];
export type DishFilterLabel = Filters[keyof Filters][DishFilterKey]['label'];

export type FilterValue = Filters[keyof Filters][DishFilterKey];

export type Filter = { name: DishFilterKey; color: FilterColor };
