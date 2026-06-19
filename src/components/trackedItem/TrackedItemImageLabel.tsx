import Text from '@/components/common/ui/Text';
import { EnrichShoppingItem } from '@/types/shoppingList';
import { EnrichStorageItem } from '@/types/storage';
import { View } from 'react-native';
import { getTrackedItemLabel } from '@/utils';
import ItemImage from '@/components/common/ItemImage';
import { ingredientCategoryObj } from '@/constants';

interface TrackedItemImageLabelProps {
  item: EnrichStorageItem | EnrichShoppingItem;
  imageSize?: number;
  className?: string;
  textClassName?: string;
  hasCategory?: boolean;
  isHorizontal?: boolean;
}

export default function TrackedItemImageLabel({
  item,
  imageSize = 55,
  className = '',
  textClassName = '',
  hasCategory = false,
  isHorizontal = false,
}: TrackedItemImageLabelProps) {
  const layoutClassName = isHorizontal ? 'flex-row gap-x-4' : 'gap-y-1';

  return (
    <View className={`items-center ${layoutClassName} ${className}`}>
      <ItemImage trackedItem={item} imageSize={imageSize} />

      <View className="gap-y-2">
        <Text className={`line-clamp-1 ${textClassName}`}>
          {getTrackedItemLabel(item).label}
        </Text>

        {hasCategory && (
          <Text className="!text-neutral-7">
            {ingredientCategoryObj[getTrackedItemLabel(item).category].label}
          </Text>
        )}
      </View>
    </View>
  );
}
