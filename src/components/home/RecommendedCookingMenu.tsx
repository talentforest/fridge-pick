import FilterContainer from '@/components/common/container/FilterContainer';
import CookingMenuCard from '@/components/common/CookingMenuCard';
import Indicator from '@/components/common/Indicator';
import SectionTitle from '@/components/common/SectionTitle';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import { cookingMenuList, filterObj } from '@/constants';
import { ScrollView, View } from 'react-native';

export default function RecommendedCookingMenu() {
  return (
    <View>
      <SectionTitle title="메뉴 추천 리스트" />

      <ScrollView
        horizontal
        className="mb-5"
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="gap-x-3"
      >
        {cookingMenuList.map(({ name, filterList, time, ingredientList }) => (
          <Card key={name} className="bg-white w-56 gap-y-4">
            <Text className="text-lg">{name}</Text>

            {filterList.length > 0 && (
              <View className="mb-1 flex-row flex-wrap gap-2">
                {filterList.slice(0, 1).map((filter) => (
                  <Text key={filter} className={`text-md text-red-400`}>
                    {filterObj['cookingMenu'][filter].label}
                  </Text>
                ))}
              </View>
            )}

            <View className="flex-row gap-x-3">
              <Indicator type="time" value={time} />
              <Indicator type="total" value={ingredientList.length} />
            </View>
          </Card>
        ))}
      </ScrollView>

      <FilterContainer
        filterList={Object.values(filterObj['cookingMenu'])}
        dataList={cookingMenuList}
      >
        {(cookingMenu) => (
          <CookingMenuCard
            key={cookingMenu.name}
            cookingMenu={cookingMenu}
            className="w-full"
          />
        )}
      </FilterContainer>
    </View>
  );
}
