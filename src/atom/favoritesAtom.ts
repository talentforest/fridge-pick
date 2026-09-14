import { allStorageItemListAtom } from '@/atom/storageAtom';
import { AppError, AppSuccess } from '@/hooks';
import { Food, SelectableItem } from '@/types/selectableItem';
import { EnrichedStorageItem } from '@/types/storage';
import {
  createSelectableItemKey,
  findSelectableItemWithKey,
  findTrackedItemWithKey,
} from '@/utils';
import { atom } from 'jotai';
import { atomFamily } from 'jotai-family';

export const favoriteItemListAtom = atom<SelectableItem[]>([]);

export const favoriteIngredientListAtom = atom((get) => {
  const favoriteList = get(favoriteItemListAtom);
  return favoriteList.filter(({ kind }) => kind === 'ingredient');
});

export const favoriteFoodListAtom = atom<Food[]>((get) => {
  const favoriteList = get(favoriteItemListAtom);
  return favoriteList.filter(({ kind }) => kind === 'food') as Food[];
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

export const isNotInStorageFavoriteListAtom = atom((get) => {
  const allStorageItemList = get(allStorageItemListAtom);
  const favoriteList = get(favoriteItemListAtom);

  return favoriteList.filter((favoriteItem) => {
    const key = createSelectableItemKey(favoriteItem);
    return !allStorageItemList.some((storageItem) =>
      findTrackedItemWithKey(storageItem, key),
    );
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
  (
    get,
    set,
    newItem: EnrichedStorageItem,
  ): AppError<EnrichedStorageItem> | AppSuccess => {
    const list = get(favoriteItemListAtom);

    if (newItem.type === 'ingredient') {
      set(favoriteItemListAtom, [...list, newItem.ingredient]);
    }

    if (newItem.type === 'food') {
      set(favoriteItemListAtom, [...list, newItem.food]);
    }

    return { type: 'success', item: newItem };
  },
);

/** 자주먹는 아이템 리스트에 추가. */
export const addFavoriteSelectableItemAtom = atom(
  null,
  (get, set, newItem: SelectableItem): AppError<SelectableItem> | AppSuccess => {
    const list = get(favoriteItemListAtom);

    set(favoriteItemListAtom, [...list, newItem]);

    return { type: 'success', item: newItem };
  },
);

/** 자주먹는 아이템을 리스트에서 삭제.
 * 자주먹는 식재료: 등록된 Ingredient, 커스텀 Ingredient 등록
 */
export const deleteFavoriteItemAtom = atom(null, (get, set, id: string) => {
  const list = get(favoriteItemListAtom);

  set(
    favoriteItemListAtom,
    list.filter((x) => x.id !== id),
  );
});

/** 자주먹는 아이템 리스트에 추가.
 * 자주먹는 식재료: 등록된 Ingredient, 커스텀 Ingredient 등록
 */
export const addFavoriteStorageItemListAtom = atom(
  null,
  (
    get,
    set,
    newItemList: EnrichedStorageItem[],
  ): AppError<EnrichedStorageItem[]> | AppSuccess => {
    const list = get(favoriteItemListAtom);

    const newList = newItemList.map((newItem) => {
      if (newItem.type === 'ingredient') {
        return newItem.ingredient;
      }
      return newItem.food;
    });

    set(favoriteItemListAtom, [...list, ...newList]);

    return { type: 'success', item: newList };
  },
);

/** 자주먹는 아이템 리스트에 추가 */
export const addFavoriteSelectableItemListAtom = atom(
  null,
  (get, set, newItemList: SelectableItem[]): AppError<SelectableItem[]> | AppSuccess => {
    const list = get(favoriteItemListAtom);

    set(favoriteItemListAtom, [...list, ...newItemList]);

    return { type: 'success', item: newItemList };
  },
);

/** 자주먹는 아이템 배열을 삭제 */
export const deleteFavoriteItemListAtom = atom(null, (get, set, idList: string[]) => {
  const list = get(favoriteItemListAtom);

  const idSet = new Set(idList);

  set(
    favoriteItemListAtom,
    list.filter((x) => !idSet.has(x.id)),
  );
});
