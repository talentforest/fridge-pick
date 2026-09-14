import { SelectableItem } from '@/types/selectableItem';
import { View } from 'react-native';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import Icon from '@/components/common/ui/Icon';
import FoodImage from '@/components/common/FoodImage';

interface SelectableItemCardProps {
  item: SelectableItem;
  className?: string;
  textClassName?: string;
  imageSize?: number;
}

export default function SelectableItemCard({
  item,
  className = '',
  textClassName = '',
  imageSize = 60,
}: SelectableItemCardProps) {
  if (!item) return null;

  return (
    <Card
      className={`items-center justify-center gap-y-0.5 rounded-xl !px-2 !pb-3 !pt-2 ${className}`}
    >
      <View className="absolute right-1.5 top-1.5 flex-row  gap-x-1">
        {item.kind !== 'ingredient' ? (
          <Icon name="Zap" size={12} color="yellow" hasBgColor />
        ) : (
          <></>
        )}
      </View>

      {/* 이미지 */}
      <FoodImage
        selectableItem={item}
        imageSize={imageSize}
        iconSize={14}
        iconClassName="-right-1 -top-1"
      />

      {/* 라벨 */}
      <Text className={`line-clamp-2 text-center leading-5 ${textClassName}`}>
        {item.label}
      </Text>
    </Card>
  );
}
