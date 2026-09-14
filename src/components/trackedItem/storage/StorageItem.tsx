import { expirationStatusObj } from '@/constants';
import { EnrichedStorageItem } from '@/types/storage';
import { getExpirationStatus, getRemainingDays, getTrackedItemData } from '@/utils';
import { View } from 'react-native';
import FoodImage from '@/components/common/FoodImage';
import Text from '@/components/common/ui/Text';

interface StorageItemProps {
  storageItem: EnrichedStorageItem;
  className?: string;
}

export default function StorageItem({ storageItem, className = '' }: StorageItemProps) {
  const remainingDays = getRemainingDays(storageItem.expiresAt);

  const status = getExpirationStatus(remainingDays);

  const shouldShowDot = status !== 'unknown' && status !== 'safe';

  return (
    <View className={`relative items-center gap-y-1 bg-card ${className}`}>
      <FoodImage
        trackedItem={storageItem}
        imageSize={40}
        iconSize={12}
        className="p-1"
        iconClassName="!p-1 -top-0.5 -right-1"
      />

      <Text className="line-clamp-1 text-center text-sm">
        {getTrackedItemData(storageItem).label}
      </Text>

      {shouldShowDot && (
        <View
          className={`${expirationStatusObj[status].bgColor} absolute right-1 top-1 size-2 rounded-full`}
        />
      )}
    </View>
  );
}
