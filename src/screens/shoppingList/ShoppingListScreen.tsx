import {
  addItemAtom,
  deleteItemsAtom,
  isAllPurchasedAtom,
  purchasedCountAtom,
  purchasedItemsAtom,
  shoppingListAtom,
  toggleAllPurchasedAtom,
} from '@/atom/shoppingListAtom';
import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import FilterTag from '@/components/common/FilterTag';
import PressableIcon from '@/components/common/PressableIcon';
import PressableSquareBtn from '@/components/common/PressableSquareBtn';
import SectionTitle from '@/components/common/SectionTitle';
import ShoppingItem from '@/components/common/ShoppingItem';
import Text from '@/components/common/ui/Text';
import TextInput from '@/components/common/ui/TextInput';
import { image_empty_basket } from '@/constants';
import { RootStackParamList } from '@/types/RootStackParamList';
import { ShoppingItem as ShoppingItemType } from '@/types/shoppingList';
import { searchIngredient } from '@/utils';
import { duplicateShoppingItem } from '@/utils/duplicateShoppingItem';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAtomValue, useSetAtom } from 'jotai';
import { useState } from 'react';
import { FlatList, Image, ScrollView, View } from 'react-native';

type StackNavProp = NativeStackNavigationProp<RootStackParamList>;

export default function ShoppingListScreen() {
  const [inputValue, setInputValue] = useState<string>('');
  const [error, setError] = useState<{
    message: string;
    item: ShoppingItemType;
  } | null>(null);

  const shoppingList = useAtomValue(shoppingListAtom);
  const purchasedCount = useAtomValue(purchasedCountAtom);
  const isAllPurchased = useAtomValue(isAllPurchasedAtom);
  const purchasedItemList = useAtomValue(purchasedItemsAtom);

  const addItem = useSetAtom(addItemAtom);
  const deleteItems = useSetAtom(deleteItemsAtom);
  const toggleAllPurchased = useSetAtom(toggleAllPurchasedAtom);

  const recommendedKeywordList = searchIngredient(inputValue || '', 5);

  const navigation = useNavigation<StackNavProp>();

  return (
    <SafeAreaViewContainer>
      <View className="flex-1 justify-between gap-y-3 px-6 py-4">
        <SectionTitle title="장보기 목록" />

        <View className="flex-1 rounded-2xl bg-card px-4 pt-2">
          <View className="flex-row items-center justify-between pr-2">
            <PressableIcon
              text="전체 선택"
              icon={isAllPurchased ? 'SquareCheckBig' : 'Square'}
              iconSize={18}
              className="flex-row items-center gap-x-1.5 px-1 py-4"
              onPress={() => {
                toggleAllPurchased();
                if (shoppingList.length === 0) return;
              }}
              textClassName={`${isAllPurchased ? '!text-blue-500' : 'text-gray-500'}`}
            />
            <Text>{shoppingList.length}개</Text>
          </View>

          {shoppingList.length > 0 ? (
            <FlatList
              data={shoppingList}
              nestedScrollEnabled
              showsVerticalScrollIndicator={false}
              className="flex-1"
              contentContainerClassName="pb-10"
              ItemSeparatorComponent={() => (
                <View className="border-b border-dashed border-gray-400" />
              )}
              keyExtractor={(item) => `${item.id}`}
              renderItem={({ item }) => (
                <ShoppingItem
                  item={item}
                  isError={error?.item.id === item.id}
                />
              )}
            />
          ) : (
            <View className="flex-1 items-center justify-center gap-y-3 pb-20">
              <Image
                source={image_empty_basket}
                className="aspect-square size-1/4 opacity-60"
              />
              <Text className="text-inactive">장볼 식료품이 없습니다</Text>
            </View>
          )}
        </View>

        {/* 아래 컨트롤 버튼 */}
        {purchasedCount > 0 && (
          <View className="flex-row items-start gap-x-2">
            <PressableSquareBtn
              onPress={() => deleteItems(purchasedItemList.map(({ id }) => id))}
              name="선택항목 삭제하기"
              iconName="Trash2"
              iconSize={16}
              color="yellow"
            />
            <PressableSquareBtn
              onPress={() => navigation.navigate('ShoppingListDetail')}
              name="냉장고에 넣기"
              iconName="Grid2X2Plus"
              iconSize={16}
              color="blue"
            />
          </View>
        )}

        {/* 태그들과 인풋 */}
        <View className="gap-y-2">
          {recommendedKeywordList.length > 0 && (
            <ScrollView
              horizontal
              contentContainerClassName="px-1 gap-x-2"
              showsHorizontalScrollIndicator={false}
            >
              {recommendedKeywordList.map((keywordItem) => (
                <FilterTag
                  key={keywordItem.label}
                  name={keywordItem.label}
                  color={
                    keywordItem.label === inputValue &&
                    duplicateShoppingItem(inputValue, shoppingList)
                      ? 'red'
                      : keywordItem.label === inputValue
                        ? 'blue'
                        : 'yellow'
                  }
                  isActive
                  onPress={() => {
                    const { result, item } = addItem(keywordItem.label);
                    if (result === 'duplicate') {
                      setError({ message: result, item });
                      return;
                    }

                    setInputValue('');
                  }}
                />
              ))}
            </ScrollView>
          )}

          <View className="relative">
            <TextInput
              value={inputValue}
              onChangeText={(text) => {
                setInputValue(text);
                if (error !== null) {
                  setError(null);
                }
              }}
              placeholder="장볼 식료품을 작성해주세요"
            />
            <PressableIcon
              icon="ArrowUp"
              onPress={() => {
                if (!inputValue) return;

                const { result, item } = addItem(inputValue);

                if (result === 'duplicate') {
                  return setError({ message: result, item });
                }

                setInputValue('');
              }}
              className="absolute bottom-0 right-[8px] top-[7px] size-11 h-fit items-center justify-center rounded-full bg-gray-50"
            />
          </View>
        </View>
      </View>
    </SafeAreaViewContainer>
  );
}
