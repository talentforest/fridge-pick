import { CategoryKey, categoryObj, ingredientObj } from '@/constants';
import { StorageTypeId } from '@/types/storage';
import { StockUnit, VolumeUnit, WeightUnit } from '@/types/unit';

export type Ingredient = {
  /** 활성 여부 (soft delete 용) */
  isActive: boolean; // 기본 true

  /** IngredientKey: Firestore doc id (slug) */
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
  | DrinkIngredientKey
  | MealKey;

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

export type MealKey = keyof (typeof ingredientObj)['meal'];
