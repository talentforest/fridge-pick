import IngredientImage from '@/components/common/ingredient/IngredientImage';
import Text from '@/components/common/ui/Text';
import { expirationStatusObj } from '@/constants';
import { iosShadowStyle } from '@/constants/shadowStyle';
import { EnrichStorageItem } from '@/types/storage';
import { formatRemainingDays, getExpirationStatus, getRemainingDays } from '@/utils';
import { View } from 'react-native';

interface CautionStorageItemProps {
  item: EnrichStorageItem;
  index: number;
  isCurrIndex: boolean;
}

export default function CautionStorageItem({
  item,
  index,
  isCurrIndex,
}: CautionStorageItemProps) {
  const remainDays = getRemainingDays(new Date(item.expiresAt));
  const status = getExpirationStatus(remainDays);

  return (
    <View
      style={{ ...iosShadowStyle }}
      className={`relative gap-y-2 overflow-hidden rounded-xl border border-border px-2 pb-4 pt-1 ${isCurrIndex ? 'bg-yellow-5' : 'bg-card'}`}
    >
      {index < 3 && (
        <View className="absolute left-0 top-0 z-10 h-10 w-8 items-center justify-center rounded-br-xl bg-yellow-5">
          <Text className="font-extrabold text-base text-white">{index + 1}</Text>
        </View>
      )}

      <View className={`aspect-square items-center justify-center`}>
        <IngredientImage ingredient={item.ingredient} size={70} />
        <Text className={`text-center ${isCurrIndex ? '!text-black' : ''}`}>
          {item.customLabel || item?.ingredient?.label}
        </Text>
      </View>

      <Text className={`text-center ${expirationStatusObj[status].textColor}`}>
        {formatRemainingDays(remainDays)}
      </Text>
    </View>
  );
}
