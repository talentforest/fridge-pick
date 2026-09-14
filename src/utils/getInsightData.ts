import { IconName } from '@/components/common/ui/Icon';
import {
  image_clean_fridge,
  image_expired,
  image_food_fridge,
  image_ready_to_eat,
} from '@/constants';
import { Food } from '@/types/selectableItem';
import { EnrichedStorageItem } from '@/types/storage';
import { findSelectableItem } from '@/utils/findItem';
import { getShoppingFoodExpansionCandidates } from '@/utils/recommendShoppingItem';

export type InsightDataProps =
  | {
      type: 'expired';
      ingredientCount: number;
    }
  | {
      type: 'shopping';
      ingredientName: string;
      foodCount: number;
    }
  | {
      type: 'favoriteFood';
      ingredientName: string;
    }
  | {
      type: 'frequentFood';
      ingredientName: string;
    }
  | {
      type: 'shoppingList';
      foodCount: number;
    }
  | {
      type: 'availableFood';
      foodCount: number;
    }
  | {
      type: 'expiringFood';
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
      type: 'mostCookedFood';
      foodName: string;
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
  allFoodList: Food[];
  allStorageItemList: EnrichedStorageItem[];
};

type InsightData = {
  color: 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'neutral';
  icon: IconName;
  title: { text: string; highlight?: boolean }[];
  subTitle?: { text: string; highlight?: boolean }[];
  description: { text: string; highlight?: boolean }[];
  image: any;
  isReverse?: boolean;
  btn?: {
    name: string;
  };
};

export const getInsightData = (props: InsightDataProps): InsightData => {
  switch (props.type) {
    case 'expired':
      return {
        color: 'red',
        icon: 'TriangleAlert',
        title: [{ text: '버려야하는', highlight: true }, { text: '식재료가 있어요' }],
        subTitle: [
          { text: `소비기한이 지난 식재료가 ${props.ingredientCount}개 있어요` },
        ],
        description: [
          { text: `소비기한이 지난 식재료가` },
          {
            text: `${props.ingredientCount}개`,
            highlight: true,
          },
          { text: '있어요.' },
          { text: '바로 정리해볼까요?' },
        ],
        image: image_expired,
        btn: {
          name: '확인하기',
        },
      };

    case 'shopping':
      return {
        isReverse: true,
        color: 'yellow',
        icon: 'ShoppingBasket',
        title: [
          { text: `${props.ingredientName}만 사면` },
          { text: `만들 수 있는 메뉴가` },
          { text: `${props.foodCount}개 늘어나요`, highlight: true },
        ],
        description: [{ text: '식재료를 더 채워봐요!' }],
        image: image_food_fridge,
      };

    case 'favoriteFood':
      return {
        color: 'yellow',
        icon: 'Heart',
        title: [
          { text: `${props.ingredientName}`, highlight: true },
          { text: `나의 픽 메뉴를 만들 수 있어요` },
        ],
        image: image_ready_to_eat,
        description: [{ text: '자주 먹는 메뉴를 완성해보세요.' }],
        btn: {
          name: '확인하기',
        },
      };

    case 'frequentFood':
      return {
        color: 'yellow',
        icon: 'ChefHat',
        title: [
          { text: `${props.ingredientName}`, highlight: true },
          { text: `만 있으면 자주 만드는 메뉴를 만들 수 있어요` },
        ],
        image: image_ready_to_eat,
        description: [{ text: '익숙한 메뉴를 바로 만들어보세요.' }],
        btn: {
          name: '확인하기',
        },
      };

    case 'shoppingList':
      return {
        color: 'yellow',
        icon: 'ChefHat',
        title: [
          {
            text: `장보기 목록을 모두 구매하면 ${props.foodCount}개의 메뉴를 만들 수 있어요`,
          },
        ],
        image: image_ready_to_eat,
        description: [{ text: '장보기를 완료해보세요.' }],
        btn: {
          name: '확인하기',
        },
      };

    /**🍽️ 메뉴 활용 */
    case 'availableFood':
      return {
        color: 'green',
        icon: 'UtensilsCrossed',
        title: [
          { text: `지금 냉장고 식재료로 ${props.foodCount}개의 메뉴를 만들 수 있어요` },
        ],
        image: image_ready_to_eat,
        description: [{ text: '오늘 식사를 확인해보세요.' }],
        btn: {
          name: '확인하기',
        },
      };

    case 'expiringFood':
      return {
        color: 'green',
        icon: 'Beef',
        title: [{ text: `${props.ingredientName}으로 만들 수 있는 메뉴가 있어요` }],
        description: [{ text: '소비기한이 지나기 전에 활용해보세요.' }],
        image: image_ready_to_eat,
        btn: {
          name: '확인하기',
        },
      };

    /**📊 통계 */
    case 'monthlyConsumed':
      return {
        color: 'blue',
        icon: 'ChartColumnBig',
        title: [{ text: `이번 달 식재료를 ${props.consumedCount}개 소비했어요` }],
        description: [{ text: '꾸준히 냉장고를 관리하고 있어요.' }],
        image: image_ready_to_eat,
        btn: {
          name: '확인하기',
        },
      };

    case 'consumedMoreThanLastMonth':
      return {
        color: 'blue',
        icon: 'TrendingUp',
        title: [{ text: `지난달보다 ${props.consumedCount}개 더 소비했어요` }],
        description: [{ text: '좋은 소비 습관을 이어가고 있어요.' }],
        image: image_ready_to_eat,
        btn: {
          name: '확인하기',
        },
      };

    case 'reducedWaste':
      return {
        color: 'green',
        icon: 'LeafyGreen',
        title: [{ text: `지난달보다 폐기가 ${props.wasteCount}개 줄었어요` }],
        description: [{ text: '음식물 쓰레기를 줄이고 있어요.' }],
        image: image_ready_to_eat,
        btn: {
          name: '확인하기',
        },
      };

    case 'favoriteIngredient':
      return {
        color: 'indigo',
        icon: 'Heart',
        title: [
          { text: `일주일간 가장 자주 먹은 식재료는 ${props.ingredientName}이에요` },
        ],
        description: [{ text: '가장 많이 소비한 식재료예요.' }],
        image: image_ready_to_eat,
        btn: {
          name: '확인하기',
        },
      };

    case 'mostCookedFood':
      return {
        color: 'indigo',
        icon: 'CookingPot',
        title: [{ text: `가장 많이 만든 메뉴는 ${props.foodName}이에요` }],
        description: [{ text: '이번 달 가장 자주 만든 메뉴예요.' }],
        image: image_ready_to_eat,
        btn: {
          name: '확인하기',
        },
      };

    case 'consumptionStreak':
      return {
        color: 'green',
        icon: 'Flame',
        title: [{ text: `${props.streakDays}일 연속 식재료를 소비했어요` }],
        description: [{ text: '좋은 습관을 이어가고 있어요.' }],
        image: image_ready_to_eat,
        btn: {
          name: '확인하기',
        },
      };

    /**✅ 기본 */
    case 'good':
      return {
        color: 'green',
        icon: 'ThumbsUp',
        title: [
          { text: '냉장고가' },
          { text: '아주 잘 관리되고 있어요!', highlight: true },
        ],
        description: [{ text: '모든 식재료가 섭취 가능해요.' }],
        image: image_clean_fridge,
        isReverse: true,
      };
  }
};

export const getTopInsight = (data: TopInsightData): InsightDataProps => {
  const candidates: InsightCandidate[] = [];

  // ✅ 소비기한 지난 식재료 정리
  if (data.expiredCount > 0) {
    candidates.push({
      score: 1000,
      props: {
        type: 'expired' as const,
        ingredientCount: data.expiredCount,
      },
    });
  }

  // ✅ 하나만 사면 만들 수 있는 메뉴
  const shoppingInsight = getShoppingFoodExpansionCandidates(
    data.allStorageItemList,
  )?.[0];

  if (shoppingInsight && shoppingInsight?.foodList.length > 1) {
    const {
      selectableItem: { kind, id },
      foodList,
    } = shoppingInsight;

    const currSelectableItem = findSelectableItem({ kind, id });

    if (currSelectableItem) {
      candidates.push({
        score: 800,
        props: {
          type: 'shopping',
          ingredientName: currSelectableItem.label,
          foodCount: foodList.length,
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
