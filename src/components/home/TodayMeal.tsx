import TodayMealCard from '@/components/selectableItem/meal/TodayMealCard';
import TodayMealEmptyCard from '@/components/selectableItem/meal/TodayMealEmptyCard';
import SectionTitle from '@/components/common/header/SectionTitle';
import Icon from '@/components/common/ui/Icon';
import GridContainer from '@/components/common/container/GridContainer';
import { deleteTodayMealItemAtom, todayMealListAtom } from '@/atom/mealAtom';
import { useAtomValue, useSetAtom } from 'jotai';
import { View } from 'react-native';

interface TodayMealProps {
  hasHeader?: boolean;
}

export default function TodayMeal({ hasHeader = false }: TodayMealProps) {
  const todayMealList = useAtomValue(todayMealListAtom);

  const deleteTodayMealItem = useSetAtom(deleteTodayMealItemAtom);

  const [mainMenu, ...restMainMenuList] = todayMealList.filter(
    ({ meal }) => !meal.isSideMeal,
  );

  return (
    <View className="gap-y-3">
      {hasHeader && (
        <View className="flex-row items-center justify-between">
          <SectionTitle title="오늘의 식사" icon="UtensilsCrossed" />

          {todayMealList.length > 0 && (
            <Icon
              name="RefreshCcw"
              size={17}
              color="yellow"
              onPress={() =>
                deleteTodayMealItem(todayMealList.map(({ meal }) => meal.id))
              }
            />
          )}
        </View>
      )}

      <View className="min-h-[220px] gap-y-3">
        <View className="flex-row justify-between gap-x-3">
          {/* 메인 메뉴는 하나만 */}
          <View className="flex-1">
            {mainMenu ? (
              <TodayMealCard type="mainMenu" todayMeal={mainMenu} />
            ) : (
              <TodayMealEmptyCard type="mainMenu" />
            )}
          </View>

          {/* 사이드 메뉴 */}
          {restMainMenuList.length > 0 && (
            <View className="w-[31%] gap-y-3">
              {restMainMenuList.slice(0, 2).map((item) => (
                <TodayMealCard type="sideMenu" key={item.meal.id} todayMeal={item} />
              ))}
            </View>
          )}
        </View>

        {restMainMenuList.length > 2 && (
          <GridContainer columns={3} gap={12}>
            {restMainMenuList.slice(2).map((item) => (
              <TodayMealCard type="sideMenu" key={item.meal.id} todayMeal={item} />
            ))}
          </GridContainer>
        )}
      </View>
    </View>
  );
}
