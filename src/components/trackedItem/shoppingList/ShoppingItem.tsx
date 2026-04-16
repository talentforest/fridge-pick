import { togglePurchasedAtom } from '@/atom/shoppingListAtom';
import { findStorageItemWithKeyAtom } from '@/atom/storageItemAtom';
import { storageObj } from '@/constants';
import { StackNavProp } from '@/types/RootStackParamList';
import { EnrichShoppingItem } from '@/types/shoppingList';
import { createTrackedItemKey, getTrackedItemLabel } from '@/utils';
import { useNavigation } from '@react-navigation/native';
import { useAtomValue, useSetAtom } from 'jotai';
import { Pressable, TouchableOpacity, View } from 'react-native';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';

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
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('StorageDetailScreen', {
              id: isInStorageShoppingItem.storage.type,
            })
          }
          activeOpacity={0.7}
          className="ml-2 flex-row items-center gap-x-1 rounded-full bg-blue-1 px-2 py-2"
        >
          <Text className="text-sm text-blue-7">
            {storageObj[isInStorageShoppingItem.storage.type].label}에 있어요
          </Text>

          <Icon name="ExternalLink" size={14} color="blue" />
        </TouchableOpacity>
      )}
    </Pressable>
  );
}
