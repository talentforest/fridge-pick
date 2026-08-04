import { SelectableItem } from '@/types/selectableItem';
import { createSelectableItemKey } from '@/utils';
import { useAtomValue, useSetAtom } from 'jotai';
import { findStorageItemWithKeyAtom } from '@/atom/storageAtom';
import { addShoppingItemAtom, findShoppingItem } from '@/atom/shoppingListAtom';
import { View } from 'react-native';
import Text from '@/components/common/ui/Text';
import FoodImage from '@/components/common/FoodImage';
import { useOverlay } from '@/hooks';
import Card from '@/components/common/ui/Card';
import FavoriteBtn from '@/components/common/FavoriteBtn';
import SelectBtn from '@/components/common/SelectBtn';
import IconWithText from '@/components/common/IconWithText';

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
  imageSize = 45,
}: MyPickItemCardProps) {
  const key = createSelectableItemKey(item);

  const storageItem = useAtomValue(findStorageItemWithKeyAtom(key));

  const addShoppingItem = useSetAtom(addShoppingItemAtom);

  const { showToast } = useOverlay();

  const isShoppingItem = useAtomValue(findShoppingItem(key));

  if (!item) return null;

  const onAddShoppingItemPress = () => {
    const result = addShoppingItem(item.label);

    if (result.type === 'duplicate') {
      showToast({
        type: 'normal',
        text1: `⚠️ 이미 장보기 목록에 있어요.`,
      });
    }

    if (result.type === 'success') {
      showToast({
        type: 'normal',
        text1: `✅ 장보기 목록에 추가했어요.`,
      });
    }
  };

  return (
    <View className={`items-center justify-center gap-y-2 !px-0 py-2 ${className}`}>
      {/* 이미지 */}
      <Card className="rounded-full p-3">
        <FoodImage selectableItem={item} imageSize={imageSize} />

        <FavoriteBtn
          selectableItem={item}
          size={13}
          hasShadow
          className="absolute -right-0 -top-1 rounded-full bg-neutral-0 p-1.5"
        />
      </Card>

      {/* 라벨 */}
      <Text className={`line-clamp-1 text-center !text-[13px] ${textClassName}`}>
        {item.label}
      </Text>

      <View className="">
        {storageItem ? (
          <IconWithText
            icon="CheckCircle2"
            iconColor="lightGreen"
            iconSize={12}
            className="py-1.5"
            textClassName="text-sm  text-green-3"
            text="보유"
          />
        ) : (
          <SelectBtn
            iconName="ShoppingBasket"
            iconSize={13}
            iconStrokeWidth={2}
            name={isShoppingItem ? '담김' : '담기'}
            textClassName="!text-sm !font-bold"
            className="!rounded-md border-0 !px-2 !py-1.5"
            color={isShoppingItem ? 'inActive' : 'indigo'}
            onPress={!isShoppingItem ? onAddShoppingItemPress : undefined}
          />
        )}
      </View>
    </View>
  );
}
