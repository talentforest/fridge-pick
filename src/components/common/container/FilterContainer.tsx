import FilterTag from '@/components/common/FilterTag';
import Text from '@/components/common/ui/Text';
import { MealFilterKey, FilterValue } from '@/types/filter';

import { ReactNode, useState } from 'react';
import { View } from 'react-native';

interface FilterContainerProps<T> {
  filterList: FilterValue[];
  dataList: T[];
  children: (data: T) => ReactNode;
}

export default function FilterContainer<T extends { filterList: string[] }>({
  filterList,
  dataList,
  children,
}: FilterContainerProps<T>) {
  const [activeFilter, setActiveFilter] = useState<MealFilterKey>('all');

  const filteredDataList =
    activeFilter === 'all'
      ? dataList
      : dataList.filter((data) => data.filterList.includes(activeFilter));

  return (
    <View>
      <View className="mb-4 flex-row flex-wrap gap-2">
        {Object.values(filterList).map(({ name, label, color }) => (
          <FilterTag
            key={label}
            name={label}
            color={color}
            isActive={activeFilter === name}
            onPress={() => setActiveFilter(name)}
          />
        ))}
      </View>

      <Text className="px-2 py-3 pb-4 text-base text-blue-5">추천 메뉴 목록</Text>

      <View className="flex-row flex-wrap justify-between gap-5">
        {filteredDataList.map(children)}
      </View>
    </View>
  );
}
