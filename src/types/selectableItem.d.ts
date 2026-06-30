import {
  ingredientObj,
  ingredientVariantsObj,
  mealObj,
  preparedFoodObj,
} from '@/constants';
import {
  IngredientCategoryKey,
  MealCategoryKey,
  PreparedFoodCategoryKey,
} from '@/types/category';
import { StorageTypeId } from '@/types/storage';
import { StockUnit } from '@/types/unit';

/** 선택 가능한 것 */
export type SelectableItem = Ingredient | PreparedFood | Meal;

/* -------------------------------------------------------------------------- */
/*                                 Food Model                                 */
/* -------------------------------------------------------------------------- */

/**
 * Food → 원본 데이터
 * SelectableItem → UI에서 선택할 대상
 * PurchasableFood → 구매 가능한 음식
 * ConsumableFood → 먹을 수 있는 음식
 * TrackedItem → 사용자가 관리하는 데이터
 *
 * Food Model
 *
 * Ingredient ─────────► PreparedFood ─────────► Meal
 *                        [중간단계]
 *
 * 원본 데이터 (Master Data)
 * ────────────────────────────────────
 * SelectableItem
 * ├─ Ingredient
 * ├─ PreparedFood
 * └─ Meal
 *
 * PurchasableFood
 * ├─ Ingredient
 * └─ PreparedFood
 *
 * ConsumableFood
 * ├─ PreparedFood
 * └─ Meal
 *
 * ────────────────────────────────────
 * Ingredient
 * ├─ BaseFood
 * └─ StorableFood
 *
 * PreparedFood
 * ├─ BaseFood
 * ├─ StorableFood
 * ├─ Partial<Consumable>
 * └─ Partial<Cookable>
 *
 * Meal
 * ├─ BaseFood
 * ├─ Consumable
 * └─ Partial<Cookable>
 *
 * ────────────────────────────────────
 * 1. [Ingredient]
 * 요리나 식사 구성을 위해 사용하는 식재료.
 * 다른 음식을 만들기 위한 재료 역할이 중심이다.
 *
 * 예)
 * 양파, 감자, 돼지고기, 두부, 계란,
 * 참치캔, 햄, 베이컨, 밀가루
 *
 * ────────────────────────────────────
 * 2. [PreparedFood]
 * 이미 먹을 수 있는 상태의 음식.
 * Ingredient와 Meal 사이의 중간 계층으로,
 * 식사에 곁들이거나 간단히 먹거나,
 * 일부는 다른 Meal의 재료로도 활용된다.
 *
 * 예)
 * 김치, 멸치볶음, 장조림, 감자샐러드,
 * 훈제란, 식빵, 요거트, 조미김
 *
 * ────────────────────────────────────
 * 3. [Meal]
 * 하나의 완성된 식사(메뉴).
 * 추천 메뉴의 핵심 대상이며,
 * 직접 조리, 간편식, 배달/포장 등 다양한 형태로 존재할 수 있다.
 *
 * 예)
 * 김치찌개, 제육볶음, 불고기,
 * 비빔밥, 파스타, 샌드위치, 치킨
 */

/* -------------------------------------------------------------------------- */
/*                              Common Property                               */
/* -------------------------------------------------------------------------- */

/** 음식 자체의 종류
 * - Ingredient: 식재료
 * - PreparedFood: 반찬, 간식, 보조식
 * - Meal: 식사 */
export type FoodKind = 'ingredient' | 'preparedFood' | 'meal';

/** 음식이 어떤 형태로 존재/추가될 수 있는지
 * - homemade: 직접 조리
 * - convenience: 간편식/완제품
 * - takeout: 포장, 배달 */
export type FoodSource = 'homemade' | 'convenience' | 'takeout';

export type UnitMeta = {
  /** 기본 표시 단위 */
  defaultUnitLabel: StockUnit;
  /** 선택 가능한 단위 */
  unitOptions?: readonly StockUnit[];
};

type BaseFood = {
  /** soft delete 용 */
  isActive: boolean;

  /** 표시 이름 */
  label: string;

  /** 동일 이미지 재사용 시 */
  imageName?: string;

  /** 검색용 동의어 */
  synonyms?: readonly string[];
} & UnitMeta;

/** Ingredient & PreparedFood 공통 속성: '보관 및 재고 관리가 필요한 음식' */
type StorableFood = {
  /** 기본 보관 위치 */
  defaultStorage: StorageTypeId;
  /** 소비기한 (일 단위) */
  expirationDays: {
    fridge?: number;
    freezer?: number;
    pantry?: number;
  };
};

/** PreparedFood & Meal 공통 속성: 직접 조리 가능한 음식의 정보 */
type Cookable = {
  /** 난이도 기준
   * easy - 0 ~ 15min
   * medium - 15min ~ 40min
   * hard - 40min ~ */
  difficulty: 'easy' | 'medium' | 'hard';
  foodStructure: FoodStructure;
};

/** PreparedFood & Meal 공통 속성: 아이템으로 식사가 가능한가? */
type Consumable = {
  servingTemperature: 'hot' | 'warm' | 'cold' | 'either';
  /**
   * 이 식사가 일반적으로 어떤 형태로 존재할 수 있는지
   * - homemade: 직접 조리 가능
   * - convenience: 냉동/밀키트/레토르트/편의점 등
   * - takeout: 배달/포장
   */
  availableFoodSources?: readonly FoodSource[];
};

/* -------------------------------------------------------------------------- */
/*                              Ingredient Type                               */
/* -------------------------------------------------------------------------- */
type IngredientMap = typeof ingredientObj;

export type IngredientKey = {
  [K in keyof IngredientMap]: keyof IngredientMap[K];
}[keyof IngredientMap];

/** ingredient variants 예) 수육용, 불고기용, 식단용... */
export type IngredientVariantKey = keyof typeof ingredientVariantsObj;

/** 식재료
 * - 요리나 식사 구성을 위해 사용하는 재료.
 * - 직접 먹을 수 있더라도, 앱에서 다른 meal을 만들기 위한 재료로 쓰이는 성격이 강하면 ingredient.
 */
export type Ingredient = BaseFood & {
  kind: 'ingredient';

  id: IngredientKey;

  /** UI 분류 */
  category: IngredientCategoryKey;

  /** 예: 수육용, 불고기용 */
  variants?: {
    [key in IngredientVariantKey]: {
      label: string;
      imageName: string;
    };
  };
} & StorableFood;

/* -------------------------------------------------------------------------- */
/*                            PreparedFood Type                               */
/* -------------------------------------------------------------------------- */
type PreparedFoodMap = typeof preparedFoodObj;

export type PreparedFoodKey = keyof PreparedFoodMap;

export type PreparedFoodWithEnrichFoodStructure = Omit<PreparedFood, 'foodStructure'> & {
  foodStructure?: EnrichedFoodStructure;
};

/** 반찬/간식/보조식
 * 직접 조리 없이 바로 먹을 수 있는 상태의 음식.
 * 완결된 한 끼 식사 meal은 아니지만, 식사에 곁들이거나 간단히 먹거나 일부 경우 재료처럼 활용될 수 있는 중간층.
 * 하지만 보통 단독으로 “오늘의 식사” 메인 후보는 아님
 */
export type PreparedFood = {
  kind: 'preparedFood';

  id: PreparedFoodKey;

  /** 반찬 / 간식 / 베이커리 / 보조식 / 음료 */
  category: PreparedFoodCategoryKey;
} & BaseFood &
  StorableFood &
  Partial<Cookable> &
  Partial<Consumable>;

/* -------------------------------------------------------------------------- */
/*                                    Meal                                    */
/* -------------------------------------------------------------------------- */
export type MealKey = keyof typeof mealObj;

export type MealWithEnrichFoodStructure = Omit<Meal, 'foodStructure'> & {
  foodStructure?: EnrichedFoodStructure;
};

/** 식사
 * 그 자체로 한 끼 식사로 소비되는 음식/메뉴.
 * 추천 메뉴의 핵심 대상.
 */
export type Meal = {
  kind: 'meal';

  id: MealKey;

  /** 식사 대분류 */
  category: MealCategoryKey;

  /** 같은 음식의 분화형
   * 예: 감자국 -> 계란 감자국 / 소고기 감자국 */
  variants?: readonly {
    label: string;
    essential: readonly FoodComponentItem[];
  }[];
} & BaseFood &
  Partial<Cookable> &
  Consumable;

/** 앱 내부 데이터 출처 느낌 */
export type ItemSource = 'preset' | 'custom'; // 이건 StorageItem에서만 붙여야하는 속성인거구나...

/* -------------------------------------------------------------------------- */
/*                               Food Structure                               */
/* -------------------------------------------------------------------------- */
export type FoodComponentItem =
  | { kind: 'meal'; id: MealKey }
  | { kind: 'preparedFood'; id: PreparedFoodKey }
  | { kind: 'ingredient'; id: IngredientKey };

export type SeasoningComponentItem = {
  kind: 'ingredient';
  id: keyof IngredientMap['seasoning'];
};

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

export type EnrichedFoodStructure = {
  readonly essential: readonly (Ingredient | PreparedFood | Meal)[];
  readonly common: readonly (Ingredient | PreparedFood | Meal)[];
  readonly seasoning: readonly Ingredient[];
  readonly optional: readonly (Ingredient | PreparedFood | Meal)[];
};

/* -------------------------------------------------------------------------- */
/*                             Purchasable Food                               */
/*                       = Ingredient & PreparedFood                          */
/* -------------------------------------------------------------------------- */
export type PurchasableFood = Ingredient | PreparedFood;

/* -------------------------------------------------------------------------- */
/*                              Consumable Food                               */
/*                           = Meal & PreparedFood                            */
/* -------------------------------------------------------------------------- */
/** 식사가 가능한 음식 */
export type ConsumableFood = Meal | PreparedFood;

export type ConsumableFoodWithEnrichedFoodStructure =
  | MealWithEnrichFoodStructure
  | PreparedFoodWithEnrichFoodStructure;
