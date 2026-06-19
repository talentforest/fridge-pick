import MealImage from '@/components/selectableItem/meal/MealImage';
import Text from '@/components/common/ui/Text';
import ProgressBar from '@/components/common/ProgressBar';
import Icon from '@/components/common/ui/Icon';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import MealDetailSheet from '@/components/meal/MealDetailSheet';
import { View } from 'react-native';
import { EnrichedMealWithFilterList, useHandleTodayMeal, useOverlay } from '@/hooks';
import { convenienceVariantObj, difficultyObj, storageObj } from '@/constants';
import { createSelectableItemKey } from '@/utils';
import { useAtomValue } from 'jotai';
import { findStorageItemWithKeyAtom } from '@/atom/storageItemAtom';
import { Meal } from '@/types/meal';
import IconWithText from '@/components/common/IconWithText';
import FilterTag from '@/components/common/FilterTag';

interface MealCompactCardProps {
  meal: EnrichedMealWithFilterList;
  className?: string;
}

export default function MealCompactCard({ meal, className = '' }: MealCompactCardProps) {
  const key = createSelectableItemKey(meal as Meal);

  const mealStorageItem = useAtomValue(findStorageItemWithKeyAtom(key));

  const { openSheet } = useOverlay();

  const { isTodayMeal } = useHandleTodayMeal(meal);

  const onPress = () => {
    openSheet({
      enableDynamicSizing: true,
      maxDynamicContentSize: 750,
      hasDim: true,
      render: () => <MealDetailSheet type="mainMenu" meal={meal} />,
    });
  };

  return (
    <TouchableOpacity
      key={meal.id}
      onPress={onPress}
      className={`overflow-hidden rounded-2xl border border-border bg-card ${className}`}
    >
      {isTodayMeal && (
        <Icon name="CheckCircle2" className="absolute right-3 top-3 z-10" color="green" />
      )}

      <View className="items-center justify-center bg-neutral-3 pb-5 pt-2">
        <MealImage meal={meal} size={110} />
        <Text className="-mt-2 text-base">{meal.label}</Text>
      </View>

      <View className="justify-between gap-y-4 px-3 py-3">
        <View className="items-start justify-start gap-y-2">
          <FilterTag
            isActive
            name={difficultyObj[meal.difficulty].label}
            color={difficultyObj[meal.difficulty].color}
            icon="Zap"
            className="!py-2"
            textClassName="!text-[13px]"
            iconSize={13}
          />

          {!meal.ingredientStructure && meal.convenienceVariants ? (
            <View className="flex-row gap-x-1.5">
              {meal.convenienceVariants.map((item) => (
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

        {meal.ingredientStructure ? (
          <ProgressBar
            label="재료보유율"
            percentage={meal.possessionPercent}
            possessedIngredientCount={meal.possessedIngredientCount}
            requiredIngredientCount={meal.requiredIngredientCount}
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
