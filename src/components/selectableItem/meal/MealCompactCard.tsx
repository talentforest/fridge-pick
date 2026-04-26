import Indicator from '@/components/common/Indicator';
import MealImage from '@/components/selectableItem/meal/MealImage';
import SquareBtn from '@/components/common/SquareBtn';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import { EnrichMealIngredientStructure, Meal } from '@/types/meal';
import { View } from 'react-native';

interface MealCompactCardProps {
  meal: Meal;
  ingredientStructure?: EnrichMealIngredientStructure;
  className?: string;
}

export default function MealCompactCard({
  meal,
  ingredientStructure,
  className = '',
}: MealCompactCardProps) {
  const requiredLength = ingredientStructure
    ? ingredientStructure?.essential.length + ingredientStructure?.common.length
    : 0;

  return (
    <Card
      key={meal.id}
      className={`w-fit justify-center overflow-hidden !p-0 ${className}`}
    >
      <View className="items-center justify-center bg-neutral-3 pb-5">
        <MealImage meal={meal} size={110} />
        <Text className="-mt-2 text-base">{meal.label}</Text>
      </View>

      <View className="justify-between gap-y-2 p-4">
        <View className="flex-row flex-wrap gap-x-2 gap-y-3">
          <Indicator type="difficulty" value={meal.difficulty} />
          <Indicator type="time" value={meal.cookTime} />
          <Indicator type="total" value={requiredLength} />
        </View>

        <SquareBtn
          name="식사메뉴 선택"
          className="mt-2 py-4"
          iconName="UtensilsCrossed"
          color="blue"
          iconSize={14}
        />
      </View>
    </Card>
  );
}
