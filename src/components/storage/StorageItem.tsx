import Text from '@/components/common/ui/Text';
import { expirationStatusObj, ingredientImagesObj } from '@/constants';
import { Ingredient } from '@/types/ingredient';
import { StorageItem as StorageItemType } from '@/types/storage';
import {
  getExpirationDate,
  getExpirationStatus,
  getRemainingDays,
} from '@/utils/getExpirationDate';
import { Dimensions, Image, View } from 'react-native';

interface StorageItemProps {
  item: StorageItemType & { ingredient: Ingredient };
  className?: string;
}

export default function StorageItem({
  item,
  className = '',
}: StorageItemProps) {
  const { customLabel, ingredient, ingredientId } = item;

  const expirationDate = getExpirationDate(item);

  const remainingDays = getRemainingDays(expirationDate);

  const status = getExpirationStatus(remainingDays);

  const { width } = Dimensions.get('window');

  const itemWidth = (width - 93) / 4;

  return (
    <View
      style={{ width: itemWidth }}
      className={`items-center gap-y-1 bg-white pb-1 ${className}`}
    >
      <Image
        source={ingredientImagesObj[ingredient.category][ingredientId]}
        className="mb-auto aspect-square size-14"
      />

      <View className="flex-row items-center gap-x-0.5">
        {status !== 'unknown' && status !== 'safe' && (
          <View
            className={`${expirationStatusObj[status].bgColor} size-2.5 rounded-full`}
          />
        )}
        <Text className="line-clamp-1 text-center text-md text-gray-800">
          {customLabel ?? ingredient.label}
        </Text>
      </View>
    </View>
  );
}
