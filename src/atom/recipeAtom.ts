import { fetchFoodData } from '@/utils/recipe';
import { atom } from 'jotai';

export const foodDataAtom = atom(fetchFoodData);
