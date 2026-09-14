import {
  Food,
  FoodWithEnrichedFoodStructure,
  EnrichedFoodStructure,
  FoodComponentItem,
  FoodStructure,
} from '@/types/selectableItem';
import { EnrichedShoppingItem, ShoppingItem } from '@/types/shoppingItem';
import { EnrichedStorageItem, StorageItem } from '@/types/storage';
import { findIngredient, findFood } from '@/utils/findItem';

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

  if (item.type === 'food') {
    const food = findFood(item.foodId);

    return {
      ...item,
      food,
    };
  }

  return item;
}

export function enrichFoodStructure(structure: FoodStructure): EnrichedFoodStructure {
  const resolveItem = ({ kind, id }: FoodComponentItem) => {
    if (kind === 'food') return findFood(id);
    return findIngredient(id);
  };

  return {
    essential: structure.essential.map(resolveItem),
    common: structure.common.map(resolveItem),
    seasoning: structure.seasoning.map(resolveItem) as any, // NOTE
    optional: structure.optional?.map(resolveItem),
  };
}

export const getFoodListWithEnrichedFoodStructure = (
  foodList: Food[],
): FoodWithEnrichedFoodStructure[] => {
  return foodList.map((food) => {
    const { foodStructure: i, ...rest } = food;
    if (!i) return rest;

    const foodStructure = enrichFoodStructure(i);
    return { ...food, foodStructure };
  });
};
