import { IngredientCategoryKey } from '@/types/category';

export type Unit = StockUnit | WeightUnit | VolumeUnit;

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
  | '컵'
  | '조각'
  | '상자'
  | '포기'
  | '단'
  | '뿌리'
  | '알'
  | '장'
  | '스틱'
  | '모'
  | '송이'
  | '접시'
  | '인분';

export const categoryUnitMap: Record<IngredientCategoryKey, StockUnit[]> = {
  noodle: ['봉', '개', '컵'],
  meat: ['팩', '마리', '개'],
  seafood: ['팩', '마리', '상자', '개'],
  vegetable: ['개', '묶음', '단', '포기'],
  fruit: ['개', '송이', '상자'],
  dairy: ['팩', '병', '개', '컵'],
  drink: ['병', '캔', '팩', '개', '컵'],
  seasoning: ['병', '통', '팩', '개'],
  powder: ['봉', '포', '통', '개', '컵'],
  can: ['캔', '개'],
  conveniencefood: ['팩', '봉', '개', '컵'],
  sidedish: ['팩', '통', '개', '접시', '인분'],
  health: ['포', '병', '개', '스틱'],
  grains: ['봉', '개', '컵'],
  dessert: ['팩', '개', '조각', '상자', '봉', '묶음', '컵'],
};
