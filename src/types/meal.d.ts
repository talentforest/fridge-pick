import { mealObj } from '@/constants';
import { Ingredient, IngredientKey, SeasoningIngredientKey } from '@/types/ingredient';
import { StockUnit, VolumeUnit, WeightUnit } from '@/types/unit';

type Difficulty = 'easy' | 'medium' | 'hard';

/* -------------------------------------------------------------------------- */
/*                             Meal Ingredient                                */
/* -------------------------------------------------------------------------- */

type MealIngredientItem =
  | { type: 'meal'; id: MealKey }
  | { type: 'ingredient'; id: IngredientKey };

type SeasoningIngredientItem = { type: 'ingredient'; id: SeasoningIngredientKey };

/** 재료 구조 (추천엔진 핵심) */
type IngredientStructure = {
  /** 없으면 요리 성립 안됨 - 예) 김치찌개 - ['김치']
   * 추천을 위해 common과 구분. essential에 없으면 추천조차 뜨지 않음.
   */
  readonly essential?: readonly MealIngredientItem[];

  /** 들어가는 재료 - 예) 김치찌개 - ['대파, 양파'] */
  readonly common?: readonly MealIngredientItem[];

  /** 양념 재료 - 예) 김치찌개 - ['간장', '고춧가루'] */
  readonly seasoning?: readonly SeasoningIngredientItem[];

  /** 있으면 좋은 재료 */
  readonly optional?: readonly (SeasoningIngredientItem | MealIngredientItem)[];
};

export type EnrichMealIngredientStructure = {
  readonly essential?: readonly (Ingredient | Meal)[];
  readonly common?: readonly (Ingredient | Meal)[];
  readonly seasoning?: readonly Ingredient[];
  readonly optional?: readonly (Ingredient | Meal)[];
};

type Unit = {
  /** optional, 기본 표시 단위 */
  defaultUnitLabel?: StockUnit;

  /** optional, 선택 가능한 단위 (없으면 default만 사용) */
  unitOptions?: readonly StockUnit[];

  /** optional */
  packageWeight?: {
    amount: number;
    unit: WeightUnit | VolumeUnit;
  };
};

export type MealCategory =
  // 국물류
  | 'soup_meal'

  // 밥류
  | 'rice_meal'
  | 'cooking_meal'

  // 면류
  | 'noodle_meal'

  // 반찬류
  | 'side_meal'

  // 가벼운 식사
  | 'light_meal'

  // 서양식
  | 'western_meal'

  // 디저트/간식
  | 'dessert_meal'

  // 안주/야식
  | 'snack_meal'

  // 샐러드/프레시
  | 'fresh_meal';

export type MealSuffix =
  // 국물류
  | '_guk'
  | '_tang'
  | '_jjigae'
  | '_jeongol'
  | '_nabe'
  | '_soup'
  | '_juk'

  // 조리 방식
  | '_bokkeum'
  | '_muchim'
  | '_namul'
  | '_jorim'
  | '_jeon'
  | '_twigim'
  | '_gui'
  | '_jjim'
  | '_mari'

  // 저장/발효류
  | '_kimchi'
  | '_geotjeori'
  | '_jangajji'
  | '_jeotgal'

  // 면류
  | '_guksu'
  | '_myeon'
  | '_udon'
  | '_ramen'
  | '_pasta'

  // 밥류
  | '_bap'
  | '_deopbap'
  | '_bokkeumbap'
  | '_bibimbap'
  | '_risotto'
  | '_rice'
  | '_don'

  // 빵/간편식
  | '_sandwich'
  | '_burger'
  | '_toast'
  | '_pizza'
  | '_mandu'

  // 디저트
  | '_cake'
  | '_cookie'
  | '_bread'
  | '_bingsoo'

  // 기타
  | '_salad'
  | '_steak'
  | '_gratin';

/* -------------------------------------------------------------------------- */
/*                               Meal Type                                    */
/*                               = 음식 기본 데이터                               */
/* -------------------------------------------------------------------------- */

export type MealKey = keyof typeof mealObj;

export type Meal = {
  type: 'meal';

  /** 활성 여부 (soft delete 용) */
  isActive: boolean; // 기본 true

  /** MealKey: Firestore doc id (slug) */
  id: string;

  /** UI 표시용 라벨 */
  label: string;

  mealCategory: MealCategory | null;

  suffix: MealSuffix | null;

  /** 조리시간 */
  cookTime: number; // minutes

  /** 난이도 */
  difficulty: Difficulty;

  servingTemperature: 'hot' | 'cold' | 'both';

  /** optional, Image Route Name: 만약 타요리 동일 이미지인 경우 */
  imageName?: string;

  /** optional, 구성 재료
   * ingredientStructure 있어야 조리 가능, 없으면 완제품
   */
  ingredientStructure?: IngredientStructure;

  /** optional, 검색용 동의어 */
  synonyms?: readonly string[];

  /** 분화된 요리 종류 */
  variants?: readonly {
    label: string; // '계란 감자국',
    essential: readonly (MealIngredientItem | SeasoningIngredientItem)[];
  }[];
} & Unit;

export type MealWithEnrichIngredient = Omit<Meal, 'ingredientStructure'> & {
  ingredientStructure?: EnrichMealIngredientStructure;
};

/* -------------------------------------------------------------------------- */
/*                             Today Meal Item                                */
/*                             = 이번엔 어떻게 먹는가                              */
/* -------------------------------------------------------------------------- */

type MealConsumeMethod = 'cook' | 'instant' | 'delivery';

/** [메인요리 | 반찬] 타입구분
 * “이 음식이 식사의 중심이면 main, 아니면 side”
 */

type TodayMeal = {
  meal: MealWithEnrichIngredient;
  role: 'main' | 'side'; // 여기서 main과 side를 한번더 구분하는 이유는 오늘의 식사에서 메인 메뉴는 무조건 하나여야함. 만약 메인 메뉴를 두개 골랐는데 메인으로 선정된 메뉴 말고 다른 메뉴를 메인으로 올리고 싶을 때 수정 가능하도록
  consumeMethod: MealConsumeMethod;
  selectedAt: string;
};
