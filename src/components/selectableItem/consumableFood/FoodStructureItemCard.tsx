import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import FoodImage from '@/components/common/FoodImage';
import Icon from '@/components/common/ui/Icon';
import { SelectableItem } from '@/types/selectableItem';
import { View } from 'react-native';
import { useAtomValue, useSetAtom } from 'jotai';
import { addShoppingItemAtom, shoppingListAtom } from '@/atom/shoppingListAtom';

import IconWithText from '@/components/common/IconWithText';
import { useOverlay } from '@/hooks';

interface FoodStructureItemCardProps {
  item: SelectableItem;
  className?: string;
  textClassName?: string;
  imageSize?: number;
  isStorageItem?: boolean;
  isExpiredSoon?: boolean;
}

export default function FoodStructureItemCard({
  item,
  className = '',
  textClassName = '',
  imageSize = 45,
  isStorageItem,
  isExpiredSoon,
}: FoodStructureItemCardProps) {
  const addShoppingItem = useSetAtom(addShoppingItemAtom);

  const shoppingItemList = useAtomValue(shoppingListAtom);

  const isShoppingListItem = shoppingItemList.find((shoppingItem) => {
    if (shoppingItem.type === 'ingredient') {
      return shoppingItem.ingredientId === item.id;
    }
    if (shoppingItem.type === 'meal') {
      return shoppingItem.mealId === item.id;
    }
    if (shoppingItem.type === 'preparedFood') {
      return shoppingItem.preparedFoodId === item.id;
    }
  });

  const { showToast } = useOverlay();

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
    <Card className={`h-9 flex-row items-center gap-x-2  ${className}`}>
      <View className="flex-1 flex-row items-center gap-x-1">
        {/* 이미지 */}
        <FoodImage selectableItem={item} imageSize={imageSize} />

        {/* 라벨 */}
        <Text className={`line-clamp-1 text-center leading-5 ${textClassName}`}>
          {item.label}
        </Text>

        {isExpiredSoon && <Icon name="BadgeAlert" color="yellow" size={16} />}
      </View>

      {/* 현재 보유 상태 */}
      {isStorageItem ? (
        <Text className="!gap-x-0.5 p-1.5 text-[13px] text-neutral-5">보유중</Text>
      ) : isShoppingListItem ? (
        <></>
      ) : (
        <IconWithText
          text="장보기"
          icon="Plus"
          iconSize={13}
          iconColor="blue"
          textClassName="text-blue-7 font-extrabold !text-[13px]"
          onPress={onPress}
          className="!gap-x-0 p-1.5"
        />
      )}
    </Card>
  );
}
