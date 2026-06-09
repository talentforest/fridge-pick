import { addTodayMealItemAtom, todayMealListAtom } from '@/atom/mealAtom';
import { useOverlay } from '@/hooks/common/useOverlay';
import { MealWithEnrichIngredient, TodayMeal } from '@/types/meal';
import { useAtomValue, useSetAtom } from 'jotai';

export const useHandleTodayMeal = (currMeal: MealWithEnrichIngredient) => {
  const todayMealList = useAtomValue(todayMealListAtom);

  const hasMainMenu = !!todayMealList.find((meal) => meal.role === 'main');

  const addTodayMealItem = useSetAtom(addTodayMealItemAtom);

  const { toast, closeSheet } = useOverlay();

  const onAddTodayMealPress = () => {
    const todayMeal: TodayMeal = {
      meal: currMeal,
      role: hasMainMenu ? 'side' : 'main',
      consumeMethod: 'cook',
      selectedAt: new Date().toISOString(),
    };

    const result = addTodayMealItem(todayMeal);

    if (result.type === 'success') {
      // closeSheet();

      toast({
        message: `✅ 오늘 먹을 메뉴로 정했어요`,
        duration: 1000,
      });
    }
  };

  const getRequiredIngredientList = () => {
    if (!currMeal?.ingredientStructure) return [];

    const { essential, common, seasoning } = currMeal.ingredientStructure;

    return [...essential, ...common, ...seasoning];
  };

  const requiredIngredientNum = getRequiredIngredientList().length;

  const hasItem = !!todayMealList.find(({ meal }) => meal.id === currMeal.id);

  return {
    todayMealList,
    hasItem,
    onAddTodayMealPress,
    requiredIngredientNum,
    getRequiredIngredientList,
  };
};
