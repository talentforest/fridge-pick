import { togglePurchasedAtom } from '@/atom/shoppingListAtom';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import { ShoppingItem as ShoppingItemType } from '@/types/shoppingList';
import { findIngredient } from '@/utils';
import { useSetAtom } from 'jotai';
import { Pressable, View } from 'react-native';

interface ShoppingItemProps {
  item: ShoppingItemType;
  isError: boolean;
}

export default function ShoppingItem({ item, isError }: ShoppingItemProps) {
  const { isPurchased, customLabel } = item;

  const togglePurchased = useSetAtom(togglePurchasedAtom);

  const ingredient = findIngredient(item.ingredientId);

  return (
    <Pressable
      onPress={() => togglePurchased(item.id)}
      className={`h-16 flex-row items-center justify-between gap-x-3 px-1 py-3 ${isPurchased ? 'opacity-40' : ''}`}
    >
      <View className="flex-row items-center gap-x-1.5">
        <Icon name={isPurchased ? 'SquareCheckBig' : 'Square'} size={18} />
        <Text
          className={`${isPurchased ? 'line-through' : ''} ${isError ? 'text-red-500' : ''}`}
        >
          {customLabel || ingredient?.label}
        </Text>
      </View>
    </Pressable>
  );
}
