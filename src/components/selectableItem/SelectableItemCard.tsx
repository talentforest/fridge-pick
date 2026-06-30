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
    <Card className={`items-center justify-center rounded-xl !px-1 !pt-2.5 ${className}`}>
      {/* 이미지 */}
      <FoodImage selectableItem={item} imageSize={imageSize} />

      {/* 라벨 */}
      <Text className={`line-clamp-2 text-center leading-5 ${textClassName}`}>
        {item.label}
      </Text>

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
