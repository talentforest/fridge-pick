import { allIngredientList, allFoodList } from '@/constants';
import {
  IngredientKey,
  FoodKey,
  SelectableItem,
  IngredientId,
  FoodId,
} from '@/types/selectableItem';
import { EnrichedStorageItem, StorageItem, TrackedItem } from '@/types/storage';

/** SelectableItem을 찾을 수 있는 키 생성
 * @param item: SelectableItem
 * `${ingredientId}|${foodId}`; 형식으로 반환
 */
export function createSelectableItemKey(item?: SelectableItem) {
  if (!item) return `|`;
  const ingredientId = item.kind === 'ingredient' ? item.id : '';
  const foodId = item.kind === 'food' ? item.id : '';

  return `${ingredientId}|${foodId}`;
}

/** TrackedItem을 찾을 수 있는 키 생성
 * @param item: TrackedItem
 * `${ingredientId}|${foodId}` 형식으로 반환
 */
export function createTrackedItemKey(item?: TrackedItem) {
  if (!item) return `||`;
  const ingredientId = item.type === 'ingredient' ? item.ingredientId : '';

  const foodId = item.type === 'food' ? item.foodId : '';

  return `${ingredientId}|${foodId}`;
}

export function parseKey(key: string) {
  return key.split('|') as [IngredientKey, FoodKey, string];
}

/** 키로 보관함아이템 or 장보기아이템 존재하는지 찾기
 * boolean 반환
 */
export const findTrackedItemWithKey = (item: TrackedItem, key: string) => {
  const [ingredientId, foodId] = parseKey(key);

  if (item.type === 'ingredient') return item.ingredientId === ingredientId;

  return item.foodId === foodId;
};

/** 키로 식재료가 존재하는지 찾기
 * boolean 반환
 */
export const findSelectableItemWithKey = (item: SelectableItem, key: string): boolean => {
  const [ingredientId, foodId] = parseKey(key);

  if (item.kind === 'ingredient') return item.id === ingredientId;
  return item.id === foodId;
};

export type SelectableItemRef = {
  kind: SelectableItem['kind'];
  id: string;
};

export const findSelectableItem = ({ kind, id }: SelectableItemRef) => {
  if (kind === 'ingredient') return findIngredient(id as IngredientKey);
  return findFood(id as FoodKey);
};

/** 키로 식재료 정보 찾기 */
export function findIngredient(ingredientId: IngredientId) {
  if (ingredientId.includes('custom:')) {
    return;
  }

  const result = allIngredientList.find(({ id }) => id === ingredientId);

  if (!result) {
    throw new Error(`Ingredient not found: ${ingredientId}`);
  }
  return result;
}

/** 키로 완성요리 정보 찾기 */
export function findFood(foodId: FoodId) {
  if (foodId.includes('custom:')) {
    return;
  }

  const result = allFoodList.find(({ id }) => id === foodId);
  if (!result) {
    throw new Error(`Food not found: ${foodId}`);
  }
  return result;
}

export const hasFoodInStorage = (storageItems: EnrichedStorageItem[], foodId: string) => {
  return storageItems.some((item) => {
    if (item.type === 'food') {
      return item.foodId === foodId;
    }
  });
};

export const checkHasStorageItem = (
  storageItem: StorageItem | EnrichedStorageItem,
  selectableItemId: SelectableItem['id'],
) => {
  if (storageItem.type === 'food') {
    return storageItem.foodId === selectableItemId;
  }
  if (storageItem.type === 'ingredient') {
    return storageItem.ingredientId === selectableItemId;
  }
};
