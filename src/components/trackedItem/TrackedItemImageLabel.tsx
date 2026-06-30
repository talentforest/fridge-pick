import Text from '@/components/common/ui/Text';
import { EnrichShoppingItem } from '@/types/shoppingList';
import { EnrichedStorageItem } from '@/types/storage';
import { View } from 'react-native';
import { getTrackedItemLabelAndCategory } from '@/utils';
import FoodImage from '@/components/common/FoodImage';

interface TrackedItemImageLabelProps {
  item: EnrichedStorageItem | EnrichShoppingItem;
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
      <FoodImage trackedItem={item} imageSize={imageSize} />

      <View className="gap-y-2.5">
        <Text className={`line-clamp-1 ${textClassName}`}>
          {getTrackedItemLabelAndCategory(item).label}
        </Text>

        {hasCategory && (
          <Text className="!text-neutral-7">
            {getTrackedItemLabelAndCategory(item).categoryLabel}
          </Text>
        )}
      </View>
    </View>
  );
}
