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
