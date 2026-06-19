import { MealFilterKey } from '@/types/filter';
import { Ingredient } from '@/types/ingredient';
import { Meal, MealWithEnrichIngredient } from '@/types/meal';
import { SelectableItem } from '@/types/selectableItemAndTrackedItem';

type RecommendMealFactors = MealWithEnrichIngredient & {
  expiredSoonList: SelectableItem[];
  requiredIngredientCount: number;
  possessedIngredientCount: number;
  possessionPercent: number;
  possessedList: SelectableItem[];
};

const getMissingCount = (
  targetList: readonly (Ingredient | Meal)[],
  possessedList: readonly SelectableItem[],
) => {
  return targetList.filter(
    ({ type, id }) =>
      !possessedList.some((possessed) => possessed.type === type && possessed.id === id),
  ).length;
};

/** 모든 필터의 공통 정렬 로직, 추가 로직은 공통 정렬보다 우선
 * - essential/common 재료를 모두 보유했는가
 * - 부족한 essential/common 재료가 적은 순
 * - 필요한 essential/common 재료 개수가 적은 순
 * - essential/common 재료 보유율이 높은가
 */
const getBaseScore = (meal: RecommendMealFactors): number => {
  if (!meal.ingredientStructure) return 1000;

  let score = 0;

  const { essential, common } = meal.ingredientStructure;

  const essentialMissingCount = getMissingCount(essential, meal.possessedList);

  const commonMissingCount = getMissingCount(common, meal.possessedList);

  const requiredCount = essential.length + common.length;

  // 1. essential 모두 보유
  if (essentialMissingCount === 0) {
    score += 1000;
  }

  // 2. 부족한 필수 재료 수
  score -= essentialMissingCount * 200;
  score -= commonMissingCount * 50;

  // 3. 필요한 필수 재료 개수
  score -= requiredCount * 10;

  // 4. 재료 보유율
  score += meal.possessionPercent;

  return score;
};

export const getRecommendMealScore = (
  meal: RecommendMealFactors,
  activeFilter: MealFilterKey | 'all',
): number => {
  let score = getBaseScore(meal);

  switch (activeFilter) {
    /** [소비기한 임박] 정렬 추가 로직: 소비기한 임박 식재료 많은 순 */
    case 'expiredSoon':
      score += meal.expiredSoonList.length * 1000;
      break;

    /** [식재료 보유율 높음] 정렬 추가 로직: 재료 보유율 높은 순(공통로직에 있지만 재료 보유율 가중치 강화) */
    case 'highPossession':
      score += meal.possessionPercent * 10;
      break;

    /** [쉬운 메뉴] 정렬 추가 로직: difficulty가 easy => medium => hard 순 */
    case 'easy':
      if (meal.difficulty === 'easy') {
        score += 1000;
      }
      break;

    /** "나의 픽" 정렬 로직: 공통 정렬 로직으로 충분. */
    case 'favorite':
      score += 1000;
      break;

    case 'all':
    default:
      break;
  }

  return score;
};
