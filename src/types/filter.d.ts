import { filterObj } from '@/constants';

export type FilterColor = 'green' | 'red' | 'blue' | 'yellow' | 'neutral';

export type MealFilterKey = keyof (typeof filterObj)['meal'];
