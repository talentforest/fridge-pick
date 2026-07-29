import { SelectableItem } from '@/types/selectableItem';
import { createSelectableItemKey } from '@/utils';
import { useAtomValue, useSetAtom } from 'jotai';
import { findStorageItemWithKeyAtom } from '@/atom/storageAtom';
import { addShoppingItemAtom, findShoppingItem } from '@/atom/shoppingListAtom';
import { View } from 'react-native';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import Icon from '@/components/common/ui/Icon';
import FoodImage from '@/components/common/FoodImage';
import FavoriteBtn from '@/components/common/FavoriteBtn';
import { useOverlay } from '@/hooks';

interface MyPickItemCardProps {
  item: SelectableItem;
  className?: string;
  textClassName?: string;
  imageSize?: number;
}

export default function MyPickItemCard({
  item,
  className = '',
  textClassName = '',
  imageSize = 50,
}: MyPickItemCardProps) {
  const key = createSelectableItemKey(item);

  const storageItem = useAtomValue(findStorageItemWithKeyAtom(key));

  const addShoppingItem = useSetAtom(addShoppingItemAtom);

  const { showToast } = useOverlay();

  const isShoppingItem = useAtomValue(findShoppingItem(key));

  if (!item) return null;

  const onPress = () => {
    const result = addShoppingItem(item.label);

    if (result.type === 'duplicate') {
      showToast({
        type: 'normal',
        text1: `⚠️ 이미 장보기 목록에 있어요.`,
        visibilityTime: 2000,
        position: 'bottom',
      });
    }

    if (result.type === 'success') {
      showToast({
        type: 'normal',
        text1: `✅ 장보기 목록에 추가했어요.`,
        visibilityTime: 2000,
        position: 'bottom',
      });
    }
  };

  return (
    <Card
      className={`flex-1 items-center justify-center gap-y-1 rounded-xl !px-1 !pt-5 ${className}`}
    >
      <View className="absolute right-1.5 top-1.5 flex-row  gap-x-1">
        {/* 보관함에 있는 경우 */}
        <FavoriteBtn selectableItem={item} size={16} className="p-1" />
      </View>

      {/* 이미지 */}
      <FoodImage selectableItem={item} imageSize={imageSize} />

      {/* 라벨 */}
      <Text className={`line-clamp-2 text-center leading-5 ${textClassName}`}>
        {item.label}
      </Text>

      <View className="mt-2">
        {storageItem ? (
          <Text className="font-extrabold text-sm text-blue-3">보유</Text>
        ) : (
          <Icon
            name="ShoppingBasket"
            size={14}
            hasBgColor
            className="-mb-1 p-2"
            color={isShoppingItem ? 'inactive' : 'indigo'}
            onPress={!isShoppingItem ? onPress : undefined}
          />
        )}
      </View>
    </Card>
  );
}
