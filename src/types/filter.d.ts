import { filterObj } from '@/constants';

export type FilterColor = 'green' | 'red' | 'blue' | 'yellow' | 'neutral';

export type Filters = typeof filterObj;

export type MealFilterKey = keyof Filters['meal'];
export type MealFilterLabel = Filters[keyof Filters][MealFilterKey]['label'];

export type FilterValue = Filters[keyof Filters][MealFilterKey];

export type Filter = { name: MealFilterKey; color: FilterColor };
