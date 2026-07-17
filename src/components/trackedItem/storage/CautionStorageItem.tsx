import Text from '@/components/common/ui/Text';
import { expirationStatusObj, iosShadowStyle, storageObj } from '@/constants';
import {
  formatRemainingDays,
  getExpirationStatus,
  getTrackedItemData,
  StorageItemWithExpiration,
} from '@/utils';
import { View } from 'react-native';
import FoodImage from '@/components/common/FoodImage';
import Card from '@/components/common/ui/Card';
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

  const days = formatRemainingDays(remainingDays);

  return (
    <Card
      style={{ ...iosShadowStyle }}
      className={`relative overflow-hidden !px-2 !pb-3 !pt-1 ${isCurrIndex ? 'border-yellow-5' : 'border-border'}`}
    >
      {index && index <= 3 ? (
        <View className="absolute left-0 top-0 z-10 h-10 w-8 items-center justify-center rounded-br-xl bg-yellow-5">
          <Text className="font-extrabold text-base text-white">{index}</Text>
        </View>
      ) : (
        <Icon
          name={storageObj[currStorage].icon}
          color={storageObj[currStorage].color}
          size={15}
          className="-mb-5 mr-auto rounded-lg bg-neutral-1 p-1.5"
        />
      )}

      <View className={`aspect-square items-center justify-center gap-y-0.5`}>
        {storageItem.type !== 'custom' && (
          <FoodImage trackedItem={storageItem} imageSize={55} />
        )}
        <Text className={`text-center leading-[20px] ${isCurrIndex ? '' : ''}`}>
          {label}
        </Text>
      </View>

      <View className="mx-auto mb-3 h-[3px] w-8 rounded-full bg-neutral-3" />

      {/* 남은 일수 */}
      <Text
        className={`-ml-0.5 text-center font-extrabold text-[15px] ${expirationStatusObj[status].textColor}`}
      >
        {days}
      </Text>
    </Card>
  );
}
