import Text from '@/components/common/ui/Text';
import { EnrichedStorageItem } from '@/types/storage';
import { View } from 'react-native';
import { getTrackedItemData } from '@/utils';
import FoodImage from '@/components/common/FoodImage';
import { EnrichedShoppingItem } from '@/types/shoppingItem';

interface TrackedItemImageLabelProps {
  item: EnrichedStorageItem | EnrichedShoppingItem;
  imageSize?: number;
  className?: string;
  textClassName?: string;
}

export default function TrackedItemImageLabel({
  item,
  imageSize = 65,
  className = '',
  textClassName = '',
}: TrackedItemImageLabelProps) {
  return (
    <View className={`flex-row items-center gap-x-3 ${className}`}>
      <FoodImage
        trackedItem={item}
        imageSize={imageSize}
        className="rounded-full bg-card p-1"
        hasCategoryIcon
        iconSize={12}
        iconClassName="right-0 top-0.5"
      />

      <View className="gap-y-2.5">
        {/* {item.type !== 'ingredient' ? <ConvenienceFoodTag /> : <></>} */}

        <Text className={`mt-1 line-clamp-1 font-extrabold text-base ${textClassName}`}>
          {getTrackedItemData(item).label}
        </Text>

        <Text className="!text-[13px] text-neutral-5">
          {getTrackedItemData(item).categoryLabel}
        </Text>
      </View>
    </View>
  );
}
