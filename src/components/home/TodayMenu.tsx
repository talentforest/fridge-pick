import TodayMenuCard from '@/components/selectableItem/consumableFood/TodayMenuCard';
import TodayMenuEmptyCard from '@/components/selectableItem/consumableFood/TodayMenuEmptyCard';
import SectionTitle from '@/components/common/header/SectionTitle';
import Icon from '@/components/common/ui/Icon';
import GridContainer from '@/components/common/container/GridContainer';
import { deleteTodayMenuAtom, todayMenuListAtom } from '@/atom/todayMenuAtom';
import { useAtomValue, useSetAtom } from 'jotai';
import { View } from 'react-native';

interface TodayMenuProps {
  hasHeader?: boolean;
}

export default function TodayMenu({ hasHeader = false }: TodayMenuProps) {
  const todayMenuList = useAtomValue(todayMenuListAtom);

  const deleteTodayMenu = useSetAtom(deleteTodayMenuAtom);

  const mainMenu = todayMenuList.find(({ role }) => role === 'main');
  const sideMenuList = todayMenuList.filter(({ role }) => role === 'side');

  return (
    <View className="gap-y-3">
      {hasHeader && (
        <View className="flex-row items-center justify-between">
          <SectionTitle title="오늘의 식사" icon="UtensilsCrossed" />

          {todayMenuList.length > 0 && (
            <Icon
              name="RefreshCcw"
              size={17}
              color="yellow"
              onPress={() =>
                deleteTodayMenu(todayMenuList.map(({ consumableFood: { id } }) => id))
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
              <TodayMenuCard type="mainMenu" todayMenu={mainMenu} />
            ) : (
              <TodayMenuEmptyCard type="mainMenu" />
            )}
          </View>

          {/* 사이드 메뉴 */}
          {sideMenuList.length > 0 && (
            <View className="w-[31%] gap-y-3">
              {sideMenuList.slice(0, 2).map((item) => (
                <TodayMenuCard
                  type="sideMenu"
                  key={item.consumableFood.id}
                  todayMenu={item}
                />
              ))}
            </View>
          )}
        </View>

        {sideMenuList.length > 2 && (
          <GridContainer columns={3} gap={12}>
            {sideMenuList.slice(2).map((item) => (
              <TodayMenuCard
                type="sideMenu"
                key={item.consumableFood.id}
                todayMenu={item}
              />
            ))}
          </GridContainer>
        )}
      </View>
    </View>
  );
}
