import { allIngredientList, allMealList } from '@/constants';
import { SelectableItem } from '@/types/selectableItemAndTrackedItem';
import { EnrichShoppingItem, ShoppingItem } from '@/types/shoppingList';
import { nanoid } from 'nanoid/non-secure';

// export type CustomIngredient = Pick<
//   Ingredient,
//   'label' | 'category' | 'defaultStorage' | 'expirationDays'
// > & {
//   type: 'custom';
//   /** nanoid */
//   id: string;
// };

export const createShoppingItem = (inputValue: string): EnrichShoppingItem => {
  const ingredient = allIngredientList.find(({ label }) => label === inputValue);
  const meal = allMealList.find(({ label }) => label === inputValue);

  const baseItem = {
    id: nanoid(),
    isPurchased: false,
  };

  if (ingredient) {
    return {
      ...baseItem,
      type: 'ingredient',
      ingredientId: ingredient.id,
      ingredient,
    };
  }

  if (meal) {
    return {
      ...baseItem,
      type: 'meal',
      mealId: meal.id,
      meal,
    };
  }

  return {
    ...baseItem,
    type: 'custom',
    customLabel: inputValue,
  };
};

export const convertToShoppingItem = (item: SelectableItem): ShoppingItem => {
  const baseItem = {
    id: nanoid(),
    isPurchased: false,
  };

  if (item.type === 'ingredient') {
    return {
      ...baseItem,
      type: 'ingredient',
      ingredientId: item.id,
    };
  }

  if (item.type === 'meal') {
    return {
      ...baseItem,
      type: 'meal',
      mealId: item.id,
    };
  }

  return {
    ...baseItem,
    type: 'custom',
    customLabel: item.label,
  };
};
