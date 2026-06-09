import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import ItemImage from '@/components/common/ItemImage';
import Icon from '@/components/common/ui/Icon';
import { SelectableItem } from '@/types/selectableItemAndTrackedItem';
import { View } from 'react-native';
import { useAtomValue, useSetAtom } from 'jotai';
import { addShoppingItemAtom, findShoppingItem } from '@/atom/shoppingListAtom';
import { useOverlay } from '@/hooks';
import { createSelectableItemKey } from '@/utils';

interface MealIngredientItemCardProps {
  item: SelectableItem;
  className?: string;
  textClassName?: string;
  imageSize?: number;
  isStorageItem?: boolean;
}

export default function MealIngredientItemCard({
  item,
  className = '',
  textClassName = '',
  imageSize = 45,
  isStorageItem,
}: MealIngredientItemCardProps) {
  const addShoppingItem = useSetAtom(addShoppingItemAtom);

  const key = createSelectableItemKey(item);

  const isShoppingItem = useAtomValue(findShoppingItem(key));

  const { toast } = useOverlay();

  const onPress = () => {
    const result = addShoppingItem(item.label);

    if (result.type === 'duplicate') {
      toast({
        message: `⚠️ 이미 장보기 목록에 있어요.`,
        duration: 1000,
      });
    }

    if (result.type === 'success') {
      toast({
        message: `✅ 장보기 목록에 추가했어요.`,
        duration: 1000,
      });
    }
  };

  return (
    <Card className={`flex-row items-center gap-x-2 rounded-xl ${className}`}>
      <View className="flex-1 flex-row items-center gap-x-1">
        {/* 이미지 */}
        <ItemImage selectableItem={item} imageSize={imageSize} />

        {/* 라벨 */}
        <Text className={`line-clamp-1 text-center leading-5 ${textClassName}`}>
          {item.label}
        </Text>
      </View>

      {/* 현재 보유 상태 */}
      {isStorageItem ? (
        <Icon name="Refrigerator" size={15} color="darkGray" className="p-2" />
      ) : isShoppingItem ? (
        <></>
      ) : (
        <Icon name="Plus" className="p-2" size={15} color="blue" onPress={onPress} />
      )}
    </Card>
  );
}
