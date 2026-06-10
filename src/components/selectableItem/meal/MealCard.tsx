import Indicator from '@/components/common/Indicator';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import MealImage from '@/components/selectableItem/meal/MealImage';
import FilterTag from '@/components/common/FilterTag';
import SquareBtn from '@/components/common/SquareBtn';
import FavoriteBtn from '@/components/common/FavoriteBtn';
import { MealWithEnrichIngredient } from '@/types/meal';
import { ScrollView, View } from 'react-native';
import { MealFilterKey } from '@/types/filter';
import { filterObj } from '@/constants';
import { useHandleTodayMeal } from '@/hooks';
import IngredientImage from '@/components/selectableItem/ingredient/IngredientImage';

interface MealCardProps {
  meal: MealWithEnrichIngredient; // 여기는 꼭 ingredient 전체정보까지
  filterList?: readonly MealFilterKey[];
  className?: string;
  maxIngredientNum?: number;
  hasTodayMealBtn?: boolean;
  hasIngredient?: boolean;
}

export default function MealCard({
  meal,
  filterList,
  className = '',
  maxIngredientNum = 4,
  hasTodayMealBtn = true,
  hasIngredient = true,
}: MealCardProps) {
  const { hasItem, onAddTodayMealPress, getRequiredIngredientList } =
    useHandleTodayMeal(meal);

  const { ingredientStructure, ...rest } = meal;

  const requiredIngredientList = getRequiredIngredientList();

  return (
    <Card className={`items-start !py-2 px-5 ${className}`}>
      <View className="-ml-2 w-full flex-row items-center gap-x-1">
        <MealImage meal={meal} size={80} />

        <View className={`flex-1 gap-y-3`}>
          <Text className="line-clamp-2 text-base">{meal?.label}</Text>

          <View className="flex-row gap-x-2">
            <Indicator type="difficulty" value={meal.difficulty} />
            <Indicator type="total" value={requiredIngredientList.length} />
          </View>
        </View>

        <FavoriteBtn selectableItem={rest} className="absolute right-0 top-4" />
      </View>

      {filterList && filterList?.length > 0 && (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mb-3"
          contentContainerClassName="gap-x-2"
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

      {hasIngredient && requiredIngredientList.length > 0 && (
        <View className="w-full flex-row justify-between gap-x-1.5">
          {requiredIngredientList
            .slice(0, requiredIngredientList.length === 5 ? undefined : maxIngredientNum)
            .map((item) => (
              <View
                key={item?.id}
                className="w-[18%] items-center justify-between gap-0.5 rounded-xl bg-neutral-1 pb-2 pt-1"
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

      {hasTodayMealBtn && (
        <SquareBtn
          className="my-3 w-full !py-[16px]"
          name="오늘 먹을 메뉴"
          iconName="UtensilsCrossed"
          onPress={onAddTodayMealPress}
          color={hasItem ? 'inActive' : 'blue'}
          disabled={hasItem}
          iconSize={14}
        />
      )}
    </Card>
  );
}
