import { Category, ingredientObj } from '@/constants';
import { StorageType } from '@/types/storageItem';
import { StockUnit, VolumeUnit, WeightUnit } from '@/types/unit';

export type Ingredient = {
  /** Firestore doc id (slug) */
  id: IngredientKey;

  /** 표시 이름 */
  label: string;

  /** 활성 여부 (soft delete 용) */
  isActive: boolean; // 기본 true

  /** UI 분류 (복수 허용) */
  categories: readonly Category[];

  /** 기본 보관 위치 */
  defaultStorage: readonly StorageType;

  /** 기본 유통기한 (일 단위) */
  expirationDays: number;

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
  | DiaryIngredientKey;

export type NoodleIngredientKey = keyof (typeof ingredientObj)['noodle'];
export type VegetableIngredientKey = keyof (typeof ingredientObj)['vegetable'];
export type FruitIngredientKey = keyof (typeof ingredientObj)['fruit'];
export type MeatIngredientKey = keyof (typeof ingredientObj)['meat'];
export type DiaryIngredientKey = keyof (typeof ingredientObj)['dairy'];
