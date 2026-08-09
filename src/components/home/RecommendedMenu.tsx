import { View } from 'react-native';
import { useGetMenuList } from '@/hooks';
import SectionTitle from '@/components/common/header/SectionTitle';
import CarouselContainer from '@/components/common/container/CarouselContainer';
import MenuCard from '@/components/selectableItem/consumableFood/MenuCard';

export default function RecommendedMenu() {
  const { recommendedTodayMenuList } = useGetMenuList({ maxLength: 20 });

  return (
    <>
      {recommendedTodayMenuList.length ? (
        <View className="h-[300px] gap-y-3">
          <SectionTitle title="오늘 먹을 메뉴 추천" icon="HandPlatter" />

          <CarouselContainer
            data={recommendedTodayMenuList}
            initialIndex={recommendedTodayMenuList.length}
            itemWidth={0.43}
            spacing={10}
            hasNavigation
            hasPagination
            requiredMinimum={2}
            centerFocus
            keyExtractor={(item, index) => `${item.id}:${index}`}
            renderItem={({ item }) => <MenuCard key={item.id} food={item} />}
          />
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
