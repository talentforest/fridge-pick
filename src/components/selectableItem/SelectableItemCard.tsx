import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import { SelectableItem } from '@/types/selectableItem';
import ItemImage from '@/components/common/ItemImage';

interface SelectableItemCardProps {
  item: SelectableItem;
  className?: string;
  textClassName?: string;
  isCompact?: boolean;
  imageSize?: number;
}

export default function SelectableItemCard({
  item,
  className = '',
  textClassName = '',
  isCompact = false,
  imageSize = 45,
}: SelectableItemCardProps) {
  return (
    <Card
      className={`items-center justify-center gap-y-1 rounded-2xl !p-2 !pt-1 ${className}`}
    >
      {/* 이미지 */}
      <ItemImage selectableItem={item} imageSize={imageSize} />

      {/* 라벨 */}
      <Text className={`text-center leading-5 ${textClassName}`}>{item.label}</Text>

      {/* 남은일수 */}
      {!isCompact && (
        <Text className={'text-red-600'}>
          +{item.expirationDays[item.defaultStorage]}일
        </Text>
      )}
    </Card>
  );
}
