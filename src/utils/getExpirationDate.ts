import { DEFAULT_EXPIRATION_DAYS } from '@/constants';
import { formatDateString } from '@/utils/formatDate';
import { addDays, format } from 'date-fns';

export function calculateExpiresAt(purchasedAt: Date, expirationDays: number) {
  return formatDateString(addDays(purchasedAt, expirationDays), 'yyyy-MM-dd');
}

/** "오늘부터" 소비일수를 통해 소비기한 날짜를 구하는 함수  */
export function getExpirationDate(
  expirationDays?: number,
  formatStr?: 'yy.MM.dd',
): Date | string {
  const result = addDays(new Date(), expirationDays || DEFAULT_EXPIRATION_DAYS);

  return formatStr ? format(result, formatStr) : result;
}

export function getRemainingDays(expirationDate: Date) {
  const today = new Date();

  const diff = new Date(expirationDate).getTime() - today.getTime();

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
