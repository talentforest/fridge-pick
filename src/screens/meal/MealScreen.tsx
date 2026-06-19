import ScreenHeader from '@/components/common/header/ScreenHeader';
import TodayMeal from '@/components/home/TodayMeal';
import ScrollViewContainer from '@/components/common/container/ScrollViewContainer';
import CautionIngredientList from '@/components/home/CautionIngredientList';
import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import MealCard from '@/components/selectableItem/meal/MealCard';
import LabelContainer from '@/components/common/container/LabelContainer';
import FilterContainer from '@/components/common/container/FilterContainer';
import TextInput from '@/components/common/ui/TextInput';
import NavigateBtn from '@/components/common/NavigateBtn';
import { EnrichedMealWithFilterList, useGetMealList } from '@/hooks';
import { useCallback } from 'react';
import { View } from 'react-native';

export default function MealScreen() {
  const {
    mealFilterList,
    filteredMealList,
    searchKeyword,
    setSearchKeyword,
    activeFilter,
    changeActiveFilter,
  } = useGetMealList({ maxLength: 10 });

  const filteredChildrenData = useCallback(
    (meal: EnrichedMealWithFilterList) => <MealCard key={meal.id} meal={meal} />,
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
          hasCautionIngredientMeal={true}
          type="expiredSoon"
        />

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
            filterList={mealFilterList}
            dataList={filteredMealList}
            changeActiveFilter={changeActiveFilter}
            activeFilter={activeFilter}
          >
            {filteredChildrenData}
          </FilterContainer>

          <NavigateBtn navigateTo={'AllMealListScreen'} />
        </View>
      </ScrollViewContainer>
    </SafeAreaViewContainer>
  );
}
