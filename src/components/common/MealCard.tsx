import GridContainer from '@/components/common/container/GridContainer';
import Indicator from '@/components/common/Indicator';
import IngredientImage from '@/components/common/ingredient/IngredientImage';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import { allIngredients } from '@/constants';
import { Meal } from '@/types/meal';
import { View } from 'react-native';

interface MealCardProps {
  meal: Meal;
  className?: string;
  maxIngredientNum?: number;
}

export default function DishCard({
  meal: { mealId, ingredientList, customName, time },
  className = '',
  maxIngredientNum = 9,
}: MealCardProps) {
  const currMeal = allIngredients.find((meal) => meal.id === mealId);

  return (
    <Card className={`items-start p-5 ${className}`}>
      <View className="mb-2 w-full justify-between gap-4">
        <Text className="line-clamp-2 text-base">{customName || currMeal?.label}</Text>

        <View className="flex-row gap-x-3">
          <Indicator type="total" value={ingredientList.length} />
          <Indicator type="time" value={time} />
        </View>
      </View>

      {ingredientList.length > 0 && (
        <GridContainer columns={6} gap={4}>
          {ingredientList.slice(0, maxIngredientNum).map((ingredient) => (
            <View
              key={ingredient?.label}
              className="items-center justify-between rounded-xl bg-neutral-1"
            >
              <IngredientImage ingredient={ingredient} size={45} />
            </View>
          ))}

          {ingredientList.length > maxIngredientNum && (
            <View className="mb-0.5 flex-1 items-end justify-end">
              <Text className="text-sm">...더보기</Text>
            </View>
          )}
        </GridContainer>
      )}
    </Card>
  );
}
