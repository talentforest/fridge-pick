import GridContainer from '@/components/common/container/GridContainer';
import Indicator from '@/components/common/Indicator';
import IngredientImage from '@/components/selectableItem/ingredient/IngredientImage';
import Card from '@/components/common/ui/Card';
import MealImage from '@/components/selectableItem/meal/MealImage';
import Text from '@/components/common/ui/Text';
import { Meal } from '@/types/meal';
import { View } from 'react-native';
import { MealFilterKey } from '@/types/filter';
import FilterTag from '@/components/common/FilterTag';
import { filterObj } from '@/constants';
import FavoriteBtn from '@/components/common/FavoriteBtn';

interface MealCardProps {
  meal: Meal & { filterList?: readonly MealFilterKey[] };
  className?: string;
  maxIngredientNum?: number;
}

export default function MealCard({
  meal,
  className = '',
  maxIngredientNum = 9,
}: MealCardProps) {
  const requiredIngredient = [
    ...meal.ingredientStructure?.essential,
    ...(meal.ingredientStructure ? meal.ingredientStructure.common : []),
  ];

  return (
    <Card className={`items-start px-5 pb-5 pt-3 ${className}`}>
      <View className="w-full flex-row items-center justify-between">
        {meal.filterList && (
          <View className="-pl-0.5 flex-row gap-x-2">
            {meal.filterList.map((filter) => (
              <FilterTag
                key={filter}
                name={filterObj['meal'][filter].label}
                color={filterObj['meal'][filter].color}
                textClassName="!text-[12px]"
                className="-ml-0.5 self-start !py-2.5"
                isActive
              />
            ))}
          </View>
        )}

        <FavoriteBtn selectableItem={meal} />
      </View>
      <View className="w-full flex-row items-center">
        <View className={`flex-1 gap-y-2.5`}>
          <Text className="line-clamp-2 text-base">{meal?.label}</Text>

          <View className="flex-row gap-x-3">
            <Indicator type="total" value={requiredIngredient.length} />
            <Indicator type="time" value={meal.cookTime} />
          </View>
        </View>

        <MealImage meal={meal} size={85} />
      </View>

      {requiredIngredient.length > 0 && (
        <GridContainer columns={5} gap={6}>
          {requiredIngredient.slice(0, maxIngredientNum).map((ingredient) => (
            <View
              key={ingredient?.label}
              className="items-center justify-between gap-0.5 rounded-xl bg-neutral-1"
            >
              <IngredientImage ingredient={ingredient} size={40} />
              <Text className="text-sm text-neutral-5">{ingredient.label}</Text>
            </View>
          ))}

          {requiredIngredient.length > maxIngredientNum && (
            <View className="flex-1 items-end justify-end">
              <Text className="text-sm">...더보기</Text>
            </View>
          )}
        </GridContainer>
      )}
    </Card>
  );
}
