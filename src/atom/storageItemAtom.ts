import { mockStorageItemList, storageObj } from '@/constants';
import { AppError, AppSuccess } from '@/hooks/common/useErrorHandler';
import { Ingredient } from '@/types/ingredient';
import {
  EditableStorageItemData,
  EnrichStorageItem,
  StorageItem,
  StorageTypeId,
} from '@/types/storage';
import {
  createTrackedItemKey,
  enrichStorageItem,
  findTrackedItemWithKey,
  getCautionStorageItemList,
} from '@/utils';
import { atom } from 'jotai';
import { atomFamily } from 'jotai-family';
import { nanoid } from 'nanoid/non-secure';

const enrichStorageItemList = mockStorageItemList.map(enrichStorageItem);

/** Basic */
export const allStorageItemListAtom = atom<EnrichStorageItem[]>(enrichStorageItemList); // TODO: 첫사용에만 가짜배열, 이후에 사용자 정보로 등록

export const searchKeywordAtom = atom<string>('');

/* -------------------------------------------------------------------------- */
/*                                  Selector                                  */
/* -------------------------------------------------------------------------- */

/** 각 보관함 식재료 아이템 목록 */
export const itemListByStorageAtom = atomFamily((storage: StorageTypeId) =>
  atom((get) => {
    const allStorageItemList = get(allStorageItemListAtom);
    return allStorageItemList.filter((item) => item.storage.type === storage);
  }),
);

/** nanoid id로 보관함 속 특정 식재료 아이템 찾기
 * ingredientId로 하지않는 이유는 없는 커스텀 식재료가 있기 때문
 */
export const findItemByStorageAtom = atomFamily((storageItemId: string) =>
  atom((get) => {
    const allStorageItemList = get(allStorageItemListAtom);
    return allStorageItemList.find((item) => item.id === storageItemId);
  }),
);

/** ingredientId나 customLabel로 보관함 속 특정 식재료 아이템 찾기
 * @param key `${ingredientId}|${customLabel}|${mealId}` 형식
 */
export const findStorageItemWithKeyAtom = atomFamily((key: string) =>
  atom((get) => {
    const storageItemList = get(allStorageItemListAtom);
    return storageItemList.find((storageItem) =>
      findTrackedItemWithKey(storageItem, key),
    );
  }),
);

/** 보관함 속 소비기한 주의 식재료 아이템 찾기
 * - caution: 소비기한이 "민료" + "임박(3일)" 모두 포함 데이터 리턴
 * - expired: 소비기한이 "민료"된 데이터 리턴
 * - expiredSoon: 소비기한이 "임박"(3일 이내)한 데이터만 리턴
 */
export const cautionStorageItemListAtom = atomFamily(
  (type: 'caution' | 'expired' | 'expiredSoon') =>
    atom((get) => {
      const allStorageItemList = get(allStorageItemListAtom);
      return getCautionStorageItemList(allStorageItemList, type);
    }),
);

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
  (
    get,
    set,
    newItem: EnrichStorageItem,
  ): AppError<StorageItem | Ingredient> | AppSuccess => {
    const list = get(allStorageItemListAtom);

    const duplicateItem = list.find((storageItem) => {
      const key = createTrackedItemKey(newItem);

      return !!findTrackedItemWithKey(storageItem, key);
    });

    if (duplicateItem) {
      return {
        type: 'duplicate',
        item: duplicateItem,
        message: `이미 [${storageObj[duplicateItem.storage.type].label}]에 존재하는 식재료에요`,
      };
    }

    const newStorageItem: EnrichStorageItem = {
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

interface Props {
  id: string;
  newData: Partial<EditableStorageItemData>;
}

/** 특정 아이템을 수정한다. */
export const changeStorageItemAtom = atom(null, (get, set, { id, newData }: Props) => {
  if (!id || !newData) return;

  const list = get(allStorageItemListAtom);

  const changedList = list.map((item) => {
    if (item.id === id) {
      // eslint-disable-next-line unused-imports/no-unused-vars
      const { customLabel, ...rest } = newData;

      if (item.type !== 'custom') {
        return { ...item, ...rest };
      }

      return { ...item, ...newData };
    } else {
      return item;
    }
  });

  set(allStorageItemListAtom, changedList);
});
