import FilterTag from '@/components/common/FilterTag';
import { IconName } from '@/components/common/ui/Icon';
import { FilterColor } from '@/types/filter';
import { useRef } from 'react';
import { ScrollView, View } from 'react-native';

export type FilterItem<K> = {
  name: K;
  label: string;
  color: FilterColor;
  icon: IconName;
};

interface FilterListProps<K> {
  filterList: FilterItem<K>[];
  activeFilter: any;
  changeActiveFilter: any;
  isScrollHorizontal?: boolean;
}

export default function FilterList<K>({
  filterList,
  activeFilter,
  changeActiveFilter,
  isScrollHorizontal,
}: FilterListProps<K>) {
  const scrollViewRef = useRef<ScrollView>(null);
  const scrollViewportRef = useRef<View>(null);
  const scrollXRef = useRef(0);

  const filterRefs = useRef(new Map<K, View | null>());

  const moveFilterToCenter = (name: K) => {
    const filterRef = filterRefs.current.get(name);
    const viewportRef = scrollViewportRef.current;

    if (!filterRef || !viewportRef) return;

    filterRef.measureInWindow((filterX, _, filterWidth) => {
      viewportRef.measureInWindow((viewportX, __, viewportWidth) => {
        const filterCenter = filterX + filterWidth / 2;
        const viewportCenter = viewportX + viewportWidth / 2;

        const distance = filterCenter - viewportCenter;

        scrollViewRef.current?.scrollTo({
          x: Math.max(0, scrollXRef.current + distance),
          animated: true,
        });
      });
    });
  };

  const handleFilterPress = (name: K) => {
    changeActiveFilter(name);
    moveFilterToCenter(name);
  };

  return isScrollHorizontal ? (
    <View ref={scrollViewportRef} collapsable={false} className="w-full">
      <ScrollView
        ref={scrollViewRef}
        horizontal
        contentContainerClassName="gap-x-2"
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={(event) => {
          scrollXRef.current = event.nativeEvent.contentOffset.x;
        }}
      >
        {filterList.map(({ name, label, icon, color }) => (
          <View
            key={String(name)}
            collapsable={false}
            ref={(ref) => {
              filterRefs.current.set(name, ref);
            }}
          >
            <FilterTag
              name={label}
              color={color}
              className="!rounded-full"
              textClassName="text-sm"
              icon={icon}
              isActive={activeFilter === name}
              onPress={() => handleFilterPress(name)}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  ) : (
    <View className="flex-row flex-wrap gap-2">
      {filterList.map(({ name, label, icon, color }) => (
        <FilterTag
          key={String(name)}
          name={label}
          color={color}
          className="!rounded-full"
          textClassName="text-sm"
          icon={icon}
          isActive={activeFilter === name}
          onPress={() => changeActiveFilter(name)}
        />
      ))}
    </View>
  );
}
