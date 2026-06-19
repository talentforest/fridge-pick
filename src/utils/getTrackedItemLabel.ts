import { SelectableItem } from '@/types/selectableItemAndTrackedItem';
import { EnrichShoppingItem } from '@/types/shoppingList';
import { EnrichStorageItem } from '@/types/storage';

export const getTrackedItemLabel = (item: EnrichShoppingItem | EnrichStorageItem) => {
  switch (item.type) {
    case 'meal':
      return {
        label: item.meal?.label || '찾을 수 없음',
        category: 'meal' as const,
      };

    case 'ingredient':
      return {
        label: item.ingredient?.label || '찾을 수 없음',
        category: item.ingredient.category,
      };

    case 'custom':
      return {
        label: item.customLabel,
        category: 'noCategory' as const,
      };
  }
};

export const getSelectableItemLabel = (item: SelectableItem) => {
  switch (item.type) {
    case 'ingredient':
    case 'meal':
      return {
        label: item.label || '찾을 수 없음',
        category: 'meal' as const,
      };

    case 'custom':
      return {
        label: item.label,
        category: 'noCategory' as const,
      };
  }
};
