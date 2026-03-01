import FilterTag from '@/components/common/FilterTag';
import { CookingMenuFilterKey, FilterValue } from '@/types/filter';

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
  const [activeFilter, setActiveFilter] = useState<CookingMenuFilterKey>('all');

  const filteredDataList =
    activeFilter === 'all'
      ? dataList
      : dataList.filter((data) => data.filterList.includes(activeFilter));

  return (
    <View>
      <View className="mb-6 flex-row flex-wrap gap-2">
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

      <View className="flex-row flex-wrap justify-between gap-5">
        {filteredDataList.map(children)}
      </View>
    </View>
  );
}
