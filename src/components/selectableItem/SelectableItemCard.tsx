import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import { SelectableItem } from '@/types/selectableItemAndTrackedItem';
import ItemImage from '@/components/common/ItemImage';
import { createSelectableItemKey } from '@/utils';
import { useAtomValue } from 'jotai';
import { findStorageItemWithKeyAtom } from '@/atom/storageItemAtom';
import Icon from '@/components/common/ui/Icon';
import { findShoppingItem } from '@/atom/shoppingListAtom';
import { storageObj, iosShadowStyle } from '@/constants';

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
  const key = createSelectableItemKey(item);

  const storageItem = useAtomValue(findStorageItemWithKeyAtom(key));

  const isShoppingItem = useAtomValue(findShoppingItem(key));

  return (
    <Card className={`items-center justify-center gap-y-1 rounded-xl !p-1 ${className}`}>
      {/* 이미지 */}
      <ItemImage selectableItem={item} imageSize={imageSize} />

      {/* 라벨 */}
      <Text className={`line-clamp-2 text-center leading-5 ${textClassName}`}>
        {item.label}
      </Text>

      {/* 남은일수 */}
      {/* {!isCompact &&  (
        <Text className="text-red-600">
          +{item.expirationDays[item.defaultStorage]}일
        </Text>
      )} */}

      {/* 장보기 목록에 있는 경우 */}
      {isShoppingItem && (
        <Icon
          name="ShoppingBasket"
          size={14}
          color="indigo"
          className="absolute right-0.5 top-0.5 size-7 items-center justify-center "
        />
      )}

      {/* 보관함에 있는 경우 */}
      {storageItem && (
        <Icon
          name={storageItem.storage.type === 'pantry' ? 'ShelvingUnit' : 'Refrigerator'}
          size={15}
          color={storageObj[storageItem.storage.type].color}
          style={iosShadowStyle}
          className={`absolute right-0.5 top-0.5 size-7 items-center justify-center bg-transparent`}
        />
      )}
    </Card>
  );
}
