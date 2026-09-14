import { AppError, AppSuccess } from '@/hooks';
import { TodayFood } from '@/types/todayFood';

import { atom } from 'jotai';

export const todayFoodListAtom = atom<TodayFood[]>([]);

/**
 * 오늘 먹을 메뉴 추가.
 * - 중복 시 duplicate 결과 반환
 */
export const addTodayFoodAtom = atom(
  null,
  (get, set, newFood: TodayFood): AppError<TodayFood> | AppSuccess<TodayFood> => {
    const todayFoodList = get(todayFoodListAtom);

    // 목록에 있는지 검사
    const duplicateItem = todayFoodList.find(({ food }) => {
      return food.id === newFood.food.id;
    });

    if (duplicateItem) {
      return {
        type: 'duplicate',
        item: duplicateItem,
        message: '이미 목록에 존재해요',
      };
    }

    set(todayFoodListAtom, [...todayFoodList, newFood]);

    return {
      type: 'success',
      item: newFood,
    };
  },
);

/**
 * 오늘 먹을 메뉴 삭제
 * - 만약 하나만 삭제할 경우 하나를 배열로 감싸서 파라미터로 보내면 된다.
 */
export const deleteTodayFoodAtom = atom(null, (get, set, ids: string[]) => {
  const list = get(todayFoodListAtom);

  const idSet = new Set(ids);

  set(
    todayFoodListAtom,
    list.filter((x) => !idSet.has(x.food.id)),
  );
});

/** 메인메뉴로 변경 */
export const changeMainFoodAtom = atom(null, (get, set, foodId: string) => {
  const list = get(todayFoodListAtom);

  const changedList = list.map((item) => {
    const role = item.food.id === foodId ? ('main' as const) : ('side' as const);
    return { ...item, role };
  });

  set(todayFoodListAtom, changedList);
});
