import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import MealImage from '@/components/selectableItem/meal/MealImage';
import FilterTag from '@/components/common/FilterTag';
import FavoriteBtn from '@/components/common/FavoriteBtn';
import { ScrollView, View } from 'react-native';
import { MealFilterKey } from '@/types/filter';
import { filterObj } from '@/constants';
import { EnrichedMealWithFilterList, useHandleTodayMeal, useOverlay } from '@/hooks';
import ProgressBar from '@/components/common/ProgressBar';
import IngredientImage from '@/components/selectableItem/ingredient/IngredientImage';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import MealDetailSheet from '@/components/meal/MealDetailSheet';
import Icon from '@/components/common/ui/Icon';

interface MealCardProps {
  meal: EnrichedMealWithFilterList;
  filterList?: readonly MealFilterKey[];
  className?: string;
  maxIngredientNum?: number;
  hasIngredient?: boolean;
}

export default function MealCard({
  meal,
  filterList,
  className = '',
  maxIngredientNum = 4,
  hasIngredient = true,
}: MealCardProps) {
  const { isTodayMeal } = useHandleTodayMeal(meal);

  const { ingredientStructure: i, ...rest } = meal;

  const requiredIngredientList = i ? [...i.essential, ...i.common, ...i.seasoning] : [];

  const { openSheet } = useOverlay();

  const onPress = () => {
    openSheet({
      enableDynamicSizing: true,
      maxDynamicContentSize: 750,
      hasDim: true,
      render: () => <MealDetailSheet type="mainMenu" meal={meal} />,
    });
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Card className={`items-start px-5 !pt-2 pb-5 ${className}`}>
        <View className="-ml-2 w-full flex-row items-center gap-x-1">
          <MealImage meal={meal} size={80} />

          <View className={`flex-1 gap-y-3`}>
            <Text className="line-clamp-2 text-base">{meal?.label}</Text>
          </View>
          <View className="absolute right-0 top-4 flex-row gap-x-2.5">
            {isTodayMeal && <Icon name="CheckCircle2" color="yellow" />}
            <FavoriteBtn selectableItem={rest} />
          </View>
        </View>

        {filterList && filterList?.length > 0 && (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mb-3"
            contentContainerClassName="gap-x-2 px-0.5"
          >
            {filterList.map((filter) => (
              <FilterTag
                key={filter}
                name={filterObj['meal'][filter].label}
                color={filterObj['meal'][filter].color}
                textClassName="!text-sm"
                className="-ml-0.5 self-start !py-2.5"
                isActive
              />
            ))}
          </ScrollView>
        )}

        <View className={`mb-4 mt-2 items-center gap-y-2.5`}>
          <ProgressBar
            label="재료보유율"
            percentage={meal.possessionPercent}
            possessedIngredientCount={meal.possessedIngredientCount}
            requiredIngredientCount={meal.requiredIngredientCount}
          />
        </View>

        {hasIngredient && meal.requiredIngredientCount > 0 && (
          <View className="w-full flex-row gap-x-1.5">
            {requiredIngredientList
              .slice(
                0,
                requiredIngredientList.length === 5 ? undefined : maxIngredientNum,
              )
              .map((item) => (
                <View
                  key={item?.id}
                  className="w-[18.7%] items-center justify-between gap-0.5 rounded-xl bg-neutral-1 pb-2 pt-1"
                >
                  {item.type === 'ingredient' ? (
                    <IngredientImage ingredient={item} size={40} />
                  ) : (
                    <MealImage meal={item} size={40} />
                  )}
                  <Text className="line-clamp-1 text-center text-sm leading-4 text-neutral-5">
                    {item.label}
                  </Text>
                </View>
              ))}

            {requiredIngredientList.length > 5 &&
              requiredIngredientList.length > maxIngredientNum && (
                <View className="w-[18%] items-center justify-center gap-0.5 rounded-xl bg-blue-1">
                  <Text className="!text-[13px] text-blue-5">
                    +{requiredIngredientList.length - maxIngredientNum}개
                  </Text>
                </View>
              )}
          </View>
        )}
      </Card>
    </TouchableOpacity>
  );
}
