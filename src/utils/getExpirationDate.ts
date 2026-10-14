import { ExpirationDuration } from '@/types/selectableItem';
import { ExpirationStatus } from '@/types/storage';
import {
  addDays,
  addMonths,
  addWeeks,
  addYears,
  differenceInCalendarDays,
  format,
  formatDistanceToNowStrict,
  isValid,
  parseISO,
} from 'date-fns';
import { ko } from 'date-fns/locale';

type DateValue = Date | string;

type ExpirationDateFormat = 'yyyy-MM-dd' | 'yy.MM.dd' | 'yy년 M월 d일';

const addByUnit = {
  day: addDays,
  week: addWeeks,
  month: addMonths,
  year: addYears,
};

/** 유효한 날짜 확인 */
function toValidDate(value: DateValue): Date {
  const date = typeof value === 'string' ? parseISO(value) : value;

  if (!isValid(date)) {
    throw new Error('유효하지 않은 날짜입니다.');
  }

  return date;
}

/** 날짜 형식 포맷 */
export function formatDate(
  date: Date,
  formatString: ExpirationDateFormat = 'yy.MM.dd',
): string {
  return format(date, formatString);
}

/** 기준 날짜에 소비 기간을 더하고 문자열로 반환. */
export function getExpirationDate(
  duration: ExpirationDuration,
  formatString: ExpirationDateFormat = 'yyyy-MM-dd',
  baseDate = new Date(),
): string {
  const { unit, value } = duration;
  const expirationDate = addByUnit[unit](baseDate, value);

  return format(expirationDate, formatString);
}

/** 소비기한까지 남은 일수를 반환. */
export function getRemainingDays(
  expirationDate: DateValue,
  baseDate = new Date(),
): number {
  return differenceInCalendarDays(toValidDate(expirationDate), baseDate);
}

/** 남은 일수를 소비기한 상태로 변환합니다. */
export function getExpirationStatus(days: number): ExpirationStatus {
  if (!Number.isFinite(days)) return 'unknown';
  if (days < 0) return 'expired';
  if (days <= 3) return 'expiredSoon';

  return 'safe';
}

type RemainingFormat = 'text' | 'dday';

/** 남은 일수를 일반 문구 or D-Day 포맷 표시. */
export function formatRemaining(days: number, type: RemainingFormat = 'text'): string {
  if (!Number.isFinite(days)) return '-';

  if (type === 'dday') {
    if (days < 0) return `D+${Math.abs(days)}`;
    if (days === 0) return 'D-Day';

    return `D-${days}`;
  }

  if (days < 0) return `${Math.abs(days)}일 지남`;
  if (days === 0) return '오늘까지';
  if (days === 1) return '내일까지';
  if (days < 30) return `${days}일 남음`;
  if (days < 365) return `${Math.floor(days / 30)}개월 남음`;

  return `${Math.floor(days / 365)}년 남음`;
}

/** 특정 날짜를 현재 기준 상대 시간으로 표시 */
export function formatRelativeDate(date: DateValue): string {
  const target = toValidDate(date);
  const days = differenceInCalendarDays(target, new Date());

  if (days === -1) return '어제';
  if (days === 0) return '오늘';
  if (days === 1) return '내일';

  return formatDistanceToNowStrict(target, {
    locale: ko,
    addSuffix: true,
  });
}

export function getDurationToDays(
  duration: ExpirationDuration,
  baseDate = new Date(),
): number {
  const { unit, value } = duration;
  const endDate = addByUnit[unit](baseDate, value);

  return differenceInCalendarDays(endDate, baseDate);
}
