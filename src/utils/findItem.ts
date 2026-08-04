import { allIngredientList, allMealList, allPreparedFoodList } from '@/constants';
import {
  IngredientKey,
  MealKey,
  PreparedFoodKey,
  SelectableItem,
} from '@/types/selectableItem';
import { EnrichedStorageItem, StorageItem, TrackedItem } from '@/types/storage';

/** SelectableItem을 찾을 수 있는 키 생성
 * @param item: SelectableItem
 * `${ingredientId}|${mealId}|${preparedFood}`; 형식으로 반환
 */
export function createSelectableItemKey(item?: SelectableItem) {
  if (!item) return `||`;
  const ingredientId = item.kind === 'ingredient' ? item.id : '';
  const preparedFoodId = item.kind === 'preparedFood' ? item.id : '';
  const mealId = item.kind === 'meal' ? item.id : '';

  return `${ingredientId}|${mealId}|${preparedFoodId}`;
}

/** TrackedItem을 찾을 수 있는 키 생성
 * @param item: TrackedItem
 * `${ingredientId}|${mealId}|${preparedFood}|${customLabel}`; 형식으로 반환
 */
export function createTrackedItemKey(item?: TrackedItem) {
  if (!item) return `|||`;
  const ingredientId = item.type === 'ingredient' ? item.ingredientId : '';
  const preparedFoodId = item.type === 'preparedFood' ? item.preparedFoodId : '';
  const mealId = item.type === 'meal' ? item.mealId : '';
  const customLabel = item.type === 'custom' ? item.customLabel : '';

  return `${ingredientId}|${mealId}|${preparedFoodId}|${customLabel}`;
}

export function parseKey(key: string) {
  return key.split('|') as [IngredientKey, MealKey, PreparedFoodKey, string];
}

/** 키로 보관함아이템 or 장보기아이템 존재하는지 찾기
 * boolean 반환
 */
export const findTrackedItemWithKey = (item: TrackedItem, key: string) => {
  const [ingredientId, mealId, preparedFoodId, customLabel] = parseKey(key);

  if (item.type === 'ingredient') return item.ingredientId === ingredientId;
  if (item.type === 'preparedFood') return item.preparedFoodId === preparedFoodId;
  if (item.type === 'custom') return item.customLabel === customLabel;
  return item.mealId === mealId;
};

/** 키로 식재료가 존재하는지 찾기
 * boolean 반환
 */
export const findSelectableItemWithKey = (item: SelectableItem, key: string): boolean => {
  const [ingredientId, mealId, preparedFoodId] = parseKey(key);

  if (item.kind === 'ingredient') return item.id === ingredientId;
  if (item.kind === 'preparedFood') return item.id === preparedFoodId;
  return item.id === mealId;
};

export type SelectableItemRef = {
  kind: SelectableItem['kind'];
  id: string;
};

export const findSelectableItem = ({ kind, id }: SelectableItemRef) => {
  if (kind === 'ingredient') return findIngredient(id as IngredientKey);
  if (kind === 'preparedFood') return findPreparedFood(id as PreparedFoodKey);
  return findMeal(id as MealKey);
};

/** 키로 식재료 정보 찾기 */
export function findIngredient(ingredientId: IngredientKey) {
  const result = allIngredientList.find(({ id }) => id === ingredientId);
  if (!result) {
    throw new Error(`Ingredient not found: ${ingredientId}`);
  }
  return result;
}

/** 키로 완성요리 정보 찾기 */
export function findMeal(mealId: MealKey) {
  const result = allMealList.find(({ id }) => id === mealId);
  if (!result) {
    throw new Error(`Meal not found: ${mealId}`);
  }
  return result;
}

/** 키로 완성요리 정보 찾기 */
export function findPreparedFood(preparedFoodId: PreparedFoodKey) {
  const result = allPreparedFoodList.find(({ id }) => id === preparedFoodId);
  if (!result) {
    throw new Error(`PreparedFood not found: ${preparedFoodId}`);
  }
  return result;
}

export const hasConsumableFoodInStorage = (
  storageItems: EnrichedStorageItem[],
  foodId: string,
) => {
  return storageItems.some((item) => {
    if (item.type === 'meal') {
      return item.mealId === foodId;
    }
    if (item.type === 'preparedFood') {
      return item.preparedFoodId === foodId;
    }
  });
};

export const checkHasStorageItem = (
  storageItem: StorageItem | EnrichedStorageItem,
  selectableItemId: SelectableItem['id'],
) => {
  if (storageItem.type === 'meal') {
    return storageItem.mealId === selectableItemId;
  }
  if (storageItem.type === 'ingredient') {
    return storageItem.ingredientId === selectableItemId;
  }
  if (storageItem.type === 'preparedFood') {
    return storageItem.preparedFoodId === selectableItemId;
  }
};
