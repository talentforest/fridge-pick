import { Ingredient } from '@/types/selectableItem';
import { atom } from 'jotai';

export const ingredientInStockAtom = atom<Ingredient[]>([]);
