import { mealObj } from '@/constants';
import { CategoryKey } from '@/types/category';
import { MealFilterKey } from '@/types/filter';
import { Ingredient } from '@/types/ingredient';
import { StorageTypeId } from '@/types/storage';
import { StockUnit, VolumeUnit, WeightUnit } from '@/types/unit';

/* -------------------------------------------------------------------------- */
/*                                Meal Type                                   */
/* -------------------------------------------------------------------------- */

export type MealKey = keyof typeof mealObj;

export type Meal = {
  type: 'meal';

  /** 활성 여부 (soft delete 용) */
  isActive: boolean; // 기본 true

  /** MealKey: Firestore doc id (slug) */
  id: MealKey;

  /** UI 표시용 라벨 */
  label: string;

  /** UI 분류 */
  category: Extract<CategoryKey, 'meal'>;

  /** [반찬 | 메인요리 | 간편요리] 타입구분 */
  mealType?: 'side' | 'main' | 'instant';

  /** 조리시간 */
  time: number;

  filterList: readonly Exclude<MealFilterKey, 'all'>[];

  /** 필요 식재료 */
  ingredientList: readonly Ingredient[];

  /** Image Route Name: 만약 타요리 동일 이미지인 경우 */
  imageName?: string;

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
