import {
  image_empty_basket,
  ingredientCategoryImagesObj,
  mealCategoryImagesObj,
  preparedFoodCategoryImagesObj,
} from '@/constants';
import {
  ConsumableFood,
  ConsumableFoodWithEnrichedFoodStructure,
  SelectableItem,
} from '@/types/selectableItem';
import { EnrichShoppingItem } from '@/types/shoppingList';
import { EnrichedStorageItem } from '@/types/storage';
import { Image } from 'react-native';

type SelectableItemProps = {
  selectableItem: SelectableItem;
  trackedItem?: never;
  consumableFood?: never;
};

type TrackedItemProps = {
  trackedItem: EnrichShoppingItem | EnrichedStorageItem;
  selectableItem?: never;
  consumableFood?: never;
};

type ConsumableFoodProps = {
  consumableFood?: ConsumableFood | ConsumableFoodWithEnrichedFoodStructure;
  selectableItem?: never;
  trackedItem?: never;
};

type FoodImageProps = {
  imageSize?: number;
} & (SelectableItemProps | TrackedItemProps | ConsumableFoodProps);

export default function FoodImage({
  selectableItem,
  trackedItem,
  consumableFood,
  imageSize = 55,
}: FoodImageProps) {
  const getSelectableItemImage = (item: SelectableItem) => {
    switch (item.kind) {
      case 'meal':
        return mealCategoryImagesObj[item.id];

      case 'preparedFood':
        return preparedFoodCategoryImagesObj[item.id];

      case 'ingredient':
        return ingredientCategoryImagesObj[item.category][item.id];
    }
  };

  const getTrackedItemImage = (item: EnrichShoppingItem | EnrichedStorageItem) => {
    switch (item.type) {
      case 'meal':
        return mealCategoryImagesObj[item.meal.id];

      case 'preparedFood':
        return preparedFoodCategoryImagesObj[item.preparedFood.id];

      case 'ingredient':
        return ingredientCategoryImagesObj[item.ingredient.category][item.ingredientId];
    }
  };

  const getConsumableFoodImage = (
    item: ConsumableFood | ConsumableFoodWithEnrichedFoodStructure,
  ) => {
    switch (item.kind) {
      case 'meal':
        return mealCategoryImagesObj[item.id];

      case 'preparedFood':
        return preparedFoodCategoryImagesObj[item.id];
    }
  };

  const getSource = () => {
    if (trackedItem) return getTrackedItemImage(trackedItem);

    if (selectableItem) return getSelectableItemImage(selectableItem);

    if (consumableFood) return getConsumableFoodImage(consumableFood);

    return image_empty_basket;
  };

  return (
    <Image
      source={getSource()}
      style={{ width: imageSize, height: imageSize }}
      className="aspect-square"
    />
  );
}
