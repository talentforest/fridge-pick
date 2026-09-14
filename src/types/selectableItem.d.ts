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

  defaultStorage?: StorageTypeId;

  /** 검색용 동의어 */
  synonyms?: readonly string[];
} & UnitMeta;

export type DurationUnit = 'day' | 'week' | 'month' | 'year';

export type ExpirationDuration = {
  value: number;
  unit: DurationUnit;
};

export type StorageDurations = {
  freezer?: ExpirationDuration;
  fridge?: ExpirationDuration;
  pantry?: ExpirationDuration;
};

type ExpirationMeta = {
  expiration:
    | {
        /** 소비기한 표시 여부
         * - printed: 특정 소비기한이 표시된 제품
         */
        mode: 'printed';
        /** 직접 만든 형태로 사용할 가능성을 위해 존재할 수 있지만 필수는 아님 */
        recommendedDurations?: StorageDurations;
      }
    | {
        /** 소비기한 표시 여부
         * - recommended: 원물이거나 음식으로 특정 소비기한 없는 SelectableItem
         */
        mode: 'recommended';
        /** 권장 기간 방식에서는 필수 */
        recommendedDurations: StorageDurations;
      };
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

export type Food = ItemBase & {
  kind: 'food';
  id: FoodId;
  category: FoodCategoryKey;

  difficulty?: Difficulty;
  servingTemperature?: ServingTemperature;
  availableFoodForm?: readonly FoodForm[];
  foodStructure?: FoodStructure;

  /** 같은 음식의 분화형
   * 예: 감자국 -> 계란 감자국 / 소고기 감자국 */
  variants?: readonly {
    id: FoodVariantId;
    label: string;
    essential: readonly FoodComponentItem[];
  }[];
} & Partial<ExpirationMeta>;

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

/** 음식이 어떤 형태인지
 * - meal_kit
 *   신선편의식품: 손질 된 식재료와 레시피가 동봉되어 있어 조리하기 쉽게 만든 제품입니다.
 *
 * - frozen
 *   반조리식품: 간단한 조리 과정을 거친 후 섭취 가능한 음식으로 냉동만두, 냉동돈까스 등이 있습니다.
 *
 * - ready_to_heat
 *   완조리식품: 전자레인지나 뜨거운 물에 단시간 데운 후 섭취하는 음식으로 햇반, 즉석죽, 짜장, 카레 등이 있습니다.
 *
 * - ready_to_eat
 *   즉석섭취식품: 별도의 조리 없이 바로 섭취 가능한 음식으로 도시락, 김밥, 샌드위치가 있습니다.
 */
export type FoodForm = 'meal_kit' | 'frozen' | 'ready_to_heat' | 'ready_to_eat';

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
  readonly seasoning: readonly SeasoningComponentItem[];

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
