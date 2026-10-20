import Text from '@/components/common/ui/Text';
import GridContainer from '@/components/common/container/GridContainer';
import { ReactElement } from 'react';
import { FlatList, View } from 'react-native';
import FilterList, { FilterItem } from '@/components/common/FilterList';
import EmptyCard from '@/components/common/EmptyCard';
import { image_empty_plate } from '@/constants';

type HasFilter<K> = {
  id: string;
  filterList: readonly K[];
};

interface FilterContainerProps<T extends HasFilter<K>, K> {
  filterList: FilterItem<K>[];
  dataList: T[];
  columns?: number;
  isFlatList?: boolean;
  ListHeaderComponent?: ReactElement;
  activeFilter: K;
  changeActiveFilter: (filter: K) => void;
  children: (data: T) => ReactElement;
}

export default function FilterContainer<T extends HasFilter<K>, K>({
  filterList,
  dataList,
  columns,
  ListHeaderComponent,
  isFlatList = false,
  activeFilter,
  changeActiveFilter,
  children,
}: FilterContainerProps<T, K>) {
  return (
    <>
      {isFlatList ? (
        <FlatList
          data={dataList}
          showsVerticalScrollIndicator={false}
          numColumns={columns}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            marginBottom: 8,
          }}
          contentContainerClassName="pb-10 px-5"
          keyExtractor={(item) => item.id}
          ListHeaderComponent={
            <>
              {ListHeaderComponent}
              <FilterList
                filterList={filterList}
                activeFilter={activeFilter}
                changeActiveFilter={changeActiveFilter}
              />
            </>
          }
          renderItem={({ item }) => children(item)}
          ListEmptyComponent={
            <EmptyCard
              source={image_empty_plate}
              text="식사메뉴가 없어요"
              className="flex-1"
            />
          }
        />
      ) : (
        <View className="flex-1 gap-y-4">
          <FilterList
            filterList={filterList}
            activeFilter={activeFilter}
            changeActiveFilter={changeActiveFilter}
          />

          <View className="mt-2 flex-row items-center justify-between pl-1">
            <Text className="font-extrabold text-neutral-7">
              총 {dataList.length}개의 메뉴
            </Text>
          </View>

          {dataList.length > 0 && children ? (
            <GridContainer columns={columns} horizontalInset={20} gap={14}>
              {dataList.map(children)}
            </GridContainer>
          ) : (
            <EmptyCard
              source={image_empty_plate}
              text="식사메뉴가 없어요"
              className="flex-1"
            />
          )}
        </View>
      )}
    </>
  );
}
