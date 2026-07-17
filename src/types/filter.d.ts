import { filterObj } from '@/constants';

export type FilterColor =
  | 'red'
  | 'blue'
  | 'green'
  | 'orange'
  | 'yellow'
  | 'neutral'
  | 'indigo'
  | 'ice';

export type FoodFilterKey = keyof (typeof filterObj)['food'];
