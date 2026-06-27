import { View } from 'react-native';
import { SelectableItem } from '@/types/selectableItem';
import Text from '@/components/common/ui/Text';
import FoodImage from '@/components/common/FoodImage';
import { getSelectableItemLabelAndCategory } from '@/utils';

interface SelectableItemImageLabelProps {
  item: SelectableItem;
  imageSize?: number;
}

export default function SelectableItemImageLabel({
  item,
  imageSize = 55,
}: SelectableItemImageLabelProps) {
  return (
    <View className="flex-1 flex-row items-center gap-x-3">
      {/* 이미지 */}
      <FoodImage selectableItem={item} imageSize={imageSize} />

      <View className="flex-1 gap-y-2">
        <Text className="line-clamp-1 text-lg">{item.label}</Text>

        <Text className="text-neutral-5">
          {getSelectableItemLabelAndCategory(item).categoryLabel}
        </Text>
      </View>
    </View>
  );
}
