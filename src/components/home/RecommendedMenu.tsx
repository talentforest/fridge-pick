import { View } from 'react-native';
import { useGetMenuList } from '@/hooks';
import SectionTitle from '@/components/common/header/SectionTitle';
import NavigateBtn from '@/components/common/NavigateBtn';
import CarouselContainer from '@/components/common/container/CarouselContainer';
import MenuCompactCard from '@/components/selectableItem/consumableFood/MenuCompactCard';
import FilterContainer from '@/components/common/container/FilterContainer';

export default function RecommendedMenu() {
  const {
    filterList,
    filteredMenuList,
    recommendedTodayMenuList,
    changeActiveFilter,
    activeFilter,
  } = useGetMenuList({ maxLength: 20 });

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

      <View className="min-h-[800px]">
        <SectionTitle title="식사 메뉴 목록" icon="HandPlatter" />
        <FilterContainer
          columns={2}
          filterList={filterList}
          dataList={filteredMenuList}
          changeActiveFilter={changeActiveFilter}
          activeFilter={activeFilter}
        >
          {(food) => <MenuCompactCard key={food.id} food={food} className="flex-1" />}
        </FilterContainer>

        <NavigateBtn navigateTo={'AllConsumableFoodListScreen'} />
      </View>
    </>
  );
}
