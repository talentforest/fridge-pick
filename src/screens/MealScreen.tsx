import CarouselContainer from '@/components/common/container/CarouselContainer';
import FilterContainer from '@/components/common/container/FilterContainer';
import FullBleedSection from '@/components/common/container/FullBleedSection';
import LabelContainer from '@/components/common/container/LabelContainer';
import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import ScrollViewContainer from '@/components/common/container/ScrollViewContainer';
import ScreenHeader from '@/components/common/header/ScreenHeader';
import SectionTitle from '@/components/common/header/SectionTitle';
import TextInput from '@/components/common/ui/TextInput';
import TodayMeal from '@/components/home/TodayMeal';
import CautionMealListByIngredient from '@/components/meal/CautionMealListByIngredient';
import MealCompactCard from '@/components/selectableItem/meal/MealCompactCard';
import CautionStorageItem from '@/components/trackedItem/storage/CautionStorageItem';
import { cautionStorageItemListAtom, searchKeywordAtom } from '@/atom/storageItemAtom';
import { useGetMealList } from '@/hooks/meal/useGetMealList';
import { useAtom, useAtomValue } from 'jotai';
import { TouchableOpacity, View } from 'react-native';

export default function MealScreen() {
  const [searchKeyword, setSearchKeyword] = useAtom(searchKeywordAtom);

  const expiredSoonStorageItemList = useAtomValue(
    cautionStorageItemListAtom('expiredSoon'),
  );

  const { mealFilterList, fastestMealList, hasAllMealList, searchKeywordMealList } =
    useGetMealList();

  return (
    <SafeAreaViewContainer edges={['top']}>
      <ScreenHeader title="식사 메뉴" isDetailPage={false} className="mb-4" />

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
          <View className="h-[300px] gap-y-3">
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
          <View className="h-[300px] gap-y-3 ">
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

        <View className="gap-y-3">
          {/* 메뉴 검색바 */}
          <LabelContainer label="메뉴 검색">
            <TextInput
              maxLength={50}
              value={searchKeyword}
              onChangeText={setSearchKeyword}
              placeholder="찾으시는 메뉴를 검색해주세요."
              icon="Search"
            />
          </LabelContainer>

          {/* 전체 식사 메뉴 리스트 */}
          {/* 무한스크롤 */}
          <View className="h-[141vh]">
            <FilterContainer
              columns={2}
              filterList={mealFilterList}
              dataList={searchKeywordMealList}
              listTitle={`총 ${searchKeywordMealList.length}개의 메뉴`}
            >
              {(meal) => (
                <MealCompactCard
                  key={meal.id}
                  ingredientStructure={meal.ingredientStructure}
                  meal={meal}
                />
              )}
            </FilterContainer>
          </View>
        </View>
      </ScrollViewContainer>
    </SafeAreaViewContainer>
  );
}
