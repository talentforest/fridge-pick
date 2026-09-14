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
    <Card key={food.id} className="flex-row items-center overflow-hidden !p-0">
      <View className="items-center justify-center bg-neutral-1 px-3 py-5">
        <FoodImage food={food} imageSize={75} />
      </View>

      <View className="flex-1 gap-y-2 p-3">
        <Text className="mb-1.5 font-extrabold !text-[15px]">{food.label}</Text>

        <ProgressBar
          label="재료 보유율"
          percentage={food.requiredPossessionPercent}
          possessedCount={food.requiredPossessedList.length}
          requiredCount={food.requiredCount}
        />

        <ScrollView
          horizontal
          contentContainerClassName="gap-x-1.5 mt-1"
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {hasNotIngredientList.map((item) => (
            <View
              key={item.id}
              className={`flex-row items-center gap-x-0.5 rounded bg-red-0 p-1`}
            >
              <FoodImage imageSize={14} selectableItem={item} />
              <Text className="!text-[11px]">{item.label}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <Icon
        name={isTodayFood ? 'CheckCircle2' : 'Plus'}
        size={18}
        color={isTodayFood ? 'green' : 'neutral'}
        className="absolute right-0 top-0 !gap-x-0.5 p-3"
        onPress={onAddTodayFoodPress}
      />
    </Card>
  );
}
