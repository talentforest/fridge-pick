import { CategoryKey } from '@/constants';

export type WeightUnit = 'g' | 'kg';
export type VolumeUnit = 'ml' | 'L';

export type StockUnit =
  | '개'
  | '마리'
  | '묶음'
  | '포'
  | '봉'
  | '팩'
  | '병'
  | '캔'
  | '통'
  | '판'
  | '조각'
  | '상자'
  | '포기'
  | '뿌리'
  | '단'
  | '뿌리'
  | '알'
  | '장'
  | '스틱'
  | '송이';

export const categoryUnitMap: Record<CategoryKey, StockUnit[]> = {
  noodle: ['봉', '개'],
  meat: ['팩', '마리', '개'],
  seafood: ['팩', '마리', '상자', '개'],
  vegetable: ['개', '묶음', '단', '포기'],
  fruit: ['개', '송이', '상자'],
  dairy: ['팩', '병', '개'],
  drink: ['병', '캔', '팩', '개'],
  seasoning: ['병', '통', '팩', '개'],
  powder: ['봉', '포', '통', '개'],
  can: ['캔', '개'],
  conveniencefood: ['팩', '봉', '개'],
  sidedish: ['팩', '통', '개'],
  health: ['포', '병', '개', '스틱'],
  grains: ['봉', '개'],
  dessert: ['팩', '개', '조각', '상자', '봉', '묶음'],
};
