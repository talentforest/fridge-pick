import CarouselContainer from '@/components/common/container/CarouselContainer';
import MealCompactCard from '@/components/selectableItem/meal/MealCompactCard';
import SectionTitle from '@/components/common/header/SectionTitle';
import FilterContainer from '@/components/common/container/FilterContainer';
import FullBleedSection from '@/components/common/container/FullBleedSection';
import NavigateBtn from '@/components/common/NavigateBtn';
import LabelContainer from '@/components/common/container/LabelContainer';
import TextInput from '@/components/common/ui/TextInput';
import { View } from 'react-native';
import { useGetMealList } from '@/hooks/meal/useGetMealList';
import { useAtom } from 'jotai';
import { searchKeywordAtom } from '@/atom/storageItemAtom';

export default function RecommendedDish() {
  const [searchKeyword, setSearchKeyword] = useAtom(searchKeywordAtom);

  const { mealFilterList, searchKeywordMealList, fastestMealList } = useGetMealList();

  return (
    <View className="gap-y-3">
      <SectionTitle title="오늘의 식사 메뉴 추천" icon="HandPlatter" />

      <FullBleedSection>
        <CarouselContainer
          data={fastestMealList} // TODO 추천 리스트 계산필요
          initialIndex={fastestMealList.length}
          itemWidth={0.43}
          hasNavigation
          hasPagination
          requiredMinimum={3}
          centerFocus
          keyExtractor={(item, index) => `${item.id}:${index}`}
          renderItem={({ item }) => <MealCompactCard key={item.id} meal={item} />}
        />
      </FullBleedSection>

      <View className="mt-12 min-h-[800px]">
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
          maximum={10}
        >
          {(meal) => (
            <MealCompactCard
              key={meal.id}
              meal={meal}
              ingredientStructure={meal.ingredientStructure}
              className="w-full"
            />
          )}
        </FilterContainer>

        <NavigateBtn navigateTo={'AllMealListScreen'} />
      </View>
    </View>
  );
}
