import { useGetFoodList } from '@/hooks';
import SectionTitle from '@/components/common/header/SectionTitle';
import CarouselContainer from '@/components/common/container/CarouselContainer';
import FoodCard from '@/components/selectableItem/FoodCard';
import SectionContainer from '@/components/common/container/SectionContainer';

export default function RecommendedFood() {
  const { recommendedTodayFoodList } = useGetFoodList({ maxLength: 20 });

  return (
    <>
      {recommendedTodayFoodList.length ? (
        <SectionContainer className="h-[300px]">
          <SectionTitle title="오늘 먹을 메뉴 추천" icon="HandPlatter" />

          <CarouselContainer
            data={recommendedTodayFoodList}
            initialIndex={recommendedTodayFoodList.length}
            itemWidth={0.43}
            spacing={10}
            hasNavigation
            hasPagination
            requiredMinimum={2}
            centerFocus
            keyExtractor={(item, index) => `${item.id}:${index}`}
            renderItem={({ item }) => <FoodCard key={item.id} food={item} />}
          />
        </SectionContainer>
      ) : (
        <></>
      )}
    </>
  );
}
