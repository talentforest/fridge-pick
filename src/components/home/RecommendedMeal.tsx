import CarouselContainer from '@/components/common/container/CarouselContainer';
import FilterContainer from '@/components/common/container/FilterContainer';
import FullBleedSection from '@/components/common/container/FullBleedSection';
import MealCard from '@/components/common/MealCard';
import MealCompactCard from '@/components/common/MealCompactCard';
import SectionTitle from '@/components/common/SectionTitle';
import { mealList, filterObj } from '@/constants';
import { View } from 'react-native';

export default function RecommendedDish() {
  return (
    <View className="gap-y-3">
      <SectionTitle title="메뉴 추천 리스트" icon="HandPlatter" />

      <FullBleedSection>
        <CarouselContainer
          data={mealList}
          initialIndex={mealList.length}
          itemWidth={0.52}
          hasNavigation
          centerFocus
          renderItem={({ item }) => <MealCompactCard key={item.mealId} meal={item} />}
          keyExtractor={(_, index) => `${index}`}
        />
      </FullBleedSection>

      <View className="min-h-[800] pt-10">
        <FilterContainer
          filterList={Object.values(filterObj['meal'])}
          dataList={mealList}
        >
          {(meal) => <MealCard key={meal.mealId} meal={meal} className="w-full" />}
        </FilterContainer>
      </View>
    </View>
  );
}
