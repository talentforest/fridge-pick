import Text from '@/components/common/ui/Text';
import { expirationStatusObj } from '@/constants';
import { iosShadowStyle } from '@/constants/shadowStyle';
import { EnrichStorageItem } from '@/types/storage';
import { formatRemainingDays, getExpirationStatus, getTrackedItemLabel } from '@/utils';
import { View } from 'react-native';
import ItemImage from '@/components/common/ItemImage';

interface CautionStorageItemProps {
  storageItem: EnrichStorageItem;
  remainingDays: number;
  index?: number;
  isCurrIndex?: boolean;
}

export default function CautionStorageItem({
  storageItem,
  remainingDays,
  index,
  isCurrIndex,
}: CautionStorageItemProps) {
  const status = getExpirationStatus(remainingDays);

  return (
    <View
      style={{ ...iosShadowStyle }}
      className={`relative gap-y-2 overflow-hidden rounded-2xl border border-border px-2 pb-3 pt-1 ${isCurrIndex ? 'bg-blue-3' : 'bg-card'}`}
    >
      {index && index < 3 ? (
        <View className="absolute left-0 top-0 z-10 h-10 w-8 items-center justify-center rounded-br-xl bg-yellow-5">
          <Text className="font-extrabold text-base text-white">{index}</Text>
        </View>
      ) : (
        <></>
      )}

      <View className={`aspect-square items-center justify-center`}>
        <ItemImage trackedItem={storageItem} imageSize={70} />
        <Text className={`text-center ${isCurrIndex ? '' : ''}`}>
          {getTrackedItemLabel(storageItem).label}
        </Text>
      </View>

      <Text className={`mt-2 text-center ${expirationStatusObj[status].textColor}`}>
        {formatRemainingDays(remainingDays)}
      </Text>
    </View>
  );
}
