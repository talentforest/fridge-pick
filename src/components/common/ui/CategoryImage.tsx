import Icon from '@/components/common/ui/Icon';
import { allCategoryObj } from '@/constants';
import { CategoryKey } from '@/types/category';
import { Image, View } from 'react-native';

type CategoryImageProps = {
  imageSize: number;
  iconSize: number;
  categoryKey: CategoryKey;
  className?: string;
  iconClassName?: string;
};

export default function CategoryImage({
  imageSize,
  iconSize,
  categoryKey,
  className = '',
  iconClassName = '',
}: CategoryImageProps) {
  const category = allCategoryObj[categoryKey];

  const { image, icon, color } = category;

  const borderObj = {
    green: 'border-green-3',
    blue: 'border-green-3',
    yellow: 'border-yellow-3',
    red: 'border-red-3',
    orange: 'border-orange-3',
  } as const;

  return (
    <View className={`items-center justify-center rounded-full bg-border ${className}`}>
      <Image
        source={image}
        style={{ width: imageSize, height: imageSize }}
        className="aspect-square rounded-full"
      />
      <Icon
        name={icon}
        hasBgColor
        color={color}
        className={`absolute !rounded-full border ${borderObj[color]} p-2 ${iconClassName}`}
        size={iconSize}
      />
    </View>
  );
}
