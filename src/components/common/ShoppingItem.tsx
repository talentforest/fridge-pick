import { togglePurchasedAtom } from '@/atom/shoppingListAtom';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import { ShoppingItem as ShoppingItemType } from '@/types/shoppingList';
import { findIngredient } from '@/utils';
import { useSetAtom } from 'jotai';
import { Pressable } from 'react-native';

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
      className={`h-14 flex-row items-center gap-x-1.5 px-1 py-3 ${isPurchased ? 'opacity-40' : ''}`}
    >
      <Icon name={isPurchased ? 'SquareCheck' : 'Square'} size={16} />

      <Text
        className={`${isPurchased ? 'line-through' : ''} ${isError ? 'text-red-500' : ''}`}
      >
        {customLabel || ingredient?.label}
      </Text>
    </Pressable>
  );
}
