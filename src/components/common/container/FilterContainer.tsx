import FilterTag from '@/components/common/FilterTag';
import Text from '@/components/common/ui/Text';
import { allFilterObj } from '@/constants';
import { FilterColor } from '@/types/filter';
import { IconName } from '@/components/common/ui/Icon';
import { ReactElement, useState } from 'react';
import { FlatList, View } from 'react-native';
import GridContainer from '@/components/common/container/GridContainer';
import Card from '@/components/common/ui/Card';

type HasFilter<K> = {
  id: string;
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
  children: (data: T) => ReactElement;
  columns?: number;
  isFlatList?: boolean;
  ListHeaderComponent?: ReactElement;
  maximum?: number;
}

export default function FilterContainer<T extends HasFilter<K>, K>({
  filterList,
  dataList,
  children,
  columns,

  ListHeaderComponent,
  isFlatList = false,
  maximum,
}: FilterContainerProps<T, K>) {
  const [activeFilter, setActiveFilter] = useState<K | 'all'>('all');

  const filteredDataList =
    activeFilter === 'all'
      ? dataList
      : dataList.filter((data) => data.filterList.includes(activeFilter));

  const finalDataList = filteredDataList.slice(0, maximum);

  return (
    <>
      {isFlatList ? (
        <FlatList
          data={finalDataList}
          showsVerticalScrollIndicator={false}
          numColumns={columns}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            marginBottom: 8,
          }}
          contentContainerClassName="pb-10 px-6"
          keyExtractor={(item) => item.id}
          ListHeaderComponent={
            <>
              {ListHeaderComponent}
              <FilterList
                filterList={filterList}
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
                listTitle={`총 ${finalDataList.length}개의 메뉴`} // TODO: '메뉴' 글자는 type으로 props 변경하든지 할것.
              />
            </>
          }
          renderItem={({ item }) => children(item)}
          ListEmptyComponent={
            <Card className="h-[420px] items-center justify-center border">
              <Text className="text-inactive-text">식사메뉴가 없어요</Text>
            </Card>
          }
        />
      ) : (
        <>
          <FilterList
            filterList={filterList}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
            listTitle={`총 ${finalDataList.length}개의 메뉴`}
          />

          {finalDataList.length > 0 ? (
            <GridContainer columns={columns}>{finalDataList.map(children)}</GridContainer>
          ) : (
            <Card className="h-[420px] items-center justify-center border">
              <Text className="text-inactive-text">식사메뉴가 없어요</Text>
            </Card>
          )}
        </>
      )}
    </>
  );
}

interface FilterListProps<K> {
  filterList: FilterItem<K>[];
  activeFilter: any;
  setActiveFilter: any;
  listTitle?: string;
}

function FilterList<K>({
  filterList,
  activeFilter,
  setActiveFilter,
  listTitle,
}: FilterListProps<K>) {
  return (
    <>
      <View className="my-3 flex-row flex-wrap gap-2">
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
      {listTitle && (
        <Text className="mb-4 mt-2 pl-1 text-base text-neutral-7">{listTitle}</Text>
      )}
    </>
  );
}
