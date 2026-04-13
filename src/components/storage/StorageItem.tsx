import IngredientImage from '@/components/common/ingredient/IngredientImage';
import { expirationStatusObj } from '@/constants';
import { StorageItem as StorageItemType } from '@/types/storage';
import { findIngredient, getExpirationStatus, getRemainingDays } from '@/utils';
import { View } from 'react-native';

interface StorageItemProps {
  storageItem: StorageItemType;
  className?: string;
}

export default function StorageItem({ storageItem, className = '' }: StorageItemProps) {
  const remainingDays = getRemainingDays(new Date(storageItem.expiresAt));

  const status = getExpirationStatus(remainingDays);

  const ingredient = findIngredient(storageItem?.ingredientId);

  return (
    <View className={`relative items-center bg-card ${className}`}>
      <IngredientImage ingredient={ingredient} size={55} />

      {status !== 'unknown' && status !== 'safe' && (
        <View
          className={`${expirationStatusObj[status].bgColor} absolute right-1 top-1 size-2 rounded-full`}
        />
      )}
    </View>
  );
}
