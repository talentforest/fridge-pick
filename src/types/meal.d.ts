import { mealObj } from '@/constants';
import { Ingredient, IngredientKey, SeasoningIngredientKey } from '@/types/ingredient';
import { StockUnit, VolumeUnit, WeightUnit } from '@/types/unit';

/* -------------------------------------------------------------------------- */
/*                              MealIngredient                                */
/* -------------------------------------------------------------------------- */
export type MealIngredientItem =
  | { type: 'meal'; id: MealKey }
  | { type: 'ingredient'; id: IngredientKey };

type SeasoningIngredientItem = { type: 'ingredient'; id: SeasoningIngredientKey };

/** 요리의 원재료 구조 (추천엔진 핵심) */
export type IngredientStructure = {
  /** 없으면 요리 성립 안됨 - 예) 김치찌개 - ['김치']
   * 추천을 위해 common과 구분. essential에 없으면 추천조차 뜨지 않음.
   */
  readonly essential: readonly MealIngredientItem[];

  /** 들어가는 재료 - 예) 김치찌개 - ['대파, 양파'] */
  readonly common: readonly MealIngredientItem[];

  /** 양념 재료 - 예) 김치찌개 - ['간장', '고춧가루'] */
  readonly seasoning: readonly SeasoningIngredientItem[];

  /** 있으면 좋은 재료 */
  readonly optional: readonly (SeasoningIngredientItem | MealIngredientItem)[];
};

export type EnrichMealIngredientStructure = {
  readonly essential: readonly (Ingredient | Meal)[];
  readonly common: readonly (Ingredient | Meal)[];
  readonly seasoning: readonly Ingredient[];
  readonly optional: readonly (Ingredient | Meal)[];
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

/* -------------------------------------------------------------------------- */
/*                             Conveninece Variant                            */
/*                                 = 간편식 종류                                 */
/* -------------------------------------------------------------------------- */
type ConvenienceVariant =
  /** 실온 보관 중심의 간편식
   * 간단한 조리 필요
   * 실온 보관
   * 완제품에 가까움
   * 컵라면/컵스프/즉석죽/레토르트 카레/레토르트 짜장/즉석국...
   */
  | 'instant'

  /** 냉장 보관 중심의 밀키트
   * 재료 제공
   * 직접 조리 필요
   * 냉장 보관
   */
  | 'mealkit'

  /** 냉동 식품
   * 냉동만두/냉동피자/냉동볶음밥...
   */
  | 'frozen'

  /** 이미 완성된 상태로 구매
   * 추가 조리 거의 없음
   * 구매 후 바로 섭취 가능
   * 냉장 보관이 많음
   * 배달 / 포장 / 편의점 / 마트 / 완제품
   * 김밥/초밥/샌드위치/순대/치킨/족발/샐러드/낫또/요거트...
   */
  | 'prepared';

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

  /** optional, 추천할만한 식사메뉴는 아닌 곁들어 먹는 메뉴인 경우, ex) 밥, 단무지... */
  isSideMeal?: boolean;

  /** optional, Image Route Name: 만약 타요리 동일 이미지인 경우 */
  imageName?: string;

  /** optional, 구성 재료
   * ingredientStructure 있어야 '직접 요리'로 추천 가능.
   * ingredientStructure 없으면 '간편식/밀키트', '배달/포장'으로는 추천 가능
   */
  ingredientStructure?: IngredientStructure;

  /** optional, 간편식 종류 */
  convenienceVariants?: readonly ConvenienceVariant[];

  /** optional, 검색용 동의어 */
  synonyms?: readonly string[];

  /** optional, 분화된 요리 종류 */
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

/* -------------------------------------------------------------------------- */
/*                              Meal의 속성들                                   */
/* -------------------------------------------------------------------------- */

type Difficulty = 'easy' | 'medium' | 'hard';

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
