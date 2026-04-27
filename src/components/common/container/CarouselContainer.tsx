import GridContainer from '@/components/common/container/GridContainer';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import { ReactNode, useMemo, useRef, useState } from 'react';
import { FlatList, View } from 'react-native';

type RenderItemWithIndex<T> = (args: {
  item: T;
  index?: number;
  isCurrIndex?: boolean;
  onPress?: () => void;
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
  hasPagination?: boolean;
  requiredMinimum?: number;
  children?: (focusedItem: T) => ReactNode;
}

export default function CarouselContainer<T>({
  data,
  itemWidth,
  initialIndex = data.length,
  renderItem,
  keyExtractor,
  hasNavigation,
  centerFocus,
  requiredMinimum = 2,
  spacing = 8,
  hasPagination,
  children,
}: CarouselContainerProps<T>) {
  const listRef = useRef<FlatList<T>>(null);

  const [isScrolling, setIsScrolling] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(initialIndex); // 무제한 데이터라서 앞뒤로 배열을 복제해놔서
  const [containerWidth, setContainerWidth] = useState(0);

  /** 실제 carousel width 기준으로 카드 계산 */
  const CARD_WIDTH = containerWidth * itemWidth + spacing;
  const ITEM_SIZE = useMemo(() => CARD_WIDTH + spacing, [CARD_WIDTH, spacing]);

  const focusedItem = data[currentIndex - data.length];

  /** navigation 버튼 */
  const handleDirection = (direction: 'prev' | 'next') => {
    const nextIndex = direction === 'prev' ? currentIndex - 1 : currentIndex + 1;

    listRef.current?.scrollToOffset({
      offset: ITEM_SIZE * nextIndex,
      animated: true,
    });

    setIsScrolling(true);
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

    setIsScrolling(false);
    setCurrentIndex(index);
  };

  const flatListData = useMemo(() => [...data, ...data, ...data], [data]);

  /** container width 아직 없으면 렌더 안함 */
  if (!containerWidth) {
    return <View onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)} />;
  }

  return data.length > requiredMinimum ? (
    <View onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}>
      <View>
        <FlatList
          ref={listRef}
          data={flatListData}
          horizontal
          showsHorizontalScrollIndicator={false}
          initialScrollIndex={initialIndex}
          ItemSeparatorComponent={() => <View style={{ width: spacing }} />}
          contentContainerStyle={{
            paddingHorizontal: centerFocus ? (containerWidth - CARD_WIDTH) / 2 : 0,
          }}
          getItemLayout={(_, index) => ({
            length: ITEM_SIZE,
            offset: ITEM_SIZE * index,
            index,
          })}
          onScrollBeginDrag={() => setIsScrolling(true)}
          onMomentumScrollBegin={() => setIsScrolling(true)}
          onMomentumScrollEnd={(e) => {
            handleScrollEnd(e.nativeEvent.contentOffset.x);
          }}
          renderItem={({ item, index }) => {
            const isActive =
              !isScrolling && index % data.length === currentIndex % data.length;

            return (
              <View style={{ width: CARD_WIDTH }}>
                <View className={`rounded-2xl`}>
                  {renderItem({ item, isCurrIndex: isActive, index })}
                </View>
              </View>
            );
          }}
          keyExtractor={keyExtractor}
          snapToInterval={centerFocus ? ITEM_SIZE : undefined}
          decelerationRate={centerFocus ? 'fast' : 'normal'}
        />
        {/* Navigation Button */}
        {hasNavigation && (
          <>
            {centerFocus && (
              <HandleBtn direction="prev" onPress={() => handleDirection('prev')} />
            )}
            <HandleBtn direction="next" onPress={() => handleDirection('next')} />
          </>
        )}
      </View>

      {/* Pagination Dot */}
      {hasPagination && (
        <View className="mx-auto mt-4 flex-row gap-x-2.5">
          {data.map((_, index) => (
            <View
              key={index}
              className={`aspect-square h-2.5 rounded-full ${currentIndex - initialIndex === index ? 'bg-blue-5' : 'bg-inactive-bg'}`}
            />
          ))}
        </View>
      )}

      {children && focusedItem ? (
        <View className="pt-5">{children(focusedItem)}</View>
      ) : (
        <></>
      )}
    </View>
  ) : (
    <View>
      <View className="px-6">
        <GridContainer columns={requiredMinimum}>
          {data.map((item, index) => {
            const isCurrIndex = currentIndex - data.length === index;
            return renderItem({
              item,
              isCurrIndex,
              onPress: () => setCurrentIndex(index + data.length),
            });
          })}
        </GridContainer>
      </View>

      {children && focusedItem ? (
        <View className="w-full pt-5">{children(focusedItem)}</View>
      ) : (
        <></>
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
    'bg-neutral-7 absolute top-1/2 -translate-y-1/2 rounded-full p-4';

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`${commonClassName} opacity-40 ${direction === 'prev' ? 'left-8' : 'right-8'}`}
    >
      {directionIcon[direction]}
    </TouchableOpacity>
  );
};
