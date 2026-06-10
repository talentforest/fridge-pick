import MealCompactCard from '@/components/selectableItem/meal/MealCompactCard';
import { View } from 'react-native';
import { useGetMealList } from '@/hooks';
import { useAtom } from 'jotai';
import { searchKeywordAtom } from '@/atom/storageItemAtom';
import SectionTitle from '@/components/common/header/SectionTitle';
import FullBleedSection from '@/components/common/container/FullBleedSection';
import CarouselContainer from '@/components/common/container/CarouselContainer';
import TextInput from '@/components/common/ui/TextInput';

import NavigateBtn from '@/components/common/NavigateBtn';
import LabelContainer from '@/components/common/container/LabelContainer';
import FilterContainer from '@/components/common/container/FilterContainer';

export default function RecommendedMeal() {
  const [searchKeyword, setSearchKeyword] = useAtom(searchKeywordAtom);

  const { mealFilterList, searchKeywordMealList, recommendedTodayMealList } =
    useGetMealList();

  return (
    <>
      {recommendedTodayMealList.length && (
        <View className="h-[300px] gap-y-3">
          <SectionTitle title="오늘의 식사 메뉴 추천" icon="HandPlatter" />

          <FullBleedSection>
            <CarouselContainer
              data={recommendedTodayMealList}
              initialIndex={recommendedTodayMealList.length}
              itemWidth={0.43}
              spacing={14}
              hasNavigation
              hasPagination
              requiredMinimum={2}
              centerFocus
              keyExtractor={(item, index) => `${item.id}:${index}`}
              renderItem={({ item }) => <MealCompactCard key={item.id} meal={item} />}
            />
          </FullBleedSection>
        </View>
      )}

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
          filterList={mealFilterList}
          dataList={searchKeywordMealList}
          maximum={20}
        >
          {(meal) => <MealCompactCard key={meal.id} meal={meal} className="w-full" />}
        </FilterContainer>

        <NavigateBtn navigateTo={'AllMealListScreen'} />
      </View>
    </>
  );
}
