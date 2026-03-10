import { mockStorageItemList } from '@/constants';
import { StorageItem, StorageTypeId } from '@/types/storage';
import { atom } from 'jotai';
import { atomFamily } from 'jotai-family';

export const storageItemListAtom = atom<StorageItem[]>(mockStorageItemList); // TODO: 첫사용에만 가짜배열, 이후에 사용자 정보로 등록

/**
 * 각 스토리지 아이템 목록.
 * storageItemList을 기반으로 자동 계산되는 파생 상태.
 */
export const storageItemsAtom = atomFamily((storage: StorageTypeId) =>
  atom((get) =>
    get(storageItemListAtom).filter((item) => item.storage.type === storage),
  ),
);
