import CarouselContainer from '@/components/common/container/CarouselContainer';
import FilterContainer from '@/components/common/container/FilterContainer';
import FullBleedSection from '@/components/common/container/FullBleedSection';
import DishCard from '@/components/common/DishCard';
import DishCompactCard from '@/components/common/DishCompactCard';
import SectionTitle from '@/components/common/SectionTitle';
import { dishList, filterObj } from '@/constants';
import { View } from 'react-native';

export default function RecommendedDish() {
  return (
    <View className="gap-y-3">
      <SectionTitle title="메뉴 추천 리스트" icon="HandPlatter" />

      <FullBleedSection>
        <CarouselContainer
          data={dishList}
          initialIndex={dishList.length}
          itemWidth={0.49}
          hasNavigation
          centerFocus
          renderItem={({ item }) => <DishCompactCard key={item.name} dish={item} />}
          keyExtractor={(_, index) => `${index}`}
        />
      </FullBleedSection>

      <View className="min-h-[800]">
        <FilterContainer
          filterList={Object.values(filterObj['dish'])}
          dataList={dishList}
        >
          {(dish) => <DishCard key={dish.name} dish={dish} className="w-full" />}
        </FilterContainer>
      </View>
    </View>
  );
}
