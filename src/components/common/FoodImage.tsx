import {
  image_empty_basket,
  image_shopping_basket,
  ingredientCategoryImagesObj,
  mealCategoryImagesObj,
  preparedFoodCategoryImagesObj,
} from '@/constants';
import {
  ConsumableFood,
  ConsumableFoodWithEnrichedFoodStructure,
  MealKey,
  PreparedFoodKey,
  SelectableItem,
} from '@/types/selectableItem';
import { EnrichedShoppingItem } from '@/types/shoppingList';
import { EnrichedStorageItem } from '@/types/storage';
import { Image } from 'react-native';

type SelectableItemProps = {
  selectableItem: SelectableItem;
  trackedItem?: never;
  consumableFood?: never;
};

type TrackedItemProps = {
  trackedItem: EnrichedShoppingItem | EnrichedStorageItem;
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
    const key = item?.imageName || item.id;

    switch (item.kind) {
      case 'meal':
        return mealCategoryImagesObj[key as MealKey];

      case 'preparedFood':
        return preparedFoodCategoryImagesObj[key as PreparedFoodKey];

      case 'ingredient':
        return ingredientCategoryImagesObj[item.category][key];
    }
  };

  const getTrackedItemImage = (item: EnrichedShoppingItem | EnrichedStorageItem) => {
    switch (item.type) {
      case 'meal':
        return mealCategoryImagesObj[(item?.meal?.imageName || item.meal.id) as MealKey];

      case 'preparedFood':
        return preparedFoodCategoryImagesObj[
          (item?.preparedFood?.imageName || item.preparedFood.id) as PreparedFoodKey
        ];

      case 'ingredient':
        return ingredientCategoryImagesObj[item.ingredient.category][
          item?.ingredient.imageName || item.ingredientId
        ];
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
      source={getSource() || image_shopping_basket}
      style={{ width: imageSize, height: imageSize }}
      className="aspect-square"
    />
  );
}
