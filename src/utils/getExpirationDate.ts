import { Ingredient } from '@/types/ingredient';
import { StorageItem } from '@/types/storage';
import { addDays, parseISO } from 'date-fns';

export function getExpirationDate(
  item: StorageItem & { ingredient: Ingredient },
) {
  if (item.expiresAt) return parseISO(item.expiresAt);
  return addDays(parseISO(item.purchasedDate), item.ingredient.expirationDays);
}

export function getRemainingDays(expirationDate: Date) {
  const today = new Date();

  const diff = expirationDate.getTime() - today.getTime();

  const result = Math.ceil(diff / (1000 * 60 * 60 * 24));

  return result;
}

export function getExpirationStatus(days: number) {
  if (Number.isNaN(days)) return 'unknown';

  if (days === 0) return 'today';
  if (days < 0) return 'expired';
  if (days <= 3) return 'warning';

  return 'safe';
}

export function formatRemainingDays(days: number) {
  if (days < 0) return `${Math.abs(days)}일 지남`;
  if (days === 0) return '오늘까지';
  if (days === 1) return '내일까지';

  return `${days}일 남음`;
}
