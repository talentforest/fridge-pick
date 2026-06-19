import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import MealImage from '@/components/selectableItem/meal/MealImage';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import IconWithText from '@/components/common/IconWithText';
import ProgressBar from '@/components/common/ProgressBar';
import MealDetailSheet from '@/components/meal/MealDetailSheet';
import { TodayMeal } from '@/types/meal';
import { View } from 'react-native';
import { EnrichedMealWithFilterList, useOverlay } from '@/hooks';

interface TodayMealCardProps {
  todayMeal: TodayMeal;
  type: 'mainMenu' | 'sideMenu';
  className?: string;
}

export default function TodayMealCard({
  todayMeal,
  className = '',
  type,
}: TodayMealCardProps) {
  const mainMenu = type === 'mainMenu';

  const { meal } = todayMeal;

  const { openSheet } = useOverlay();

  const onPress = (meal: EnrichedMealWithFilterList) => {
    openSheet({
      enableDynamicSizing: true,
      maxDynamicContentSize: 750,
      hasDim: true,
      render: () => <MealDetailSheet type={type} meal={meal} />,
    });
  };

  const commonClassName = `justify-center ${mainMenu ? 'h-[220px] items-start ' : 'h-[105px] !px-2 items-center !bg-border'} ${className}`;

  return (
    <TouchableOpacity onPress={() => onPress(meal)}>
      <Card className={`${commonClassName} ${mainMenu ? '!pt-3' : '!pt-1'}`}>
        {mainMenu && (
          <IconWithText
            text="메인메뉴"
            icon="Sparkles"
            className="-mb-2.5 rounded-full border border-yellow-1 bg-blue-1 px-3.5 py-2.5"
            textClassName="text-[13px] text-blue-7"
            iconSize={13}
            iconColor="blue"
          />
        )}

        <View className="w-full items-center justify-between">
          <View className="items-center">
            <MealImage meal={meal} size={mainMenu ? 100 : 65} />

            <Text
              className={`-mt-0.5 line-clamp-2 text-center ${mainMenu ? 'text-base' : 'text-[13px] text-neutral-7'}`}
            >
              {meal?.label}
            </Text>
          </View>

          {mainMenu && (
            <View className={`mt-3 items-center gap-y-2.5`}>
              <ProgressBar
                label="재료보유율"
                percentage={todayMeal.meal.possessionPercent}
                possessedIngredientCount={todayMeal.meal.possessedIngredientCount}
                requiredIngredientCount={todayMeal.meal.requiredIngredientCount}
              />
            </View>
          )}
        </View>
      </Card>
    </TouchableOpacity>
  );
}
