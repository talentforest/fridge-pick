import GridContainer from '@/components/common/container/GridContainer';
import FilterTag from '@/components/common/FilterTag';
import Card from '@/components/common/ui/Card';
import { IconName } from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import { allFilterObj } from '@/constants';
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
  columns?: number;
  listTitle?: string;
}

export default function FilterContainer<T extends HasFilter<K>, K>({
  filterList,
  dataList,
  children,
  columns,
  listTitle,
}: FilterContainerProps<T, K>) {
  const [activeFilter, setActiveFilter] = useState<K | 'all'>('all');

  const filteredDataList =
    activeFilter === 'all'
      ? dataList
      : dataList.filter((data) => data.filterList.includes(activeFilter));

  return (
    <View>
      <View className="mb-4 flex-row flex-wrap gap-2">
        {[allFilterObj, ...filterList].map(({ name, label, color }) => (
          <FilterTag
            key={String(name)}
            name={label}
            color={color}
            isActive={activeFilter === name}
            onPress={() => setActiveFilter(name)}
          />
        ))}
      </View>

      {filteredDataList.length > 0 ? (
        <View className="flex-row flex-wrap justify-between gap-3">
          {listTitle && (
            <Text className="pl-1 text-base text-neutral-7">{listTitle}</Text>
          )}
          {columns ? (
            <GridContainer columns={columns}>
              {filteredDataList.map(children)}
            </GridContainer>
          ) : (
            filteredDataList.map(children)
          )}
        </View>
      ) : (
        <Card className="h-80 items-center justify-center border">
          <Text className="text-inactive-text">식사메뉴가 없어요</Text>
        </Card>
      )}
    </View>
  );
}
