import { expirationStatusObj, iosShadowStyle } from '@/constants';
import {
  formatDdayRemainingDays,
  getExpirationStatus,
  getTrackedItemData,
  StorageItemWithExpiration,
} from '@/utils';
import { View } from 'react-native';
import FoodImage from '@/components/common/FoodImage';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';

interface CautionStorageItemProps {
  cautionStorageItem: StorageItemWithExpiration;
  className?: string;
  index?: number;
  isFlexCol?: boolean;
}

export default function CautionStorageItem({
  cautionStorageItem,
  className,
  index,
  isFlexCol = false,
}: CautionStorageItemProps) {
  const { remainingDays, storageItem } = cautionStorageItem;

  const status = getExpirationStatus(remainingDays);

  const label = getTrackedItemData(storageItem).label;

  const days = formatDdayRemainingDays(remainingDays);

  return (
    <Card
      style={{ ...iosShadowStyle }}
      className={`relative items-center overflow-hidden ${isFlexCol ? 'gap-y-1.5 !px-1.5 !pb-3 !pt-2' : 'flex-row gap-x-2.5 !px-2.5 !py-3'} ${className}`}
    >
      <View className="rounded-full">
        <FoodImage
          trackedItem={storageItem}
          className="p-1.5"
          imageSize={45}
          iconSize={12}
          iconClassName="!p-1.5 -right-1 -top-1"
        />
      </View>

      {index && index <= 4 ? (
        <View className="absolute left-0 top-0 h-8 w-7 items-center justify-center rounded-br-md bg-red-5">
          <Text className="font-heavy text-white">{index}</Text>
        </View>
      ) : (
        <></>
      )}

      <View
        className={`w-full gap-y-1 ${isFlexCol ? 'items-center justify-center' : ''}`}
      >
        <Text className={`${isFlexCol ? 'text-center' : ''} !text-sm leading-5`}>
          {label}
        </Text>

        {/* 남은 일수 */}
        <Text className={`mt-auto font-heavy ${expirationStatusObj[status].textColor}`}>
          {days}
        </Text>
      </View>
    </Card>
  );
}
