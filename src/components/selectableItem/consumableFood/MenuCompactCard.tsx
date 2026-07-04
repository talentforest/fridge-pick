import Text from '@/components/common/ui/Text';
import ProgressBar from '@/components/common/ProgressBar';
import Icon from '@/components/common/ui/Icon';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import MenuDetailSheet from '@/components/selectableItem/consumableFood/MenuDetailSheet';
import { View } from 'react-native';
import {
  EnrichedConsumableFoodWithFilter,
  useHandleTodayMenu,
  useOverlay,
} from '@/hooks';
import { storageObj } from '@/constants';
import { createSelectableItemKey } from '@/utils';
import { useAtomValue } from 'jotai';
import { findStorageItemWithKeyAtom } from '@/atom/storageAtom';
import { Meal } from '@/types/selectableItem';
import IconWithText from '@/components/common/IconWithText';
import FoodImage from '@/components/common/FoodImage';
import MenuFilter from '@/components/selectableItem/consumableFood/MenuFilter';

interface MenuCompactCardProps {
  food: EnrichedConsumableFoodWithFilter;
  className?: string;
}

export default function MenuCompactCard({ food, className = '' }: MenuCompactCardProps) {
  const key = createSelectableItemKey(food as Meal);

  const mealStorageItem = useAtomValue(findStorageItemWithKeyAtom(key));

  const { openSheet } = useOverlay();

  const { isTodayMenu } = useHandleTodayMenu(food);

  const onPress = () => {
    openSheet({
      enableDynamicSizing: true,
      maxDynamicContentSize: 750,
      hasDim: true,
      render: () => <MenuDetailSheet type="mainMenu" food={food} />,
    });
  };

  return (
    <TouchableOpacity
      key={food.id}
      onPress={onPress}
      className={`overflow-hidden rounded-2xl border border-border bg-card ${className}`}
    >
      {isTodayMenu && (
        <Icon name="CheckCircle2" className="absolute right-3 top-3 z-10" color="green" />
      )}

      <View className="items-center justify-center bg-neutral-3 pb-5 pt-2">
        <FoodImage consumableFood={food} imageSize={110} />
        <Text className="-mt-2 text-base">{food.label}</Text>
      </View>

      <View className="flex-1 justify-between gap-y-4 px-3 py-3">
        <View className="flex-1 flex-row flex-wrap items-start justify-start gap-1.5 gap-y-2">
          <MenuFilter food={food} type="category" />
          <MenuFilter food={food} type="difficulty" />
        </View>

        {food.foodStructure ? (
          <ProgressBar
            label="재료보유율"
            percentage={food.possessionPercent}
            possessedCount={food.possessedCount}
            requiredCount={food.requiredCount}
          />
        ) : mealStorageItem && mealStorageItem.type === 'meal' ? (
          <View className="p-1">
            <IconWithText
              icon={storageObj[mealStorageItem.storage.type].icon}
              iconColor={storageObj[mealStorageItem.storage.type].color}
              iconSize={14}
              text={`${storageObj[mealStorageItem.storage.type].label}에 있어요`}
              textClassName={
                storageObj[mealStorageItem.storage.type].color === 'blue'
                  ? 'text-blue-7'
                  : storageObj[mealStorageItem.storage.type].color === 'ice'
                    ? 'text-ice-5'
                    : 'text-yellow-7'
              }
            />
          </View>
        ) : (
          <></>
        )}
      </View>
    </TouchableOpacity>
  );
}
