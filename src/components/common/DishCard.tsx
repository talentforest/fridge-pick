import GridContainer from '@/components/common/container/GridContainer';
import Indicator from '@/components/common/Indicator';
import IngredientImage from '@/components/common/ingredient/IngredientImage';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import { Dish } from '@/types/dish';
import { View } from 'react-native';

interface DishCardProps {
  dish: Dish;
  className?: string;
  maxIngredientNum?: number;
}

export default function DishCard({
  dish: { ingredientList, name, filterList, time },
  className = '',
  maxIngredientNum = 8,
}: DishCardProps) {
  return (
    <Card className={`items-start bg-white p-5 ${className}`}>
      <View className="mb-1 w-full justify-between gap-4">
        <Text className="line-clamp-2 text-lg">{name}</Text>
        <View className="flex-row gap-x-3">
          <Indicator type="time" value={time} />
          <Indicator type="total" value={ingredientList.length} />
        </View>
      </View>

      {ingredientList.length > 0 && (
        <GridContainer columns={5} gap={2}>
          {ingredientList.slice(0, maxIngredientNum).map((ingredient) => (
            <View
              key={ingredient.label}
              className="items-center justify-between px-1.5"
            >
              <IngredientImage ingredient={ingredient} size={45} />
              <Text className={`mt-0.5 text-center text-md text-stone-600`}>
                {ingredient.label}
              </Text>
            </View>
          ))}

          {ingredientList.length > 8 && (
            <View className="mb-0.5 ml-auto justify-end">
              <Text className="text-sm">...더보기</Text>
            </View>
          )}
        </GridContainer>
      )}
    </Card>
  );
}
