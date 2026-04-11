import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import ViewContentContainer from '@/components/common/container/ViewContentContainer';
import FilterTag from '@/components/common/FilterTag';
import SquareBtn from '@/components/common/SquareBtn';
import ScreenHeader from '@/components/common/ScreenHeader';
import ShoppingItem from '@/components/common/ShoppingItem';
import Text from '@/components/common/ui/Text';
import TextInput from '@/components/common/ui/TextInput';
import {
  addItemAtom,
  deleteItemsAtom,
  isAllPurchasedAtom,
  purchasedCountAtom,
  purchasedItemsAtom,
  shoppingListAtom,
  toggleAllPurchasedAtom,
} from '@/atom/shoppingListAtom';
import { image_empty_basket } from '@/constants';
import { RootStackParamList } from '@/types/RootStackParamList';
import { ShoppingItem as ShoppingItemType } from '@/types/shoppingList';
import { searchIngredient } from '@/utils';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAtomValue, useSetAtom } from 'jotai';
import { useMemo, useState } from 'react';
import { FlatList, Image, ScrollView, View } from 'react-native';
import KeyboardAvoidingViewContainer from '@/components/common/container/KeyboardAvoidingViewContainer';
import Card from '@/components/common/ui/Card';
import IconWithText from '@/components/common/IconWithText';
import Icon from '@/components/common/ui/Icon';

type StackNavProp = NativeStackNavigationProp<RootStackParamList>;

export default function ShoppingListScreen() {
  const [inputValue, setInputValue] = useState<string>('');
  const [error, setError] = useState<{
    message: string;
    result: 'duplicate';
    item: ShoppingItemType;
  } | null>(null);

  const navigation = useNavigation<StackNavProp>();

  const shoppingList = useAtomValue(shoppingListAtom);
  const purchasedCount = useAtomValue(purchasedCountAtom);
  const isAllPurchased = useAtomValue(isAllPurchasedAtom);
  const purchasedItemList = useAtomValue(purchasedItemsAtom);

  const addItem = useSetAtom(addItemAtom);
  const deleteItems = useSetAtom(deleteItemsAtom);
  const toggleAllPurchased = useSetAtom(toggleAllPurchasedAtom);

  const recommendedKeywordList = useMemo(() => {
    return searchIngredient(inputValue || '', 6) //
      .filter(({ id }) => !shoppingList.map((item) => item.ingredientId).includes(id));
  }, [inputValue, shoppingList]);

  const onAllPurchasedClick = () => {
    if (shoppingList.length === 0) return;
    toggleAllPurchased();
  };

  return (
    <KeyboardAvoidingViewContainer>
      <SafeAreaViewContainer>
        <ScreenHeader title="장보기 목록" isDetailPage={false} />

        <ViewContentContainer className="pt-5">
          <Card className="flex-1 rounded-2xl bg-card px-4 pt-2">
            {/* 테이블 헤더 */}
            <View className="flex-row items-center justify-between pr-2">
              <IconWithText
                text="전체 선택"
                icon={isAllPurchased ? 'SquareCheck' : 'Square'}
                iconSize={16}
                iconColor={isAllPurchased ? 'blue' : 'text'}
                className="flex-row items-center gap-x-1.5 px-1 py-4"
                onPress={onAllPurchasedClick}
                textClassName={isAllPurchased ? 'text-blue-7' : 'text-text'}
              />
              <Text>총 {shoppingList.length}개</Text>
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
                  <ShoppingItem item={item} isError={error?.item.id === item.id} />
                )}
              />
            ) : (
              <View className="flex-1 items-center justify-center gap-y-3 pb-20">
                <Image
                  source={image_empty_basket}
                  className="aspect-square size-36 opacity-60"
                />
                <Text className="text-inactive-text">장볼 식재료가 없습니다</Text>
              </View>
            )}
          </Card>

          {/* 아래 컨트롤 버튼 */}
          {purchasedCount > 0 && (
            <View className="flex-row items-start gap-x-2">
              <SquareBtn
                onPress={() => deleteItems(purchasedItemList.map(({ id }) => id))}
                name="선택항목 삭제하기"
                iconName="Trash2"
                iconSize={16}
                color="yellow"
              />
              <SquareBtn
                onPress={() => navigation.navigate('ShoppingListDetailScreen')}
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
                contentContainerClassName="gap-x-2"
                showsHorizontalScrollIndicator={false}
              >
                {recommendedKeywordList.map(({ label, id }) => (
                  <FilterTag
                    key={id}
                    name={label}
                    color={label === inputValue ? 'blue' : 'yellow'}
                    isActive
                    onPress={() => {
                      const { result, item } = addItem(label);
                      if (result === 'duplicate') {
                        setError({ item, result, message: '이미 목록에 존재해요' });
                        return;
                      }

                      setInputValue('');
                    }}
                  />
                ))}
              </ScrollView>
            )}

            {/* 인풋 */}
            <View>
              {error?.message && (
                <Text className="mb-2 text-red-600">{error?.message}</Text>
              )}
              <View className="relative">
                <TextInput
                  maxLength={50}
                  value={inputValue}
                  onChangeText={(text) => {
                    setInputValue(text);
                    if (error !== null) {
                      setError(null);
                    }
                  }}
                  placeholder="장볼 식재료가 작성해주세요"
                />
                <Icon
                  name="ArrowUp"
                  size={20}
                  className="absolute bottom-0 right-[8px] top-[9px] z-10 size-11 h-fit items-center justify-center rounded-full bg-neutral-3"
                  onPress={() => {
                    if (!inputValue) return;

                    const { result, item } = addItem(inputValue);

                    if (result === 'duplicate') {
                      return setError({ result, item, message: '이미 목록에 존재해요' });
                    }

                    setInputValue('');
                  }}
                />
              </View>
            </View>
          </View>
        </ViewContentContainer>
      </SafeAreaViewContainer>
    </KeyboardAvoidingViewContainer>
  );
}
