import { DEFAULT_EXPIRATION_DAYS } from '@/constants/storage';
import { CustomIngredient } from '@/types/ingredient';
import { CustomStorageItem } from '@/types/storage';
import { formatDateString } from '@/utils';
import { addDays } from 'date-fns';
import { nanoid } from 'nanoid/non-secure';

const now = new Date();

export const initialCustomStorageItem: CustomStorageItem = {
  type: 'custom',
  id: nanoid(),
  customLabel: '',
  storage: { type: 'fridge' as const },
  purchasedAt: formatDateString(now, 'yyyy-MM-dd'),
  expiresAt: formatDateString(addDays(now, DEFAULT_EXPIRATION_DAYS), 'yyyy-MM-dd'),
  memo: '',
};

export const initialCustomIngredient: CustomIngredient = {
  type: 'custom',
  id: nanoid(),
  label: '',
  category: 'noCategory',
  defaultStorage: 'fridge',
  expirationDays: { fridge: DEFAULT_EXPIRATION_DAYS },
};
