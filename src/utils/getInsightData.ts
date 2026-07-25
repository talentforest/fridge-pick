import { IconName } from '@/components/common/ui/Icon';
import {
  ConsumableFood,
  IngredientKey,
  MealKey,
  PreparedFoodKey,
} from '@/types/selectableItem';
import { EnrichedStorageItem } from '@/types/storage';
import { findIngredient, findMeal, findPreparedFood } from '@/utils/findItem';

type InsightData = {
  color: 'red' | 'yellow' | 'green' | 'blue' | 'indigo';
  icon: IconName;
  title: string;
  description: string;
};

export type InsightDataProps =
  | {
      type: 'expired';
      ingredientCount: number;
    }
  | {
      type: 'shopping';
      ingredientName: string;
      mealCount: number;
    }
  | {
      type: 'favoriteMeal';
      ingredientName: string;
    }
  | {
      type: 'frequentMeal';
      ingredientName: string;
    }
  | {
      type: 'shoppingList';
      mealCount: number;
    }
  | {
      type: 'availableMeal';
      mealCount: number;
    }
  | {
      type: 'expiringMeal';
      ingredientName: string;
    }
  | {
      type: 'monthlyConsumed';
      consumedCount: number;
    }
  | {
      type: 'consumedMoreThanLastMonth';
      consumedCount: number;
    }
  | {
      type: 'reducedWaste';
      wasteCount: number;
    }
  | {
      type: 'favoriteIngredient';
      ingredientName: string;
    }
  | {
      type: 'mostCookedMeal';
      mealName: string;
    }
  | {
      type: 'consumptionStreak';
      streakDays: number;
    }
  | {
      type: 'good';
    };

type InsightCandidate = {
  score: number;
  props: InsightDataProps;
};

type TopInsightData = {
  expiredCount: number;
  allMenuList: ConsumableFood[];
  allStorageItemList: EnrichedStorageItem[];
};

export const getInsightData = (props: InsightDataProps): InsightData => {
  switch (props.type) {
    case 'expired':
      return {
        color: 'red',
        icon: 'TriangleAlert',
        title: `소비기한이 지난 식재료가 ${props.ingredientCount}개 있어요`,
        description: '확인하고 정리해볼까요?',
      };

    case 'shopping':
      return {
        color: 'yellow',
        icon: 'ShoppingBasket',
        title: `${props.ingredientName}만 사면 만들 수 있는 메뉴가 ${props.mealCount}개 늘어나요`,
        description: '조금만 식재료를 더 채우면 더 다양한 메뉴를 만들 수 있어요.',
      };

    case 'favoriteMeal':
      return {
        color: 'yellow',
        icon: 'Heart',
        title: `${props.ingredientName}만 있으면 나의 픽 메뉴를 만들 수 있어요`,
        description: '자주 먹는 메뉴를 완성해보세요.',
      };

    case 'frequentMeal':
      return {
        color: 'yellow',
        icon: 'ChefHat',
        title: `${props.ingredientName}만 있으면 자주 만드는 메뉴를 만들 수 있어요`,
        description: '익숙한 메뉴를 바로 만들어보세요.',
      };

    case 'shoppingList':
      return {
        color: 'yellow',
        icon: 'ChefHat',
        title: `장보기 목록을 모두 구매하면 ${props.mealCount}개의 메뉴를 만들 수 있어요`,
        description: '장보기를 완료해보세요.',
      };

    /**🍽️ 메뉴 활용 */
    case 'availableMeal':
      return {
        color: 'green',
        icon: 'UtensilsCrossed',
        title: `지금 냉장고 식재료로 ${props.mealCount}개의 메뉴를 만들 수 있어요`,
        description: '오늘 식사를 확인해보세요.',
      };

    case 'expiringMeal':
      return {
        color: 'green',
        icon: 'Beef',
        title: `${props.ingredientName}으로 만들 수 있는 메뉴가 있어요`,
        description: '소비기한이 지나기 전에 활용해보세요.',
      };

    /**📊 통계 */
    case 'monthlyConsumed':
      return {
        color: 'blue',
        icon: 'ChartColumnBig',
        title: `이번 달 식재료를 ${props.consumedCount}개 소비했어요`,
        description: '꾸준히 냉장고를 관리하고 있어요.',
      };

    case 'consumedMoreThanLastMonth':
      return {
        color: 'blue',
        icon: 'TrendingUp',
        title: `지난달보다 ${props.consumedCount}개 더 소비했어요`,
        description: '좋은 소비 습관을 이어가고 있어요.',
      };

    case 'reducedWaste':
      return {
        color: 'green',
        icon: 'LeafyGreen',
        title: `지난달보다 폐기가 ${props.wasteCount}개 줄었어요`,
        description: '음식물 쓰레기를 줄이고 있어요.',
      };

    case 'favoriteIngredient':
      return {
        color: 'indigo',
        icon: 'Heart',
        title: `일주일간 가장 자주 먹은 식재료는 ${props.ingredientName}이에요`,
        description: '가장 많이 소비한 식재료예요.',
      };

    case 'mostCookedMeal':
      return {
        color: 'indigo',
        icon: 'CookingPot',
        title: `가장 많이 만든 메뉴는 ${props.mealName}이에요`,
        description: '이번 달 가장 자주 만든 메뉴예요.',
      };

    case 'consumptionStreak':
      return {
        color: 'green',
        icon: 'Flame',
        title: `${props.streakDays}일 연속 식재료를 소비했어요`,
        description: '좋은 습관을 이어가고 있어요.',
      };

    /**✅ 기본 */
    case 'good':
      return {
        color: 'green',
        icon: 'ThumbsUp',
        title: '냉장고가 아주 잘 관리되고 있어요',
        description: '모든 식재료가 섭취 가능해요.',
      };
  }
};

type SelectableItemKind = 'ingredient' | 'preparedFood' | 'meal';

type SelectableItemRef = {
  kind: SelectableItemKind;
  id: string;
};

type ShoppingInsightResult = {
  kind: SelectableItemKind;
  selectableItemId: string;
  menuList: ConsumableFood[];
};

const getSelectableItemKey = ({ kind, id }: SelectableItemRef) => `${kind}:${id}`;

const getStorageItemRef = (item: EnrichedStorageItem): SelectableItemRef | null => {
  switch (item.type) {
    case 'ingredient':
      return {
        kind: 'ingredient',
        id: item.ingredientId,
      };

    case 'preparedFood':
      return {
        kind: 'preparedFood',
        id: item.preparedFoodId,
      };

    case 'meal':
      return {
        kind: 'meal',
        id: item.mealId,
      };

    default:
      return null;
  }
};

/**
 * 딱 1개 부족한 메뉴들을 부족한 아이템별로 묶어서, 가장 많은 메뉴를 완성시키는 식재료 아이템 하나를 찾는 함수
 * @param allMenuList
 * @param allStorageItemList
 * @returns
 */
export const getBestShoppingInsight = (
  allMenuList: ConsumableFood[],
  allStorageItemList: EnrichedStorageItem[],
): ShoppingInsightResult | null => {
  /**
   * 현재 보유하고 있는 항목
   *
   * ingredient:chicken_breast
   * preparedFood:kimchi
   * meal:yukgaejang
   */
  const possessedItemKeySet = new Set(
    allStorageItemList
      .map(getStorageItemRef)
      .filter((item): item is SelectableItemRef => item !== null)
      .map(getSelectableItemKey),
  );

  /**
   * 식재료 하나를 추가했을 때
   * 몇 개의 메뉴가 새롭게 완성되는지 집계
   */
  const candidateMap = new Map<string, ShoppingInsightResult>();

  for (const menu of allMenuList) {
    if (!menu.foodStructure) continue;
    /**
     * 우선 essential + common + seasoning만 완성 조건으로 사용
     * optional만 제외
     */
    const requiredItemList: SelectableItemRef[] = [
      ...menu.foodStructure.essential,
      ...menu.foodStructure.common,
      ...menu.foodStructure.seasoning,
    ];

    /**
     * 메뉴에서 현재 보유하지 않은 항목 찾기
     */
    const missingItemList = requiredItemList.filter(
      (item) => !possessedItemKeySet.has(getSelectableItemKey(item)),
    );

    /**
     * 정확히 하나만 부족한 메뉴만 대상
     *
     * 0개 → 이미 만들 수 있음
     * 1개 → 하나만 사면 만들 수 있음
     * 2개 이상 → 이번 인사이트 대상 아님
     */
    if (missingItemList.length !== 1) {
      continue;
    }

    const missingItem = missingItemList[0];

    if (!missingItem) continue;

    const key = getSelectableItemKey(missingItem);

    const current = candidateMap.get(key);

    candidateMap.set(key, {
      kind: missingItem.kind,
      selectableItemId: missingItem.id,
      menuList: [...(current?.menuList ?? []), menu],
    });
  }

  /**
   * 가장 많은 메뉴를 새롭게 만들 수 있는 항목
   */
  return (
    [...candidateMap.values()].sort((a, b) => b.menuList.length - a.menuList.length)[0] ??
    null
  );
};

export const getTopInsight = (data: TopInsightData): InsightDataProps => {
  const candidates: InsightCandidate[] = [];

  if (data.expiredCount > 0) {
    candidates.push({
      score: 1000,
      props: {
        type: 'expired' as const,
        ingredientCount: data.expiredCount,
      },
    });
  }

  // 하나만 사면 만들 수 있는 메뉴
  const shoppingInsight = getBestShoppingInsight(
    data.allMenuList,
    data.allStorageItemList,
  );

  if (shoppingInsight) {
    const selectableItem =
      shoppingInsight.kind === 'ingredient'
        ? findIngredient(shoppingInsight.selectableItemId as IngredientKey)
        : shoppingInsight.kind === 'meal'
          ? findMeal(shoppingInsight.selectableItemId as MealKey)
          : findPreparedFood(shoppingInsight.selectableItemId as PreparedFoodKey);

    if (selectableItem) {
      candidates.push({
        score: 800,
        props: {
          type: 'shopping',
          ingredientName: selectableItem.label,
          mealCount: shoppingInsight.menuList.length,
        },
      });
    }
  }

  candidates.sort((a, b) => b.score - a.score);

  return (
    candidates[0]?.props ?? {
      type: 'good',
    }
  );
};
