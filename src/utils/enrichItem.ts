import {
  ConsumableFood,
  ConsumableFoodWithEnrichedFoodStructure,
  EnrichedFoodStructure,
  FoodComponentItem,
  FoodStructure,
} from '@/types/selectableItem';
import { EnrichedShoppingItem, ShoppingItem } from '@/types/shoppingList';
import { EnrichedStorageItem, StorageItem } from '@/types/storage';
import { findIngredient, findMeal, findPreparedFood } from '@/utils/findItem';

export function enrichTrackedItem(item: StorageItem): EnrichedStorageItem;

export function enrichTrackedItem(item: ShoppingItem): EnrichedShoppingItem;

export function enrichTrackedItem(item: StorageItem | ShoppingItem) {
  if (item.type === 'ingredient') {
    const ingredient = findIngredient(item.ingredientId);

    return {
      ...item,
      ingredient,
    };
  }

  if (item.type === 'preparedFood') {
    const preparedFood = findPreparedFood(item.preparedFoodId);

    return {
      ...item,
      preparedFood,
    };
  }

  if (item.type === 'meal') {
    const meal = findMeal(item.mealId);

    return {
      ...item,
      meal,
    };
  }

  return item;
}

export function enrichFoodStructure(structure: FoodStructure): EnrichedFoodStructure {
  const resolveItem = ({ kind, id }: FoodComponentItem) => {
    if (kind === 'meal') return findMeal(id);
    if (kind === 'preparedFood') return findPreparedFood(id);
    return findIngredient(id);
  };

  return {
    essential: structure.essential.map(resolveItem),
    common: structure.common.map(resolveItem),
    seasoning: structure.seasoning.map(resolveItem) as any, // NOTE
    optional: structure.optional?.map(resolveItem),
  };
}

export const getConsumableFoodListWithEnrichedFoodStructure = (
  foodList: ConsumableFood[],
): ConsumableFoodWithEnrichedFoodStructure[] => {
  return foodList.map((food) => {
    const { foodStructure: i, ...rest } = food;
    if (!i) return rest;

    const foodStructure = enrichFoodStructure(i);
    return { ...food, foodStructure };
  });
};
