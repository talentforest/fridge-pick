import FilterTag from '@/components/common/FilterTag';
import Text from '@/components/common/ui/Text';
import { allFilterObj } from '@/constants';
import { FilterColor } from '@/types/filter';
import { IconName } from '@/components/common/ui/Icon';
import { ReactElement, useState } from 'react';
import { FlatList, View } from 'react-native';
import GridContainer from '@/components/common/container/GridContainer';
import Card from '@/components/common/ui/Card';
import IconWithText from '@/components/common/IconWithText';

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
        <View>
          <FilterList
            filterList={filterList}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />

          <View className="mb-4 mt-3 flex-row items-center justify-between px-2">
            <Text className="text-base text-neutral-7">
              총 {dataList.length}개의 메뉴
            </Text>

            {/* NOTE: 추천순 / 재료 많이 보유한 순 / 부족 재료 적은 순 / 가나다순  */}
            <IconWithText
              text="추천순"
              textClassName="text-base text-neutral-7"
              icon="ArrowDown"
              iconSize={16}
              iconColor="neutral"
            />
          </View>

          {finalDataList.length > 0 ? (
            <GridContainer columns={columns} gap={12}>
              {finalDataList.map(children)}
            </GridContainer>
          ) : (
            <Card className="h-[420px] items-center justify-center border">
              <Text className="text-inactive-text">식사메뉴가 없어요</Text>
            </Card>
          )}
        </View>
      )}
    </>
  );
}

interface FilterListProps<K> {
  filterList: FilterItem<K>[];
  activeFilter: any;
  setActiveFilter: any;
}

function FilterList<K>({
  filterList,
  activeFilter,
  setActiveFilter,
}: FilterListProps<K>) {
  return (
    <View className="my-3 flex-row flex-wrap gap-2">
      {[allFilterObj, ...filterList].map(({ name, label }) => (
        <FilterTag
          key={String(name)}
          name={label}
          color="blue"
          isActive={activeFilter === name}
          onPress={() => setActiveFilter(name)}
        />
      ))}
    </View>
  );
}
