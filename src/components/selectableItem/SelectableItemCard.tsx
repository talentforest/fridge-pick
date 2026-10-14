import { SelectableItem } from '@/types/selectableItem';
import { View } from 'react-native';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import Icon from '@/components/common/ui/Icon';
import FoodImage from '@/components/common/FoodImage';
import { allCategoryObj } from '@/constants';

interface SelectableItemCardProps {
  item: SelectableItem;
  className?: string;
  textClassName?: string;
  imageSize?: number;
  hasCategoryIcon?: boolean;
}

export default function SelectableItemCard({
  item,
  className = '',
  textClassName = '',
  imageSize = 50,
  hasCategoryIcon = false,
}: SelectableItemCardProps) {
  if (!item) return null;

  return (
    <Card
      className={`items-center justify-center gap-y-0.5 !px-1 !pb-1 !pt-0 ${className}`}
    >
      {hasCategoryIcon ? (
        <View className="absolute right-1.5 top-1.5 flex-row gap-x-1">
          {item.kind !== 'ingredient' ? (
            <Icon
              name={allCategoryObj[item.category].icon}
              size={12}
              color="yellow"
              hasBgColor
            />
          ) : (
            <></>
          )}
        </View>
      ) : (
        <></>
      )}

      {/* 이미지 */}
      <FoodImage selectableItem={item} imageSize={imageSize} />

      {/* 라벨 */}
      <Text
        numberOfLines={2}
        lineBreakStrategyIOS="hangul-word"
        textBreakStrategy="balanced"
        className={` text-center ${textClassName}`}
      >
        {item.label}
      </Text>
    </Card>
  );
}
