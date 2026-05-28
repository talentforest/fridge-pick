import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import MealImage from '@/components/selectableItem/meal/MealImage';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import IconWithText from '@/components/common/IconWithText';
import { MealWithEnrichIngredient, TodayMeal } from '@/types/meal';
import { View } from 'react-native';
import { useGetMealInfo, useOverlay } from '@/hooks';
import ProgressBar from '@/components/common/ProgressBar';
import TodayMealItemSheet from '@/components/meal/TodayMealItemSheet';

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

  const onPress = (meal: MealWithEnrichIngredient) => {
    openSheet({
      enableDynamicSizing: true,
      maxDynamicContentSize: 700,
      hasDim: true,
      render: () => <TodayMealItemSheet type={type} meal={meal} />,
    });
  };

  const { percentage } = useGetMealInfo(meal);

  const commonClassName = `items-start justify-center ${mainMenu ? 'h-[220px]' : 'h-[105px] !bg-border'} ${className}`;

  return (
    <TouchableOpacity onPress={() => onPress(meal)}>
      <Card className={`${commonClassName} ${mainMenu ? '!pt-3' : '!pt-0'}`}>
        {mainMenu && (
          <IconWithText
            text="메인메뉴"
            icon="Sparkles"
            className="-mb-2.5 rounded-full border border-yellow-5 bg-yellow-5 px-3.5 py-2.5"
            textClassName="text-indigo-5 text-sm"
            iconSize={12}
            iconColor="indigo"
          />
        )}

        <View className="w-full flex-1 items-center justify-between">
          <View className="items-center">
            <MealImage meal={meal} size={mainMenu ? 100 : 65} />

            <Text
              className={`-mt-1 line-clamp-2 ${mainMenu ? 'text-base' : 'text-neutral-7'}`}
            >
              {meal?.label}
            </Text>
          </View>

          {mainMenu && (
            <View className={`mt-3 flex-1 items-center gap-y-2.5`}>
              <ProgressBar label="재료보유율" percentage={percentage} />
            </View>
          )}
        </View>
      </Card>
    </TouchableOpacity>
  );
}
