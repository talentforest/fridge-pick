import { allIngredientList, allMealList } from '@/constants';
import { EnrichShoppingItem } from '@/types/shoppingList';
import { nanoid } from 'nanoid/non-secure';

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
