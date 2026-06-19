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
import IconWithText from '@/components/common/IconWithText';

interface MealIngredientItemCardProps {
  item: SelectableItem;
  className?: string;
  textClassName?: string;
  imageSize?: number;
  isStorageItem?: boolean;
  isExpiredSoon?: boolean;
}

export default function MealIngredientItemCard({
  item,
  className = '',
  textClassName = '',
  imageSize = 45,
  isStorageItem,
  isExpiredSoon,
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
        duration: 300,
      });
    }

    if (result.type === 'success') {
      toast({
        message: `✅ 장보기 목록에 추가했어요.`,
        duration: 300,
      });
    }
  };

  return (
    <Card className={`h-9 flex-row items-center gap-x-2  ${className}`}>
      <View className="flex-1 flex-row items-center gap-x-1">
        {/* 이미지 */}
        <ItemImage selectableItem={item} imageSize={imageSize} />

        {/* 라벨 */}
        <Text className={`line-clamp-1 text-center leading-5 ${textClassName}`}>
          {item.label}
        </Text>

        {isExpiredSoon && <Icon name="BadgeAlert" color="red" size={16} />}
      </View>

      {/* 현재 보유 상태 */}
      {isStorageItem ? (
        <IconWithText
          text="보유중"
          icon="Refrigerator"
          iconSize={14}
          iconColor="lightBlue"
          textClassName="text-blue-5"
          className="!gap-x-0.5 p-1.5"
        />
      ) : isShoppingItem ? (
        <></>
      ) : (
        <IconWithText
          text="장보기"
          icon="Plus"
          iconSize={14}
          iconColor="yellow"
          textClassName="text-yellow-7"
          onPress={onPress}
          className="!gap-x-0.5 p-1.5"
        />
      )}
    </Card>
  );
}
