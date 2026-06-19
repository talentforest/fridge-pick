import { initialCustomIngredient } from '@/constants';
import { AppError, AppSuccess } from '@/hooks';
import { SelectableItem } from '@/types/selectableItemAndTrackedItem';
import { EnrichStorageItem } from '@/types/storage';
import { findSelectableItemWithKey } from '@/utils';
import { atom } from 'jotai';
import { atomFamily } from 'jotai-family';

export const favoriteItemListAtom = atom<SelectableItem[]>([]);

export const favoriteIngredientListAtom = atom((get) => {
  const favoriteList = get(favoriteItemListAtom);
  return favoriteList.filter(({ type }) => type !== 'meal');
});

export const favoriteMealListAtom = atom((get) => {
  const favoriteList = get(favoriteItemListAtom);
  return favoriteList.filter(({ type }) => type === 'meal');
});

/* -------------------------------------------------------------------------- */
/*                                  Selector                                  */
/* -------------------------------------------------------------------------- */

/** ingredientId나 customLabel로 보관함 속 특정 식재료 아이템 찾기
 * @param key `${ingredientId}|${customLabel}` 형식
 */
export const findFavoriteItemAtom = atomFamily((key: string) => {
  return atom((get) => {
    const favorites = get(favoriteItemListAtom);
    return favorites.find((ingredient) => findSelectableItemWithKey(ingredient, key));
  });
});

/* -------------------------------------------------------------------------- */
/*                                  Actions                                   */
/* -------------------------------------------------------------------------- */

/** 자주먹는 아이템 리스트에 추가.
 * 자주먹는 식재료: 등록된 Ingredient, 커스텀 Ingredient 등록
 */
export const addFavoriteStorageItemAtom = atom(
  null,
  (get, set, newItem: EnrichStorageItem): AppError<EnrichStorageItem> | AppSuccess => {
    const list = get(favoriteItemListAtom);

    if (newItem.type === 'ingredient') {
      set(favoriteItemListAtom, [...list, newItem.ingredient]);
    }
    if (newItem.type === 'meal') {
      set(favoriteItemListAtom, [...list, newItem.meal]);
    }
    if (newItem.type === 'custom') {
      const customIngredient = {
        ...initialCustomIngredient,
        label: newItem.customLabel,
        defaultStorage: newItem.storage.type,
        expirationDays: { [newItem.storage.type]: newItem.expiresAt },
      };
      set(favoriteItemListAtom, [...list, customIngredient]);
    }
    return { type: 'success', item: newItem };
  },
);

/** 자주먹는 아이템 리스트에 추가.
 * 자주먹는 식재료: 등록된 Ingredient, 커스텀 Ingredient 등록
 */
export const addFavoriteSelectableItemAtom = atom(
  null,
  (get, set, newItem: SelectableItem): AppError<SelectableItem> | AppSuccess => {
    const list = get(favoriteItemListAtom);

    set(favoriteItemListAtom, [...list, newItem]);

    return { type: 'success', item: newItem };
  },
);

/** 자주먹는 아이템 리스트에 삭제.
 * 자주먹는 식재료: 등록된 Ingredient, 커스텀 Ingredient 등록
 */
export const deleteFavoriteItemAtom = atom(null, (get, set, id: string) => {
  const list = get(favoriteItemListAtom);

  set(
    favoriteItemListAtom,
    list.filter((x) => x.id !== id),
  );
});
