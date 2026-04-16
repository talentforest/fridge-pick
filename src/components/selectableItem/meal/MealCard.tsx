import GridContainer from '@/components/common/container/GridContainer';
import Indicator from '@/components/common/Indicator';
import IngredientImage from '@/components/selectableItem/ingredient/IngredientImage';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import { allMealList } from '@/constants';
import { MealKey } from '@/types/meal';
import { View } from 'react-native';

interface MealCardProps {
  meal: { id: MealKey };
  className?: string;
  maxIngredientNum?: number;
}

export default function MealCard({
  meal: { id },
  className = '',
  maxIngredientNum = 9,
}: MealCardProps) {
  const currMeal = allMealList.find((meal) => meal.id === id);

  if (!currMeal) return;

  return (
    <Card className={`items-start gap-y-2 p-5 ${className}`}>
      <View className="w-full justify-between gap-4">
        <Text className="line-clamp-2 text-base">{currMeal?.label}</Text>

        <View className="flex-row gap-x-3">
          <Indicator type="total" value={currMeal.ingredientList.length} />
          <Indicator type="time" value={currMeal.time} />
        </View>
      </View>

      {currMeal.ingredientList.length > 0 && (
        <GridContainer columns={5} gap={6}>
          {currMeal.ingredientList.slice(0, maxIngredientNum).map((ingredient) => (
            <View
              key={ingredient?.label}
              className="items-center justify-between gap-0.5 rounded-xl bg-neutral-1"
            >
              <IngredientImage ingredient={ingredient} size={45} />
              <Text className="text-sm !text-neutral-7">{ingredient.label}</Text>
            </View>
          ))}

          {currMeal.ingredientList.length > maxIngredientNum && (
            <View className="flex-1 items-end justify-end">
              <Text className="text-sm">...더보기</Text>
            </View>
          )}
        </GridContainer>
      )}
    </Card>
  );
}
