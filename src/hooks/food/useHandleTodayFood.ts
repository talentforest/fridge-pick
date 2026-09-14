import { addTodayFoodAtom, todayFoodListAtom } from '@/atom/todayFoodAtom';
import { useOverlay } from '@/hooks/common/useOverlay';
import { EnrichedFoodWithFilter } from '@/hooks/food/useGetFoodList';

import { TodayFood } from '@/types/todayFood';
import { useAtomValue, useSetAtom } from 'jotai';

export const useHandleTodayFood = (currFood: EnrichedFoodWithFilter) => {
  const todayFoodList = useAtomValue(todayFoodListAtom);

  const isTodayFood = !!todayFoodList.find(({ food: { id } }) => id === currFood.id);

  const hasMainFood = !!todayFoodList.find(({ role }) => role === 'main');

  const addTodayFood = useSetAtom(addTodayFoodAtom);

  const { showToast } = useOverlay();

  const onAddTodayFoodPress = () => {
    const todayFood: TodayFood = {
      food: currFood,
      role: hasMainFood ? 'side' : 'main',
      selectedAt: new Date().toISOString(),
    };

    const result = addTodayFood(todayFood);

    if (result.type === 'success') {
      showToast({
        type: 'normal',
        text1: `✅ 오늘 먹을 메뉴로 정했어요`,
      });
    }
  };

  return {
    todayFoodList,
    isTodayFood,
    onAddTodayFoodPress,
  };
};
