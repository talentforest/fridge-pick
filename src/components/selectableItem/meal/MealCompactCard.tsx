import Indicator from '@/components/common/Indicator';
import MealImage from '@/components/selectableItem/meal/MealImage';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import { MealWithEnrichIngredient } from '@/types/meal';
import { View } from 'react-native';
import { useGetMealInfo, useHandleTodayMeal, useOverlay } from '@/hooks';
import ProgressBar from '@/components/common/ProgressBar';
import Icon from '@/components/common/ui/Icon';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import TodayMealItemSheet from '@/components/meal/TodayMealItemSheet';

interface MealCompactCardProps {
  meal: MealWithEnrichIngredient;
  className?: string;
}

export default function MealCompactCard({ meal, className = '' }: MealCompactCardProps) {
  const { hasItem, requiredIngredientNum } = useHandleTodayMeal(meal);

  const { percentage } = useGetMealInfo(meal);

  const { openSheet } = useOverlay();

  const onPress = () => {
    openSheet({
      enableDynamicSizing: true,
      maxDynamicContentSize: 700,
      hasDim: true,
      render: () => <TodayMealItemSheet type="mainMenu" meal={meal} />,
    });
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Card key={meal.id} className={`justify-center overflow-hidden !p-0 ${className}`}>
        {hasItem && (
          <Icon
            name="CheckCircle2"
            className="absolute left-3 top-3 z-10"
            color="yellow"
          />
        )}

        <View className="items-center justify-center bg-neutral-3 pb-5 pt-2">
          <MealImage meal={meal} size={110} />
          <Text className="-mt-2 text-base">{meal.label}</Text>
        </View>

        <View className="justify-between gap-y-4 px-3 py-4">
          <View className="flex-row gap-x-3">
            <Indicator type="difficulty" value={meal.difficulty} />
            {requiredIngredientNum > 0 ? (
              <Indicator type="total" value={requiredIngredientNum} />
            ) : (
              <></>
            )}
          </View>

          {/* 재료보유율 */}
          <ProgressBar label="재료보유율" percentage={percentage} />
        </View>
      </Card>
    </TouchableOpacity>
  );
}
