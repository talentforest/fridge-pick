import { shoppingListAtom } from '@/atom/shoppingListAtom';
import { allStorageItemListAtom, itemListByStorageAtom } from '@/atom/storageItemAtom';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import { image_fridge } from '@/constants';
import { RootStackParamList } from '@/types/RootStackParamList';
import { getExpiredStorageItemList } from '@/utils';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAtomValue } from 'jotai';
import { Image, Pressable, View } from 'react-native';

type StorageDetailNavProp = NativeStackNavigationProp<RootStackParamList>;

export default function SpaceGrid() {
  const navigation = useNavigation<StorageDetailNavProp>();

  const allStorageItemList = useAtomValue(allStorageItemListAtom);

  const freezerItemList = useAtomValue(itemListByStorageAtom('freezer'));
  const fridgeItemList = useAtomValue(itemListByStorageAtom('fridge'));
  const pantryItemList = useAtomValue(itemListByStorageAtom('pantry'));
  const shoppingList = useAtomValue(shoppingListAtom);

  const storageList = {
    fridge: [
      { id: 'freezer', label: '냉동실', total: freezerItemList.length },
      { id: 'fridge', label: '냉장실', total: fridgeItemList.length },
    ],
    other: [
      { id: 'pantry', label: '실온보관', total: pantryItemList.length },
      { id: 'shoppingList', label: '자주먹는 식재료', total: shoppingList.length },
    ],
  } as const;

  const expiredStorageItemList = getExpiredStorageItemList(allStorageItemList);

  return (
    <View className="gap-y-3">
      <View className="flex-row gap-x-3">
        {/* 나의 냉장고 */}
        <Card className="h-60 w-[38%] gap-y-3">
          <Text className=" text-neutral-700">나의 냉장고</Text>
          <View className="w-full flex-1 items-center justify-center p-3">
            {expiredStorageItemList.length > 0 && (
              <View className="ml-12 size-2.5 rounded-xl bg-red-500" />
            )}
            <Image source={image_fridge} className="h-full w-full" />
          </View>
        </Card>

        <View className="flex-1 gap-y-3">
          {storageList.fridge.map(({ label, total, id }) => (
            <Pressable
              key={label}
              className="h-28"
              onPress={() => navigation.navigate('StorageDetailScreen', { id })}
            >
              <Card className="flex-1">
                <View className="flex-row justify-between">
                  <Text className="mt-0.5">{label}</Text>
                  <Text className="font-extrabold text-2xl text-blue-400">{total}</Text>
                </View>
              </Card>
            </Pressable>
          ))}
        </View>
      </View>

      <View className="flex-row gap-x-3">
        {storageList.other.map(({ label, total }) => (
          <Pressable
            key={label}
            className="h-28 flex-1"
            onPress={() => {
              if (label === '자주먹는 식재료') {
                // navigation.navigate('ShoppingListScreen');
              } else {
                navigation.navigate('StorageDetailScreen', { id: 'pantry' });
              }
            }}
          >
            <Card key={label} className="h-28 flex-1">
              <View className="flex-row justify-between">
                <Text className="mt-0.5 text-neutral-700">{label}</Text>
                <Text className="font-extrabold text-2xl text-blue-400">{total}</Text>
              </View>
            </Card>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
