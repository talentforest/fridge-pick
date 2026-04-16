import FilterTag from '@/components/common/FilterTag';
import Card from '@/components/common/ui/Card';
import { IconName } from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import { FilterColor } from '@/types/filter';

import { ReactNode, useState } from 'react';
import { View } from 'react-native';

type HasFilter<K> = {
  filterList: readonly K[];
};

type FilterItem<K> = {
  name: K;
  label: string;
  color: FilterColor;
  icon?: IconName;
};

interface FilterContainerProps<T extends HasFilter<K>, K> {
  filterList: FilterItem<K>[];
  dataList: T[];
  children: (data: T) => ReactNode;
}

export default function FilterContainer<T extends HasFilter<K>, K>({
  filterList,
  dataList,
  children,
}: FilterContainerProps<T, K>) {
  const [activeFilter, setActiveFilter] = useState<K | 'all'>('all');

  const filteredDataList =
    activeFilter === 'all'
      ? dataList
      : dataList.filter((data) => data.filterList.includes(activeFilter));

  return (
    <View>
      <View className="mb-4 flex-row flex-wrap gap-2">
        {filterList.map(({ name, label, color, icon }) => (
          <FilterTag
            key={String(name)}
            icon={icon}
            name={label}
            color={color}
            isActive={activeFilter === name}
            onPress={() => setActiveFilter(name)}
            className={icon ? 'pl-3' : ''}
          />
        ))}
      </View>

      <Text className="px-2 py-3 pb-4 text-base text-blue-5">추천 메뉴 목록</Text>

      {filteredDataList.length > 0 ? (
        <View className="flex-row flex-wrap justify-between gap-5">
          {filteredDataList.map(children)}
        </View>
      ) : (
        <Card className="h-80 items-center justify-center border">
          <Text className="text-inactive-text">추천 메뉴가 없어요</Text>
        </Card>
      )}
    </View>
  );
}
