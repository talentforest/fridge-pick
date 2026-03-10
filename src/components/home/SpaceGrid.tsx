import { shoppingListAtom } from '@/atom/shoppingListAtom';
import { storageItemsAtom } from '@/atom/storageItemAtom';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import { image_fridge } from '@/constants';
import { RootStackParamList } from '@/types/RootStackParamList';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAtomValue } from 'jotai';
import { Image, Pressable, View } from 'react-native';

type StorageDetailNavProp = NativeStackNavigationProp<RootStackParamList>;

export default function SpaceGrid() {
  const navigation = useNavigation<StorageDetailNavProp>();

  const freezerItemList = useAtomValue(storageItemsAtom('freezer'));
  const fridgeItemList = useAtomValue(storageItemsAtom('fridge'));
  const pantryItemList = useAtomValue(storageItemsAtom('pantry'));
  const shoppingList = useAtomValue(shoppingListAtom);

  const storageList = {
    fridge: [
      { id: 'freezer', label: '냉동실', total: freezerItemList.length },
      { id: 'fridge', label: '냉장실', total: fridgeItemList.length },
    ],
    other: [
      { id: 'pantry', label: '실온보관', total: pantryItemList.length },
      { id: 'shoppingList', label: '장보기목록', total: shoppingList.length },
    ],
  } as const;

  return (
    <View className="gap-y-3">
      <View className="flex-row gap-x-3">
        <Card className="h-60 w-[38%] gap-y-3 !bg-white">
          <Text className="font-extrabold text-neutral-700">나의 냉장고</Text>
          <View className="w-full flex-1 items-center justify-center p-3">
            <View className="ml-12 size-2.5 rounded-xl bg-red-500" />
            <Image source={image_fridge} className="h-full w-full" />
          </View>
        </Card>

        <View className="flex-1 gap-y-3">
          {storageList.fridge.map(({ label, total, id }) => (
            <Pressable
              key={label}
              className="h-28"
              onPress={() => navigation.navigate('StorageDetail', { id })}
            >
              <Card className="flex-1 !bg-white">
                <View className="flex-row justify-between">
                  <Text className="mt-0.5 font-extrabold text-neutral-700">
                    {label}
                  </Text>
                  <Text className="font-extrabold !text-2xl">{total}</Text>
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
              if (label === '장보기목록') {
                navigation.navigate('ShoppingList');
              } else {
                navigation.navigate('StorageDetail', { id: 'pantry' });
              }
            }}
          >
            <Card key={label} className="h-28 flex-1 !bg-white">
              <View className="flex-row justify-between">
                <Text className="mt-0.5 font-extrabold text-neutral-700">
                  {label}
                </Text>
                <Text className="font-extrabold !text-2xl">{total}</Text>
              </View>
            </Card>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
