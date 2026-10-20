import { image_empty_basket, inputShadowStyle } from '@/constants';

import { ScrollView, View } from 'react-native';
import { useHandleShoppingItem } from '@/hooks';
import { useRef } from 'react';
import { useAppTheme } from '@/hooks/common/useAppTheme';
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
import TextInput from '@/components/common/ui/TextInput';
import SectionContainer from '@/components/common/container/SectionContainer';
import ViewContentContainer from '@/components/common/container/ViewContentContainer';
import ShoppingInsightCard from '@/components/trackedItem/shoppingList/ShoppingInsightCard';
import SuggestedIngredientList from '@/components/trackedItem/shoppingList/SuggestedIngredientList';
import EmptyCard from '@/components/common/EmptyCard';

export default function ShoppingListScreen() {
  const { colorScheme } = useAppTheme();

  const scrollViewRef = useRef<ScrollView>(null);

  const {
    input: { inputValue, onChangeText, error, onSubmitPress },
    list: {
      shoppingList,
      purchasedCount,
      isAllPurchased,
      onAllPurchasedClick,
      onAddToStoragePress,
      onDeletePress,
    },
    suggest: {
      suggestListInInput,
      recommendShoppingList,
      shoppingListInsightList, //
    },
  } = useHandleShoppingItem({ scrollViewRef });

  return (
    <KeyboardAvoidingViewContainer>
      <SafeAreaViewContainer>
        <ScreenHeader title="장보기 목록" isDetailPage={false} />

        <ViewContentContainer className="pt-2">
          <Card className={`flex-1 !px-5 !pt-3`}>
            {/* 테이블 헤더 */}
            <View className="mb-1.5 flex-row items-center justify-between">
              <IconWithText
                text="전체 선택"
                icon={isAllPurchased ? 'SquareCheck' : 'Square'}
                iconSize={16}
                iconColor={isAllPurchased ? 'indigo' : 'indigo'}
                className="flex-row items-center gap-x-1.5 py-2"
                onPress={onAllPurchasedClick}
                textClassName={`${isAllPurchased ? 'text-primary' : 'text-primary'}`}
              />

              <View className="flex-row">
                {purchasedCount > 0 ? (
                  <Text className="text-primary">{purchasedCount}개 선택</Text>
                ) : (
                  <Text className="text-unselectedText">총 {shoppingList.length}개</Text>
                )}
              </View>
            </View>

            {/* 장보기 목록 */}
            {shoppingList.length > 0 ? (
              <ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false}>
                {shoppingList.map((item, index) => (
                  <View key={item.id}>
                    <ShoppingItem
                      shoppingItem={item}
                      isError={error?.item?.id === item.id}
                    />

                    {index < shoppingList.length - 1 && (
                      <View className="border-b border-dashed border-primaryBorder" />
                    )}
                  </View>
                ))}
              </ScrollView>
            ) : (
              <EmptyCard
                source={image_empty_basket}
                text="장볼 식재료가 없어요"
                className="mb-10 flex-1 border-0"
                hasBox={false}
              />
            )}

            {/* 추천 식재료 */}
            {recommendShoppingList.length > 0 ? (
              <SectionContainer className="pt-3">
                <Text className="pl-1 font-extrabold !text-[13px] text-primary">{`추천 식재료 ${recommendShoppingList.length}개`}</Text>
                <CarouselContainer
                  data={recommendShoppingList}
                  centerFocus={false}
                  infinite={false}
                  spacing={8}
                  requiredMinimum={0}
                  keyExtractor={(_, index) => `${index}`}
                  renderItem={({ item }) => (
                    <RecommendedShoppingItem key={item.selectableItem.id} item={item} />
                  )}
                />
              </SectionContainer>
            ) : (
              <></>
            )}
          </Card>

          {/* 인사이트 카드 */}
          {shoppingListInsightList.length > 0 ? <ShoppingInsightCard /> : <></>}

          {/* 아래 컨트롤 버튼: 체크표시된게 있을 때 + 인풋이 포커스 안됐을 때 */}
          <View className="gap-y-2">
            <SuggestedIngredientList
              suggestList={suggestListInInput}
              onSubmitPress={onSubmitPress}
            />

            {error?.message && (
              <Text className="pl-2 text-sm text-errorText">{error?.message}</Text>
            )}

            <View className="h-16">
              {purchasedCount > 0 ? (
                <View className="h-full flex-row items-center gap-x-2">
                  <SquareBtn
                    onPress={onAddToStoragePress}
                    name="냉장고에 넣기"
                    iconName="Grid2X2Plus"
                    iconSize={16}
                    className="!py-5"
                  />
                  <SquareBtn
                    onPress={onDeletePress}
                    name="선택항목 삭제하기"
                    iconName="Trash2"
                    iconSize={16}
                    bgColor="red"
                    className="!py-5"
                  />
                </View>
              ) : (
                <View style={inputShadowStyle(colorScheme)}>
                  <TextInput
                    value={inputValue}
                    className="!rounded-full !border-primaryBorder !pl-6 pr-12"
                    onChangeText={onChangeText}
                    placeholder="장볼 식재료나 음식을 작성해주세요"
                  />
                  <Icon
                    name="ArrowUp"
                    size={20}
                    color="indigo"
                    className="absolute right-[8px] top-[8px] z-10 size-11 h-fit items-center justify-center rounded-full border border-primaryBorder bg-primaryBackground"
                    onPress={() => onSubmitPress(inputValue)}
                  />
                </View>
              )}
            </View>
          </View>
        </ViewContentContainer>
      </SafeAreaViewContainer>
      {/* 태그들과 인풋 */}
    </KeyboardAvoidingViewContainer>
  );
}
