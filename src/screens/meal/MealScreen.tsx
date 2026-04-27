import CarouselContainer from '@/components/common/container/CarouselContainer';
import FilterContainer from '@/components/common/container/FilterContainer';
import LabelContainer from '@/components/common/container/LabelContainer';
import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import ScreenHeader from '@/components/common/header/ScreenHeader';
import SectionTitle from '@/components/common/header/SectionTitle';
import TextInput from '@/components/common/ui/TextInput';
import CautionMealListByIngredient from '@/components/meal/CautionMealListByIngredient';
import MealCompactCard from '@/components/selectableItem/meal/MealCompactCard';
import CautionStorageItem from '@/components/trackedItem/storage/CautionStorageItem';
import TodayMeal from '@/components/home/TodayMeal';
import FullBleedSection from '@/components/common/container/FullBleedSection';
import { cautionStorageItemListAtom, searchKeywordAtom } from '@/atom/storageItemAtom';
import { useGetMealList } from '@/hooks/meal/useGetMealList';
import { useAtom, useAtomValue } from 'jotai';
import { View } from 'react-native';
import { useCallback } from 'react';
import { EnrichMealIngredientStructure, Meal } from '@/types/meal';
import ScrollViewContainer from '@/components/common/container/ScrollViewContainer';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import NavigateBtn from '@/components/common/NavigateBtn';

export default function MealScreen() {
  const [searchKeyword, setSearchKeyword] = useAtom(searchKeywordAtom);

  const expiredSoonStorageItemList = useAtomValue(
    cautionStorageItemListAtom('expiredSoon'),
  );

  const { mealFilterList, fastestMealList, hasAllMealList, searchKeywordMealList } =
    useGetMealList();

  const data = useCallback(
    (meal: Meal & { ingredientStructure: EnrichMealIngredientStructure }) => (
      <MealCompactCard
        key={meal.id}
        ingredientStructure={meal.ingredientStructure}
        meal={meal}
      />
    ),
    [],
  );

  return (
    <SafeAreaViewContainer edges={['top']}>
      <ScreenHeader title="식사 메뉴" isDetailPage={false} />

      {/* 전체 식사 메뉴 리스트 */}
      <ScrollViewContainer>
        <TodayMeal />

        {/* 지금 꼭 써야하는 재료 */}
        {expiredSoonStorageItemList.length > 0 && (
          <View className="h-[500px] gap-y-3">
            <SectionTitle
              title="지금 꼭 써야하는 재료가 있어요"
              icon="TriangleAlert"
              color="red"
            />
            <FullBleedSection>
              <CarouselContainer
                data={expiredSoonStorageItemList}
                initialIndex={expiredSoonStorageItemList.length}
                itemWidth={0.25}
                hasNavigation
                requiredMinimum={3}
                spacing={8}
                centerFocus
                hasPagination
                keyExtractor={(_, index) => `${index}`}
                renderItem={({ item, index, isCurrIndex, onPress }) =>
                  onPress ? (
                    <TouchableOpacity onPress={onPress}>
                      <CautionStorageItem
                        index={index}
                        storageItem={item.storageItem}
                        isCurrIndex={isCurrIndex}
                        remainingDays={item.remainingDays}
                      />
                    </TouchableOpacity>
                  ) : (
                    <CautionStorageItem
                      index={index}
                      storageItem={item.storageItem}
                      isCurrIndex={isCurrIndex}
                      remainingDays={item.remainingDays}
                    />
                  )
                }
              >
                {({ storageItem: focusedItem }) => (
                  <CautionMealListByIngredient
                    key={focusedItem.id}
                    focusedItem={focusedItem}
                  />
                )}
              </CarouselContainer>
            </FullBleedSection>
          </View>
        )}

        {/* 10분 이내로 먹을 수 있어요 */}
        {fastestMealList.length > 0 && (
          <View className="h-[330px] gap-y-3">
            <SectionTitle title="10분 이내로 먹을 수 있어요" icon="Zap" />
            <FullBleedSection>
              <CarouselContainer
                data={fastestMealList}
                initialIndex={fastestMealList.length}
                itemWidth={0.45}
                hasNavigation
                hasPagination
                centerFocus
                keyExtractor={(_, index) => `${index}`}
                renderItem={({ item }) => (
                  <MealCompactCard
                    key={item.id}
                    ingredientStructure={item.ingredientStructure}
                    meal={item}
                  />
                )}
              />
            </FullBleedSection>
          </View>
        )}

        {/* 모든 재료가 있어요 */}
        {hasAllMealList.length > 0 && (
          <View className="h-[330px] gap-y-3">
            <SectionTitle title="모든 재료가 있어요" icon="ShoppingBag" />
            <FullBleedSection>
              <CarouselContainer
                data={hasAllMealList} // TODO 추천 리스트 계산필요
                initialIndex={hasAllMealList.length}
                itemWidth={0.45}
                hasNavigation
                hasPagination
                centerFocus
                renderItem={({ item }) => (
                  <MealCompactCard
                    key={item.id}
                    ingredientStructure={item.ingredientStructure}
                    meal={item}
                  />
                )}
                keyExtractor={(_, index) => `${index}`}
              />
            </FullBleedSection>
          </View>
        )}

        <View className="min-h-[800px]">
          {/* 메뉴 검색바 */}
          <LabelContainer label="메뉴 검색">
            <TextInput
              value={searchKeyword}
              onChangeText={setSearchKeyword}
              placeholder="찾으시는 메뉴를 검색해주세요."
              icon="Search"
            />
          </LabelContainer>

          <FilterContainer
            columns={2}
            maximum={10}
            filterList={mealFilterList}
            dataList={searchKeywordMealList.slice(0, 20)}
          >
            {data}
          </FilterContainer>

          <NavigateBtn navigateTo={'AllMealListScreen'} />
        </View>
      </ScrollViewContainer>
    </SafeAreaViewContainer>
  );
}
