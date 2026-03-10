import { deleteItemsAtom, togglePurchasedAtom } from '@/atom/shoppingListAtom';
import PressableIcon from '@/components/common/PressableIcon';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import { ShoppingItem as ShoppingItemType } from '@/types/shoppingList';
import { useSetAtom } from 'jotai';
import { Pressable, View } from 'react-native';

interface ShoppingItemProps {
  item: ShoppingItemType;
  isError: boolean;
}

export default function ShoppingItem({ item, isError }: ShoppingItemProps) {
  const { isPurchased, label } = item;

  const togglePurchased = useSetAtom(togglePurchasedAtom);
  const deleteItems = useSetAtom(deleteItemsAtom);

  return (
    <View className="p-1">
      <Pressable
        onPress={() => togglePurchased(item.id)}
        className="flex-1 flex-row justify-between py-1"
      >
        <View className="flex-row items-center gap-x-1.5">
          <Icon
            name={isPurchased ? 'SquareCheckBig' : 'Square'}
            size={18}
            color={isPurchased ? 'gray' : undefined}
          />
          <Text
            className={`${isPurchased ? 'text-neutral-500 line-through' : ''} ${isError ? 'text-red-500' : ''}`}
          >
            {label}
          </Text>
        </View>

        <View className="flex-row gap-x-3">
          <PressableIcon
            onPress={() => {}}
            icon="PlusSquare"
            iconSize={18}
            className="px-1 py-3"
          />
          <PressableIcon
            onPress={() => deleteItems([item.id])}
            icon="Trash2"
            iconSize={18}
            className="px-1 py-3"
          />
        </View>
      </Pressable>
    </View>
  );
}
