import CategoryImage from '@/components/common/ui/CategoryImage';
import { image_empty_basket, ingredientImageObj, foodImageObj } from '@/constants';
import { CategoryKey } from '@/types/category';
import {
  Food,
  FoodWithEnrichedFoodStructure,
  FoodKey,
  SelectableItem,
} from '@/types/selectableItem';
import { EnrichedShoppingItem } from '@/types/shoppingItem';
import { EnrichedStorageItem } from '@/types/storage';
import { Image, ImageSourcePropType, View } from 'react-native';

type SelectableItemProps = {
  selectableItem: SelectableItem;
  trackedItem?: never;
  food?: never;
};

type TrackedItemProps = {
  trackedItem: EnrichedShoppingItem | EnrichedStorageItem;
  selectableItem?: never;
  food?: never;
};

type FoodProps = {
  food?: Food | FoodWithEnrichedFoodStructure;
  selectableItem?: never;
  trackedItem?: never;
};

type FoodImageProps = {
  imageSize?: number;
  iconSize?: number;
  className?: string;
  iconClassName?: string;
} & (SelectableItemProps | TrackedItemProps | FoodProps);

type Result = { source: ImageSourcePropType } | { categoryKey?: CategoryKey };

export default function FoodImage({
  selectableItem,
  trackedItem,
  food,
  imageSize = 55,
  iconSize = 16,
  className = '',
  iconClassName = '',
}: FoodImageProps) {
  /** 만약 사고로 이미지가 없는 경우 */
  const getFoodImageByKind = (
    item: SelectableItem | FoodWithEnrichedFoodStructure,
  ): Result => {
    const key = item?.imageName || item.id;

    const categoryKey = { categoryKey: item.category };

    if (item.id.includes('custom:')) {
      return categoryKey;
    }

    switch (item.kind) {
      case 'food':
        const foodSource = foodImageObj[key as FoodKey];
        return foodSource ? { source: foodSource } : categoryKey;

      case 'ingredient':
        const ingredientSource = ingredientImageObj[item.category][key];
        return ingredientSource ? { source: ingredientSource } : categoryKey;
    }
  };

  const getSelectableItemImage = (
    item: SelectableItem | FoodWithEnrichedFoodStructure,
  ): Result => {
    return getFoodImageByKind(item);
  };

  const getTrackedItemImage = (
    item: EnrichedShoppingItem | EnrichedStorageItem,
  ): Result => {
    switch (item.type) {
      case 'food':
        return getFoodImageByKind(item.food);

      case 'ingredient':
        return getFoodImageByKind(item.ingredient);
    }
  };

  const getSource = () => {
    if (trackedItem) return getTrackedItemImage(trackedItem);

    if (selectableItem) return getSelectableItemImage(selectableItem);

    if (food) return getSelectableItemImage(food);

    return image_empty_basket;
  };

  const { source, categoryKey } = getSource();

  return categoryKey ? (
    <CategoryImage
      categoryKey={categoryKey}
      imageSize={imageSize}
      iconSize={iconSize}
      className={className}
      iconClassName={iconClassName}
    />
  ) : (
    <View className={className}>
      <Image
        source={source}
        style={{ width: imageSize, height: imageSize }}
        className={`aspect-square`}
      />
    </View>
  );
}
