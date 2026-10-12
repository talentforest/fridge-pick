import { ingredientCategoryObj, foodCategoryObj } from '@/constants';
import {
  Durations,
  Food,
  Ingredient,
  RecommendedDurations,
  SelectableItem,
} from '@/types/selectableItem';
import { EnrichedShoppingItem } from '@/types/shoppingItem';
import { EnrichedStorageItem } from '@/types/storage';

export const getTrackedItemData = (item: EnrichedShoppingItem | EnrichedStorageItem) => {
  const initialExpirationDays = {
    fridge: { value: 1, unit: 'week' },
    freezer: undefined,
    pantry: undefined,
  } as Durations;

  const initialDurations: RecommendedDurations = { packaged: initialExpirationDays };

  switch (item.type) {
    case 'food':
      return {
        label: item.food?.label || '찾을 수 없음',
        categoryLabel: foodCategoryObj[item.food.category].label,
        recommendedDurations: item.food.recommendedDurations || initialDurations,
      };

    case 'ingredient':
      return {
        label: item.ingredient?.label || '찾을 수 없음',
        categoryLabel: ingredientCategoryObj[item.ingredient.category].label,
        recommendedDurations: item.ingredient.recommendedDurations,
      };
  }
};

export const getSelectableItemLabelAndCategory = (item: SelectableItem) => {
  switch (item.kind) {
    case 'food':
      return {
        label: item?.label || '찾을 수 없음',
        categoryLabel: foodCategoryObj[item.category].label,
      };

    case 'ingredient':
      return {
        label: item?.label || '찾을 수 없음',
        categoryLabel: ingredientCategoryObj[item.category].label,
      };
  }
};

export const getStorageSelectableItem = (
  storageItem: EnrichedStorageItem,
): Ingredient | Food => {
  switch (storageItem.type) {
    case 'ingredient':
      return storageItem.ingredient;

    case 'food':
      return storageItem.food;
  }
};
