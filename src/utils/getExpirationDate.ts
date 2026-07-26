import { DEFAULT_EXPIRATION_DAYS } from '@/constants';
import { ExpirationStatus } from '@/types/storage';
import { formatDateString } from '@/utils/formatDate';
import {
  addDays,
  format,
  differenceInMinutes,
  differenceInHours,
  differenceInCalendarDays,
  formatDistanceStrict,
} from 'date-fns';

import { ko } from 'date-fns/locale';

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
  if (days < 0) return `- ${Math.abs(days)}일`;
  if (days === 0) return '오늘까지';
  if (days === 1) return '내일까지';

  return `+ ${days}일`;
}

export function formatDdayRemainingDays(days: number) {
  if (days < 0) return `D+${Math.abs(days)}`;

  return `D-${days}`;
}

export function formatDaysSince(days: number) {
  if (isNaN(days)) return '없음';

  if (days < -2) return `${Math.abs(days)}일 전`;
  if (days === 0) return '오늘';
  if (days === -1) return '어제';
  if (days === -2) return '이틀 전';
  if (days === 1) return '내일';

  return `${days}일 후`;
}

export function getAddedFormatLabel(days: number) {
  const now = new Date();

  const date = addDays(new Date(), days);

  const minutes = differenceInMinutes(now, date);

  if (minutes < 1) {
    return '방금 전';
  }

  if (minutes < 60) {
    return `${minutes}분 전`;
  }

  const hours = differenceInHours(now, date);

  if (hours < 24) {
    return `${hours}시간 전`;
  }

  const calendarDays = differenceInCalendarDays(now, date);

  if (calendarDays === 1) {
    return '어제';
  }

  if (calendarDays < 7) {
    return `${calendarDays}일 전`;
  }

  return formatDistanceStrict(date, now, {
    locale: ko,
    addSuffix: true,
  });
}
