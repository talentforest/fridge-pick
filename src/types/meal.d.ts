import { mealObj } from '@/constants';
import { Ingredient, IngredientKey } from '@/types/ingredient';
import { StorageTypeId } from '@/types/storage';
import { StockUnit, VolumeUnit, WeightUnit } from '@/types/unit';

/** [반찬 | 메인요리 | 간편요리] 타입구분 */
// “이 음식이 식사의 중심이면 main, 아니면 side”
type MealType = 'main' | 'side' | 'instant';

type MealCategory =
  | 'rice' // 밥류
  | 'noodle_dumpling' // 면/만두
  | 'soup_stew' // 국/찌개/전골
  | 'stir_fry' // 볶음
  | 'grill' // 구이
  | 'braise' // 조림
  | 'steam' // 찜
  | 'pan_fry_fried' // 부침/튀김
  | 'salad_namul' // 나물/샐러드
  | 'side_dish'; // 밑반찬/김치/절임

type Difficulty = 'easy' | 'medium' | 'hard';

type MealIngredientItem =
  | { type: 'ingredient'; id: IngredientKey }
  | { type: 'meal'; id: MealKey };

/** 재료 구조 (추천엔진 핵심) */
type IngredientStructure = {
  /** 없으면 요리 성립 안됨 */
  readonly essential: readonly MealIngredientItem[];

  /** 보통 들어가는 재료 */
  readonly common: readonly MealIngredientItem[];

  /** 있으면 좋은 재료 */
  readonly optional: readonly MealIngredientItem[];
};

export type EnrichMealIngredientStructure = {
  readonly essential: readonly (Ingredient | Meal)[];
  readonly common: readonly (Ingredient | Meal)[];
  readonly optional: readonly (Ingredient | Meal)[];
};

/* -------------------------------------------------------------------------- */
/*                                Meal Type                                   */
/* -------------------------------------------------------------------------- */

export type MealKey = keyof typeof mealObj;

export type BaseMeal = {
  type: 'meal';

  /** 활성 여부 (soft delete 용) */
  isActive: boolean; // 기본 true

  /** MealKey: Firestore doc id (slug) */
  id: MealKey;

  /** UI 표시용 라벨 */
  label: string;

  /** UI 분류 */
  category: 'meal';

  /** 조리시간 */
  cookTime: number; // minutes

  /** 난이도 */
  difficulty: Difficulty;

  /** 필요 식재료 */
  ingredientStructure: IngredientStructure;

  /** 분화된 요리 */
  variants?: readonly {
    label: string; // '계란 감자국',
    essential: readonly MealIngredientItem[];
  }[];

  /** Image Route Name: 만약 타요리 동일 이미지인 경우 */
  imageName?: string;

  /** 기본 보관 위치 */
  defaultStorage: StorageTypeId;

  /** 소비기한 (일 단위) */
  expirationDays?: Partial<Record<StorageTypeId, number>>;

  /** 기본 표시 단위 */
  defaultUnitLabel?: StockUnit;

  /** 선택 가능한 단위 (없으면 default만 사용) */
  unitOptions?: readonly StockUnit[];

  packageWeight?: {
    amount: number;
    unit: WeightUnit | VolumeUnit;
  };

  /** 검색용 동의어 */
  synonyms?: readonly string[];
};

type InstantMeal = Omit<BaseMeal, 'ingredientStructure'> & {
  mealType: 'instant';
  mealCategory: null;
};

type CookedMeal = BaseMeal & {
  mealType: 'main' | 'side';
  mealCategory: MealCategory;
};

export type Meal = InstantMeal | CookedMeal;
