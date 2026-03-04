import { z } from 'zod';

export const UnitLabelSchema = z.enum([
  '개',
  '마리',
  '묶음',
  '포',
  '봉',
  '팩',
  '병',
  '캔',
  '통',
  '판',
  '조각',
  '상자',
  '포기',
  '뿌리',
  '단',
  '뿌리',
  '알',
  '장',
  '스틱',
  '송이',
]);
