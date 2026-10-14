import {
  allIngredientList,
  allFoodList,
  initialCustomIngredient,
  initialCustomFood,
} from '@/constants';
import { EnrichedShoppingItem } from '@/types/shoppingItem';
import { suggestItemCategory } from '@/utils/suggestItemCategory';
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

  // 앱데이터가 없는 사용자 정의 항목인 경우
  const suggestion = suggestItemCategory(inputValue);

  if (suggestion) {
    if (suggestion.kind === 'food') {
      return {
        ...baseItem,
        type: suggestion.kind,
        foodId: initialCustomFood.id,
        food: {
          ...initialCustomFood,
          label: inputValue,
          category: suggestion.category,
        },
      };
    }
    if (suggestion.kind === 'ingredient') {
      return {
        ...baseItem,
        type: suggestion.kind,
        ingredientId: initialCustomIngredient.id,
        ingredient: {
          ...initialCustomIngredient,
          label: inputValue,
          category: suggestion.category,
        },
      };
    }
  }

  return {
    ...baseItem,
    type: 'ingredient',
    ingredientId: initialCustomIngredient.id,
    ingredient: {
      ...initialCustomIngredient,
      label: inputValue,
    },
  };
};
