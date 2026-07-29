import { AppError, AppSuccess } from '@/hooks';
import { TodayMenu } from '@/types/storage';

import { atom } from 'jotai';

export const todayMenuListAtom = atom<TodayMenu[]>([]);

/**
 * 오늘의 식사 추가.
 * - 중복 시 duplicate 결과 반환
 */
export const addTodayMenuAtom = atom(
  null,
  (get, set, newMenu: TodayMenu): AppError<TodayMenu> | AppSuccess<TodayMenu> => {
    const todayMenuList = get(todayMenuListAtom);

    // 목록에 있는지 검사
    const duplicateItem = todayMenuList.find(({ consumableFood }) => {
      return consumableFood.id === newMenu.consumableFood.id;
    });

    if (duplicateItem) {
      return {
        type: 'duplicate',
        item: duplicateItem,
        message: '이미 목록에 존재해요',
      };
    }

    set(todayMenuListAtom, [...todayMenuList, newMenu]);

    return {
      type: 'success',
      item: newMenu,
    };
  },
);

/**
 * 오늘의 식사 삭제
 * - 만약 하나만 삭제할 경우 하나를 배열로 감싸서 파라미터로 보내면 된다.
 */
export const deleteTodayMenuAtom = atom(null, (get, set, ids: string[]) => {
  const list = get(todayMenuListAtom);

  const idSet = new Set(ids);

  set(
    todayMenuListAtom,
    list.filter((x) => !idSet.has(x.consumableFood.id)),
  );
});

/** 메인메뉴로 변경 */
export const changeMainMenuAtom = atom(null, (get, set, foodId: string) => {
  const list = get(todayMenuListAtom);

  const changedList = list.map((item) => {
    const role =
      item.consumableFood.id === foodId ? ('main' as const) : ('side' as const);
    return { ...item, role };
  });

  set(todayMenuListAtom, changedList);
});
