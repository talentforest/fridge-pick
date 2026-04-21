import Indicator from '@/components/common/Indicator';
import MealImage from '@/components/selectableItem/meal/MealImage';
import SquareBtn from '@/components/common/SquareBtn';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import { allMealList } from '@/constants';
import { Meal } from '@/types/meal';
import { View } from 'react-native';

interface MealCompactCardProps {
  meal: Meal;
  className?: string;
}

export default function MealCompactCard({ meal, className = '' }: MealCompactCardProps) {
  const currMeal = allMealList.find(({ id }) => id === meal.id);

  if (!currMeal) return null;

  return (
    <Card
      key={meal.id}
      className={`w-fit justify-center overflow-hidden !p-0 ${className}`}
    >
      <View className="items-center justify-center bg-neutral-3 pb-6 pt-2">
        <MealImage meal={currMeal} size={110} />
        <Text className="-mt-3 text-base">{currMeal?.label}</Text>
      </View>

      <View className="h-[110px] justify-between gap-y-2 p-4">
        <View className="flex-row gap-x-3 gap-y-2">
          <Indicator
            type="total"
            value={
              currMeal?.ingredientStructure?.essential.length +
              currMeal?.ingredientStructure?.common.length
            }
          />
          <Indicator type="time" value={currMeal.cookTime} />
        </View>

        <SquareBtn name="오늘의 메뉴로 선택" iconName="UtensilsCrossed" color="blue" />
      </View>
    </Card>
  );
}
