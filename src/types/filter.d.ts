import { filterObj } from '@/constants';

export type FilterColor = 'green' | 'red' | 'blue' | 'yellow' | 'neutral' | 'indigo';

export type FoodFilterKey = keyof (typeof filterObj)['food'];
