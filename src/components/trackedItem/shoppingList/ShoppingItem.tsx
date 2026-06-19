import { togglePurchasedAtom } from '@/atom/shoppingListAtom';
import { findStorageItemWithKeyAtom } from '@/atom/storageItemAtom';
import { EnrichShoppingItem } from '@/types/shoppingList';
import { createTrackedItemKey, getTrackedItemLabel } from '@/utils';
import { useAtomValue, useSetAtom } from 'jotai';
import { Pressable, View } from 'react-native';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import NavigateToStorageBtn from '@/components/common/NavigateToStorageBtn';
import { useNavigation } from '@react-navigation/native';
import { StackNavProp } from '@/types/RootStackParamList';

interface ShoppingItemProps {
  shoppingItem: EnrichShoppingItem;
  isError: boolean;
}

export default function ShoppingItem({ shoppingItem, isError }: ShoppingItemProps) {
  const { id, isPurchased } = shoppingItem;

  const togglePurchased = useSetAtom(togglePurchasedAtom);

  const key = createTrackedItemKey(shoppingItem);

  const isInStorageShoppingItem = useAtomValue(findStorageItemWithKeyAtom(key));

  const navigation = useNavigation<StackNavProp>();

  return (
    <Pressable
      onPress={() => togglePurchased(id)}
      className={`h-14 flex-row items-center px-1 py-3 ${isPurchased ? 'opacity-40' : ''}`}
    >
      <View className="flex-1 flex-row gap-x-1.5">
        <Icon name={isPurchased ? 'SquareCheck' : 'Square'} size={16} />

        <Text
          className={`line-clamp-1 flex-1 ${isPurchased ? 'line-through' : ''} ${isError ? 'text-red-500' : ''}`}
        >
          {getTrackedItemLabel(shoppingItem).label}
        </Text>
      </View>

      {isInStorageShoppingItem && (
        <NavigateToStorageBtn
          onPress={() =>
            navigation.navigate('StorageDetailScreen', {
              id: isInStorageShoppingItem.storage.type,
            })
          }
          storageType={isInStorageShoppingItem.storage.type}
        />
      )}
    </Pressable>
  );
}
