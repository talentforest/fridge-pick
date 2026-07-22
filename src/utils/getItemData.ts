import {
  ingredientCategoryObj,
  mealCategoryObj,
  noCategoryObj,
  preparedFoodCategoryObj,
} from '@/constants';
import { SelectableItem } from '@/types/selectableItem';
import { EnrichShoppingItem } from '@/types/shoppingList';
import { EnrichedStorageItem } from '@/types/storage';

export const getTrackedItemData = (item: EnrichShoppingItem | EnrichedStorageItem) => {
  const initialExpirationDays = {
    fridge: undefined,
    freezer: undefined,
    pantry: undefined,
  };

  switch (item.type) {
    case 'meal':
      return {
        label: item.meal?.label || '찾을 수 없음',
        categoryLabel: mealCategoryObj[item.meal.category].label,
        expirationDays: initialExpirationDays,
      };

    case 'preparedFood':
      return {
        label: item.preparedFood?.label || '찾을 수 없음',
        categoryLabel: preparedFoodCategoryObj[item.preparedFood.category].label,
        expirationDays: item.preparedFood.expirationDays,
      };

    case 'ingredient':
      return {
        label: item.ingredient?.label || '찾을 수 없음',
        categoryLabel: ingredientCategoryObj[item.ingredient.category].label,
        expirationDays: item.ingredient.expirationDays,
      };

    case 'custom':
      return {
        label: item.customLabel || '찾을 수 없음',
        categoryLabel: noCategoryObj.no_category.label,
        expirationDays: initialExpirationDays,
      };
  }
};

export const getSelectableItemLabelAndCategory = (item: SelectableItem) => {
  switch (item.kind) {
    case 'meal':
      return {
        label: item?.label || '찾을 수 없음',
        categoryLabel: mealCategoryObj[item.category].label,
      };

    case 'preparedFood':
      return {
        label: item?.label || '찾을 수 없음',
        categoryLabel: preparedFoodCategoryObj[item.category].label,
      };

    case 'ingredient':
      return {
        label: item?.label || '찾을 수 없음',
        categoryLabel: ingredientCategoryObj[item.category].label,
      };
  }
};
