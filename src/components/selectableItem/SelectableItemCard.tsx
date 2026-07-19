import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import { SelectableItem } from '@/types/selectableItem';
import { createSelectableItemKey } from '@/utils';
import { useAtomValue } from 'jotai';
import { findStorageItemWithKeyAtom } from '@/atom/storageAtom';
import Icon from '@/components/common/ui/Icon';
import { findShoppingItem } from '@/atom/shoppingListAtom';
import { storageObj, iosShadowStyle } from '@/constants';
import FoodImage from '@/components/common/FoodImage';
import { View } from 'react-native';
import FavoriteBtn from '@/components/common/FavoriteBtn';

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
  const key = createSelectableItemKey(item);

  const storageItem = useAtomValue(findStorageItemWithKeyAtom(key));

  const isShoppingItem = useAtomValue(findShoppingItem(key));

  if (!item) return null;

  return (
    <Card
      className={`items-center justify-center gap-y-1 rounded-xl !px-1 !pt-5 ${className}`}
    >
      <View className="absolute left-1.5 top-1.5 flex-row  gap-x-1">
        {/* 장보기 목록에 있는 경우 */}
        {isShoppingItem && (
          <Icon name="ShoppingBasket" size={14} color="indigo" hasBgColor />
        )}

        {/* 보관함에 있는 경우 */}
        {storageItem && (
          <Icon
            name={storageObj[storageItem.storage.type].icon}
            color={storageObj[storageItem.storage.type].color}
            style={iosShadowStyle}
            size={14}
            hasBgColor
          />
        )}
      </View>

      {/* 이미지 */}
      <FoodImage selectableItem={item} imageSize={imageSize} />

      {/* 라벨 */}
      <Text className={`line-clamp-2 text-center leading-5 ${textClassName}`}>
        {item.label}
      </Text>

      {/* 나의 픽 */}
      <View className="w-full px-2">
        <FavoriteBtn selectableItem={item} size={14} isBtn />
      </View>
    </Card>
  );
}
