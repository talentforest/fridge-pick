import CarouselContainer from '@/components/common/container/CarouselContainer';
import FilterContainer from '@/components/common/container/FilterContainer';
import DishCard from '@/components/common/DishCard';
import DishCompactCard from '@/components/common/DishCompactCard';
import SectionTitle from '@/components/common/SectionTitle';
import { dishList, filterObj } from '@/constants';
import { View } from 'react-native';

export default function RecommendedDish() {
  return (
    <View className="gap-y-3">
      <SectionTitle
        title="메뉴 추천 리스트"
        className="pl-6"
        icon="HandPlatter"
      />

      <View className="my-2 gap-y-5">
        <CarouselContainer
          data={dishList}
          initialIndex={dishList.length}
          itemWidth={0.49}
          hasNavigation
          centerFocus
          renderItem={({ item }) => (
            <DishCompactCard key={item.name} dish={item} />
          )}
          keyExtractor={(_, index) => `${index}`}
        />

        <View className="px-6">
          <FilterContainer
            filterList={Object.values(filterObj['dish'])}
            dataList={dishList}
          >
            {(dish) => (
              <DishCard key={dish.name} dish={dish} className="w-full" />
            )}
          </FilterContainer>
        </View>
      </View>
    </View>
  );
}
