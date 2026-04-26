import CarouselContainer from '@/components/common/container/CarouselContainer';
import MealCompactCard from '@/components/selectableItem/meal/MealCompactCard';
import SectionTitle from '@/components/common/header/SectionTitle';
import FilterContainer from '@/components/common/container/FilterContainer';
import MealCard from '@/components/selectableItem/meal/MealCard';
import { View } from 'react-native';
import { useGetMealList } from '@/hooks/meal/useGetMealList';
import FullBleedSection from '@/components/common/container/FullBleedSection';

export default function RecommendedDish() {
  const { mealFilterList, allFilteredMealList } = useGetMealList();

  return (
    <View className="gap-y-3">
      <SectionTitle title="식사메뉴 추천 리스트" icon="HandPlatter" />

      <FullBleedSection>
        <CarouselContainer
          data={allFilteredMealList} // TODO 추천 리스트 계산필요
          initialIndex={allFilteredMealList.length}
          itemWidth={0.43}
          hasNavigation
          requiredMinimum={3}
          centerFocus
          renderItem={({ item }) => <MealCompactCard key={item.id} meal={item} />}
          keyExtractor={(_, index) => `${index}`}
        />
      </FullBleedSection>

      <View className="mt-10 min-h-[800px]">
        <FilterContainer filterList={mealFilterList} dataList={allFilteredMealList}>
          {(meal) => (
            <MealCard
              key={meal.id}
              meal={meal}
              ingredientStructure={meal.ingredientStructure}
              filterList={meal.filterList}
              className="w-full"
            />
          )}
        </FilterContainer>
      </View>
    </View>
  );
}
