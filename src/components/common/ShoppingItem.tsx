import { togglePurchasedAtom } from '@/atom/shoppingListAtom';
import { findStorageItemWithKey } from '@/atom/storageItemAtom';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import { storageObj } from '@/constants';
import { RootStackParamList } from '@/types/RootStackParamList';
import { ShoppingItem as ShoppingItemType } from '@/types/shoppingList';
import { findIngredient } from '@/utils';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAtomValue, useSetAtom } from 'jotai';
import { Pressable, TouchableOpacity, View } from 'react-native';

interface ShoppingItemProps {
  item: ShoppingItemType;
  isError: boolean;
}

type StorageDetailNavProp = NativeStackNavigationProp<RootStackParamList>;

export default function ShoppingItem({ item, isError }: ShoppingItemProps) {
  const { isPurchased, customLabel, ingredientId } = item;

  const togglePurchased = useSetAtom(togglePurchasedAtom);

  const ingredient = findIngredient(item.ingredientId);

  // 보관함에 갖고 있는지 확인

  const key = `${ingredientId ?? ''}|${customLabel ?? ''}`;

  const isInStorage = useAtomValue(findStorageItemWithKey(key));

  const navigation = useNavigation<StorageDetailNavProp>();

  return (
    <Pressable
      onPress={() => {
        togglePurchased(item.id);
      }}
      className={`h-14 flex-row items-center px-1 py-3 ${isPurchased ? 'opacity-40' : ''}`}
    >
      <View className="flex-1 flex-row gap-x-1.5">
        <Icon name={isPurchased ? 'SquareCheck' : 'Square'} size={16} />

        <Text
          className={`line-clamp-1 flex-1 ${isPurchased ? 'line-through' : ''} ${isError ? 'text-red-500' : ''}`}
        >
          {customLabel || ingredient?.label}
        </Text>
      </View>

      {isInStorage && (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('StorageDetailScreen', { id: isInStorage.storage.type })
          }
          activeOpacity={0.7}
          className="ml-2 flex-row items-center gap-x-1 rounded-full bg-blue-1 px-2 py-2"
        >
          <Text className="text-sm text-blue-7">
            {storageObj[isInStorage.storage.type].label}에 있어요
          </Text>

          <Icon name="ExternalLink" size={14} color="blue" />
        </TouchableOpacity>
      )}
    </Pressable>
  );
}
