import GridContainer from '@/components/common/container/GridContainer';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import { ReactNode, useMemo, useRef, useState } from 'react';
import { FlatList, useWindowDimensions, View } from 'react-native';

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
  horizontalInset?: number;
}

export default function CarouselContainer<T>({
  data,
  itemWidth,
  initialIndex,
  renderItem,
  keyExtractor,
  hasNavigation,
  centerFocus,
  requiredMinimum = 2,
  spacing = 10,
  hasPagination,
  children,
  horizontalInset,
}: CarouselContainerProps<T>) {
  const listRef = useRef<FlatList<T>>(null);

  /**
   * pagination을 사용하는 carousel만 infinite scroll 사용
   *
   * infinite:
   * [data][data][data]
   *        ↑
   *   가운데 배열에서 시작
   */
  const isInfinite = hasPagination === true;

  const startIndex = isInfinite ? data.length : (initialIndex ?? 0);

  const [isScrolling, setIsScrolling] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  const { width: containerWidth } = useWindowDimensions();

  /** 실제 carousel width 기준으로 카드 계산 */
  const CARD_WIDTH = containerWidth * itemWidth + spacing;

  const ITEM_SIZE = useMemo(() => CARD_WIDTH + spacing, [CARD_WIDTH, spacing]);

  /** infinite일 때만 데이터를 3배로 복제 */
  const flatListData = useMemo(
    () => (isInfinite ? [...data, ...data, ...data] : data),
    [data, isInfinite],
  );

  /** 현재 선택된 실제 item */
  const focusedItem =
    data.length > 0
      ? isInfinite
        ? data[currentIndex % data.length]
        : data[currentIndex]
      : undefined;

  /** Navigation 버튼 */
  const handleDirection = (direction: 'prev' | 'next') => {
    const nextIndex = direction === 'prev' ? currentIndex - 1 : currentIndex + 1;

    /**
     * infinite가 아니면
     * 첫 번째 / 마지막 item 밖으로 이동하지 않음
     */
    if (!isInfinite && (nextIndex < 0 || nextIndex >= data.length)) {
      return;
    }

    listRef.current?.scrollToOffset({
      offset: ITEM_SIZE * nextIndex,
      animated: true,
    });

    setIsScrolling(true);
  };

  /** Scroll 종료 */
  const handleScrollEnd = (offsetX: number) => {
    const index = Math.round(offsetX / ITEM_SIZE);

    /**
     * 일반 carousel
     * → index만 업데이트
     */
    if (!isInfinite) {
      setIsScrolling(false);
      setCurrentIndex(index);
      return;
    }

    /**
     * infinite carousel
     * → 가운데 배열을 벗어나면 같은 위치로 순간 이동
     */
    const total = data.length;

    if (index < total) {
      const newIndex = index + total;

      listRef.current?.scrollToOffset({
        offset: ITEM_SIZE * newIndex,
        animated: false,
      });

      setCurrentIndex(newIndex);
      setIsScrolling(false);
      return;
    }

    if (index >= total * 2) {
      const newIndex = index - total;

      listRef.current?.scrollToOffset({
        offset: ITEM_SIZE * newIndex,
        animated: false,
      });

      setCurrentIndex(newIndex);
      setIsScrolling(false);
      return;
    }

    setIsScrolling(false);
    setCurrentIndex(index);
  };

  /**
   * Carousel을 사용하는 경우
   */
  return data.length > requiredMinimum ? (
    <View>
      <View className={`${centerFocus ? '-mx-[20px]' : ''}`}>
        <FlatList
          ref={listRef}
          data={flatListData}
          horizontal
          showsHorizontalScrollIndicator={false}
          initialScrollIndex={startIndex}
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
              !isScrolling &&
              (isInfinite
                ? index % data.length === currentIndex % data.length
                : index === currentIndex);

            return (
              <View style={{ width: CARD_WIDTH }}>
                {renderItem({
                  item,
                  isCurrIndex: isActive,
                  index: isInfinite ? index % data.length : index,
                })}
              </View>
            );
          }}
          keyExtractor={(item, index) => {
            /**
             * infinite일 경우 같은 item이 3번 존재하기 때문에
             * index를 추가해서 key 중복 방지
             */
            return isInfinite
              ? `${keyExtractor(item, index % data.length)}-${index}`
              : keyExtractor(item, index);
          }}
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
              className={`aspect-square h-2.5 rounded-full ${
                currentIndex % data.length === index ? 'bg-blue-5' : 'bg-inactive-bg'
              }`}
            />
          ))}
        </View>
      )}

      {children && focusedItem ? (
        <View className={`pt-3 ${centerFocus ? 'px-[20px]' : ''}`}>
          {children(focusedItem)}
        </View>
      ) : null}
    </View>
  ) : (
    /**
     * Carousel이 필요하지 않을 정도로
     * data가 적은 경우
     */
    <GridContainer
      columns={requiredMinimum}
      gap={spacing}
      horizontalInset={horizontalInset}
    >
      {data.map((item, index) => {
        const isCurrIndex = isInfinite
          ? currentIndex % data.length === index
          : currentIndex === index;

        return (
          <View key={keyExtractor(item, index)}>
            {renderItem({
              item,
              index,
              isCurrIndex,
              onPress: () => {
                setCurrentIndex(isInfinite ? index + data.length : index);
              },
            })}
          </View>
        );
      })}

      {children && focusedItem ? (
        <View className="pt-3">{children(focusedItem)}</View>
      ) : null}
    </GridContainer>
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
    prev: <ChevronLeft size={20} />,
    next: <ChevronRight size={20} />,
  };

  const commonClassName =
    'bg-neutral-5 absolute top-1/2 -translate-y-1/2 rounded-full p-4';

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`${commonClassName} opacity-30 ${
        direction === 'prev' ? 'left-5' : 'right-5'
      }`}
    >
      {directionIcon[direction]}
    </TouchableOpacity>
  );
};
