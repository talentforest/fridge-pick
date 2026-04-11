import Indicator from '@/components/common/Indicator';
import IngredientImage from '@/components/common/ingredient/IngredientImage';
import SquareBtn from '@/components/common/SquareBtn';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import { allIngredients, filterObj } from '@/constants';
import { Meal } from '@/types/meal';
import { View } from 'react-native';

interface MealCompactCardProps {
  meal: Meal;
  className?: string;
}

export default function MealCompactCard({ meal, className = '' }: MealCompactCardProps) {
  const currMeal = allIngredients.find(({ id }) => id === meal.mealId);

  return (
    <Card
      key={meal.mealId}
      className={`w-fit justify-center gap-y-4 overflow-hidden !p-0 ${className}`}
    >
      <View className="items-center justify-center bg-neutral-3 pb-6">
        <IngredientImage ingredient={currMeal} size={130} />
        <Text className="-mt-3 text-base">{meal.customName || currMeal?.label}</Text>
      </View>

      <View className="px-4 pb-4">
        {meal.filterList.length > 0 && (
          <View className="flex-row flex-wrap gap-2">
            {meal.filterList.slice(0, 1).map((filter) => (
              <Text key={filter} className={`text-red-400`}>
                {filterObj['meal'][filter].label}
              </Text>
            ))}
          </View>
        )}

        <View className="mb-4 mt-3 flex-row gap-x-3 gap-y-2">
          <Indicator type="total" value={meal.ingredientList.length} />
          <Indicator type="time" value={meal.time} />
        </View>

        <SquareBtn name="오늘의 메뉴로 선택" iconName="UtensilsCrossed" />
      </View>
    </Card>
  );
}
