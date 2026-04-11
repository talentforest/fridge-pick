import { format } from 'date-fns';

export const formatDateString = (
  date: Date,
  formatStr:
    | 'yyyy-MM-dd'
    | 'yy. MM. dd'
    | 'yy년 MM월 dd일'
    | 'yyyy년 MM월 dd일'
    | 'yy년 M월 d일',
) => {
  return format(date, formatStr);
};
