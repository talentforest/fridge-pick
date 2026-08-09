import { deleteTodayMenuAtom, todayMenuListAtom } from '@/atom/todayMenuAtom';
import { useAtomValue, useSetAtom } from 'jotai';
import { View } from 'react-native';
import TodayMenuCard from '@/components/selectableItem/consumableFood/TodayMenuCard';
import SectionTitle from '@/components/common/header/SectionTitle';
import IconWithText from '@/components/common/IconWithText';
import TodayMenuEmptyCard from '@/components/selectableItem/consumableFood/TodayMenuEmptyCard';
import GridContainer from '@/components/common/container/GridContainer';

interface TodayMenuProps {
  hasHeader?: boolean;
}

export default function TodayMenu({ hasHeader = false }: TodayMenuProps) {
  const todayMenuList = useAtomValue(todayMenuListAtom);

  const deleteTodayMenu = useSetAtom(deleteTodayMenuAtom);

  const mainMenuList = todayMenuList.filter(
    (item) =>
      item.consumableFood.category === 'main_dish_meal' ||
      item.consumableFood.category === 'soup_meal' ||
      item.consumableFood.category === 'noodle_meal' ||
      item.consumableFood.category === 'western_meal' ||
      item.consumableFood.category === 'rice_meal',
  );

  const sideMenuList = todayMenuList.filter(
    (item) => item.consumableFood.category === 'side_dish',
  );

  const dessertMenuList = todayMenuList.filter(
    (item) =>
      item.consumableFood.category === 'light_food' ||
      item.consumableFood.category === 'bakery' ||
      item.consumableFood.category === 'snack_dessert',
  );

  const menuList = [...mainMenuList, ...sideMenuList, ...dessertMenuList];

  return (
    <View className="min-h-fit gap-y-3">
      {hasHeader && (
        <View className="flex-row items-center justify-between">
          <SectionTitle title="오늘 먹을 메뉴" icon="UtensilsCrossed" />

          {todayMenuList.length > 0 && (
            <IconWithText
              text="초기화"
              icon="RefreshCcw"
              iconSize={14}
              iconColor="neutral"
              textClassName="text-neutral-7"
              className="px-1"
              onPress={() =>
                deleteTodayMenu(todayMenuList.map(({ consumableFood: { id } }) => id))
              }
            />
          )}
        </View>
      )}

      {menuList.length > 0 ? (
        <GridContainer columns={3}>
          {menuList.map((item) => (
            <TodayMenuCard key={item.consumableFood.id} menu={item.consumableFood} />
          ))}
        </GridContainer>
      ) : (
        <></>
      )}

      {todayMenuList.length === 0 ? <TodayMenuEmptyCard /> : <></>}
    </View>
  );
}
