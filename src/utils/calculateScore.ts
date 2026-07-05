import { EnrichedConsumableFoodWithFilter } from '@/hooks';
import { FoodFilterKey } from '@/types/filter';

const SCORE = {
  // Base
  POSSESSION_PERCENT: 100,
  ESSENTIAL_MISSING: 10000,
  COMMON_MISSING: 500,
  SEASONING_MISSING: 200,
  REQUIRED_COUNT: 20,

  // Expired Soon
  EXPIRED_SOON_COUNT: 10000,
  EXPIRED_SOON_REMAINING_DAY: 100,

  // Filter
  HIGH_POSSESSION: 100,
  EASY: 5000,
  FAVORITE: 0,
} as const;

/**
 * 공통 정렬 우선순위
 * 1. essential 재료를 모두 보유한 메뉴
 * 2. 부족한 essential 재료가 적은 메뉴
 * 3. 부족한 common 재료가 적은 메뉴
 * 4. 필요한 essential/common 재료 수가 적은 메뉴
 * 5. 재료 보유율이 높은 메뉴
 */
const calculateBaseScore = (food: EnrichedConsumableFoodWithFilter): number => {
  // 식재료 구조가 없는 메뉴는 재료 기반 추천 점수를 계산할 수 없으므로 기본 점수 0
  if (!food.foodStructure) return -50000;

  let score = 0;

  const {
    essentialMissingCount,
    commonMissingCount,
    seasoningMissingCount,
    requiredCount,
    possessionPercent, //
  } = food;

  score -= essentialMissingCount * SCORE.ESSENTIAL_MISSING;
  score -= commonMissingCount * SCORE.COMMON_MISSING;
  score -= seasoningMissingCount * SCORE.SEASONING_MISSING;

  score -= requiredCount * SCORE.REQUIRED_COUNT;

  score += possessionPercent * SCORE.POSSESSION_PERCENT;

  return score;
};

export const calculateMenuSortScore = (
  food: EnrichedConsumableFoodWithFilter,
  activeFilter: FoodFilterKey | 'all',
): number => {
  let score = calculateBaseScore(food);

  switch (activeFilter) {
    /**
     * 소비기한 임박 필터 정렬 우선순위
     * 1. 소비기한 임박 재료 활용률
     * 2. 소비기한 임박 재료 중 가장 적게 남은 일수가 짧은 메뉴
     * 3. 공통 정렬
     */
    case 'expiredSoon':
      if (food.expiredSoonList.length === 0) {
        break;
      }

      score += food.expiredSoonList.length * SCORE.EXPIRED_SOON_COUNT;
      score -= food.expiredSoonRemainingDays * SCORE.EXPIRED_SOON_REMAINING_DAY;

      break;

    /** [식재료 보유율 높음] 정렬 추가 로직: 재료 보유율 높은 순(공통로직에 있지만 재료 보유율 가중치 강화) */
    case 'highPossession':
      score += food.possessionPercent * SCORE.HIGH_POSSESSION;
      break;

    /** [쉬운 메뉴] 정렬 추가 로직: difficulty가 easy => medium => hard 순 */
    case 'easy':
      if (food.difficulty === 'easy') {
        score += SCORE.EASY;
      }
      break;

    /** "나의 픽" 정렬 로직: 공통 정렬 로직으로 충분. */
    case 'favorite':
      score += SCORE.FAVORITE;
      break;

    case 'all':
    default:
      break;
  }

  return score;
};

export const getSearchMatchScore = (
  food: EnrichedConsumableFoodWithFilter,
  keyword: string,
) => {
  if (!keyword) return 0;

  if (food.label === keyword) return 10000;

  if (food.label.startsWith(keyword)) return 5000;

  if (food.label.includes(keyword)) return 3000;

  const synonyms = food.synonyms ?? [];

  if (synonyms.some((synonym) => synonym === keyword)) return 2000;

  if (synonyms.some((synonym) => synonym.includes(keyword))) return 1000;

  return 0;
};
