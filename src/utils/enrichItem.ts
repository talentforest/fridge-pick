import {
  EnrichedFoodStructure,
  FoodComponentItem,
  FoodStructure,
} from '@/types/selectableItem';
import { EnrichShoppingItem, ShoppingItem } from '@/types/shoppingList';
import { EnrichedStorageItem, StorageItem } from '@/types/storage';
import { findIngredient, findMeal, findPreparedFood } from '@/utils/findItem';

export function enrichStorageItem(item: StorageItem): EnrichedStorageItem {
  if (item.type === 'ingredient') {
    const ingredient = findIngredient(item.ingredientId);
    return { ...item, ingredient };
  }

  if (item.type === 'preparedFood') {
    const preparedFood = findPreparedFood(item.preparedFoodId);
    return { ...item, preparedFood };
  }

  if (item.type === 'meal') {
    const meal = findMeal(item.mealId);
    return { ...item, meal };
  }

  return item;
}

export function enrichShoppinItem(item: ShoppingItem): EnrichShoppingItem {
  if (item.type === 'ingredient') {
    const ingredient = findIngredient(item.ingredientId);
    return { ...item, ingredient };
  }

  if (item.type === 'meal') {
    const meal = findMeal(item.mealId);
    return { ...item, meal };
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
