import { EnrichStorageItem } from '@/types/storage';
import { atom } from 'jotai';

export const focusedCautionIngredient = atom<EnrichStorageItem | null>(null);
