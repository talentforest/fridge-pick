import Indicator from '@/components/common/Indicator';
import MealImage from '@/components/selectableItem/meal/MealImage';
import SquareBtn from '@/components/common/SquareBtn';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import { MealWithEnrichIngredient } from '@/types/meal';
import { View } from 'react-native';
import { useHandleTodayMeal } from '@/hooks';

interface MealCompactCardProps {
  meal: MealWithEnrichIngredient;
  className?: string;
}

export default function MealCompactCard({ meal, className = '' }: MealCompactCardProps) {
  const {
    hasItem,
    onAddTodayMealPress,
    requiredIngredientNum, //
  } = useHandleTodayMeal(meal);

  return (
    <Card key={meal.id} className={`justify-center overflow-hidden !p-0 ${className}`}>
      <View className="items-center justify-center bg-neutral-3 pb-5">
        <MealImage meal={meal} size={110} />
        <Text className="-mt-2 text-base">{meal.label}</Text>
      </View>

      <View className="justify-between gap-y-2 px-3 py-4">
        <View className="flex-row gap-x-3">
          <Indicator type="difficulty" value={meal.difficulty} />
          {requiredIngredientNum > 0 ? (
            <Indicator type="total" value={requiredIngredientNum} />
          ) : (
            <></>
          )}
        </View>

        <SquareBtn
          name="오늘 먹을 메뉴"
          className="mt-2 py-4 text-md"
          iconName="UtensilsCrossed"
          color={hasItem ? 'inActive' : 'green'}
          disabled={hasItem}
          iconSize={14}
          onPress={onAddTodayMealPress}
        />
      </View>
    </Card>
  );
}
