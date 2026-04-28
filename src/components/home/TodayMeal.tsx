import { deleteTodayMealItemAtom, todayMealListAtom } from '@/atom/mealAtom';
import GridContainer from '@/components/common/container/GridContainer';
import Card from '@/components/common/ui/Card';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import MealImage from '@/components/selectableItem/meal/MealImage';
import { image_empty_plate } from '@/constants';
import { useAtomValue, useSetAtom } from 'jotai';
import { Image, View } from 'react-native';

export default function TodayMeal() {
  const todayMealList = useAtomValue(todayMealListAtom);

  const deleteTodayMealItem = useSetAtom(deleteTodayMealItemAtom);

  return (
    <Card className="min-h-52 justify-between !px-6 !pb-5 !pt-6">
      <View className="flex-row items-center gap-x-1">
        <Icon name="UtensilsCrossed" size={18} />
        <Text className="text-base">오늘의 식사</Text>
      </View>

      {todayMealList.length > 0 ? (
        <GridContainer columns={3} className="mt-3">
          {todayMealList.map((meal) => (
            <View
              key={meal.id}
              className="flex-row rounded-2xl border border-border bg-border"
            >
              <View className="-mt-1.5 items-center justify-center px-3 pb-5 pt-2">
                <MealImage meal={meal} size={80} />
                <Text className="">{meal.label}</Text>
              </View>

              <Icon
                name="Trash2"
                className="absolute right-0 p-2"
                size={18}
                color="blue"
                onPress={() => deleteTodayMealItem([meal.id])}
              />
            </View>
          ))}
        </GridContainer>
      ) : (
        <View className=" items-center gap-y-2">
          <Image source={image_empty_plate} className="aspect-square h-[90px]" />
          <Text className="text-neutral-7">오늘의 메뉴가 없어요</Text>
        </View>
      )}
    </Card>
  );
}
