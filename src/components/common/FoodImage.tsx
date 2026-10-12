import Icon from '@/components/common/ui/Icon';
import {
  image_empty_basket,
  ingredientImageObj,
  foodImageObj,
  allCategoryObj,
} from '@/constants';
import { CategoryKey } from '@/types/category';
import {
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
};

type TrackedItemProps = {
  trackedItem: EnrichedShoppingItem | EnrichedStorageItem;
  selectableItem?: never;
};

type FoodImageProps = {
  hasCategoryIcon?: boolean;
  imageSize?: number;
  className?: string;
  iconSize?: number;
  iconClassName?: string;
} & (SelectableItemProps | TrackedItemProps);

type ImageResult = {
  source?: ImageSourcePropType;
  category: CategoryKey;
};

export default function FoodImage({
  selectableItem,
  trackedItem,
  hasCategoryIcon = false,
  imageSize = 55,
  iconSize = 12,
  className = '',
  iconClassName = '',
}: FoodImageProps) {
  /** 대표 카테고리 이미지로 표시되는 경우
   * - 사용자 정의 항목
   * - 만약 사고로 이미지가 없는 경우 */
  const getFoodImageByKind = (
    item: SelectableItem | FoodWithEnrichedFoodStructure,
  ): ImageResult => {
    const imageName = item?.imageName || item.id;

    const categoryKey = { category: item.category };

    if (item.id.includes('custom:')) {
      return categoryKey;
    }

    switch (item.kind) {
      case 'food':
        const foodSource = foodImageObj[imageName as FoodKey];
        return foodSource ? { source: foodSource, ...categoryKey } : categoryKey;

      case 'ingredient':
        const ingredientSource = ingredientImageObj[item.category][imageName];
        return ingredientSource
          ? { source: ingredientSource, ...categoryKey }
          : categoryKey;
    }
  };

  const getSelectableItemImage = (
    item: SelectableItem | FoodWithEnrichedFoodStructure,
  ): ImageResult => {
    return getFoodImageByKind(item);
  };

  const getTrackedItemImage = (
    item: EnrichedShoppingItem | EnrichedStorageItem,
  ): ImageResult => {
    switch (item.type) {
      case 'food':
        return getFoodImageByKind(item.food);

      case 'ingredient':
        return getFoodImageByKind(item.ingredient);
    }
  };

  const getSource = (): ImageResult => {
    if (trackedItem) return getTrackedItemImage(trackedItem);

    if (selectableItem) return getSelectableItemImage(selectableItem);

    return { source: image_empty_basket, category: 'vegetable' };
  };

  const { source, category } = getSource();

  const borderObj = {
    green: 'border-green-3',
    blue: 'border-green-3',
    yellow: 'border-yellow-3',
    red: 'border-red-3',
    orange: 'border-orange-3',
  } as const;

  const categoryObj = allCategoryObj[category];

  return !source ? (
    <View className={className}>
      <Image
        source={allCategoryObj[category].image}
        style={{ width: imageSize, height: imageSize }}
        className={`aspect-square`}
      />

      {hasCategoryIcon ? (
        <Icon
          name={categoryObj.icon}
          color={categoryObj.color}
          hasBgColor
          className={`absolute !rounded-full border ${borderObj[categoryObj.color]} p-1.5 ${iconClassName}`}
          size={iconSize}
        />
      ) : (
        <></>
      )}
    </View>
  ) : (
    <View className={className}>
      <Image
        source={source}
        style={{ width: imageSize, height: imageSize }}
        className={`aspect-square`}
      />

      {hasCategoryIcon ? (
        <Icon
          name={categoryObj.icon}
          color={categoryObj.color}
          hasBgColor
          className={`absolute !rounded-full border ${borderObj[categoryObj.color]} p-1.5 ${iconClassName}`}
          size={iconSize}
        />
      ) : (
        <></>
      )}
    </View>
  );
}
