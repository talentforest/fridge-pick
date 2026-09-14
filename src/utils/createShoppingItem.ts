import { allIngredientList, allFoodList } from '@/constants';
import { SelectableItem } from '@/types/selectableItem';
import { EnrichedShoppingItem, ShoppingItem } from '@/types/shoppingItem';
import { nanoid } from 'nanoid/non-secure';

export const createShoppingItem = (inputValue: string): EnrichedShoppingItem => {
  const ingredient = allIngredientList.find(({ label }) => label === inputValue);
  const food = allFoodList.find(({ label }) => label === inputValue);

  const baseItem = {
    id: nanoid(),
    isPurchased: false,
  };

  if (food) {
    return {
      ...baseItem,
      type: 'food',
      foodId: food.id,
      food,
    };
  }

  if (ingredient) {
    return {
      ...baseItem,
      type: 'ingredient',
      ingredientId: ingredient.id,
      ingredient,
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

  if (item.kind === 'food') {
    return {
      ...baseItem,
      type: 'food',
      foodId: item.id,
    };
  }

  return {
    ...baseItem,
    type: 'custom',
    customLabel: '', // NOTE: 여기 체크
  };
};
