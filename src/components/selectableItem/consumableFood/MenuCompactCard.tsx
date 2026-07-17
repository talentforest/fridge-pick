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
import { checkHasStorageItem, createSelectableItemKey } from '@/utils';
import { useAtomValue } from 'jotai';
import { findStorageItemWithKeyAtom } from '@/atom/storageAtom';
import { Meal } from '@/types/selectableItem';
import IconWithText from '@/components/common/IconWithText';
import FoodImage from '@/components/common/FoodImage';
import MenuFilter from '@/components/selectableItem/consumableFood/MenuFilter';
import Card from '@/components/common/ui/Card';
import FilterTag from '@/components/common/FilterTag';
import SelectBtn from '@/components/common/SelectBtn';

interface MenuCompactCardProps {
  food: EnrichedConsumableFoodWithFilter;
  className?: string;
  isPressable?: boolean;
}

export default function MenuCompactCard({
  food,
  className = '',
  isPressable = true,
}: MenuCompactCardProps) {
  const key = createSelectableItemKey(food as Meal);

  const mealStorageItem = useAtomValue(findStorageItemWithKeyAtom(key));

  const { openSheet } = useOverlay();

  const { isTodayMenu } = useHandleTodayMenu(food);

  const onPress = () => {
    openSheet({
      render: () => <MenuDetailSheet type="mainMenu" food={food} />,
    });
  };

  const requiredList = food.foodStructure
    ? [
        ...food.foodStructure?.essential,
        ...food.foodStructure.common,
        ...food.foodStructure.seasoning,
      ]
    : [];

  const hasNotItemList = requiredList.filter(({ id }) => {
    return !food.requiredPossessedList.find(({ storageItem }) =>
      checkHasStorageItem(storageItem, id),
    );
  });

  return isPressable ? (
    <TouchableOpacity
      onPress={onPress}
      className={`overflow-hidden rounded-2xl border border-border bg-card ${className}`}
    >
      {isTodayMenu && (
        <Icon name="CheckCircle2" className="absolute right-3 top-3 z-10" color="green" />
      )}

      <View className="items-center justify-center bg-neutral-3 pb-5 pt-2">
        <FoodImage consumableFood={food} imageSize={90} />
        <Text className="-mt-1">{food.label}</Text>
      </View>

      <View className="justify-between gap-y-4 px-3 py-3">
        <View className="flex-row flex-wrap items-start justify-start gap-1.5 gap-y-2">
          <MenuFilter food={food} type="category" />
          <MenuFilter food={food} type="difficulty" />
        </View>

        {food.foodStructure ? (
          <ProgressBar
            label="재료 보유율"
            percentage={food.requiredPossessionPercent}
            possessedCount={food.requiredPossessedList.length}
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
  ) : (
    <Card className={`relative flex-1 overflow-hidden !p-0 ${className}`}>
      {isTodayMenu && (
        <Icon name="CheckCircle2" className="absolute right-3 top-3 z-10" color="green" />
      )}

      <View className="items-center justify-center bg-neutral-3 pb-5 pt-1">
        <FoodImage consumableFood={food} imageSize={90} />
        <Text className="-mt-1">{food.label}</Text>
      </View>

      <View className="flex-1 justify-between gap-y-2 px-3 py-3">
        <View className="mb-1 flex-row flex-wrap items-start justify-start gap-1.5 gap-y-2">
          <MenuFilter food={food} type="category" />
          <MenuFilter food={food} type="difficulty" />
        </View>

        {food.foodStructure ? (
          <ProgressBar
            label="재료 보유율"
            percentage={food.requiredPossessionPercent}
            possessedCount={food.requiredPossessedList.length}
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

        {hasNotItemList.length ? (
          <View className="mt-1 gap-y-1.5">
            <Text className="!text-[11px] text-neutral-7">부족한 재료</Text>
            <View className="flex-row items-center gap-x-1">
              <View className="flex-row items-center gap-x-1 overflow-hidden">
                {hasNotItemList.slice(0, 2).map((item) => (
                  <FilterTag
                    key={item.id}
                    name={item.label}
                    isActive
                    color="neutral"
                    textClassName="!text-[11px]"
                    className="!rounded-full !px-3 !py-2"
                  />
                ))}
              </View>
              <Text className="w-10 text-sm">외 {hasNotItemList.length - 2}개</Text>
            </View>
          </View>
        ) : (
          <Text className="mb-auto mt-0.5 font-extrabold text-sm text-green-7">
            모든 재료를 갖고 있어요!
          </Text>
        )}

        <SelectBtn
          iconName="Plus"
          name="오늘 식사로 추가"
          color="blue"
          iconSize={14}
          className="border-t !bg-white !py-3.5"
          textClassName="!text-[12px]"
        />
      </View>
    </Card>
  );
}
