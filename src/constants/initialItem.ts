import { DEFAULT_EXPIRATION_DAYS } from '@/constants/storage';
import { formatDateString } from '@/utils';
import { addDays } from 'date-fns';

export const initialStorageItem = {
  id: '',
  customLabel: '',
  storage: { type: 'fridge' as const },
  purchasedAt: formatDateString(new Date(), 'yyyy-MM-dd'),
  expiresAt: formatDateString(addDays(new Date(), DEFAULT_EXPIRATION_DAYS), 'yyyy-MM-dd'),
  memo: '',
};
