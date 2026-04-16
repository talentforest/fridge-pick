import CarouselContainer from '@/components/common/container/CarouselContainer';
import FilterContainer from '@/components/common/container/FilterContainer';
import FullBleedSection from '@/components/common/container/FullBleedSection';
import MealCard from '@/components/selectableItem/meal/MealCard';
import MealCompactCard from '@/components/selectableItem/meal/MealCompactCard';
import SectionTitle from '@/components/common/header/SectionTitle';
import { currMealList, filterObj } from '@/constants';
import { View } from 'react-native';

export default function RecommendedDish() {
  return (
    <View className="gap-y-3">
      <SectionTitle title="메뉴 추천 리스트" icon="HandPlatter" />

      <FullBleedSection>
        <CarouselContainer
          data={currMealList.slice(0, 4)}
          initialIndex={currMealList.slice(0, 4).length}
          itemWidth={0.52}
          hasNavigation
          centerFocus
          renderItem={({ item }) => <MealCompactCard key={item.id} meal={item} />}
          keyExtractor={(_, index) => `${index}`}
        />
      </FullBleedSection>

      <View className="mt-10 min-h-[800px]">
        <FilterContainer
          filterList={Object.values(filterObj['meal'])}
          dataList={currMealList}
        >
          {(meal) => <MealCard key={meal.id} meal={meal} className="w-full" />}
        </FilterContainer>
      </View>
    </View>
  );
}
