import { ingredientObj, ingredientVariantsObj } from '@/constants';
import { CategoryKey } from '@/types/category';
import { StorageTypeId } from '@/types/storage';
import { StockUnit, VolumeUnit, WeightUnit } from '@/types/unit';

/* -------------------------------------------------------------------------- */
/*                              Ingredient Type                               */
/*                               정보가 있는 원재료                                */
/* -------------------------------------------------------------------------- */

/** ingredient variants 예) 수육용, 불고기용, 식단용... */
export type IngredientVariantKey = keyof typeof ingredientVariantsObj;

/** 정보가 있는 원재료 */
export type Ingredient = {
  type: 'ingredient';

  /** IngredientKey: Firestore doc id (slug) */
  id: IngredientKey;

  /** UI 분류 */
  category: Exclude<CategoryKey, 'meal'>;

  /** 활성 여부 (soft delete 용) */
  isActive: boolean; // 기본 true

  /** Image Route Name: 만약 타식재료 동일 이미지인 경우 */
  imageName?: string;

  /** 표시 이름 */
  label: string;

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

  variants?: {
    [key in IngredientVariantKey]: {
      label: string;
      imageName: string;
    };
  };

  /** 검색용 동의어 */
  synonyms?: readonly string[];
};

/* -------------------------------------------------------------------------- */
/*                         Custom Ingredient Type                             */
/*                                - 커스텀 재료                                  */
/* -------------------------------------------------------------------------- */
export type CustomIngredient = Pick<
  Ingredient,
  'label' | 'category' | 'defaultStorage' | 'expirationDays'
> & {
  type: 'custom';
  /** nanoid */
  id: string;
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
  | DrinkIngredientKey
  | ConvenienceIngredientKey;

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
export type ConvenienceIngredientKey = keyof (typeof ingredientObj)['convenience'];
