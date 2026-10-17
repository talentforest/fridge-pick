import { filterObj } from '@/constants';

export type FilterColor =
  'red' | 'blue' | 'green' | 'amber' | 'amber' | 'neutral' | 'indigo' | 'ice';

export type FoodFilterKey = keyof (typeof filterObj)['food'];
