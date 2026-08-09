import ScreenHeader from '@/components/common/header/ScreenHeader';
import TodayMenu from '@/components/home/TodayMenu';
import ScrollViewContainer from '@/components/common/container/ScrollViewContainer';
import CautionStorageItemList from '@/components/home/CautionStorageItemList';
import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import MenuCard from '@/components/selectableItem/consumableFood/MenuCard';
import LabelContainer from '@/components/common/container/LabelContainer';
import FilterContainer from '@/components/common/container/FilterContainer';
import TextInput from '@/components/common/ui/TextInput';
import NavigateBtn from '@/components/common/NavigateBtn';
import { EnrichedConsumableFoodWithFilter, useGetMenuList } from '@/hooks';
import { useCallback } from 'react';
import { View } from 'react-native';

export default function ConsumableFoodScreen() {
  const {
    filterList,
    filteredMenuList,
    searchKeyword,
    setSearchKeyword,
    activeFilter,
    changeActiveFilter,
  } = useGetMenuList({ maxLength: 30 });

  const filteredChildrenData = useCallback(
    (meal: EnrichedConsumableFoodWithFilter) => <MenuCard key={meal.id} food={meal} />,
    [],
  );

  return (
    <SafeAreaViewContainer>
      <ScreenHeader title="식사 메뉴" isDetailPage={false} />

      {/* 전체 식사 메뉴 리스트 */}
      <ScrollViewContainer contentContainerClassName="mt-3">
        <TodayMenu hasHeader />

        <CautionStorageItemList type="expiredSoon" />

        {/* 메뉴 검색바 */}
        <View className="min-h-[800px]">
          <LabelContainer label="메뉴 검색">
            <TextInput
              value={searchKeyword}
              onChangeText={setSearchKeyword}
              placeholder="찾으시는 메뉴를 검색해주세요."
              icon="Search"
            />
          </LabelContainer>

          <FilterContainer
            columns={2}
            filterList={filterList}
            dataList={filteredMenuList}
            changeActiveFilter={changeActiveFilter}
            activeFilter={activeFilter}
          >
            {filteredChildrenData}
          </FilterContainer>

          <NavigateBtn navigateTo={'AllConsumableFoodListScreen'} />
        </View>
      </ScrollViewContainer>
    </SafeAreaViewContainer>
  );
}
