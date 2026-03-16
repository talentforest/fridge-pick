import IngredientImage from '@/components/common/ingredient/IngredientImage';
import Text from '@/components/common/ui/Text';
import { expirationStatusObj } from '@/constants';
import { EnrichStorageItem } from '@/types/storage';
import {
  getExpirationStatus,
  getRemainingDays,
} from '@/utils/getExpirationDate';
import { Dimensions, View } from 'react-native';

interface StorageItemProps {
  item: EnrichStorageItem;
  className?: string;
}

export default function StorageItem({
  item,
  className = '',
}: StorageItemProps) {
  const { customLabel, ingredient } = item;

  const remainingDays = getRemainingDays(new Date(item.expiresAt));

  const status = getExpirationStatus(remainingDays);

  const { width } = Dimensions.get('window');

  const itemWidth = (width - 93) / 4;

  return (
    <View
      style={{ width: itemWidth }}
      className={`items-center gap-y-1 bg-white pb-1 ${className}`}
    >
      <IngredientImage ingredient={ingredient} size={55} />

      <View className="flex-row items-center gap-x-0.5">
        {status !== 'unknown' && status !== 'safe' && (
          <View
            className={`${expirationStatusObj[status].bgColor} size-2.5 rounded-full`}
          />
        )}
        <Text className="line-clamp-1 text-center text-md text-gray-800">
          {customLabel ?? ingredient?.label}
        </Text>
      </View>
    </View>
  );
}
