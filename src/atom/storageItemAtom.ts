import { mockStorageItemList } from '@/constants';
import { StorageItem, StorageTypeId } from '@/types/storage';
import { atom } from 'jotai';
import { atomFamily } from 'jotai-family';

/** Basic */
export const allStorageItemListAtom = atom<StorageItem[]>(mockStorageItemList); // TODO: 첫사용에만 가짜배열, 이후에 사용자 정보로 등록

export const searchKeywordAtom = atom<string>('');

/* -------------------------------------------------------------------------- */
/*                                  Selector                                  */
/* -------------------------------------------------------------------------- */

/**
 * 각 스토리지 아이템 목록.
 * storageItemList을 기반으로 자동 계산되는 파생 상태.
 */
export const itemListByStorageAtom = atomFamily((storage: StorageTypeId) =>
  atom((get) =>
    get(allStorageItemListAtom).filter((item) => item.storage.type === storage),
  ),
);

/* -------------------------------------------------------------------------- */
/*                                  Actions                                   */
/* -------------------------------------------------------------------------- */

export type AddResult =
  | { result: 'success'; item: StorageItem }
  | { result: 'duplicate'; item: StorageItem };

/**
 * 장보기 아이템 추가.
 * - 없으면 label 기준으로 중복 검사
 * - 중복 시 duplicate 결과 반환
 */
export const addItemAtom = atom(null, (get, set, newItem: StorageItem): AddResult => {
  const list = get(allStorageItemListAtom);

  set(allStorageItemListAtom, [...list, newItem]);

  return { result: 'success', item: newItem };
});

/**
 * 여러 아이템을 일괄 삭제한다.
 * - 만약 하나만 삭제할 경우 하나를 배열로 감싸서 파라미터로 보내면 된다.
 */
export const deleteItemsAtom = atom(null, (get, set, ids: string[]) => {
  const list = get(allStorageItemListAtom);
  const idSet = new Set(ids);

  set(
    allStorageItemListAtom,
    list.filter((x) => !idSet.has(x.id)),
  );
});

/**
 * 여러 아이템을 일괄 삭제한다.
 * - 만약 하나만 삭제할 경우 하나를 배열로 감싸서 파라미터로 보내면 된다.
 */
export const changeItemAtom = atom(
  null,
  (
    get,
    set,
    {
      id,
      newData,
    }: {
      id: string;
      newData: Partial<Pick<StorageItem, 'expiresAt' | 'storage' | 'memo'>>;
    },
  ) => {
    const list = get(allStorageItemListAtom);

    const changedList = list.map((item) =>
      item.id === id ? { ...item, ...newData } : item,
    );

    set(allStorageItemListAtom, changedList);
  },
);
