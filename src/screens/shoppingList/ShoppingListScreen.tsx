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
import { allFoodList, allIngredientList, image_empty_basket } from '@/constants';
import {
  filterRecommendableCandidates,
  getCompletableFoodListBySelectableItem,
  getShoppingFoodExpansionCandidates,
  searchSelectableItem,
} from '@/utils';
import { ShoppingItem as ShoppingItemType } from '@/types/shoppingItem';
import { useAtomValue, useSetAtom } from 'jotai';
import { Image, ScrollView, View } from 'react-native';
import { useErrorHandler, useOverlay, useHandleNavigate } from '@/hooks';
import { allStorageItemListAtom } from '@/atom/storageAtom';
import { isNotInStorageFavoriteListAtom } from '@/atom/favoritesAtom';
import React, { useMemo, useRef, useState } from 'react';
import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import ScreenHeader from '@/components/common/header/ScreenHeader';
import ShoppingItem from '@/components/trackedItem/shoppingList/ShoppingItem';
import Text from '@/components/common/ui/Text';
import KeyboardAvoidingViewContainer from '@/components/common/container/KeyboardAvoidingViewContainer';
import Card from '@/components/common/ui/Card';
import IconWithText from '@/components/common/IconWithText';
import Icon from '@/components/common/ui/Icon';
import CarouselContainer from '@/components/common/container/CarouselContainer';
import RecommendedShoppingItem from '@/components/trackedItem/RecommendedShoppingItem';
import SquareBtn from '@/components/common/SquareBtn';
import SelectableItemCard from '@/components/selectableItem/SelectableItemCard';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import TextInput from '@/components/common/ui/TextInput';
import SectionContainer from '@/components/common/container/SectionContainer';
import ViewContentContainer from '@/components/common/container/ViewContentContainer';
import { colorTokens } from '@/theme/color';
import { useAppTheme } from '@/hooks/common/useAppTheme';

export default function ShoppingListScreen() {
  const [inputValue, setInputValue] = useState<string>('');
  const [shoppingListY, setShoppingListY] = useState(0);

  const scrollViewRef = useRef<ScrollView>(null);

  const isNotInStorageFavoriteList = useAtomValue(isNotInStorageFavoriteListAtom);
  const shoppingList = useAtomValue(shoppingListAtom);
  const purchasedCount = useAtomValue(purchasedCountAtom);
  const isAllPurchased = useAtomValue(isAllPurchasedAtom);
  const purchasedItemList = useAtomValue(purchasedItemsAtom);
  const isInStorageItem = useAtomValue(isInStorageShoppingItemAtom);

  const addShoppingItem = useSetAtom(addShoppingItemAtom);
  const deleteShoppingItemList = useSetAtom(deleteShoppingItemListAtom);
  const toggleAllPurchased = useSetAtom(toggleAllPurchasedAtom);

  const { error, setError, clearError } = useErrorHandler<ShoppingItemType>();

  const { alert } = useOverlay();

  const { goNavigate } = useHandleNavigate();

  const recommendedIngredientList = useMemo(() => {
    const searchedIngredientList = searchSelectableItem(
      inputValue || '',
      [...allIngredientList, ...allFoodList],
      6,
    );

    const result = searchedIngredientList.filter(
      ({ id }) =>
        !shoppingList
          .map((item) => {
            if (item.type === 'ingredient') {
              return item.ingredientId;
            }
            return item.foodId;
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

    goNavigate('AddShoppingListScreen');
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

  const recommendShoppingList = useMemo(() => {
    // ✅ 나의 픽 식재료가 없을 떄 완성
    const hasNotMyPickList = isNotInStorageFavoriteList.map((item) => ({
      type: 'myPick' as const,
      foodList: [],
      selectableItem: item,
    }));

    // ✅ 메뉴에서 식재료 하나가 부족할 때
    const recommendedShoppingListForFood = filterRecommendableCandidates(
      getShoppingFoodExpansionCandidates(allStorageItemList),
    );

    const result = [
      ...recommendedShoppingListForFood.slice(0, 5),
      ...hasNotMyPickList.slice(0, 4),
    ];

    const prioritizeMyPick = <T extends { type: string; selectableItem: { id: string } }>(
      list: T[],
    ) =>
      Array.from(
        list
          .reduce((map, item) => {
            const existing = map.get(item.selectableItem.id);

            if (!existing || (item.type === 'myPick' && existing.type !== 'myPick')) {
              map.set(item.selectableItem.id, item);
            }

            return map;
          }, new Map<string, T>())
          .values(),
      );

    return prioritizeMyPick(result);
  }, [allStorageItemList, isNotInStorageFavoriteList]);

  const canAvailableFoodList = shoppingList
    .map((item) => {
      return getCompletableFoodListBySelectableItem(
        allStorageItemList,
        item.type === 'ingredient'
          ? item.ingredient
          : item.type === 'food'
            ? item.food
            : undefined,
      );
    })
    .flat();

  const { colorScheme } = useAppTheme();

  return (
    <KeyboardAvoidingViewContainer>
      <SafeAreaViewContainer>
        <ScreenHeader title="장보기 목록" isDetailPage={false} />

        <ViewContentContainer className="!gap-y-4 !pb-40 pt-2">
          <SectionContainer>
            <Card
              className={`border !p-3 !pt-2`}
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
                  iconColor={isAllPurchased ? 'indigo' : 'indigo'}
                  className="flex-row items-center gap-x-1.5 px-1 pb-2 pt-3"
                  onPress={onAllPurchasedClick}
                  textClassName={`${isAllPurchased ? 'text-primary' : 'text-primary'}`}
                />

                <View className="flex-row">
                  {purchasedCount > 0 ? (
                    <Text className="text-primary">{purchasedCount}개 선택</Text>
                  ) : (
                    <Text className="text-unselectedText">
                      총 {shoppingList.length}개
                    </Text>
                  )}
                </View>
              </View>

              <View className="h-[52vh]">
                {shoppingList.length > 0 ? (
                  <ScrollView showsVerticalScrollIndicator={false}>
                    {sortedShoppingList.map((item, index) => (
                      <View key={item.id}>
                        <ShoppingItem
                          shoppingItem={item}
                          isError={error?.item?.id === item.id}
                        />

                        {index < sortedShoppingList.length - 1 && (
                          <View className="border-b border-dashed border-primaryBorder" />
                        )}
                      </View>
                    ))}
                  </ScrollView>
                ) : (
                  <View className="flex-1 items-center justify-center">
                    <Image
                      source={image_empty_basket}
                      className="aspect-square size-24 opacity-60"
                    />
                    <Text className="mb-10 text-disabledText">장볼 식재료가 없어요</Text>
                  </View>
                )}

                {recommendShoppingList ? (
                  <SectionContainer>
                    <Text className="pl-1 font-extrabold !text-[13px] text-primary">{`추천 식재료 ${recommendShoppingList.length}개`}</Text>
                    <CarouselContainer
                      data={recommendShoppingList}
                      itemWidth={0.25}
                      centerFocus={false}
                      infinite={false}
                      spacing={10}
                      requiredMinimum={1}
                      keyExtractor={(_, index) => `${index}`}
                      renderItem={({ item }) => (
                        <RecommendedShoppingItem
                          key={item.selectableItem.id}
                          item={item}
                        />
                      )}
                    />
                  </SectionContainer>
                ) : (
                  <></>
                )}
              </View>
            </Card>
          </SectionContainer>

          {canAvailableFoodList.length > 0 ? (
            <Card className="flex-row gap-x-4 bg-neutral-0 !px-5">
              <Icon name="CookingPot" color="indigo" />

              <View className="gap-y-1.5">
                <Text className="!text-[13px] text-primary">
                  장보기 목록을 모두 구매하면
                </Text>
                <Text className="font-extrabold text-primary">
                  만들 수 있는 메뉴가{' '}
                  <Text className="font-extrabold text-blue-9">
                    {canAvailableFoodList.length}개
                  </Text>{' '}
                  늘어나요!
                </Text>
              </View>
            </Card>
          ) : (
            <></>
          )}
        </ViewContentContainer>

        {/* 아래 컨트롤 버튼: 체크표시된게 있을 때 + 인풋이 포커스 안됐을 때 */}
        <View className="absolute bottom-4 w-full gap-y-2 px-[20px]">
          {error?.message && (
            <Text className="pl-1 text-sm text-red-5">{error?.message}</Text>
          )}

          {recommendedIngredientList.length > 0 && (
            <ScrollView
              horizontal
              className="rounded-lg"
              contentContainerClassName="gap-x-1.5"
              showsHorizontalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
            >
              {recommendedIngredientList.map((item) => (
                <TouchableOpacity key={item.id} onPress={() => onSubmitPress(item.label)}>
                  <SelectableItemCard
                    item={item}
                    className="h-[40px] min-w-[65px] flex-row items-center gap-x-0.5 !bg-border !px-2"
                    textClassName="!text-sm"
                    imageSize={24}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}

          {purchasedCount > 0 ? (
            <View className="flex-row items-start gap-x-2">
              <SquareBtn
                onPress={onAddToStoragePress}
                name="냉장고에 넣기"
                iconName="Grid2X2Plus"
                iconSize={16}
                className="!py-4"
              />
              <SquareBtn
                onPress={onDeletePress}
                name="선택항목 삭제하기"
                iconName="Trash2"
                iconSize={16}
                bgColor="red"
                className="!py-4"
              />
            </View>
          ) : (
            <View
              className="relative"
              style={{
                shadowColor: colorTokens[colorScheme].neutral[9],
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
                  scrollViewRef.current?.scrollTo({
                    y: shoppingListY + 160,
                    animated: true,
                  });
                }}
                placeholder="장볼 식재료가 작성해주세요"
              />
              <Icon
                name="ArrowUp"
                size={20}
                className="absolute right-[8px] top-[8px] z-10 size-11 h-fit items-center justify-center rounded-full border border-blue-5 bg-primary"
                onPress={() => onSubmitPress(inputValue)}
              />
            </View>
          )}
        </View>
      </SafeAreaViewContainer>
      {/* 태그들과 인풋 */}
    </KeyboardAvoidingViewContainer>
  );
}
