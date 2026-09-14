import { deleteTodayFoodAtom } from '@/atom/todayFoodAtom';
import { foodCategoryObj } from '@/constants';
import { EnrichedFoodWithFilter, useOverlay } from '@/hooks';
import { useSetAtom } from 'jotai';
import { View } from 'react-native';
import FilterTag from '@/components/common/FilterTag';
import FoodImage from '@/components/common/FoodImage';
import IconWithText from '@/components/common/IconWithText';
import ProgressBar from '@/components/common/ProgressBar';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import FoodDetailSheet from '@/components/selectableItem/FoodDetailSheet';

type TodayFoodCardProps = {
  food: EnrichedFoodWithFilter;
};

export default function TodayFoodCard({ food }: TodayFoodCardProps) {
  const deleteTodayFood = useSetAtom(deleteTodayFoodAtom);

  const category = foodCategoryObj[food.category];

  const { openSheet } = useOverlay();

  const onCardPress = () => {
    openSheet({ render: () => <FoodDetailSheet food={food} /> });
  };

  return (
    <TouchableOpacity onPress={onCardPress}>
      <Card key={food.id} className="overflow-hidden !p-2">
        <FilterTag
          name={category.label}
          color={category.color}
          icon={category.icon}
          iconSize={10}
          isActive
          className="mr-auto !px-2 !py-1.5"
          textClassName="text-xs !font-bold"
        />

        <View className="-mt-2 items-center justify-center p-0.5">
          <FoodImage food={food} imageSize={70} />
        </View>

        <View className="-mt-0.5 items-center justify-center gap-y-2 px-1 pb-1">
          <Text className="text-center !text-[13px]">{food.label}</Text>

          <ProgressBar
            percentage={food.requiredPossessionPercent}
            possessedCount={food.requiredPossessedList.length}
            requiredCount={food.requiredCount}
          />
        </View>

        <IconWithText
          icon="Trash2"
          iconSize={14}
          iconColor="neutral"
          textClassName="text-neutral-7 !text-[13px]"
          className="absolute right-0 top-1 !gap-x-0.5 p-2"
          onPress={() => deleteTodayFood([food.id])}
        />
      </Card>
    </TouchableOpacity>
  );
}
