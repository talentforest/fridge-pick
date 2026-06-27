import { filterObj } from '@/constants';

export type FilterColor = 'green' | 'red' | 'blue' | 'yellow' | 'neutral' | 'black';

export type FoodFilterKey = keyof (typeof filterObj)['food'];
