import { addTodayMenuAtom, todayMenuListAtom } from '@/atom/todayMenuAtom';
import { useOverlay } from '@/hooks/common/useOverlay';
import { EnrichedConsumableFoodWithFilterList } from '@/hooks/consumableFood/useGetMenuList';
import { TodayMenu } from '@/types/trackedItem';
import { useAtomValue, useSetAtom } from 'jotai';

export const useHandleTodayMenu = (
  currConsumableFood: EnrichedConsumableFoodWithFilterList,
) => {
  const todayMenuList = useAtomValue(todayMenuListAtom);

  const isTodayMenu = !!todayMenuList.find(
    ({ consumableFood: { id } }) => id === currConsumableFood.id,
  );

  const hasMainMenu = !!todayMenuList.find(({ role }) => role === 'main');

  const addTodayMenu = useSetAtom(addTodayMenuAtom);

  const { closeSheet, showToast } = useOverlay();

  const onAddTodayMenuPress = () => {
    const todayMenu: TodayMenu = {
      consumableFood: currConsumableFood,
      role: hasMainMenu ? 'side' : 'main',
      consumeMethod: 'homemade',
      selectedAt: new Date().toISOString(),
    };

    const result = addTodayMenu(todayMenu);

    if (result.type === 'success') {
      closeSheet();

      showToast({
        type: 'custom',
        text1: `✅ 오늘 먹을 메뉴로 정했어요`,
        position: 'bottom',
      });
    }
  };

  return {
    todayMenuList,
    isTodayMenu,
    onAddTodayMenuPress,
  };
};
