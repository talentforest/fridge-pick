import GridContainer from '@/components/common/container/GridContainer';
import Indicator from '@/components/common/Indicator';
import IngredientImage from '@/components/selectableItem/ingredient/IngredientImage';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import MealImage from '@/components/selectableItem/meal/MealImage';
import FilterTag from '@/components/common/FilterTag';
import FavoriteBtn from '@/components/common/FavoriteBtn';
import { EnrichMealIngredientStructure, Meal } from '@/types/meal';
import { ScrollView, View } from 'react-native';
import { MealFilterKey } from '@/types/filter';
import { filterObj } from '@/constants';
import SquareBtn from '@/components/common/SquareBtn';
import { useSetAtom } from 'jotai';
import { addTodayMealItemAtom } from '@/atom/mealAtom';

interface MealCardProps {
  meal: Meal;
  filterList?: readonly MealFilterKey[];
  ingredientStructure?: EnrichMealIngredientStructure;
  className?: string;
  maxIngredientNum?: number;
}

export default function MealCard({
  meal,
  filterList,
  ingredientStructure,
  className = '',
  maxIngredientNum = 4,
}: MealCardProps) {
  const addTodayMealItem = useSetAtom(addTodayMealItemAtom);

  const required = ingredientStructure
    ? [...ingredientStructure.essential, ...ingredientStructure.common]
    : [];

  return (
    <Card className={`items-start px-5 pb-5 pt-2 ${className}`}>
      <View className="-ml-2 w-full flex-row items-center gap-x-1">
        <MealImage meal={meal} size={85} />

        <View className={`flex-1 gap-y-2.5`}>
          <Text className="line-clamp-2 text-base">{meal?.label}</Text>

          <View className="flex-row gap-x-2">
            <Indicator type="difficulty" value={meal.difficulty} />
            <Indicator type="time" value={meal.cookTime} />
            <Indicator type="total" value={required.length} />
          </View>
        </View>

        <FavoriteBtn selectableItem={meal} className="absolute right-0 top-3" />
      </View>

      {filterList && filterList?.length > 0 && (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="-mt-1 mb-2"
          contentContainerClassName="gap-x-2"
        >
          {filterList.map((filter) => (
            <FilterTag
              key={filter}
              name={filterObj['meal'][filter].label}
              color={filterObj['meal'][filter].color}
              textClassName="!text-[12px]"
              className="-ml-0.5 self-start !py-2.5"
              isActive
            />
          ))}
        </ScrollView>
      )}

      {required.length > 0 && (
        <GridContainer columns={5} gap={6}>
          {required
            .slice(0, required.length === 5 ? undefined : maxIngredientNum)
            .map((item) => (
              <View
                key={item?.label}
                className="items-center justify-between gap-0.5 rounded-xl bg-neutral-1"
              >
                {item.type === 'ingredient' ? (
                  <IngredientImage ingredient={item} size={40} />
                ) : (
                  <MealImage meal={item} size={40} />
                )}
                <Text className="text-center text-sm leading-4 text-neutral-5">
                  {item.label}
                </Text>
              </View>
            ))}

          {required.length > 5 && required.length > maxIngredientNum && (
            <View className="flex-1 items-center justify-center gap-0.5 rounded-xl bg-blue-1 opacity-80">
              <Text className="!text-[13px] text-blue-5">
                +{required.length - maxIngredientNum}개
              </Text>
            </View>
          )}
        </GridContainer>
      )}

      <SquareBtn
        className="mt-4 w-full"
        name="오늘의 식사로 선택"
        iconName="UtensilsCrossed"
        onPress={() => addTodayMealItem(meal)}
      />
    </Card>
  );
}
