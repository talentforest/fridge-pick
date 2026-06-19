import { View } from 'react-native';
import { useGetMealList } from '@/hooks';
import MealCompactCard from '@/components/selectableItem/meal/MealCompactCard';
import SectionTitle from '@/components/common/header/SectionTitle';
import FullBleedSection from '@/components/common/container/FullBleedSection';
import CarouselContainer from '@/components/common/container/CarouselContainer';
import NavigateBtn from '@/components/common/NavigateBtn';
import FilterContainer from '@/components/common/container/FilterContainer';

export default function RecommendedMeal() {
  const {
    mealFilterList,
    recommendedTodayMealList,
    filteredMealList,
    activeFilter,
    changeActiveFilter,
  } = useGetMealList({ maxLength: 300 });

  return (
    <>
      {recommendedTodayMealList.length && (
        <View className="h-[300px] gap-y-3">
          <SectionTitle title="오늘의 식사 추천" icon="HandPlatter" />

          <FullBleedSection>
            <CarouselContainer
              data={recommendedTodayMealList}
              initialIndex={recommendedTodayMealList.length}
              itemWidth={0.43}
              spacing={14}
              hasNavigation
              hasPagination
              requiredMinimum={2}
              centerFocus
              keyExtractor={(item, index) => `${item.id}:${index}`}
              renderItem={({ item }) => <MealCompactCard key={item.id} meal={item} />}
            />
          </FullBleedSection>
        </View>
      )}

      <View className="min-h-[800px]">
        <SectionTitle title="식사 메뉴 목록" icon="HandPlatter" />
        <FilterContainer
          columns={2}
          filterList={mealFilterList}
          dataList={filteredMealList}
          changeActiveFilter={changeActiveFilter}
          activeFilter={activeFilter}
        >
          {(meal) => <MealCompactCard key={meal.id} meal={meal} className="flex-1" />}
        </FilterContainer>

        <NavigateBtn navigateTo={'AllMealListScreen'} />
      </View>
    </>
  );
}
