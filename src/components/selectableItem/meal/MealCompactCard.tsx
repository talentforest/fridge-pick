import Indicator from '@/components/common/Indicator';
import MealImage from '@/components/selectableItem/meal/MealImage';
import SquareBtn from '@/components/common/SquareBtn';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import { Meal } from '@/types/meal';
import { View } from 'react-native';
import { useAtomValue, useSetAtom } from 'jotai';
import { addTodayMealItemAtom, todayMealListAtom } from '@/atom/mealAtom';

interface MealCompactCardProps {
  meal: Meal;
  className?: string;
}

export default function MealCompactCard({ meal, className = '' }: MealCompactCardProps) {
  const todayMealList = useAtomValue(todayMealListAtom);
  const addTodayMealItem = useSetAtom(addTodayMealItemAtom);

  const requiredLength =
    meal.mealType !== 'instant'
      ? meal.ingredientStructure.essential.length + meal.ingredientStructure.common.length
      : 0;

  const hasItem = !!todayMealList.find(({ id }) => id === meal.id);

  return (
    <Card key={meal.id} className={`justify-center overflow-hidden !p-0 ${className}`}>
      <View className="items-center justify-center bg-neutral-3 pb-5">
        <MealImage meal={meal} size={110} />
        <Text className="-mt-2 text-base">{meal.label}</Text>
      </View>

      <View className="justify-between gap-y-2 p-4">
        <View className="flex-row gap-x-1.5">
          <Indicator type="difficulty" value={meal.difficulty} />
          <Indicator type="time" value={meal.cookTime} />
          {requiredLength && <Indicator type="total" value={requiredLength} />}
        </View>

        <SquareBtn
          name="오늘의 식사 선택"
          className="mt-2 py-4 text-md"
          iconName="UtensilsCrossed"
          color={hasItem ? 'inActive' : 'blue'}
          disabled={hasItem}
          iconSize={14}
          onPress={() => addTodayMealItem(meal)}
        />
      </View>
    </Card>
  );
}
