import { allIngredientList, allMealList } from '@/constants';
import { IngredientKey } from '@/types/ingredient';
import { MealKey } from '@/types/meal';
import { SelectableItem, TrackedItem } from '@/types/selectableItem';

/** 실제 사용자 아이템을 찾을 수 있는 키 생성
 * @param item: TrackedItem
 * `${ingredientId}|${customLabel}|${mealId}`; 형식으로 반환
 */
export function createTrackedItemKey(item?: TrackedItem) {
  if (!item) return `||`;
  const ingredientId = item.type === 'ingredient' ? item.ingredientId : '';
  const customLabel = item.type === 'custom' ? item.customLabel : '';
  const mealId = item.type === 'meal' ? item.mealId : '';

  return `${ingredientId}|${customLabel}|${mealId}`;
}

export function parseKey(key: string) {
  return key.split('|') as [IngredientKey, string, MealKey]; // ingredient | custom | meal
}

/** 키로 보관함아이템 or 장보기아이템 존재하는지 찾기
 * boolean 반환
 */
export const findTrackedItemWithKey = (item: TrackedItem, key: string) => {
  const [ingredientId, customLabel, mealId] = parseKey(key);

  if (item.type === 'ingredient') return item.ingredientId === ingredientId;
  if (item.type === 'custom') return item.customLabel === customLabel;
  return item.mealId === mealId;
};

/** 키로 식재료가 존재하는지 찾기
 * boolean 반환
 */
export const findSelectableItemWithKey = (item: SelectableItem, key: string) => {
  const [ingredientId, customLabel, mealId] = parseKey(key);

  if (item.type === 'ingredient') return item.id === ingredientId;
  if (item.type === 'custom') return item.label === customLabel;
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
