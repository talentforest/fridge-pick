import ScreenHeader from '@/components/common/header/ScreenHeader';
import TodayMeal from '@/components/home/TodayMeal';
import { searchKeywordAtom } from '@/atom/storageItemAtom';
import { useGetMealList } from '@/hooks';
import { useAtom } from 'jotai';
import { useCallback } from 'react';
import { MealWithEnrichIngredient } from '@/types/meal';
import { View } from 'react-native';
import ScrollViewContainer from '@/components/common/container/ScrollViewContainer';
import CautionIngredientList from '@/components/home/CautionIngredientList';
import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import MealCard from '@/components/selectableItem/meal/MealCard';
import LabelContainer from '@/components/common/container/LabelContainer';
import FilterContainer from '@/components/common/container/FilterContainer';
import TextInput from '@/components/common/ui/TextInput';
import NavigateBtn from '@/components/common/NavigateBtn';
import SectionTitle from '@/components/common/header/SectionTitle';
import FullBleedSection from '@/components/common/container/FullBleedSection';
import CarouselContainer from '@/components/common/container/CarouselContainer';
import MealCompactCard from '@/components/selectableItem/meal/MealCompactCard';

export default function MealScreen() {
  const [searchKeyword, setSearchKeyword] = useAtom(searchKeywordAtom);

  const { mealFilterList, hasAllMealList, searchKeywordMealList } = useGetMealList();

  const data = useCallback(
    (meal: MealWithEnrichIngredient) => <MealCard key={meal.id} meal={meal} />,
    [],
  );

  return (
    <SafeAreaViewContainer>
      <ScreenHeader title="오늘의 식사" isDetailPage={false} />

      {/* 전체 식사 메뉴 리스트 */}
      <ScrollViewContainer>
        <TodayMeal />

        <CautionIngredientList
          title="지금 꼭 써야하는 식재료가 있어요"
          hasCautionIngredientMeal
          type="expiredSoon"
        />

        {/* 모든 재료가 있어요 */}
        {hasAllMealList.length > 0 && (
          <View className="h-[330px] gap-y-3">
            <SectionTitle title="모든 재료가 있어요" icon="ShoppingBag" />
            <FullBleedSection>
              <CarouselContainer
                data={hasAllMealList}
                initialIndex={hasAllMealList.length}
                itemWidth={0.45}
                hasNavigation
                hasPagination
                centerFocus
                renderItem={({ item }) => <MealCompactCard key={item.id} meal={item} />}
                keyExtractor={(_, index) => `${index}`}
              />
            </FullBleedSection>
          </View>
        )}

        {/* 메뉴 검색바 */}
        <View className="min-h-[800px]">
          <LabelContainer label="메뉴 검색">
            <TextInput
              value={searchKeyword}
              onChangeText={setSearchKeyword}
              placeholder="찾으시는 메뉴를 검색해주세요."
              icon="Search"
            />
          </LabelContainer>

          <FilterContainer
            columns={1}
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
