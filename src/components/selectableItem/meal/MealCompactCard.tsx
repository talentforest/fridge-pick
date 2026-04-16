import Indicator from '@/components/common/Indicator';
import MealImage from '@/components/selectableItem/meal/MealImage';
import SquareBtn from '@/components/common/SquareBtn';
import Card from '@/components/common/ui/Card';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import { allMealList, filterObj } from '@/constants';
import { Meal } from '@/types/meal';
import { ScrollView, View } from 'react-native';

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
        {currMeal && currMeal.filterList.length > 0 && (
          <ScrollView horizontal className="absolute top-0 w-full p-2">
            {currMeal.filterList.slice(0, 1).map((filter) => (
              <View key={filter} className="rounded-xl bg-neutral-1 p-2">
                <Icon
                  name={filterObj['meal'][filter].icon}
                  color={filterObj['meal'][filter].color}
                  size={20}
                />
              </View>
            ))}
          </ScrollView>
        )}

        <MealImage meal={currMeal} size={110} />
        <Text className="-mt-3 text-base">{currMeal?.label}</Text>
      </View>

      <View className="h-[110px] justify-between gap-y-2 p-4">
        <View className="flex-row gap-x-3 gap-y-2">
          <Indicator type="total" value={currMeal.ingredientList.length} />
          <Indicator type="time" value={currMeal.time} />
        </View>

        <SquareBtn name="오늘의 메뉴로 선택" iconName="UtensilsCrossed" color="blue" />
      </View>
    </Card>
  );
}
