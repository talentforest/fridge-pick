import Text from '@/components/common/ui/Text';
import ProgressBar from '@/components/common/ProgressBar';
import Icon from '@/components/common/ui/Icon';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import FoodDetailSheet from '@/components/selectableItem/FoodDetailSheet';
import { View } from 'react-native';
import { EnrichedFoodWithFilter, useHandleTodayFood, useOverlay } from '@/hooks';
import { storageObj } from '@/constants';
import { checkHasStorageItem, createSelectableItemKey } from '@/utils';
import { useAtomValue } from 'jotai';
import { findStorageItemWithKeyAtom } from '@/atom/storageAtom';
import { Food } from '@/types/selectableItem';
import IconWithText from '@/components/common/IconWithText';
import FoodImage from '@/components/common/FoodImage';
import FoodFilter from '@/components/selectableItem/FoodFilter';
import Card from '@/components/common/ui/Card';
import FilterTag from '@/components/common/FilterTag';
import SelectBtn from '@/components/common/SelectBtn';

interface FoodCompactCardProps {
  food: EnrichedFoodWithFilter;
  className?: string;
  isPressable?: boolean;
}

export default function FoodCompactCard({
  food,
  className = '',
  isPressable = true,
}: FoodCompactCardProps) {
  const key = createSelectableItemKey(food as Food);

  const foodStorageItem = useAtomValue(findStorageItemWithKeyAtom(key));

  const { openSheet } = useOverlay();

  const { isTodayFood } = useHandleTodayFood(food);

  const onPress = () => {
    openSheet({
      render: () => <FoodDetailSheet food={food} />,
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
      {isTodayFood && (
        <Icon name="CheckCircle2" className="absolute right-3 top-3 z-10" color="green" />
      )}

      <View className="items-center justify-center bg-neutral-3 pb-5 pt-2">
        <FoodImage food={food} imageSize={90} />
        <Text className="-mt-1">{food.label}</Text>
      </View>

      <View className="justify-between gap-y-4 px-3 py-3">
        <View className="flex-row flex-wrap items-start justify-start gap-1.5 gap-y-2">
          <FoodFilter food={food} type="category" />
          <FoodFilter food={food} type="difficulty" />
        </View>

        {food.foodStructure ? (
          <ProgressBar
            label="재료 보유율"
            percentage={food.requiredPossessionPercent}
            possessedCount={food.requiredPossessedList.length}
            requiredCount={food.requiredCount}
          />
        ) : foodStorageItem && foodStorageItem.type === 'food' ? (
          <View className="p-1">
            <IconWithText
              icon={storageObj[foodStorageItem.storage.type].icon}
              iconColor={storageObj[foodStorageItem.storage.type].color}
              iconSize={14}
              text={`${storageObj[foodStorageItem.storage.type].label}에 있어요`}
              textClassName={
                storageObj[foodStorageItem.storage.type].color === 'blue'
                  ? 'text-blue-7'
                  : storageObj[foodStorageItem.storage.type].color === 'ice'
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
      {isTodayFood && (
        <Icon name="CheckCircle2" className="absolute right-3 top-3 z-10" color="green" />
      )}

      <View className="items-center justify-center bg-neutral-3 pb-5 pt-1">
        <FoodImage food={food} imageSize={90} />
        <Text className="-mt-1">{food.label}</Text>
      </View>

      <View className="flex-1 justify-between gap-y-2 px-3 py-3">
        <View className="mb-1 flex-row flex-wrap items-start justify-start gap-1.5 gap-y-2">
          <FoodFilter food={food} type="category" />
          <FoodFilter food={food} type="difficulty" />
        </View>

        {food.foodStructure ? (
          <ProgressBar
            label="재료 보유율"
            percentage={food.requiredPossessionPercent}
            possessedCount={food.requiredPossessedList.length}
            requiredCount={food.requiredCount}
          />
        ) : foodStorageItem && foodStorageItem.type === 'food' ? (
          <View className="p-1">
            <IconWithText
              icon={storageObj[foodStorageItem.storage.type].icon}
              iconColor={storageObj[foodStorageItem.storage.type].color}
              iconSize={14}
              text={`${storageObj[foodStorageItem.storage.type].label}에 있어요`}
              textClassName={
                storageObj[foodStorageItem.storage.type].color === 'blue'
                  ? 'text-blue-7'
                  : storageObj[foodStorageItem.storage.type].color === 'ice'
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
