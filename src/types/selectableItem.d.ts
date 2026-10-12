import type { ingredientObj, ingredientVariantsObj, foodObj } from '@/constants';
import type { FoodCategoryKey, IngredientCategoryKey } from '@/types/category';
import type { StorageTypeId } from '@/types/storage';
import type { Unit } from '@/types/unit';

/** 선택 가능한 것 */
export type SelectableItem = Ingredient | Food;

/* -------------------------------------------------------------------------- */
/*                                 Food Model                                 */
/* -------------------------------------------------------------------------- */

/**
 * ------------------------------------
 *       # 원본 데이터
 * ------------------------------------
 *
 * Ingredient ────────► Food
 *
 * ────────────────────────────────────
 * 1. [Ingredient]
 * - Food의 구성 식재료
 *
 * 예)
 * 양파, 감자, 돼지고기, 두부, 계란,
 * 참치캔, 햄, 베이컨, 밀가루
 *
 * ────────────────────────────────────
 * 2. [Food]
 * - 하나의 완성된 음식.
 * - 추천 메뉴의 핵심 대상.
 * - 그러나, Food 자체도 Food의 구성재료가 될 수 있음.
 *
 * 예)
 * 김치찌개, 제육볶음, 불고기,
 * 비빔밥, 파스타, 샌드위치, 치킨
 * ────────────────────────────────────
 *
 * 기본 데이터와 사용자 생성 커스텀 데이터는 동일한 모델을 사용한다.
 * ID 형식으로 데이터 출처를 구분한다.
 *
 * 기본 Ingredient ID: IngredientKey
 * 커스텀 Ingredient ID: custom:ingredient:${string}
 *
 * 기본 Food ID: FoodKey
 * 커스텀 Food ID: custom:food:${string}
 */

/* -------------------------------------------------------------------------- */
/*                              Common Property                               */
/* -------------------------------------------------------------------------- */

export type UnitMeta = {
  /** 기본 표시 단위 */
  defaultUnitLabel: Unit;
  /** 선택 가능한 단위 */
  unitOptions?: readonly Unit[];
};

type ItemBase = {
  /** soft delete 용 */
  isActive: boolean;

  /** 표시 이름 */
  label: string;

  recommendLevel: 'general' | 'preference';

  /** 동일 이미지 재사용 시 */
  imageName?: string;

  defaultStorage: StorageTypeId;

  /** 검색용 동의어 */
  synonyms?: readonly string[];
} & UnitMeta;

export type DurationUnit = 'day' | 'week' | 'month' | 'year';

export type ExpirationDuration = {
  value: number;
  unit: DurationUnit;
};

export type StorageDurations = {
  freezer: ExpirationDuration;
  fridge: ExpirationDuration;
  pantry: ExpirationDuration;
};

type Durations = Partial<StorageDurations>;

type RecommendedDurations =
  | { raw: Durations; packaged?: Durations; homemade?: Durations }
  | { raw?: Durations; packaged: Durations; homemade?: Durations }
  | { raw?: Durations; packaged?: Durations; homemade: Durations };

type ExpirationMeta = {
  recommendedDurations?: RecommendedDurations;
};

/* -------------------------------------------------------------------------- */
/*                                 Ingredient                                 */
/* -------------------------------------------------------------------------- */
export type Ingredient = ItemBase & {
  kind: 'ingredient';
  id: IngredientId;
  category: IngredientCategoryKey;

  /** 예: 수육용, 불고기용 */
  variants?: readonly IngredientVariantKey[];

  /** 온보딩 추천 식재료 노출 순서. 없으면 노출하지 않음, 낮을수록 추천 더 */
  onboardingPriority?: number;
} & ExpirationMeta;

export type CustomIngredientId = `custom:ingredient:${string}`;
export type IngredientId = IngredientKey | CustomIngredientId;

/* -------------------------------------------------------------------------- */
/*                            Ingredient Property                             */
/* -------------------------------------------------------------------------- */
type IngredientMap = typeof ingredientObj;

export type IngredientKey = {
  [K in keyof IngredientMap]: keyof IngredientMap[K];
}[keyof IngredientMap];

/** ingredient variants 예) 수육용, 불고기용, 식단용... */
export type IngredientVariantKey = keyof typeof ingredientVariantsObj;

/* -------------------------------------------------------------------------- */
/*                                    Food                                    */
/* -------------------------------------------------------------------------- */
export type FoodVariantId = string;

export type Food = Omit<ItemBase, 'defaultStorage'> & {
  kind: 'food';
  id: FoodId;
  category: FoodCategoryKey;
  difficulty?: Difficulty;
  servingTemperature?: ServingTemperature;
  /**
   * 대표적인 기본 보관 방법이 명확한 경우에만 지정한다.
   * 제품 형태에 따라 보관 방법이 달라지는 음식은 생략한다.
   */
  defaultStorage?: StorageTypeId;
  availableFoodForms?: readonly FoodForm[];
  foodStructure?: FoodStructure;

  /** 같은 음식의 분화형
   * 예: 감자국 -> 계란 감자국 / 소고기 감자국 */
  variants?: readonly {
    id: FoodVariantId;
    label: string;
    essential: readonly FoodComponentItem[];
  }[];
} & ExpirationMeta;

export type CustomFoodId = `custom:food:${string}`;
export type FoodId = FoodKey | CustomFoodId;

/* -------------------------------------------------------------------------- */
/*                               Food Property                                */
/* -------------------------------------------------------------------------- */
type FoodMap = typeof foodObj;

export type FoodKey = keyof FoodMap;

/** 난이도 기준
 * - easy - 0 ~ 15min
 * - medium - 15min ~ 40min
 * - hard - 40min ~ */
export type Difficulty = 'easy' | 'medium' | 'hard';

export type ServingTemperature = 'hot' | 'warm' | 'cold' | 'room_temperature' | 'either';

/** 음식이 어떤 형태인지, 제품인지
 * meal_kit
 * - 손질된 재료와 조리법이 함께 제공됨
 * - 여러 재료를 조합하여 음식을 완성해야 함
 *
 * ready_to_cook
 * - 조리 전 또는 반조리 상태의 음식
 * - 냉장·냉동 여부는 defaultStorage로 구분함
 * - 굽기, 튀기기, 찌기, 끓이기 등의 조리가 필요함
 * - 예: 만두, 돈까스, 핫도그
 *
 * ready_to_heat
 * - 이미 완성된 음식
 * - 전자레인지, 중탕 등으로 데우기만 하면 됨
 * - 예: 즉석밥, 즉석죽, 완제품 카레
 *
 * ready_to_eat
 * - 별도의 조리나 가열 없이 먹을 수 있음
 * - 예: 김밥, 샌드위치, 도시락, 그래놀라
 */
export type FoodForm = 'meal_kit' | 'ready_to_cook' | 'ready_to_heat' | 'ready_to_eat';

/* -------------------------------------------------------------------------- */
/*                               Food Structure                               */
/* -------------------------------------------------------------------------- */
/** 요리의 원재료 구조 (추천엔진 핵심) */
export type FoodStructure = {
  /**
   * 없으면 요리 성립 안됨
   * 예: 김치찌개 - 김치
   */
  readonly essential: readonly FoodComponentItem[];

  /**
   * 들어가는 재료
   * 예: 김치찌개 - 대파, 양파
   */
  readonly common: readonly FoodComponentItem[];

  /**
   * 양념 재료
   * 예: 간장, 고춧가루
   */
  readonly seasoning: readonly (SeasoningComponentItem | FoodComponentItem)[];

  /** 있으면 좋은 재료 */
  readonly optional: readonly (SeasoningComponentItem | FoodComponentItem)[];
};

export type FoodComponentItem =
  { kind: 'food'; id: FoodId } | { kind: 'ingredient'; id: IngredientId };

export type SeasoningComponentItem = {
  kind: 'ingredient';
  id: keyof IngredientMap['seasoning'] | CustomIngredientId;
};

export type EnrichedFoodStructure = {
  readonly essential: readonly SelectableItem[];
  readonly common: readonly SelectableItem[];
  readonly seasoning: readonly Ingredient[];
  readonly optional: readonly SelectableItem[];
};

export type FoodWithEnrichedFoodStructure = Omit<Food, 'foodStructure'> & {
  foodStructure?: EnrichedFoodStructure;
};
