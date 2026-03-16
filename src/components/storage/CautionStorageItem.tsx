import IngredientImage from '@/components/common/ingredient/IngredientImage';
import Text from '@/components/common/ui/Text';
import { expirationStatusObj } from '@/constants';
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
}

export default function CautionStorageItem({
  item,
  index,
}: CautionStorageItemProps) {
  const { width } = Dimensions.get('window');
  const itemWidth = (width - 60) / 3;

  const remainDays = getRemainingDays(new Date(item.expiresAt));
  const status = getExpirationStatus(remainDays);

  return (
    <View
      style={{ width: itemWidth }}
      className="relative gap-y-2 overflow-hidden rounded-xl border border-border bg-white px-2 py-3"
    >
      {index < 3 && (
        <View className="absolute left-0 top-0 z-10 h-10 w-8 items-center justify-center rounded-br-lg bg-amber-500">
          <Text className="font-extrabold !text-white">{index + 1}</Text>
        </View>
      )}

      <View className="aspect-square items-center justify-center rounded-full bg-gray-50">
        <IngredientImage ingredient={item.ingredient} size={55} />
        <Text className="mb-2 text-center">
          {item.customLabel || item?.ingredient?.label}
        </Text>
      </View>

      <Text className={`text-center ${expirationStatusObj[status].textColor}`}>
        {formatRemainingDays(remainDays)}
      </Text>
    </View>
  );
}
