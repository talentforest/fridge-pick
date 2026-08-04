import { expirationStatusObj, iosShadowStyle, storageObj } from '@/constants';
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
import Icon from '@/components/common/ui/Icon';

interface CautionStorageItemProps {
  cautionStorageItem: StorageItemWithExpiration;
  index?: number;
  isCurrIndex?: boolean;
}

export default function CautionStorageItem({
  cautionStorageItem,
  index,
  isCurrIndex,
}: CautionStorageItemProps) {
  const { remainingDays, storageItem } = cautionStorageItem;

  const status = getExpirationStatus(remainingDays);

  const label = getTrackedItemData(storageItem).label;

  const currStorage = storageItem.storage.type;

  const days = formatDdayRemainingDays(remainingDays);

  return (
    <Card
      style={{ ...iosShadowStyle }}
      className={`relative h-[140px] overflow-hidden !px-1.5 !pb-4 !pt-1.5 ${isCurrIndex ? 'border-yellow-5' : 'border-border'}`}
    >
      {index && index <= 3 ? (
        <View className="-mb-8 -ml-1.5 -mt-1.5 h-9 w-7 items-center justify-center rounded-br-xl bg-orange-3">
          <Text className="font-extrabold !text-[15px] text-white">{index}</Text>
        </View>
      ) : (
        <Icon
          name={storageObj[currStorage].icon}
          color={storageObj[currStorage].color}
          size={14}
          hasBgColor
          className="-mb-6 mr-auto"
        />
      )}

      <View className={`-mt-2 flex-1 items-center justify-center gap-y-1`}>
        {storageItem.type !== 'custom' && (
          <FoodImage trackedItem={storageItem} imageSize={52} />
        )}

        <View className="items-center justify-center">
          <Text className={`text-center leading-[20px] ${isCurrIndex ? '' : ''}`}>
            {label}
          </Text>
        </View>
      </View>

      <View className="mx-auto mb-3 h-[3px] w-8 rounded-full bg-neutral-3" />

      {/* 남은 일수 */}
      <Text
        className={`text-center font-extrabold text-base ${expirationStatusObj[status].textColor}`}
      >
        {days}
      </Text>
    </Card>
  );
}
