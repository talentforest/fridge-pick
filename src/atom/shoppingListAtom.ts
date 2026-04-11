import { allStorageItemListAtom } from '@/atom/storageItemAtom';
import {
  allIngredients,
  DEFAULT_EXPIRATION_DAYS,
  DEFAULT_STORAGE,
  mockShoppingList,
} from '@/constants';
import { ShoppingItem } from '@/types/shoppingList';
import { StorageItem } from '@/types/storage';

import {
  enrichIngredient,
  formatDateString,
  duplicateShoppingItem,
  calculateExpiresAt,
} from '@/utils';
import { Timestamp } from 'firebase/firestore';
import { atom } from 'jotai';
import { nanoid } from 'nanoid/non-secure';

const now = () => Timestamp.now();

export const shoppingListAtom = atom<ShoppingItem[]>(mockShoppingList); // TODO: 첫사용에만 가짜배열, 이후에 사용자 정보로 등록

/* -------------------------------------------------------------------------- */
/*                                  Selector                                  */
/* -------------------------------------------------------------------------- */

/** 구매 완료된 아이템 목록 */
export const purchasedItemsAtom = atom<ShoppingItem[]>((get) =>
  get(shoppingListAtom).filter((x) => x.isPurchased),
);

/** 구매 완료된 아이템 목록 개수 */
export const purchasedCountAtom = atom((get) => get(purchasedItemsAtom).length);

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

/**
 * 구매 완료한 장보기 아이템을 스토리지 아이템으로 전환한 목록
 */
export const convertedStorageItemListAtom = atom((get) => {
  const purchasedItemList = get(purchasedItemsAtom);

  const now = new Date();

  const itemList = purchasedItemList.map(enrichIngredient).map((item) => {
    const commonBase = {
      id: item.id,
      purchasedAt: formatDateString(now, 'yyyy-MM-dd'),
    };

    const ingredient = item.ingredient;

    const storageItem: StorageItem = ingredient
      ? {
          // Ingredient 마스터 정보가 있는 경우, 있는 커스텀 라벨을 정한경우,
          ...commonBase,
          ...(item.customLabel ? { customLabel: item.customLabel } : {}),
          ingredientId: ingredient.id,
          expiresAt: calculateExpiresAt(
            now,
            ingredient?.expirationDays[ingredient.defaultStorage] ||
              DEFAULT_EXPIRATION_DAYS,
          ),

          storage: { type: ingredient.defaultStorage },
          ...(item.ingredient ? { ingredient: item.ingredient } : {}),
        }
      : {
          // 완전한 커스텀 정보인 경우, Ingredient 마스터 정보가 없는 경우
          ...commonBase,
          customLabel: item.customLabel!,
          expiresAt: calculateExpiresAt(now, DEFAULT_EXPIRATION_DAYS),
          storage: { type: DEFAULT_STORAGE },
        };

    return storageItem;
  });

  return itemList;
});

/* -------------------------------------------------------------------------- */
/*                                  Actions                                   */
/* -------------------------------------------------------------------------- */

export type AddResult =
  | { result: 'success'; item: ShoppingItem }
  | { result: 'duplicate'; item: ShoppingItem };

/**
 * 장보기 아이템 추가.
 * - 없으면 label 기준으로 중복 검사
 * - 중복 시 duplicate 결과 반환
 */
export const addItemAtom = atom(null, (get, set, inputValue: string): AddResult => {
  const list = get(shoppingListAtom);

  // ingredient 마스터 정보가 있는 경우 customLabel은 작성하지 않는다.
  // 따라서 ingredient의 label과 customLabel 모두를 비교한다.
  const duplicateItem = duplicateShoppingItem(inputValue, list);

  if (duplicateItem) {
    return {
      result: 'duplicate',
      item: duplicateItem,
    };
  }

  const ingredient = allIngredients.find(({ label }) => label === inputValue);

  const baseItem = {
    id: nanoid(),
    isPurchased: false,
  };

  const newItem: ShoppingItem = !!ingredient
    ? {
        // 마스터 정보가 있는 경우
        ...baseItem,
        ingredientId: ingredient.id,
      }
    : {
        ...baseItem,
        customLabel: inputValue,
      };

  set(shoppingListAtom, [...list, newItem]);

  return { result: 'success', item: newItem };
});

/**
 * 여러 아이템을 일괄 삭제한다.
 * - 만약 하나만 삭제할 경우 하나를 배열로 감싸서 파라미터로 보내면 된다.
 */
export const deleteItemsAtom = atom(null, (get, set, ids: string[]) => {
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
 * 구매 완료한 장보기 아이템들을 스토리지로 추가
 */
export const addToStorageAtom = atom(null, (get, set, storageItemList: StorageItem[]) => {
  // list를 스토리지 아이템 리스트로 추가
  const allStorageItemList = get(allStorageItemListAtom);

  set(allStorageItemListAtom, [...allStorageItemList, ...storageItemList]);
});
