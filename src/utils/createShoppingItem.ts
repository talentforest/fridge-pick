import { allIngredientList, allMealList, allPreparedFoodList } from '@/constants';
import { SelectableItem } from '@/types/selectableItem';
import { EnrichedShoppingItem, ShoppingItem } from '@/types/shoppingList';
import { nanoid } from 'nanoid/non-secure';

// export type CustomIngredient = Pick<
//   Ingredient,
//   'label' | 'category' | 'defaultStorage' | 'expirationDays'
// > & {
//   type: 'custom';
//   /** nanoid */
//   id: string;
// };

export const createShoppingItem = (inputValue: string): EnrichedShoppingItem => {
  const ingredient = allIngredientList.find(({ label }) => label === inputValue);
  const meal = allMealList.find(({ label }) => label === inputValue);
  const preparedFood = allPreparedFoodList.find(({ label }) => label === inputValue);

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

  if (preparedFood) {
    return {
      ...baseItem,
      type: 'preparedFood',
      preparedFoodId: preparedFood.id,
      preparedFood,
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

  if (item.kind === 'ingredient') {
    return {
      ...baseItem,
      type: 'ingredient',
      ingredientId: item.id,
    };
  }

  if (item.kind === 'meal') {
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
