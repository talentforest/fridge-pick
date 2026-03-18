import IngredientImage from '@/components/common/ingredient/IngredientImage';
import { expirationStatusObj } from '@/constants';
import { EnrichStorageItem } from '@/types/storage';
import {
  getExpirationStatus,
  getRemainingDays,
} from '@/utils/getExpirationDate';
import { View } from 'react-native';

interface StorageItemProps {
  item: EnrichStorageItem;
  className?: string;
}

export default function StorageItem({
  item,
  className = '',
}: StorageItemProps) {
  const { ingredient } = item;

  const remainingDays = getRemainingDays(new Date(item.expiresAt));

  const status = getExpirationStatus(remainingDays);

  return (
    <View
      className={`relative items-center gap-y-1 bg-white pb-1 ${className}`}
    >
      <IngredientImage ingredient={ingredient} size={55} />

      {status !== 'unknown' && status !== 'safe' && (
        <View
          className={`${expirationStatusObj[status].bgColor} absolute right-1 top-1 size-2.5 rounded-full`}
        />
      )}
    </View>
  );
}
