import { EnrichShoppingItem, ShoppingItem } from '@/types/shoppingList';
import { EnrichStorageItem, StorageItem } from '@/types/storage';
import { findIngredient, findMeal } from '@/utils/findItem';

export function enrichStorageItem(item: StorageItem): EnrichStorageItem {
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
