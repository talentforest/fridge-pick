import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import { SelectableItem } from '@/types/selectableItemAndTrackedItem';
import ItemImage from '@/components/common/ItemImage';
import { createSelectableItemKey } from '@/utils';
import { useAtomValue } from 'jotai';
import { findStorageItemWithKeyAtom } from '@/atom/storageItemAtom';
import Icon from '@/components/common/ui/Icon';
import { findShoppingItem } from '@/atom/shoppingListAtom';

interface MealIngredientItemCardProps {
  item: SelectableItem;
  className?: string;
  textClassName?: string;
  imageSize?: number;
}

export default function MealIngredientItemCard({
  item,
  className = '',
  textClassName = '',
  imageSize = 45,
}: MealIngredientItemCardProps) {
  const key = createSelectableItemKey(item);

  const storageItem = useAtomValue(findStorageItemWithKeyAtom(key));

  const isShoppingItem = useAtomValue(findShoppingItem(key));

  return (
    <Card
      className={`items-center justify-center gap-y-1 rounded-xl ${!storageItem ? 'opacity-65' : '!border-yellow-5'} ${className}`}
    >
      {/* 이미지 */}
      <ItemImage selectableItem={item} imageSize={imageSize} />

      {/* 라벨 */}
      <Text className={`text-center leading-5 ${textClassName}`}>{item.label}</Text>

      {/* 장보기 목록에 있는 경우 */}
      {isShoppingItem && (
        <Icon
          name="ShoppingBasket"
          size={14}
          color="indigo"
          className="absolute right-0.5 top-0.5 size-7 items-center justify-center "
        />
      )}

      {storageItem && <Text className="text-sm text-blue-5">보유중</Text>}
    </Card>
  );
}
