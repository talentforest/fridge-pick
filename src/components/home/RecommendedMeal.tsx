import { View } from 'react-native';
import { useGetMealList } from '@/hooks';
import SectionTitle from '@/components/common/header/SectionTitle';
import NavigateBtn from '@/components/common/NavigateBtn';
import FullBleedSection from '@/components/common/container/FullBleedSection';
import CarouselContainer from '@/components/common/container/CarouselContainer';
import MealCompactCard from '@/components/selectableItem/meal/MealCompactCard';
import FilterContainer from '@/components/common/container/FilterContainer';

export default function RecommendedMeal() {
  const {
    filterList,
    filteredMealList,
    recommendedTodayMealList,
    changeActiveFilter,
    activeFilter,
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
              renderItem={({ item }) => <MealCompactCard key={item.id} food={item} />}
            />
          </FullBleedSection>
        </View>
      )}

      <View className="min-h-[800px]">
        <SectionTitle title="식사 메뉴 목록" icon="HandPlatter" />
        <FilterContainer
          columns={2}
          filterList={filterList}
          dataList={filteredMealList}
          changeActiveFilter={changeActiveFilter}
          activeFilter={activeFilter}
        >
          {(food) => <MealCompactCard key={food.id} food={food} className="flex-1" />}
        </FilterContainer>

        <NavigateBtn navigateTo={'AllMealListScreen'} />
      </View>
    </>
  );
}
