import { allIngredients } from '@/constants';
import { ShoppingItem } from '@/types/shoppingList';

export const duplicateShoppingItem = (inputValue: string, list: ShoppingItem[]) => {
  const ingredient = allIngredients.find(({ label }) => label === inputValue);

  const duplicateItem = list.find(({ customLabel, ingredientId }) => {
    if (ingredient) return ingredientId === ingredient?.id;
    return customLabel === inputValue;
  });

  return duplicateItem;
};
