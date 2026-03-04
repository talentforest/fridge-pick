import FilterContainer from '@/components/common/container/FilterContainer';
import DishCard from '@/components/common/DishCard';
import Indicator from '@/components/common/Indicator';
import SectionTitle from '@/components/common/SectionTitle';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import { dishList, filterObj } from '@/constants';
import { ScrollView, View } from 'react-native';

export default function RecommendedDish() {
  return (
    <View className="gap-y-3">
      <SectionTitle title="메뉴 추천 리스트" />

      <ScrollView
        horizontal
        className="mb-5"
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="gap-x-3"
      >
        {dishList.map(({ name, filterList, time, ingredientList }) => (
          <Card key={name} className="w-56 gap-y-4 bg-white">
            <Text className="text-lg">{name}</Text>

            {filterList.length > 0 && (
              <View className="mb-1 flex-row flex-wrap gap-2">
                {filterList.slice(0, 1).map((filter) => (
                  <Text key={filter} className={`text-md text-red-400`}>
                    {filterObj['dish'][filter].label}
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
        filterList={Object.values(filterObj['dish'])}
        dataList={dishList}
      >
        {(dish) => <DishCard key={dish.name} dish={dish} className="w-full" />}
      </FilterContainer>
    </View>
  );
}
