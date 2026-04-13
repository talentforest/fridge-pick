import { AppError, AppSuccess } from '@/hooks/common/useErrorHandler';
import { CustomIngredient, Ingredient, IngredientKey } from '@/types/ingredient';
import { atom } from 'jotai';
import { atomFamily } from 'jotai-family';

export const favoriteStorageItemListAtom = atom<(Ingredient | CustomIngredient)[]>([]);

/* -------------------------------------------------------------------------- */
/*                                  Selector                                  */
/* -------------------------------------------------------------------------- */

/** ingredientId나 customLabel로 보관함 속 특정 식재료 아이템 찾기
 * @param key `${ingredientId}|${customLabel}` 형식
 */
export const findFavoriteItemAtom = atomFamily((key: string) => {
  const [ingredientId, customLabel] = key.split('|') as [IngredientKey, string];

  return atom((get) => {
    const favorites = get(favoriteStorageItemListAtom);

    return favorites.find(
      (item) => item.id === ingredientId || item.label === customLabel,
    );
  });
});

/* -------------------------------------------------------------------------- */
/*                                  Actions                                   */
/* -------------------------------------------------------------------------- */

/** 자주먹는 아이템 리스트에 추가.
 * 자주먹는 식재료: 등록된 Ingredient, 커스텀 Ingredient 등록
 */
export const addFavoriteItemAtom = atom(
  null,
  (
    get,
    set,
    newItem: Ingredient | CustomIngredient,
  ): AppError<Ingredient | CustomIngredient> | AppSuccess => {
    const list = get(favoriteStorageItemListAtom);
    set(favoriteStorageItemListAtom, [...list, newItem]);

    return { type: 'success', item: newItem };
  },
);

/** 자주먹는 아이템 리스트에 삭제.
 * 자주먹는 식재료: 등록된 Ingredient, 커스텀 Ingredient 등록
 */
export const deleteFavoriteItemAtom = atom(null, (get, set, id: string) => {
  const list = get(favoriteStorageItemListAtom);

  set(
    favoriteStorageItemListAtom,
    list.filter((x) => x.id !== id),
  );
});
