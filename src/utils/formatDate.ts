import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

export const formatDateString = (
  date: Date,
  formatStr:
    | 'yyyy-MM-dd'
    | 'yy. MM. dd'
    | 'yy년 M월 d일'
    | 'yy년 M월 d일 (EEE)'
    | 'yy년 M월 d일 EEEE'
    | 'yyyy년 MM월 dd일'
    | 'yy년 M월 d일',
) => {
  return format(date, formatStr, { locale: ko });
};
