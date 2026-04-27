import {
  addShoppingItemAtom,
  deleteShoppingItemListAtom,
  isAllPurchasedAtom,
  isInStorageShoppingItemAtom,
  purchasedCountAtom,
  purchasedItemsAtom,
  shoppingListAtom,
  toggleAllPurchasedAtom,
} from '@/atom/shoppingListAtom';
import { image_empty_basket } from '@/constants';
import { StackNavProp } from '@/types/RootStackParamList';
import { ShoppingItem as ShoppingItemType } from '@/types/shoppingList';
import { useNavigation } from '@react-navigation/native';
import { useAtomValue, useSetAtom } from 'jotai';
import { useMemo, useState } from 'react';
import { FlatList, Image, ScrollView, View } from 'react-native';
import { useErrorHandler } from '@/hooks/common/useErrorHandler';
import { useOverlay } from '@/hooks/common/useOverlay';
import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import ViewContentContainer from '@/components/common/container/ViewContentContainer';
import SquareBtn from '@/components/common/SquareBtn';
import ScreenHeader from '@/components/common/header/ScreenHeader';
import ShoppingItem from '@/components/trackedItem/shoppingList/ShoppingItem';
import Text from '@/components/common/ui/Text';
import TextInput from '@/components/common/ui/TextInput';
import KeyboardAvoidingViewContainer from '@/components/common/container/KeyboardAvoidingViewContainer';
import Card from '@/components/common/ui/Card';
import IconWithText from '@/components/common/IconWithText';
import Icon from '@/components/common/ui/Icon';
import SelectableItemCard from '@/components/selectableItem/SelectableItemCard';
import { searchIngredientAndMeal } from '@/utils';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';

export default function ShoppingListScreen() {
  const [inputValue, setInputValue] = useState<string>('');

  const { error, setError, clearError } = useErrorHandler<ShoppingItemType>();

  const { alert } = useOverlay();

  const navigation = useNavigation<StackNavProp>();

  const shoppingList = useAtomValue(shoppingListAtom);
  const purchasedCount = useAtomValue(purchasedCountAtom);
  const isAllPurchased = useAtomValue(isAllPurchasedAtom);
  const purchasedItemList = useAtomValue(purchasedItemsAtom);
  const isInStorageItem = useAtomValue(isInStorageShoppingItemAtom);

  const addShoppingItem = useSetAtom(addShoppingItemAtom);
  const deleteShoppingItemList = useSetAtom(deleteShoppingItemListAtom);
  const toggleAllPurchased = useSetAtom(toggleAllPurchasedAtom);

  const recommendedIngredientList = useMemo(() => {
    const searchedIngredientList = searchIngredientAndMeal(inputValue || '', 6);

    const result = searchedIngredientList.filter(
      ({ id }) =>
        !shoppingList
          .map((item) => {
            if (item.type === 'ingredient') {
              return item.ingredientId;
            }
            if (item.type === 'meal') {
              return item.mealId;
            }
            return item.customLabel;
          })
          .includes(id),
    );
    return result; //
  }, [inputValue, shoppingList]);

  const onAllPurchasedClick = () => {
    if (shoppingList.length === 0) return;
    toggleAllPurchased();
  };

  const onDeletePress = () => {
    deleteShoppingItemList(purchasedItemList.map(({ id }) => id));
  };

  const onAddToStoragePress = () => {
    if (isInStorageItem)
      return alert({
        message: '냉장고에 이미 존재하는 식재료는 추가할수 없어요.',
      });

    navigation.navigate('AddShoppingListScreen');
  };

  const onChangeText = (text: string) => {
    setInputValue(text);
    if (error !== null) {
      clearError();
    }
  };

  const onSubmitPress = (value?: string) => {
    if (!value) return;

    const result = addShoppingItem(value);

    if (result.type === 'duplicate') {
      return setError(result);
    }

    if (result.type === 'success') {
      setInputValue('');
    }
  };

  return (
    <KeyboardAvoidingViewContainer>
      <SafeAreaViewContainer>
        <ScreenHeader title="장보기 목록" isDetailPage={false} />

        <ViewContentContainer>
          <Card className="flex-1 rounded-2xl bg-card px-3 pb-3 pt-2">
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
                className="mb-3 flex-1"
                contentContainerClassName="pb-10"
                ItemSeparatorComponent={() => (
                  <View className="border-b border-dashed border-neutral-3" />
                )}
                keyExtractor={(item) => `${item.id}`}
                renderItem={({ item }) => (
                  <ShoppingItem
                    shoppingItem={item}
                    isError={error?.item?.id === item.id}
                  />
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
                onPress={onDeletePress}
                name="선택항목 삭제하기"
                iconName="Trash2"
                iconSize={16}
                color="yellow"
                className="!py-4"
              />
              <SquareBtn
                onPress={onAddToStoragePress}
                name="냉장고에 넣기"
                iconName="Grid2X2Plus"
                iconSize={16}
                color="blue"
                className="!py-4"
              />
            </View>
          )}

          {/* 태그들과 인풋 */}
          <View className="gap-y-2">
            {recommendedIngredientList.length > 0 && (
              <ScrollView
                horizontal
                contentContainerClassName="gap-x-2"
                showsHorizontalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
              >
                {recommendedIngredientList.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => onSubmitPress(item.label)}
                  >
                    <SelectableItemCard
                      item={item}
                      className="h-20 min-w-20 !pt-1 pb-2.5"
                      isCompact
                      textClassName="text-sm"
                      imageSize={35}
                    />
                  </TouchableOpacity>
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
                  value={inputValue}
                  className="pr-12"
                  onChangeText={onChangeText}
                  placeholder="장볼 식재료가 작성해주세요"
                />
                <Icon
                  name="ArrowUp"
                  size={20}
                  className="absolute right-[8px] top-[8px] z-10 size-11 h-fit items-center justify-center rounded-full bg-neutral-3"
                  onPress={() => onSubmitPress(inputValue)}
                />
              </View>
            </View>
          </View>
        </ViewContentContainer>
      </SafeAreaViewContainer>
    </KeyboardAvoidingViewContainer>
  );
}
