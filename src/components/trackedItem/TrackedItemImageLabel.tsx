import Text from '@/components/common/ui/Text';
import { EnrichedShoppingItem } from '@/types/shoppingList';
import { EnrichedStorageItem } from '@/types/storage';
import { View } from 'react-native';
import { getTrackedItemData } from '@/utils';
import FoodImage from '@/components/common/FoodImage';
import Card from '@/components/common/ui/Card';

interface TrackedItemImageLabelProps {
  item: EnrichedStorageItem | EnrichedShoppingItem;
  imageSize?: number;
  className?: string;
  textClassName?: string;
  hasCategory?: boolean;
  isHorizontal?: boolean;
  hasImageBox?: boolean;
}

export default function TrackedItemImageLabel({
  item,
  imageSize = 55,
  className = '',
  textClassName = '',
  hasCategory = false,
  isHorizontal = false,
  hasImageBox = false,
}: TrackedItemImageLabelProps) {
  const layoutClassName = isHorizontal ? 'flex-row gap-x-2' : 'gap-y-1';

  return (
    <View className={`items-center ${layoutClassName} ${className}`}>
      {hasImageBox ? (
        <>
          <Card className="h-[82px] w-[82px] items-center justify-center px-2 py-2">
            <FoodImage trackedItem={item} imageSize={imageSize} />
          </Card>

          <Card className="h-[82px] flex-1 justify-center gap-y-3">
            <Text className={`line-clamp-1 ${textClassName}`}>
              {getTrackedItemData(item).label}
            </Text>

            {hasCategory && (
              <Text className="text-neutral-5">
                {getTrackedItemData(item).categoryLabel}
              </Text>
            )}
          </Card>
        </>
      ) : (
        <>
          <FoodImage trackedItem={item} imageSize={imageSize} />

          <View className="gap-y-2">
            <Text className={`line-clamp-1 ${textClassName}`}>
              {getTrackedItemData(item).label}
            </Text>

            {hasCategory && (
              <Text className="text-neutral-5">
                {getTrackedItemData(item).categoryLabel}
              </Text>
            )}
          </View>
        </>
      )}
    </View>
  );
}
