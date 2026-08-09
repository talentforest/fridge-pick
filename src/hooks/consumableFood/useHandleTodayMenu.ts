import { addTodayMenuAtom, todayMenuListAtom } from '@/atom/todayMenuAtom';
import { useOverlay } from '@/hooks/common/useOverlay';
import { EnrichedConsumableFoodWithFilter } from '@/hooks/consumableFood/useGetMenuList';
import { TodayMenu } from '@/types/storage';
import { useAtomValue, useSetAtom } from 'jotai';

export const useHandleTodayMenu = (
  currConsumableFood: EnrichedConsumableFoodWithFilter,
) => {
  const todayMenuList = useAtomValue(todayMenuListAtom);

  const isTodayMenu = !!todayMenuList.find(
    ({ consumableFood: { id } }) => id === currConsumableFood.id,
  );

  const hasMainMenu = !!todayMenuList.find(({ role }) => role === 'main');

  const addTodayMenu = useSetAtom(addTodayMenuAtom);

  const { showToast } = useOverlay();

  const onAddTodayMenuPress = () => {
    const todayMenu: TodayMenu = {
      consumableFood: currConsumableFood,
      role: hasMainMenu ? 'side' : 'main',
      consumeMethod: 'homemade',
      selectedAt: new Date().toISOString(),
    };

    const result = addTodayMenu(todayMenu);

    if (result.type === 'success') {
      showToast({
        type: 'normal',
        text1: `✅ 오늘 먹을 메뉴로 정했어요`,
      });
    }
  };

  return {
    todayMenuList,
    isTodayMenu,
    onAddTodayMenuPress,
  };
};
