import { addTodayMealItemAtom, todayMealListAtom } from '@/atom/mealAtom';
import { useOverlay } from '@/hooks/common/useOverlay';
import { EnrichedConsumableFoodWithFilterList } from '@/hooks/meal/useGetMealList';
import { TodayMeal } from '@/types/selectableItem';
import { useAtomValue, useSetAtom } from 'jotai';

export const useHandleTodayMeal = (
  currConsumableFood: EnrichedConsumableFoodWithFilterList,
) => {
  const todayMealList = useAtomValue(todayMealListAtom);

  const isTodayMeal = !!todayMealList.find(
    ({ consumableFood }) => consumableFood.id === currConsumableFood.id,
  );

  const hasMainMenu = !!todayMealList.find((meal) => meal.role === 'main');

  const addTodayMealItem = useSetAtom(addTodayMealItemAtom);

  const { toast, closeSheet } = useOverlay();

  const onAddTodayMealPress = () => {
    const todayMeal: TodayMeal = {
      consumableFood: currConsumableFood,
      role: hasMainMenu ? 'side' : 'main',
      consumeMethod: 'homemade',
      selectedAt: new Date().toISOString(),
    };

    const result = addTodayMealItem(todayMeal);

    if (result.type === 'success') {
      closeSheet();

      toast({
        message: `✅ 오늘 먹을 메뉴로 정했어요`,
        duration: 1000,
      });
    }
  };

  return {
    todayMealList,
    isTodayMeal,
    onAddTodayMealPress,
  };
};
