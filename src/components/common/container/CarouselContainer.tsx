import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import { useMemo, useRef, useState } from 'react';
import { FlatList, Pressable, View } from 'react-native';

type RenderItemWithIndex<T> = (args: {
  item: T;
  isCurrIndex: boolean;
}) => React.ReactElement;

interface CarouselContainerProps<T> {
  data: T[];
  itemWidth: number;
  initialIndex?: number;
  renderItem: RenderItemWithIndex<T>;
  keyExtractor: (item: T, index: number) => string;
  hasNavigation?: boolean;
  centerFocus?: boolean;
  spacing?: number;
  horizontalPadding?: number;
}

export default function CarouselContainer<T>({
  data,
  itemWidth,
  initialIndex = data.length,
  renderItem,
  keyExtractor,
  hasNavigation,
  centerFocus,
  spacing = 6,
  horizontalPadding,
}: CarouselContainerProps<T>) {
  const listRef = useRef<FlatList<T>>(null);

  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [containerWidth, setContainerWidth] = useState(0);

  /** 실제 carousel width 기준으로 카드 계산 */
  const CARD_WIDTH = containerWidth * itemWidth;
  const ITEM_SIZE = useMemo(() => CARD_WIDTH + spacing, [CARD_WIDTH, spacing]);

  /** navigation 버튼 */
  const handleDirection = (direction: 'prev' | 'next') => {
    const nextIndex =
      direction === 'prev' ? currentIndex - 1 : currentIndex + 1;

    listRef.current?.scrollToOffset({
      offset: ITEM_SIZE * nextIndex,
      animated: true,
    });

    setCurrentIndex(nextIndex);
  };

  /** infinite scroll 유지 */
  const handleScrollEnd = (offsetX: number) => {
    const index = Math.round(offsetX / ITEM_SIZE);

    const total = data.length;

    if (index < total) {
      const newIndex = index + total;

      listRef.current?.scrollToOffset({
        offset: ITEM_SIZE * newIndex,
        animated: false,
      });

      setCurrentIndex(newIndex);
      return;
    }

    if (index >= total * 2) {
      const newIndex = index - total;

      listRef.current?.scrollToOffset({
        offset: ITEM_SIZE * newIndex,
        animated: false,
      });

      setCurrentIndex(newIndex);
      return;
    }

    setCurrentIndex(index);
  };

  const flatListData = useMemo(() => [...data, ...data, ...data], [data]);

  /** container width 아직 없으면 렌더 안함 */
  if (!containerWidth) {
    return (
      <View onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)} />
    );
  }

  return (
    <View onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}>
      <FlatList
        ref={listRef}
        data={flatListData}
        horizontal
        snapToInterval={ITEM_SIZE}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        nestedScrollEnabled
        initialScrollIndex={initialIndex}
        ItemSeparatorComponent={() => <View style={{ width: spacing }} />}
        contentContainerStyle={{
          paddingHorizontal: (containerWidth - CARD_WIDTH) / 2,
        }}
        getItemLayout={(_, index) => ({
          length: ITEM_SIZE,
          offset: ITEM_SIZE * index,
          index,
        })}
        onLayout={() => {}}
        onMomentumScrollEnd={(e) =>
          handleScrollEnd(e.nativeEvent.contentOffset.x)
        }
        renderItem={({ item, index }) => {
          const isCurrIndex =
            index % data.length === currentIndex % data.length;

          return (
            <View
              style={{
                width: CARD_WIDTH,
                transform: centerFocus && !isCurrIndex ? [{ scale: 0.92 }] : [],
              }}
              className="rounded-2xl"
            >
              {renderItem({ item, isCurrIndex })}
            </View>
          );
        }}
        keyExtractor={keyExtractor}
      />

      {hasNavigation && (
        <>
          <HandleBtn direction="prev" onPress={() => handleDirection('prev')} />
          <HandleBtn direction="next" onPress={() => handleDirection('next')} />
        </>
      )}
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
    'bg-gray-200 absolute top-1/2 -translate-y-1/2 rounded-full p-3';

  return (
    <Pressable
      onPress={onPress}
      className={`${commonClassName} ${direction === 'prev' ? 'left-8' : 'right-8'}`}
    >
      {directionIcon[direction]}
    </Pressable>
  );
};
