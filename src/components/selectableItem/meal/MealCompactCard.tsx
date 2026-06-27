import Text from '@/components/common/ui/Text';
import ProgressBar from '@/components/common/ProgressBar';
import Icon from '@/components/common/ui/Icon';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import MealDetailSheet from '@/components/selectableItem/meal/MealDetailSheet';
import { View } from 'react-native';
import {
  EnrichedConsumableFoodWithFilterList,
  useHandleTodayMeal,
  useOverlay,
} from '@/hooks';
import { convenienceVariantObj, difficultyObj, storageObj } from '@/constants';
import { createSelectableItemKey } from '@/utils';
import { useAtomValue } from 'jotai';
import { findStorageItemWithKeyAtom } from '@/atom/storageItemAtom';
import { Meal } from '@/types/selectableItem';
import IconWithText from '@/components/common/IconWithText';
import FilterTag from '@/components/common/FilterTag';
import FoodImage from '@/components/common/FoodImage';

interface MealCompactCardProps {
  food: EnrichedConsumableFoodWithFilterList;
  className?: string;
}

export default function MealCompactCard({ food, className = '' }: MealCompactCardProps) {
  const key = createSelectableItemKey(food as Meal);

  const mealStorageItem = useAtomValue(findStorageItemWithKeyAtom(key));

  const { openSheet } = useOverlay();

  const { isTodayMeal } = useHandleTodayMeal(food);

  const onPress = () => {
    openSheet({
      enableDynamicSizing: true,
      maxDynamicContentSize: 750,
      hasDim: true,
      render: () => <MealDetailSheet type="mainMenu" food={food} />,
    });
  };

  return (
    <TouchableOpacity
      key={food.id}
      onPress={onPress}
      className={`overflow-hidden rounded-2xl border border-border bg-card ${className}`}
    >
      {isTodayMeal && (
        <Icon name="CheckCircle2" className="absolute right-3 top-3 z-10" color="green" />
      )}

      <View className="items-center justify-center bg-neutral-3 pb-5 pt-2">
        <FoodImage consumableFood={food} imageSize={110} />
        <Text className="-mt-2 text-base">{food.label}</Text>
      </View>

      <View className="justify-between gap-y-4 px-3 py-3">
        <View className="items-start justify-start gap-y-2">
          {food.difficulty && (
            <FilterTag
              isActive
              name={difficultyObj[food.difficulty].label}
              color={difficultyObj[food.difficulty].color}
              icon="Zap"
              className="!py-2"
              textClassName="!text-[13px]"
              iconSize={13}
            />
          )}

          {!food.foodStructure && food.availableFoodSources ? (
            <View className="flex-row gap-x-1.5">
              {food.availableFoodSources.map((item) => (
                <FilterTag
                  key={item}
                  isActive
                  name={convenienceVariantObj[item].label}
                  color={'neutral'}
                  // icon="UtensilsCrossed"
                  className="!rounded-[6px] !px-2 !py-2"
                  textClassName="!text-[13px]"
                  iconSize={13}
                />
              ))}
            </View>
          ) : (
            <></>
          )}
        </View>

        {food.foodStructure ? (
          <ProgressBar
            label="재료보유율"
            percentage={food.possessionPercent}
            possessedIngredientCount={food.possessedIngredientCount}
            requiredIngredientCount={food.requiredIngredientCount}
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
