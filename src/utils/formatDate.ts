import { format } from 'date-fns';

export const formatDateString = (
  date: Date,
  formatStr: 'yyyy-MM-dd' | 'yy. MM. dd',
) => {
  return format(date, formatStr);
};
