import { expirationStatusObj } from '@/constants';
import { EnrichStorageItem } from '@/types/storage';
import { getExpirationStatus, getRemainingDays } from '@/utils';
import { View } from 'react-native';
import TrackedItemImageLabel from '@/components/trackedItem/TrackedItemImageLabel';

interface StorageItemProps {
  storageItem: EnrichStorageItem;
  className?: string;
}

export default function StorageItem({ storageItem, className = '' }: StorageItemProps) {
  const remainingDays = getRemainingDays(new Date(storageItem.expiresAt));

  const status = getExpirationStatus(remainingDays);

  const shouldShowDot = status !== 'unknown' && status !== 'safe';

  return (
    <View className={`relative items-center bg-card ${className}`}>
      <TrackedItemImageLabel item={storageItem} textClassName="text-sm" />

      {shouldShowDot && (
        <View
          className={`${expirationStatusObj[status].bgColor} absolute right-1 top-1 size-2 rounded-full`}
        />
      )}
    </View>
  );
}
