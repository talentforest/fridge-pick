import FoodImage from '@/components/common/FoodImage';
import ProgressBar from '@/components/common/ProgressBar';
import Card from '@/components/common/ui/Card';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import { EnrichedFoodWithFilter, useHandleTodayFood } from '@/hooks';
import { createSelectableItemKey, findTrackedItemWithKey } from '@/utils';
import { useMemo } from 'react';
import { ScrollView, View } from 'react-native';

type FoodHorizontalCardProps = {
  food: EnrichedFoodWithFilter;
};

export default function FoodHorizontalCard({ food }: FoodHorizontalCardProps) {
  const hasNotIngredientList = useMemo(() => {
    const requiredList = food.foodStructure
      ? [
          ...food.foodStructure?.essential,
          ...food.foodStructure?.common,
          ...food.foodStructure?.seasoning,
        ]
      : [];

    return requiredList.filter((item) => {
      const key = createSelectableItemKey(item);
      return !food.requiredPossessedList.find((p) =>
        findTrackedItemWithKey(p.storageItem, key),
      );
    });
  }, [food.foodStructure, food.requiredPossessedList]);

  const { onAddTodayFoodPress, isTodayFood } = useHandleTodayFood(food);

  return (
    <Card key={food.id} className="flex-row overflow-hidden !px-0 !py-0">
      <View className="items-center justify-center bg-neutral-1 px-3 py-5">
        <FoodImage food={food} imageSize={70} />
      </View>

      <View className="flex-1 justify-between gap-y-2 px-3 py-4">
        <Text className="mb-1.5 font-extrabold">{food.label}</Text>

        <ProgressBar
          label="재료 보유율"
          percentage={food.requiredPossessionPercent}
          possessedCount={food.requiredPossessedList.length}
          requiredCount={food.requiredCount}
        />

        {hasNotIngredientList.length > 0 ? (
          <ScrollView
            horizontal
            contentContainerClassName="gap-x-1.5 mt-1"
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            {hasNotIngredientList.map((item) => (
              <View
                key={item.id}
                className={`flex-row items-center gap-x-0.5 rounded-md bg-red-0 p-1.5`}
              >
                <FoodImage imageSize={14} selectableItem={item} />
                <Text className="!text-[11px]">{item.label}</Text>
              </View>
            ))}
          </ScrollView>
        ) : (
          <View className="flex-row items-center gap-x-1.5">
            <View className="size-2 rounded-full bg-green-3" />
            <Text className="!text-[11px] text-green-7">바로 만들 수 있어요!</Text>
          </View>
        )}
      </View>

      <Icon
        name={isTodayFood ? 'Utensils' : 'PlusSquare'}
        size={15}
        color={isTodayFood ? 'green' : 'neutral'}
        className="absolute right-0 top-0 !gap-x-0.5 p-4"
        onPress={onAddTodayFoodPress}
      />
    </Card>
  );
}
