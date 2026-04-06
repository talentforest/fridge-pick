import { CategoryKey, ingredientObj } from '@/constants';
import { StorageTypeId } from '@/types/storage';
import { StockUnit, VolumeUnit, WeightUnit } from '@/types/unit';

export type Ingredient = {
  /** 활성 여부 (soft delete 용) */
  isActive: boolean; // 기본 true

  /** Firestore doc id (slug) */
  id: IngredientKey;

  /** Image Route Name: 만약 타식재료 동일 이미지인 경우 */
  imageName?: string;

  /** 표시 이름 */
  label: string;

  /** UI 분류 */
  category: CategoryKey;

  /** category가 'meal'인 경우 - 반찬/메인요리/간편요리 타입구분 */
  mealType?: 'side' | 'main' | 'instant';

  /** 기본 보관 위치 */
  defaultStorage: readonly StorageTypeId;

  /** 소비기한 (일 단위) */
  expirationDays: {
    fridge?: number;
    freezer?: number;
    pantry?: number;
  };

  /** 기본 표시 단위 */
  defaultUnitLabel: readonly StockUnit;

  /** 선택 가능한 단위 (없으면 default만 사용) */
  unitOptions?: readonly StockUnit[];

  packageWeight?: {
    amount: number;
    unit: WeightUnit | VolumeUnit;
  };

  /** 검색용 동의어 */
  synonyms?: readonly string[];
};

export type IngredientKey =
  | NoodleIngredientKey
  | VegetableIngredientKey
  | FruitIngredientKey
  | MeatIngredientKey
  | DiaryIngredientKey
  | DessertIngredientKey
  | CanIngredientKey
  | GrainsIngredientKey
  | PowderIngredientKey
  | SeafoodIngredientKey
  | SeasoningIngredientKey
  | DrinkIngredientKey;

export type NoodleIngredientKey = keyof (typeof ingredientObj)['noodle'];
export type VegetableIngredientKey = keyof (typeof ingredientObj)['vegetable'];
export type FruitIngredientKey = keyof (typeof ingredientObj)['fruit'];
export type MeatIngredientKey = keyof (typeof ingredientObj)['meat'];
export type DiaryIngredientKey = keyof (typeof ingredientObj)['dairy'];
export type DessertIngredientKey = keyof (typeof ingredientObj)['dessert'];
export type CanIngredientKey = keyof (typeof ingredientObj)['can'];
export type GrainsIngredientKey = keyof (typeof ingredientObj)['grains'];
export type PowderIngredientKey = keyof (typeof ingredientObj)['powder'];
export type SeafoodIngredientKey = keyof (typeof ingredientObj)['seafood'];
export type SeasoningIngredientKey = keyof (typeof ingredientObj)['seasoning'];
export type DrinkIngredientKey = keyof (typeof ingredientObj)['drink'];

export type ValidCategoryKey = Exclude<keyof typeof categoryObj, 'noCategory'>;

export type CategoryLabel = (typeof categoryObj)[keyof typeof categoryObj]['label'];

export type CategoryItem = (typeof categoryObj)[CategoryKey];

export const categoryObj = {
  vegetable: {
    id: 'vegetable',
    label: '채소/버섯',
    icon: 'LeafyGreen',
    color: 'green',
  },
  meat: {
    id: 'meat',
    label: '정육/가공육',
    icon: 'Beef',
    color: 'red',
  },
  seafood: {
    id: 'seafood',
    label: '수산/수산가공',
    icon: 'Fish',
    color: 'blue',
  },
  grains: {
    id: 'grains',
    label: '쌀/잡곡',
    icon: 'Wheat',
    color: 'red',
  },
  noodle: {
    id: 'noodle',
    label: '면/조리용떡',
    icon: 'LineSquiggle',
    color: 'yellow',
  },
  fruit: {
    id: 'fruit',
    label: '과일/견과',
    icon: 'Apple',
    color: 'red',
  },
  dairy: {
    id: 'dairy',
    label: '유제품',
    icon: 'Milk',
    color: 'yellow',
  },
  seasoning: {
    id: 'seasoning',
    label: '조미료/장/오일',
    icon: 'HeartPulse',
    color: 'red',
    // NOTE: 추후 추가, type: 'basic' | 'sauce' | 'oil'
  },
  powder: {
    id: 'powder',
    label: '가루/분말',
    icon: 'HeartPulse',
    color: 'red',
  },
  dessert: {
    id: 'dessert',
    label: '간식/베이커리',
    icon: 'Dessert',
    color: 'yellow',
  },
  drink: {
    id: 'drink',
    label: '음료/주류',
    icon: 'GlassWater',
    color: 'blue',
    // NOTE: 추후 추가, type: 'beverage' | 'alcohol'
  },
  can: {
    id: 'can',
    label: '통조림/병조림',
    icon: 'Database',
    color: 'blue',
  },

  /** ⭐ 바로 먹을수 있는것 - 요리에 이용되는 식재료가 아님 */
  meal: {
    id: 'meal',
    label: '완성요리',
    icon: 'Soup',
    color: 'red',
  },

  /** 카테고리가 없는 경우 */
  noCategory: {
    id: 'noCategory',
    label: '카테고리 없음',
    icon: 'Database', // NOTE
    color: 'blue',
  },
} as const;
