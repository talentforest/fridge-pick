import { categoryObj } from '@/constants';
import { View } from 'react-native';
import { SelectableItem } from '@/types/selectableItemAndTrackedItem';
import Text from '@/components/common/ui/Text';
import ItemImage from '@/components/common/ItemImage';

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
      <ItemImage selectableItem={item} imageSize={imageSize} />

      <View className="flex-1 gap-y-2">
        <Text className="line-clamp-1 text-lg">{item.label}</Text>

        <Text className="text-neutral-5">{categoryObj[item.category].label}</Text>
      </View>
    </View>
  );
}
