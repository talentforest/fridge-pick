import IngredientImage from '@/components/selectableItem/ingredient/IngredientImage';
import MealImage from '@/components/selectableItem/meal/MealImage';
import { SelectableItem } from '@/types/selectableItem';
import { EnrichShoppingItem } from '@/types/shoppingList';
import { EnrichStorageItem } from '@/types/storage';

type SelectableItemProps = {
  selectableItem: SelectableItem;
  trackedItem?: never;
};

type TrackedItemProps = {
  trackedItem: EnrichShoppingItem | EnrichStorageItem;
  selectableItem?: never;
};

type ItemImageProps = {
  imageSize?: number;
} & (SelectableItemProps | TrackedItemProps);

export default function ItemImage({
  selectableItem,
  trackedItem,
  imageSize = 55,
}: ItemImageProps) {
  const getSelectableItemImage = (item: SelectableItem) => {
    switch (item.type) {
      case 'meal':
        return <MealImage meal={item} size={imageSize} />;

      case 'ingredient':
        return <IngredientImage ingredient={item} size={imageSize} />;

      case 'custom':
        return <IngredientImage size={imageSize} />;
    }
  };

  const getTrackedItemImage = (item: EnrichShoppingItem | EnrichStorageItem) => {
    switch (item.type) {
      case 'meal':
        return <MealImage meal={item.meal} size={imageSize} />;

      case 'ingredient':
        return <IngredientImage ingredient={item.ingredient} size={imageSize} />;

      case 'custom':
        return <IngredientImage size={imageSize} />;
    }
  };

  if (selectableItem) {
    return getSelectableItemImage(selectableItem);
  }

  if (trackedItem) {
    return getTrackedItemImage(trackedItem);
  }

  return null;
}
