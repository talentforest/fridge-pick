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
  isCurrIndex?: boolean;
  index?: number;
  isFlexCol?: boolean;
}

export default function CautionStorageItem({
  cautionStorageItem,
  isCurrIndex,
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
      className={`relative items-center  overflow-hidden !p-2.5 ${isFlexCol ? 'gap-y-2.5' : 'flex-row gap-x-2.5'} ${isCurrIndex ? '!border-yellow-5' : ''}`}
    >
      <View className="rounded-xl bg-neutral-1 p-1.5">
        <FoodImage trackedItem={storageItem} imageSize={50} />
      </View>

      {index && index <= 4 ? (
        <View className="absolute left-0 top-0 h-8 w-7 items-center justify-center rounded-br-lg bg-orange-7">
          <Text className="font-heavy text-white">{index}</Text>
        </View>
      ) : (
        <></>
      )}

      <View
        className={`flex-1 gap-y-3 ${isFlexCol ? 'items-center justify-center' : ''}`}
      >
        <Text className="!text-[13px]">{label}</Text>

        {/* 남은 일수 */}
        <Text className={`font-heavy text-base ${expirationStatusObj[status].textColor}`}>
          {days}
        </Text>
      </View>
    </Card>
  );
}
