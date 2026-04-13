import IngredientImage from '@/components/common/ingredient/IngredientImage';
import Text from '@/components/common/ui/Text';
import { expirationStatusObj } from '@/constants';
import { iosShadowStyle } from '@/constants/shadowStyle';
import { StorageItem } from '@/types/storage';
import {
  findIngredient,
  formatRemainingDays,
  getExpirationStatus,
  getRemainingDays,
} from '@/utils';
import { View } from 'react-native';

interface CautionStorageItemProps {
  storageItem: StorageItem;
  index: number;
  isCurrIndex: boolean;
}

export default function CautionStorageItem({
  storageItem,
  index,
  isCurrIndex,
}: CautionStorageItemProps) {
  const remainDays = getRemainingDays(new Date(storageItem.expiresAt));
  const status = getExpirationStatus(remainDays);

  const ingredient = findIngredient(storageItem.ingredientId);

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
        <IngredientImage ingredient={ingredient} size={70} />
        <Text className={`text-center ${isCurrIndex ? '!text-black' : ''}`}>
          {storageItem.customLabel || ingredient?.label}
        </Text>
      </View>

      <Text className={`text-center ${expirationStatusObj[status].textColor}`}>
        {formatRemainingDays(remainDays)}
      </Text>
    </View>
  );
}
