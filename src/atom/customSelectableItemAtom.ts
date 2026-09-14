import { AppError, AppSuccess } from '@/hooks';
import { SelectableItem } from '@/types/selectableItem';
import { atom } from 'jotai';

export const customSelectableItemListAtom = atom<SelectableItem[]>([]);

/**
 * 식재료 아이템 추가.
 * - ingredientId와 customLabel 기준으로 중복 검사
 * - 중복 시 duplicate 결과 반환
 */
export const addCustomSelectableItemAtom = atom(
  null,
  (get, set, newItem: SelectableItem): AppError<SelectableItem> | AppSuccess => {
    const list = get(customSelectableItemListAtom);

    // const duplicateItem = list.find((storageItem) => {
    //   const key = createTrackedItemKey(newItem);

    //   return !!findTrackedItemWithKey(storageItem, key);
    // });

    // if (duplicateItem) {
    //   return {
    //     type: 'duplicate',
    //     item: duplicateItem,
    //     message: `이미 [${storageObj[duplicateItem.storage.type].label}]에 존재하는 식재료에요`,
    //   };
    // }

    set(customSelectableItemListAtom, [...list, newItem]);

    return { type: 'success', item: newItem };
  },
);
