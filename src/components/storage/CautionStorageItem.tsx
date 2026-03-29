import IngredientImage from '@/components/common/ingredient/IngredientImage';
import Text from '@/components/common/ui/Text';
import { expirationStatusObj } from '@/constants';
import { iosShadowStyle } from '@/constants/shadowStyle';
import { EnrichStorageItem } from '@/types/storage';
import {
  formatRemainingDays,
  getExpirationStatus,
  getRemainingDays,
} from '@/utils/getExpirationDate';
import { Dimensions, View } from 'react-native';

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
  const { width } = Dimensions.get('window');
  const itemWidth = (width - 60) / 3;

  const remainDays = getRemainingDays(new Date(item.expiresAt));
  const status = getExpirationStatus(remainDays);

  return (
    <View
      style={{ width: itemWidth, ...iosShadowStyle }}
      className={`relative gap-y-2 overflow-hidden rounded-xl border border-border px-3 py-3 ${isCurrIndex ? 'bg-yellow-400' : 'bg-white'}`}
    >
      {index < 3 && (
        <View className="absolute left-0 top-0 z-10 h-10 w-8 items-center justify-center rounded-br-lg bg-amber-500">
          <Text className="font-extrabold !text-white">{index + 1}</Text>
        </View>
      )}

      <View
        className={`aspect-square items-center justify-center ${isCurrIndex ? '' : 'rounded-full bg-gray-50'}`}
      >
        <IngredientImage ingredient={item.ingredient} size={55} />
        <Text className="mb-2 text-center text-md">
          {item.customLabel || item?.ingredient?.label}
        </Text>
      </View>

      <Text
        className={`text-center font-extrabold ${expirationStatusObj[status].textColor}`}
      >
        {formatRemainingDays(remainDays)}
      </Text>
    </View>
  );
}
