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
import { EnrichedConsumableFoodWithFilterList, useGetMenuList } from '@/hooks';
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
  } = useGetMenuList({ maxLength: 10 });

  const filteredChildrenData = useCallback(
    (meal: EnrichedConsumableFoodWithFilterList) => (
      <MenuCard key={meal.id} food={meal} />
    ),
    [],
  );

  return (
    <SafeAreaViewContainer>
      <ScreenHeader title="오늘의 식사" isDetailPage={false} />

      {/* 전체 식사 메뉴 리스트 */}
      <ScrollViewContainer>
        <TodayMenu />

        <CautionStorageItemList
          title="지금 꼭 써야하는 식재료가 있어요"
          hasCautionStorageItem={true}
          type="expiredSoon"
        />

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
            columns={1}
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
