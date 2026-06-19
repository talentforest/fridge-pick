import { allStorageItemListAtom } from '@/atom/storageItemAtom';
import { mockShoppingList, initialCustomStorageItem } from '@/constants';
import { AppError, AppSuccess } from '@/hooks';
import { ShoppingItem } from '@/types/shoppingList';
import { EnrichStorageItem } from '@/types/storage';
import {
  formatDateString,
  convertIngredientToStorageItem,
  createTrackedItemKey,
  enrichShoppinItem,
  findTrackedItemWithKey,
  createShoppingItem,
  convertMealToStorageItem,
} from '@/utils';
import { Timestamp } from 'firebase/firestore';
import { atom } from 'jotai';
import { atomFamily } from 'jotai-family';

const now = () => Timestamp.now();

export const shoppingListAtom = atom(mockShoppingList.map(enrichShoppinItem)); // TODO: 첫사용에만 가짜배열, 이후에 사용자 정보로 등록

/* -------------------------------------------------------------------------- */
/*                                  Selector                                  */
/* -------------------------------------------------------------------------- */

/** 특정 식재료가 장보기목록에 포함되어있는지 검사 */
export const findShoppingItem = atomFamily((key: string) => {
  return atom((get) => {
    const favorites = get(shoppingListAtom);
    return favorites.find((item) => findTrackedItemWithKey(item, key));
  });
});

/** 구매 완료된 아이템 목록 */
export const purchasedItemsAtom = atom((get) =>
  get(shoppingListAtom).filter((x) => x.isPurchased),
);

/** 구매 완료된 아이템 목록 개수 */
export const purchasedCountAtom = atom((get) => get(purchasedItemsAtom).length);

/** 구매 완료된 아이템 중 이미 보관함에 하나라도 존재하는 경우 */
export const isInStorageShoppingItemAtom = atom((get) => {
  const allStorageItemList = get(allStorageItemListAtom);
  const purchasedItems = get(purchasedItemsAtom);

  return purchasedItems.some((purchaseItem) => {
    const key = createTrackedItemKey(purchaseItem);
    return allStorageItemList.some((storageItem) =>
      findTrackedItemWithKey(storageItem, key),
    );
  });
});

/** 구매 완료된 아이템이 하나라도 존재하는지 여부 */
export const hasPurchasedAtom = atom((get) =>
  get(shoppingListAtom).some((x) => x.isPurchased),
);

/**
 * 모든 아이템이 구매 완료 상태인지 여부.
 * 목록이 비어있을 경우 false를 반환한다.
 */
export const isAllPurchasedAtom = atom((get) => {
  const list = get(shoppingListAtom);
  return list.length > 0 && list.every((x) => x.isPurchased);
});

/** 구매 완료한 장보기 아이템을 보관함 아이템으로 전환한 목록 */
export const convertedStorageItemListAtom = atom((get): EnrichStorageItem[] => {
  const purchasedItemList = get(purchasedItemsAtom);

  const now = new Date();

  const itemList = purchasedItemList.map((item) => {
    const common = {
      id: item.id,
      purchasedAt: formatDateString(now, 'yyyy-MM-dd'),
    };

    if (item.type === 'meal') {
      return {
        ...convertMealToStorageItem(item.meal),
        ...common,
      };
    }

    if (item.type === 'ingredient') {
      return {
        ...convertIngredientToStorageItem(item.ingredient),
        ...common,
      };
    }

    return {
      ...initialCustomStorageItem,
      ...common,
      customLabel: item.customLabel!, // TODO: 타입 안정성 강화하기
    };
  });

  return itemList;
});

/* -------------------------------------------------------------------------- */
/*                                  Actions                                   */
/* -------------------------------------------------------------------------- */

/**
 * 장보기 아이템 추가.
 * - 없으면 label 기준으로 중복 검사
 * - 중복 시 duplicate 결과 반환
 */
export const addShoppingItemAtom = atom(
  null,
  (get, set, inputValue: string): AppError<ShoppingItem> | AppSuccess => {
    const shoppingList = get(shoppingListAtom);

    // 장보기 목록에 있는지 검사
    const duplicateItem = shoppingList.find((shoppingItem) => {
      if (shoppingItem.type === 'ingredient') {
        return shoppingItem.ingredient.label === inputValue;
      }

      if (shoppingItem.type === 'meal') {
        return shoppingItem.meal.label === inputValue;
      }

      return shoppingItem.customLabel === inputValue;
    });

    if (duplicateItem) {
      return {
        type: 'duplicate',
        item: duplicateItem,
        message: '이미 목록에 존재해요',
      };
    }

    const newItem = createShoppingItem(inputValue);

    set(shoppingListAtom, [...shoppingList, newItem]);

    return {
      type: 'success',
      item: newItem,
    };
  },
);

/**
 * 여러 아이템을 일괄 삭제한다.
 * - 만약 하나만 삭제할 경우 하나를 배열로 감싸서 파라미터로 보내면 된다.
 */
export const deleteShoppingItemListAtom = atom(null, (get, set, ids: string[]) => {
  const list = get(shoppingListAtom);
  const idSet = new Set(ids);

  set(
    shoppingListAtom,
    list.filter((x) => !idSet.has(x.id)),
  );
});

/**
 * 특정 아이템의 구매 상태를 토글한다.
 */
export const togglePurchasedAtom = atom(null, (get, set, id: string) => {
  const list = get(shoppingListAtom);

  set(
    shoppingListAtom,
    list.map((x) =>
      x.id === id ? { ...x, isPurchased: !x.isPurchased, updatedAt: now() } : x,
    ),
  );
});

/**
 * 모든 아이템의 구매 상태를 일괄 토글한다.
 * - 모두 구매 완료 상태라면 → 모두 미구매로 변경
 * - 하나라도 미구매 상태라면 → 모두 구매 완료로 변경
 */
export const toggleAllPurchasedAtom = atom(null, (get, set) => {
  const list = get(shoppingListAtom);
  const allChecked = list.length > 0 && list.every((x) => x.isPurchased);

  set(
    shoppingListAtom,
    list.map((x) => ({
      ...x,
      isPurchased: !allChecked,
      updatedAt: now(),
    })),
  );
});

/**
 * 장보기 목록 전체 초기화.
 */
export const clearAllAtom = atom(null, (_get, set) => {
  set(shoppingListAtom, []);
});

/**
 * 구매 완료한 장보기 아이템들을 보관함에 추가
 */
export const addShoppingListToStorageAtom = atom(
  null,
  (get, set, storageItemList: EnrichStorageItem[]) => {
    // list를 보관함 아이템 리스트로 추가
    const allStorageItemList = get(allStorageItemListAtom);

    set(allStorageItemListAtom, [...allStorageItemList, ...storageItemList]);
  },
);
