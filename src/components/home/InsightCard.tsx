import Card from '@/components/common/ui/Card';
import Icon, { IconName } from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';

import { View } from 'react-native';

type InsightData = {
  color: 'red' | 'yellow' | 'green' | 'blue' | 'indigo';
  icon: IconName;
  title: string;
  description: string;
};

type InsightType =
  | 'expired'
  | 'shopping'
  | 'favoriteMeal'
  | 'frequentMeal'
  | 'shoppingList'
  | 'availableMeal'
  | 'expiringMeal'
  | 'monthlyConsumed'
  | 'consumedMoreThanLastMonth'
  | 'reducedWaste'
  | 'favoriteIngredient'
  | 'mostCookedMeal'
  | 'consumptionStreak'
  | 'good';

interface InsightDataProps {
  type: InsightType;

  ingredientName?: string;
  ingredientCount?: number;

  mealName?: string;
  mealCount?: number;

  consumedCount?: number;
  wasteCount?: number;

  streakDays?: number;
}

export default function InsightCard({ type, ...rest }: InsightDataProps) {
  const getInsightData = ({
    type,
    ingredientName = '',
    ingredientCount = 0,
    mealName = '',
    mealCount = 0,
    consumedCount = 0,
    wasteCount = 0,
    streakDays = 0,
  }: InsightDataProps): InsightData => {
    /** 
    🚨 긴급 관리
      - 소비기한이 지난 식재료가 있어요.

    🛒 장보기
    - 우유만 사면 메뉴 8개 증가
    - 우유+양파만 사면 메뉴 18개 증가
    - 나의 픽 메뉴 완성
    - 자주 만드는 메뉴 완성
    - 장보기 목록 구매 시 메뉴 증가

    🍽️ 메뉴 활용
    - 지금 만들 수 있는 메뉴
    - 임박 식재료 활용 메뉴

    📊 통계
    - 이번 달 소비
    - 지난달 대비 소비 증가
    - 폐기 감소
    - 가장 자주 먹는 식재료
    - 가장 많이 만든 메뉴
    - 연속 소비 기록
    */

    const insightObj = {
      /**🚨 긴급 */
      expired: {
        color: 'red',
        icon: 'TriangleAlert',
        title: `소비기한이 지난 식재료가 ${ingredientCount}개 있어요`,
        description: '확인하고 정리해볼까요?',
      },

      /**🛒 장보기 */
      shopping: {
        color: 'yellow',
        icon: 'ShoppingBasket',
        title: `${ingredientName}만 사면 만들 수 있는 메뉴가 ${mealCount}개 늘어나요`,
        description: '조금만 식재료를 더 채우면 더 다양한 메뉴를 만들 수 있어요.',
      },

      favoriteMeal: {
        color: 'yellow',
        icon: 'Heart',
        title: `${ingredientName}만 있으면 나의 픽 메뉴를 만들 수 있어요`,
        description: '자주 먹는 메뉴를 완성해보세요.',
      },

      frequentMeal: {
        color: 'yellow',
        icon: 'ChefHat',
        title: `${ingredientName}만 있으면 자주 만드는 메뉴를 만들 수 있어요`,
        description: '익숙한 메뉴를 바로 만들어보세요.',
      },

      shoppingList: {
        color: 'yellow',
        icon: 'ChefHat',
        title: `장보기 목록을 모두 구매하면 ${mealCount}개의 메뉴를 만들 수 있어요`,
        description: '장보기를 완료해보세요.',
      },

      /**🍽️ 메뉴 활용 */
      availableMeal: {
        color: 'green',
        icon: 'UtensilsCrossed',
        title: `지금 냉장고 식재료로 ${mealCount}개의 메뉴를 만들 수 있어요`,
        description: '오늘 식사를 확인해보세요.',
      },

      expiringMeal: {
        color: 'green',
        icon: 'Beef',
        title: `${ingredientName}으로 만들 수 있는 메뉴가 있어요`,
        description: '소비기한이 지나기 전에 활용해보세요.',
      },

      /**📊 통계 */
      monthlyConsumed: {
        color: 'blue',
        icon: 'ChartColumnBig',
        title: `이번 달 식재료를 ${consumedCount}개 소비했어요`,
        description: '꾸준히 냉장고를 관리하고 있어요.',
      },

      consumedMoreThanLastMonth: {
        color: 'blue',
        icon: 'TrendingUp',
        title: `지난달보다 ${consumedCount}개 더 소비했어요`,
        description: '좋은 소비 습관을 이어가고 있어요.',
      },

      reducedWaste: {
        color: 'green',
        icon: 'LeafyGreen',
        title: `지난달보다 폐기가 ${wasteCount}개 줄었어요`,
        description: '음식물 쓰레기를 줄이고 있어요.',
      },

      favoriteIngredient: {
        color: 'indigo',
        icon: 'Heart',
        title: `가장 자주 먹는 식재료는 ${ingredientName}이에요`,
        description: '가장 많이 소비한 식재료예요.',
      },

      mostCookedMeal: {
        color: 'indigo',
        icon: 'CookingPot',
        title: `가장 많이 만든 메뉴는 ${mealName}이에요`,
        description: '이번 달 가장 자주 만든 메뉴예요.',
      },

      consumptionStreak: {
        color: 'green',
        icon: 'Flame',
        title: `${streakDays}일 연속 식재료를 소비했어요`,
        description: '좋은 습관을 이어가고 있어요.',
      },

      /**✅ 기본 */
      good: {
        color: 'green',
        icon: 'ThumbsUp',
        title: '냉장고가 아주 잘 관리되고 있어요',
        description: '모든 식재료가 섭취 가능해요.',
      },
    } satisfies Record<InsightType, InsightData>;

    return insightObj[type];
  };

  const bgColorMap = {
    red: '!bg-red-1',
    green: '!bg-green-1',
    yellow: '!bg-orange-1',
    indigo: '!bg-indigo-1',
    blue: '!bg-blue-1',
  };

  const { icon, title, color, description } = getInsightData({ type, ...rest });

  return (
    <Card className={`flex-row items-center !px-5 !py-5 ${bgColorMap[color]}`}>
      <Icon name={icon} color={color} size={22} />

      <View className="ml-3.5 flex-1 gap-y-2">
        <Text className="font-extrabold">{title}</Text>
        <Text className="text-sm">{description}</Text>
      </View>

      <Icon name="ChevronRight" size={20} />
    </Card>
  );
}
