import { allIngredients, mockStorageItemList, storageObj } from '@/constants';
import { AppError, AppSuccess } from '@/hooks/common/useErrorHandler';
import { Ingredient } from '@/types/ingredient';
import { EditableStorageItemData, StorageItem, StorageTypeId } from '@/types/storage';
import { getExpiredStorageItemList } from '@/utils';
import { atom } from 'jotai';
import { atomFamily } from 'jotai-family';
import { nanoid } from 'nanoid/non-secure';

/** Basic */
export const allStorageItemListAtom = atom<StorageItem[]>(mockStorageItemList); // TODO: 첫사용에만 가짜배열, 이후에 사용자 정보로 등록

export const searchKeywordAtom = atom<string>('');

/* -------------------------------------------------------------------------- */
/*                                  Selector                                  */
/* -------------------------------------------------------------------------- */

/** 각 보관함 식재료 아이템 목록 */
export const itemListByStorageAtom = atomFamily((storage: StorageTypeId) =>
  atom((get) =>
    get(allStorageItemListAtom).filter((item) => item.storage.type === storage),
  ),
);

/** nanoid id로 보관함 속 특정 식재료 아이템 찾기
 * ingredientKey로 하지않는 이유는 없는 커스텀 식재료가 있기 때문
 */
export const findItemByStorageAtom = atomFamily((storageItemId: string) =>
  atom((get) => get(allStorageItemListAtom).find((item) => item.id === storageItemId)),
);

/** ingredientKey id로 보관함 속 특정 식재료 아이템 찾기
 * @param key `${ingredientId}|${customLabel}` 형식
 */
export const findStorageItemWithKey = atomFamily((key: string) =>
  atom((get) =>
    get(allStorageItemListAtom).find((item) => {
      const [ingredientId, customLabel] = key.split('|');
      return item.ingredientId === ingredientId || item.customLabel === customLabel;
    }),
  ),
);

/** 보관함 속 소비기한이 지난 식재료 아이템 찾기 */
export const expiredItemListByStorageAtom = atom((get) => {
  const allStorageItemList = get(allStorageItemListAtom);
  return getExpiredStorageItemList(allStorageItemList);
});

/* -------------------------------------------------------------------------- */
/*                                  Actions                                   */
/* -------------------------------------------------------------------------- */

/**
 * 식재료 아이템 추가.
 * - ingredientId와 customLabel 기준으로 중복 검사
 * - 중복 시 duplicate 결과 반환
 */
export const addStorageItemAtom = atom(
  null,
  (get, set, newItem: StorageItem): AppError<StorageItem | Ingredient> | AppSuccess => {
    const list = get(allStorageItemListAtom);

    const ingredient = allIngredients.find(({ id }) => id === newItem.ingredientId);

    const duplicateItem = list.find(({ customLabel, ingredientId }) => {
      if (ingredient) return ingredientId === ingredient?.id;
      return customLabel === newItem.customLabel;
    });

    if (duplicateItem) {
      return {
        type: 'duplicate',
        item: duplicateItem,
        message: `이미 [${storageObj[duplicateItem.storage.type].label}]에 존재하는 식재료에요`,
      };
    }

    const newStorageItem: StorageItem = {
      ...newItem,
      id: nanoid(),
    };

    set(allStorageItemListAtom, [...list, newStorageItem]);

    return { type: 'success', item: newStorageItem };
  },
);

/**
 * 여러 아이템을 일괄 삭제한다.
 * - 만약 하나만 삭제할 경우 하나를 배열로 감싸서 파라미터로 보내면 된다.
 */
export const deleteStorageItemListAtom = atom(null, (get, set, ids: string[]) => {
  const list = get(allStorageItemListAtom);
  const idSet = new Set(ids);

  set(
    allStorageItemListAtom,
    list.filter((x) => !idSet.has(x.id)),
  );
});

/**
 * 특정 아이템을 수정한다.
 */
export const changeStorageItemAtom = atom(
  null,
  (
    get,
    set,
    {
      id,
      newData,
    }: {
      id: string;
      newData: Partial<EditableStorageItemData>;
    },
  ) => {
    if (!id || !newData) return;

    const list = get(allStorageItemListAtom);

    const changedList = list.map((item) =>
      item.id === id ? { ...item, ...newData } : item,
    );

    set(allStorageItemListAtom, changedList);
  },
);
