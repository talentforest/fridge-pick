import { EnrichedFoodWithFilter, useGetFoodList } from '@/hooks';
import { useCallback } from 'react';
import ScreenHeader from '@/components/common/header/ScreenHeader';

import ScrollViewContainer from '@/components/common/container/ScrollViewContainer';
import CautionStorageItemList from '@/components/home/CautionStorageItemList';
import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import FoodCard from '@/components/selectableItem/FoodCard';
import FilterContainer from '@/components/common/container/FilterContainer';
import TextInput from '@/components/common/ui/TextInput';
import NavigateBtn from '@/components/common/NavigateBtn';
import SectionTitle from '@/components/common/header/SectionTitle';
import SectionContainer from '@/components/common/container/SectionContainer';
import TodayFood from '@/components/home/TodayFood';

export default function FoodScreen() {
  const {
    filterList,
    filteredFoodList,
    searchKeyword,
    setSearchKeyword,
    activeFilter,
    changeActiveFilter,
  } = useGetFoodList({ maxLength: 30 });

  const filteredChildrenData = useCallback(
    (food: EnrichedFoodWithFilter) => (
      <FoodCard key={food.id} food={food} className="flex-1" />
    ),
    [],
  );

  return (
    <SafeAreaViewContainer>
      <ScreenHeader title="식사 메뉴" isDetailPage={false} />

      {/* 전체 식사 메뉴 리스트 */}
      <ScrollViewContainer contentContainerClassName="mt-3">
        <TodayFood type="list" hasHeader />

        <SectionContainer>
          <SectionTitle title="소비기한 임박 식재료를 활용한 메뉴" />
          <CautionStorageItemList type="expiredSoon" hasFoodListByExpiredSoonFood />
        </SectionContainer>

        {/* 메뉴 검색바 */}
        <SectionContainer className="min-h-[800px]">
          <SectionTitle title="메뉴 검색" />

          <TextInput
            value={searchKeyword}
            onChangeText={setSearchKeyword}
            placeholder="찾으시는 메뉴를 검색해주세요."
            icon="Search"
          />

          <FilterContainer
            columns={2}
            filterList={filterList}
            dataList={filteredFoodList}
            changeActiveFilter={changeActiveFilter}
            activeFilter={activeFilter}
          >
            {filteredChildrenData}
          </FilterContainer>

          <NavigateBtn navigateTo="AllFoodListScreen" />
        </SectionContainer>
      </ScrollViewContainer>
    </SafeAreaViewContainer>
  );
}
