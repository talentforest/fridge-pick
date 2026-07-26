import { View } from 'react-native';
import { useGetMenuList } from '@/hooks';
import SectionTitle from '@/components/common/header/SectionTitle';
import CarouselContainer from '@/components/common/container/CarouselContainer';
import MenuCompactCard from '@/components/selectableItem/consumableFood/MenuCompactCard';

export default function RecommendedMenu() {
  const { recommendedTodayMenuList } = useGetMenuList({ maxLength: 20 });

  return (
    <>
      {recommendedTodayMenuList.length ? (
        <View className="h-[300px] gap-y-3">
          <SectionTitle title="오늘의 식사 제안" icon="HandPlatter" />

          <CarouselContainer
            data={recommendedTodayMenuList}
            initialIndex={recommendedTodayMenuList.length}
            itemWidth={0.43}
            spacing={14}
            hasNavigation
            hasPagination
            requiredMinimum={2}
            centerFocus
            keyExtractor={(item, index) => `${item.id}:${index}`}
            renderItem={({ item }) => <MenuCompactCard key={item.id} food={item} />}
          />
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
