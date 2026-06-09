import { AppError, AppSuccess } from '@/hooks';
import { TodayMeal } from '@/types/meal';
import { atom } from 'jotai';

export const todayMealListAtom = atom<TodayMeal[]>([]);

/**
 * 오늘의 식사메뉴 추가.
 * - 중복 시 duplicate 결과 반환
 */
export const addTodayMealItemAtom = atom(
  null,
  (get, set, newMeal: TodayMeal): AppError<TodayMeal> | AppSuccess<TodayMeal> => {
    const todayMealList = get(todayMealListAtom);

    // 목록에 있는지 검사
    const duplicateItem = todayMealList.find(({ meal }) => {
      return meal.id === newMeal.meal.id;
    });

    if (duplicateItem) {
      return {
        type: 'duplicate',
        item: duplicateItem,
        message: '이미 목록에 존재해요',
      };
    }

    set(todayMealListAtom, [...todayMealList, newMeal]);

    return {
      type: 'success',
      item: newMeal,
    };
  },
);

/**
 * 오늘의 식사 메뉴 삭제
 * - 만약 하나만 삭제할 경우 하나를 배열로 감싸서 파라미터로 보내면 된다.
 */
export const deleteTodayMealItemAtom = atom(null, (get, set, ids: string[]) => {
  const list = get(todayMealListAtom);

  const idSet = new Set(ids);

  set(
    todayMealListAtom,
    list.filter((x) => !idSet.has(x.meal.id)),
  );
});

/** 메인메뉴로 변경 */
export const changeMainMenuAtom = atom(null, (get, set, mealId: string) => {
  const list = get(todayMealListAtom);

  const changedList = list.map((item) => {
    const role = item.meal.id === mealId ? ('main' as const) : ('side' as const);
    return { ...item, role };
  });

  set(todayMealListAtom, changedList);
});
