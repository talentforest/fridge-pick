import { todayMealListAtom } from '@/atom/mealAtom';
import Card from '@/components/common/ui/Card';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import MealImage from '@/components/selectableItem/meal/MealImage';
import { image_empty_plate } from '@/constants';
import { useAtomValue } from 'jotai';
import { Image, View } from 'react-native';

export default function TodayMeal() {
  const todayMealList = useAtomValue(todayMealListAtom);

  return (
    <Card className="min-h-52 justify-between !p-6">
      <View className="flex-row items-center gap-x-1">
        <Icon name="UtensilsCrossed" size={18} />
        <Text className="text-base">오늘의 식사</Text>
      </View>

      {todayMealList.length > 0 ? (
        <View className="flex-row flex-wrap">
          {todayMealList.map((meal) => (
            <View key={meal.id} className="flex-row">
              <View className="-mt-1.5 items-center justify-center px-2 pb-3">
                <MealImage meal={meal} size={80} />
                <Text className="text-neutral-7">{meal.label}</Text>
              </View>
              {/* {index < todayMealList.length - 1 && (
                <View className="h-28 border-l border-dashed border-neutral-5" />
              )} */}
            </View>
          ))}
        </View>
      ) : (
        <View className=" items-center gap-y-2">
          <Image source={image_empty_plate} className="aspect-square h-[90px]" />
          <Text className="text-neutral-7">오늘의 메뉴가 없어요</Text>
        </View>
      )}
    </Card>
  );
}
