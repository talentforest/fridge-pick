import { allIngredientList, allMealList } from '@/constants';
import { allPreparedFoodList } from '@/constants/preparedFood/preparedFood';
import {
  IngredientKey,
  MealKey,
  PreparedFoodKey,
  SelectableItem,
} from '@/types/selectableItem';
import { TrackedItem } from '@/types/trackedItem';

/** 실제 사용자 아이템을 찾을 수 있는 키 생성
 * @param item: SelectableItem
 * `${ingredientId}|${mealId}|${preparedFood}`; 형식으로 반환
 */
export function createSelectableItemKey(item?: SelectableItem) {
  if (!item) return `||`;
  const ingredientId = item.kind === 'ingredient' ? item.id : '';
  const preparedFoodId = item.kind === 'preparedFood' ? item.id : '';
  const mealId = item.kind === 'meal' ? item.id : '';

  return `${ingredientId}|${preparedFoodId}|${mealId}`;
}

/** 실제 사용자 아이템을 찾을 수 있는 키 생성
 * @param item: TrackedItem
 * `${ingredientId}|${customLabel}|${mealId}|${preparedFood}`; 형식으로 반환
 */
export function createTrackedItemKey(item?: TrackedItem) {
  if (!item) return `|||`;
  const ingredientId = item.type === 'ingredient' ? item.ingredientId : '';
  const preparedFoodId = item.type === 'custom' ? item.id : '';
  const mealId = item.type === 'meal' ? item.mealId : '';
  const customLabel = item.type === 'custom' ? item.customLabel : '';

  return `${ingredientId}|${customLabel}|${mealId}|${preparedFoodId}`;
}

export function parseKey(key: string) {
  return key.split('|') as [IngredientKey, string, MealKey, PreparedFoodKey];
}

/** 키로 보관함아이템 or 장보기아이템 존재하는지 찾기
 * boolean 반환
 */
export const findTrackedItemWithKey = (item: TrackedItem, key: string) => {
  const [ingredientId, customLabel, mealId, preparedFoodId] = parseKey(key);

  if (item.type === 'ingredient') return item.ingredientId === ingredientId;
  if (item.type === 'preparedFood') return item.preparedFoodId === preparedFoodId;
  if (item.type === 'custom') return item.customLabel === customLabel;
  return item.mealId === mealId;
};

/** 키로 식재료가 존재하는지 찾기
 * boolean 반환
 */
export const findSelectableItemWithKey = (item: SelectableItem, key: string): boolean => {
  const [ingredientId, preparedFoodId, mealId] = parseKey(key);

  if (item.kind === 'ingredient') return item.id === ingredientId;
  if (item.kind === 'preparedFood') return item.id === preparedFoodId;
  return item.id === mealId;
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
    throw new Error(`Ingredient not found: ${mealId}`);
  }
  return result;
}

/** 키로 완성요리 정보 찾기 */
export function findPreparedFood(preparedFoodId: PreparedFoodKey) {
  const result = allPreparedFoodList.find(({ id }) => id === preparedFoodId);
  if (!result) {
    throw new Error(`Ingredient not found: ${preparedFoodId}`);
  }
  return result;
}
