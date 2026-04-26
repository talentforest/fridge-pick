import { DEFAULT_EXPIRATION_DAYS } from '@/constants';
import { ExpirationStatus } from '@/types/storage';
import { formatDateString } from '@/utils/formatDate';
import { addDays, format } from 'date-fns';

export function calculateExpiresAt(purchasedAt: Date, expirationDays: number) {
  return formatDateString(addDays(purchasedAt, expirationDays), 'yyyy-MM-dd');
}

/** "오늘부터" 소비일수를 통해 "소비기한 날짜"를 구하는 함수  */
export function getExpirationDate(
  expirationDays?: number,
  formatStr?: 'yy.MM.dd',
): Date | string {
  const result = addDays(new Date(), expirationDays || DEFAULT_EXPIRATION_DAYS);

  return formatStr ? format(result, formatStr) : result;
}

export function getRemainingDays(expirationDate: Date | string) {
  const today = new Date();

  const date =
    typeof expirationDate === 'string' ? new Date(expirationDate) : expirationDate;

  const diff = date.getTime() - today.getTime();

  const result = Math.ceil(diff / (1000 * 60 * 60 * 24));

  return result;
}

/** 소비기한 기준은 이 함수로 통일 */
export function getExpirationStatus(days: number): ExpirationStatus {
  if (Number.isNaN(days)) return 'unknown';

  if (days < 0) return 'expired';

  if (days >= 0 && days <= 3) return 'expiredSoon';

  return 'safe';
}

export function formatRemainingDays(days: number) {
  if (days < 0) return `${Math.abs(days)}일 지남`;
  if (days === 0) return '오늘까지';
  if (days === 1) return '내일까지';

  return `${days}일 남음`;
}

export function formatDaysSince(days: number) {
  if (days < -2) return `${Math.abs(days)}일 전`;
  if (days === 0) return '오늘';
  if (days === -1) return '어제';
  if (days === -2) return '이틀 전';

  return `${days}일`;
}
