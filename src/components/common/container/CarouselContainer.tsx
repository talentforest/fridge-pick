import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import { useMemo, useRef, useState } from 'react';
import { Dimensions, FlatList, Pressable, View } from 'react-native';

const SPACING = 12;

type RenderItemWithIndex<T> = (args: {
  item: T;
  index: number;
  currentIndex: number;
}) => React.ReactElement;

interface CarouselContainerProps<T> {
  data: T[];
  itemWidth: number;
  initialIndex?: number;
  renderItem: RenderItemWithIndex<T>;
  keyExtractor: (item: T, index: number) => string;
}

export default function CarouselContainer<T>({
  data,
  itemWidth,
  initialIndex = data.length,
  renderItem,
  keyExtractor,
}: CarouselContainerProps<T>) {
  const listRef = useRef<FlatList<T>>(null);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const { width } = Dimensions.get('window');
  const CARD_WIDTH = width * itemWidth;
  const ITEM_SIZE = useMemo(() => CARD_WIDTH + SPACING, [CARD_WIDTH]);

  const handleDirection = (direction: 'prev' | 'next') => {
    const next = direction === 'prev' ? currentIndex - 1 : currentIndex + 1;

    listRef.current?.scrollToOffset({
      offset: ITEM_SIZE * next,
      animated: true,
    });

    setCurrentIndex(next);
  };

  const flatListData = [...data, ...data, ...data];

  return (
    <View>
      <FlatList
        ref={listRef}
        data={flatListData}
        horizontal
        snapToInterval={ITEM_SIZE}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        nestedScrollEnabled
        initialScrollIndex={initialIndex}
        ItemSeparatorComponent={() => <View style={{ width: SPACING }} />}
        contentContainerStyle={{
          paddingHorizontal: (width - CARD_WIDTH) / 2,
        }}
        getItemLayout={(_, index) => ({
          length: ITEM_SIZE,
          offset: ITEM_SIZE * index,
          index,
        })}
        onMomentumScrollEnd={(e) => {
          const offsetX = e.nativeEvent.contentOffset.x;
          const index = Math.round(offsetX / ITEM_SIZE);

          if (index < initialIndex) {
            const newIndex = index + initialIndex;
            listRef.current?.scrollToOffset({
              offset: ITEM_SIZE * newIndex,
              animated: false,
            });
            setCurrentIndex(newIndex);
            return;
          }

          if (index >= initialIndex * 2) {
            const newIndex = index - initialIndex;
            listRef.current?.scrollToOffset({
              offset: ITEM_SIZE * newIndex,
              animated: false,
            });
            setCurrentIndex(newIndex);
            return;
          }
          setCurrentIndex(index);
        }}
        renderItem={({ item, index }) =>
          renderItem({ item, index, currentIndex })
        }
        keyExtractor={keyExtractor}
      />

      <HandleBtn direction="prev" onPress={() => handleDirection('prev')} />
      <HandleBtn direction="next" onPress={() => handleDirection('next')} />
    </View>
  );
}

const HandleBtn = ({
  direction,
  onPress,
}: {
  direction: 'prev' | 'next';
  onPress: () => void;
}) => {
  const directionIcon = {
    prev: <ChevronLeft size={24} />,
    next: <ChevronRight size={24} />,
  };

  const commonClassName =
    'bg-white/80 absolute top-1/2 -translate-y-1/2 rounded-full p-2';

  return (
    <Pressable
      onPress={onPress}
      className={`${commonClassName} ${direction === 'prev' ? 'left-8' : 'right-8'}`}
    >
      {directionIcon[direction]}
    </Pressable>
  );
};
