import GridContainer from '@/components/common/container/GridContainer';
import Indicator from '@/components/common/Indicator';
import IngredientImage from '@/components/selectableItem/ingredient/IngredientImage';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import { Meal } from '@/types/meal';
import { View } from 'react-native';
import MealImage from '@/components/selectableItem/meal/MealImage';

interface MealCardProps {
  meal: Meal;
  className?: string;
  maxIngredientNum?: number;
}

export default function MealCard({
  meal,
  className = '',
  maxIngredientNum = 9,
}: MealCardProps) {
  return (
    <Card className={`items-start gap-y-2 px-5 pb-5 pt-3 ${className}`}>
      <View className="mb-1 w-full flex-row items-center gap-x-3">
        <MealImage meal={meal} size={70} />

        <View className="gap-y-2">
          <Text className="line-clamp-2 text-base">{meal?.label}</Text>

          <View className="flex-row gap-x-3">
            <Indicator type="total" value={meal.ingredientList.length} />
            <Indicator type="time" value={meal.time} />
          </View>
        </View>
      </View>

      {meal.ingredientList.length > 0 && (
        <GridContainer columns={5} gap={6}>
          {meal.ingredientList.slice(0, maxIngredientNum).map((ingredient) => (
            <View
              key={ingredient?.label}
              className="items-center justify-between gap-0.5 rounded-xl bg-neutral-1"
            >
              <IngredientImage ingredient={ingredient} size={40} />
              <Text className="text-sm !text-neutral-7">{ingredient.label}</Text>
            </View>
          ))}

          {meal.ingredientList.length > maxIngredientNum && (
            <View className="flex-1 items-end justify-end">
              <Text className="text-sm">...더보기</Text>
            </View>
          )}
        </GridContainer>
      )}
    </Card>
  );
}
