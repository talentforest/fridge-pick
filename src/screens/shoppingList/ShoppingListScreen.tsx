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
import { allMealList, allPreparedFoodList, image_empty_basket } from '@/constants';
import {
  filterRecommendableCandidates,
  getShoppingMenuExpansionCandidates,
  searchIngredientAndMeal,
} from '@/utils';
import { StackNavProp } from '@/types/RootStackParamList';
import { ShoppingItem as ShoppingItemType } from '@/types/shoppingList';
import { useNavigation } from '@react-navigation/native';
import { useAtomValue, useSetAtom } from 'jotai';
import { useMemo, useRef, useState } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { useErrorHandler, useOverlay } from '@/hooks';
import { allStorageItemListAtom } from '@/atom/storageAtom';
import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import SquareBtn from '@/components/common/SquareBtn';
import ScreenHeader from '@/components/common/header/ScreenHeader';
import ShoppingItem from '@/components/trackedItem/shoppingList/ShoppingItem';
import Text from '@/components/common/ui/Text';
import TextInput from '@/components/common/ui/TextInput';
import KeyboardAvoidingViewContainer from '@/components/common/container/KeyboardAvoidingViewContainer';
import Card from '@/components/common/ui/Card';
import IconWithText from '@/components/common/IconWithText';
import Icon from '@/components/common/ui/Icon';
import ScrollViewContainer from '@/components/common/container/ScrollViewContainer';
import SectionTitle from '@/components/common/header/SectionTitle';
import CarouselContainer from '@/components/common/container/CarouselContainer';
import RecommendedShoppingItem from '@/components/trackedItem/RecommendedShoppingItem';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import SelectableItemCard from '@/components/selectableItem/SelectableItemCard';
import { isNotInStorageFavoriteListAtom } from '@/atom/favoritesAtom';

export default function ShoppingListScreen() {
  const [inputValue, setInputValue] = useState<string>('');
  const [shoppingListY, setShoppingListY] = useState(0);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const scrollViewRef = useRef<ScrollView>(null);

  const { error, setError, clearError } = useErrorHandler<ShoppingItemType>();

  const { alert } = useOverlay();

  const navigation = useNavigation<StackNavProp>();

  const isNotInStorageFavoriteList = useAtomValue(isNotInStorageFavoriteListAtom);

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
            if (item.type === 'preparedFood') {
              return item.preparedFoodId;
            }
            return item.customLabel;
          })
          .includes(id),
    );
    return result;
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

  const sortedShoppingList = [...shoppingList].sort(
    (a, b) => Number(a.isPurchased) - Number(b.isPurchased),
  );

  const allStorageItemList = useAtomValue(allStorageItemListAtom);

  // 🛒 장보기
  // - 우유만 사면 메뉴 8개 증가
  // - 우유+양파만 사면 메뉴 18개 증가
  // - 나의 픽 메뉴 완성
  // - 자주 만드는 메뉴 완성
  // - 장보기 목록 구매 시 메뉴 증가

  const itemList = isNotInStorageFavoriteList.map((item) => ({
    type: 'myPick' as const,
    menuList: [],
    selectableItem: item,
  }));

  const recommendedShoppingListForMenu = filterRecommendableCandidates(
    getShoppingMenuExpansionCandidates(
      [...allMealList, ...allPreparedFoodList],
      allStorageItemList,
    ),
  );

  const test = [...recommendedShoppingListForMenu.slice(0, 4), ...itemList.slice(0, 3)];

  return (
    <KeyboardAvoidingViewContainer>
      <SafeAreaViewContainer>
        <ScreenHeader title="장보기" isDetailPage={false} />

        <ScrollViewContainer
          ref={scrollViewRef}
          contentContainerClassName="!gap-y-10 !pb-40"
        >
          {test ? (
            <View className="mt-2">
              <SectionTitle title="장보기 추천" icon="Sparkles" />
              <View className={`${test.length > 3 ? '' : ''}`}>
                <CarouselContainer
                  data={test}
                  initialIndex={test.length}
                  itemWidth={0.28}
                  hasNavigation
                  spacing={10}
                  requiredMinimum={3}
                  keyExtractor={(_, index) => `${index}`}
                  renderItem={({ item }) => (
                    <RecommendedShoppingItem key={item.selectableItem.id} item={item} />
                  )}
                />
              </View>
            </View>
          ) : (
            <></>
          )}

          <View className="gap-y-2">
            <SectionTitle title="장보기 목록" icon="ShoppingBasket" />

            <Card className="flex-row gap-x-4 !bg-indigo-1 !px-5">
              <Icon name="TrendingUp" color="indigo" />
              <View className="gap-y-2">
                <Text className="!text-[13px] text-blue-7">
                  장보기 목록을 모두 구매하면
                </Text>
                <Text className="font-extrabold text-blue-7">
                  만들 수 있는 메뉴가{' '}
                  <Text className="font-extrabold text-blue-9">10개</Text> 늘어나요!
                </Text>
              </View>
            </Card>

            <Card
              className="min-h-[52%] !p-3 !pt-2"
              onLayout={(e) => {
                setShoppingListY(e.nativeEvent.layout.y);
              }}
            >
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

                {purchasedCount > 0 ? (
                  <View className="flex-row">
                    <Text className="font-extrabold !text-[13px] text-blue-7">
                      {purchasedCount}개 선택
                    </Text>
                    <Text className="mx-1.5">|</Text>
                    <Text className="!text-[13px] text-neutral-7">
                      총 {shoppingList.length}개
                    </Text>
                  </View>
                ) : (
                  <Text className="!text-[13px]">총 {shoppingList.length}개</Text>
                )}
              </View>

              {shoppingList.length > 0 ? (
                <View className="flex-1">
                  <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
                    {sortedShoppingList.map((item, index) => (
                      <View key={item.id}>
                        <ShoppingItem
                          shoppingItem={item}
                          isError={error?.item?.id === item.id}
                        />

                        {index < sortedShoppingList.length - 1 && (
                          <View className="border-b border-dashed border-neutral-3" />
                        )}
                      </View>
                    ))}
                  </ScrollView>
                </View>
              ) : (
                <View className="flex-1 items-center justify-center">
                  <Image
                    source={image_empty_basket}
                    className="aspect-square size-24 opacity-60"
                  />
                  <Text className="text-inactive-text">장볼 식재료가 없어요</Text>
                </View>
              )}
            </Card>
          </View>
        </ScrollViewContainer>

        <View className="absolute bottom-4 w-full gap-y-2 px-[28px]">
          {/* 아래 컨트롤 버튼: 체크표시된게 있을 때 + 인풋이 포커스 안됐을 때 */}
          {purchasedCount > 0 && !isInputFocused && (
            <View className="flex-row items-start gap-x-2">
              <SquareBtn
                onPress={onDeletePress}
                name="선택항목 삭제하기"
                iconName="Trash2"
                iconSize={16}
                bgColor="yellow"
                className="!py-4"
              />
              <SquareBtn
                onPress={onAddToStoragePress}
                name="냉장고에 넣기"
                iconName="Grid2X2Plus"
                iconSize={16}
                bgColor="blue"
                className="!py-4"
              />
            </View>
          )}

          {error?.message && <Text className="pl-1 text-sm">{error?.message}</Text>}

          {/* 태그들과 인풋 */}
          {recommendedIngredientList.length > 0 && (
            <ScrollView
              horizontal
              className="rounded-lg"
              contentContainerClassName="gap-x-2"
              showsHorizontalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
            >
              {recommendedIngredientList.map((item) => (
                <TouchableOpacity key={item.id} onPress={() => onSubmitPress(item.label)}>
                  <SelectableItemCard
                    item={item}
                    className="h-20 min-w-20 !bg-yellow-3 !pt-1 pb-2.5"
                    textClassName="text-sm"
                    imageSize={35}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}

          <View
            className="relative"
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 8,
              },
              shadowOpacity: 0.1,
              shadowRadius: 12,
            }}
          >
            <TextInput
              value={inputValue}
              className="!rounded-full !border-blue-3 !pl-6 pr-12"
              onChangeText={onChangeText}
              onFocus={() => {
                setIsInputFocused(true);
                scrollViewRef.current?.scrollTo({
                  y: shoppingListY + 160,
                  animated: true,
                });
              }}
              onBlur={() => setIsInputFocused(false)}
              placeholder="장볼 식재료가 작성해주세요"
            />
            <Icon
              name="ArrowUp"
              size={20}
              className="absolute right-[8px] top-[8px] z-10 size-11 h-fit items-center justify-center rounded-full border border-blue-5 bg-neutral-3"
              onPress={() => onSubmitPress(inputValue)}
            />
          </View>
        </View>
      </SafeAreaViewContainer>
    </KeyboardAvoidingViewContainer>
  );
}
