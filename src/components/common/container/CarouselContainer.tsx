import GridContainer from '@/components/common/container/GridContainer';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';

import { ChevronLeft, ChevronRight } from 'lucide-react-native';

import { ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { FlatList, LayoutChangeEvent, useWindowDimensions, View } from 'react-native';

type RenderItemWithIndex<T> = (args: {
  item: T;
  index?: number;
  isCurrIndex?: boolean;
  onPress?: () => void;
}) => React.ReactElement;

interface CarouselContainerProps<T> {
  data: T[];
  itemWidth?: number;
  initialIndex?: number;
  renderItem: RenderItemWithIndex<T>;
  keyExtractor: (item: T, index: number) => string;
  centerFocus?: boolean;
  spacing?: number;
  hasNavigation?: boolean;
  navigationBtnChildren?: (
    handle: (direction: 'prev' | 'next') => void,
    index: number,
  ) => ReactNode;
  hasPagination?: boolean;
  infinite?: boolean;
  requiredMinimum?: number;
  children?: (focusedItem: T) => ReactNode;
  horizontalInset?: number;
  scrollEnabled?: boolean;
  paginationDotSize?: 'sm' | 'md' | 'lg';
  paginationDotColor?: 'blue' | 'indigo' | 'amber';
}

export default function CarouselContainer<T>({
  data,
  itemWidth,
  initialIndex = 0,
  renderItem,
  keyExtractor,
  hasNavigation,
  centerFocus = false,
  requiredMinimum = 2,
  spacing = 10,
  paginationDotSize = 'sm',
  hasPagination,
  infinite = true,
  children,
  horizontalInset,
  navigationBtnChildren,
  scrollEnabled = true,
  paginationDotColor = 'blue',
}: CarouselContainerProps<T>) {
  const listRef = useRef<FlatList<T>>(null);

  const { width: windowWidth } = useWindowDimensions();

  const [containerWidth, setContainerWidth] = useState(windowWidth);

  const [itemWidths, setItemWidths] = useState<Record<string, number>>({});

  const [isScrolling, setIsScrolling] = useState(false);

  const isInfinite = infinite && data.length > 1;

  const isFixedWidth = itemWidth !== undefined;

  const shouldUseCarousel = data.length > requiredMinimum;

  /**
   * 초기 인덱스
   */
  const normalizedInitialIndex = Math.max(0, Math.min(initialIndex, data.length - 1));

  const startIndex = isInfinite
    ? data.length + normalizedInitialIndex
    : normalizedInitialIndex;

  const [currentIndex, setCurrentIndex] = useState(startIndex);

  /**
   * 실제 렌더링 데이터
   */
  const flatListData = useMemo(
    () => (isInfinite ? [...data, ...data, ...data] : data),
    [data, isInfinite],
  );

  /**
   * 고정 너비
   *
   * 기존 계산 방식 유지
   */
  const fixedCardWidth =
    itemWidth !== undefined ? windowWidth * itemWidth + spacing : undefined;

  /**
   * 원본 데이터의 아이템 키
   */
  const itemKeys = useMemo(
    () => data.map((item, index) => keyExtractor(item, index)),
    [data, keyExtractor],
  );

  /**
   * 아이템 너비 측정
   */
  const handleItemLayout = useCallback(
    (key: string, event: LayoutChangeEvent) => {
      if (isFixedWidth) return;

      const width = event.nativeEvent.layout.width;

      if (width <= 0) return;

      setItemWidths((prev) => {
        if (prev[key] === width) {
          return prev;
        }

        return {
          ...prev,
          [key]: width,
        };
      });
    },
    [isFixedWidth],
  );

  /**
   * 모든 아이템의 너비가 측정되었는지 확인
   */
  const isMeasured = useMemo(() => {
    if (isFixedWidth) return true;

    return itemKeys.every((key) => {
      const width = itemWidths[key];

      return width !== undefined && width > 0;
    });
  }, [isFixedWidth, itemKeys, itemWidths]);

  /**
   * 원본 데이터의 아이템별 너비
   */
  const widths = useMemo(
    () =>
      data.map((item, index) => {
        if (fixedCardWidth !== undefined) {
          return fixedCardWidth;
        }

        const key = keyExtractor(item, index);

        return itemWidths[key] ?? 0;
      }),
    [data, fixedCardWidth, itemWidths, keyExtractor],
  );

  /**
   * 원본 데이터 한 세트의 전체 너비
   */
  const cycleWidth = useMemo(
    () => widths.reduce((sum, width) => sum + width + spacing, 0),
    [widths, spacing],
  );

  /**
   * 모든 아이템의 시작 위치 계산
   *
   * 각 아이템 너비가 달라도 정확한 offset 계산
   */
  const itemOffsets = useMemo(
    () =>
      flatListData.map((_, index) => {
        const cycleIndex = index % data.length;

        const cycle = Math.floor(index / data.length);

        const previousWidth = widths
          .slice(0, cycleIndex)
          .reduce((sum, width) => sum + width + spacing, 0);

        return cycle * cycleWidth + previousWidth;
      }),
    [flatListData, data.length, widths, spacing, cycleWidth],
  );

  /**
   * 실제 스크롤 위치 계산
   *
   * centerFocus:
   * 아이템 중심이 화면 중앙에 오도록 계산
   *
   * 일반:
   * 아이템 시작 위치로 이동
   */
  const getScrollOffset = useCallback(
    (index: number) => {
      const originalIndex = index % data.length;

      const offset = itemOffsets[index] ?? 0;

      if (!centerFocus) {
        return offset;
      }

      const width = widths[originalIndex] ?? 0;

      const firstWidth = widths[0] ?? 0;

      const leadingPadding = Math.max(0, (containerWidth - firstWidth) / 2);

      return offset + leadingPadding + width / 2 - containerWidth / 2;
    },
    [data.length, itemOffsets, widths, centerFocus, containerWidth],
  );

  /**
   * 스냅 위치
   */
  const snapOffsets = useMemo(() => {
    if (!isMeasured) return [];

    return flatListData.map((_, index) => getScrollOffset(index));
  }, [flatListData, getScrollOffset, isMeasured]);

  /**
   * 현재 실제 데이터 인덱스
   */
  const actualIndex = data.length > 0 ? currentIndex % data.length : 0;

  /**
   * 현재 선택된 아이템
   */
  const focusedItem = data[actualIndex];

  /**
   * 특정 인덱스로 이동
   */
  const scrollToIndex = useCallback(
    (index: number, animated = true) => {
      if (!isMeasured) return;

      if (index < 0 || index >= flatListData.length) {
        return;
      }

      const offset = getScrollOffset(index);

      listRef.current?.scrollToOffset({
        offset,
        animated,
      });
    },
    [isMeasured, flatListData.length, getScrollOffset],
  );

  /**
   * 초기 위치 설정
   *
   * 가변 너비에서는 측정 완료 후 이동
   */
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (!shouldUseCarousel || !isMeasured) return;

    if (hasInitialized.current) return;

    hasInitialized.current = true;

    const frame = requestAnimationFrame(() => {
      scrollToIndex(startIndex, false);
    });

    return () => cancelAnimationFrame(frame);
  }, [shouldUseCarousel, isMeasured, startIndex, scrollToIndex]);

  /**
   * 화면 너비 또는 아이템 너비 변경 시 위치 보정
   */
  useEffect(() => {
    if (!hasInitialized.current || !isMeasured) return;

    const frame = requestAnimationFrame(() => {
      scrollToIndex(currentIndex, false);
    });

    return () => cancelAnimationFrame(frame);
  }, [containerWidth, cycleWidth, isMeasured, currentIndex, scrollToIndex]);

  /**
   * Navigation 버튼
   */
  const handleDirection = useCallback(
    (direction: 'prev' | 'next') => {
      if (!isMeasured) return;

      const nextIndex = direction === 'prev' ? currentIndex - 1 : currentIndex + 1;

      if (!isInfinite && (nextIndex < 0 || nextIndex >= data.length)) {
        return;
      }

      if (nextIndex < 0 || nextIndex >= flatListData.length) {
        return;
      }

      setIsScrolling(true);

      scrollToIndex(nextIndex);

      setCurrentIndex(nextIndex);
    },
    [
      isMeasured,
      currentIndex,
      isInfinite,
      data.length,
      flatListData.length,
      scrollToIndex,
    ],
  );

  /**
   * 현재 offset과 가장 가까운 인덱스 찾기
   */
  const findNearestIndex = useCallback(
    (offsetX: number) => {
      if (!snapOffsets.length) return 0;

      let nearestIndex = 0;
      let nearestDistance = Infinity;

      snapOffsets.forEach((offset, index) => {
        const distance = Math.abs(offsetX - offset);

        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });

      return nearestIndex;
    },
    [snapOffsets],
  );

  /**
   * 스크롤 종료
   */
  const handleScrollEnd = useCallback(
    (offsetX: number) => {
      if (!isMeasured) return;

      const index = findNearestIndex(offsetX);

      /**
       * 일반 캐러셀
       */
      if (!isInfinite) {
        setCurrentIndex(index);
        setIsScrolling(false);
        return;
      }

      /**
       * 무한 캐러셀
       *
       * 가운데 데이터 세트로 순간 이동
       */
      const total = data.length;

      if (index < total) {
        const newIndex = index + total;

        scrollToIndex(newIndex, false);

        setCurrentIndex(newIndex);
        setIsScrolling(false);

        return;
      }

      if (index >= total * 2) {
        const newIndex = index - total;

        scrollToIndex(newIndex, false);

        setCurrentIndex(newIndex);
        setIsScrolling(false);

        return;
      }

      setCurrentIndex(index);
      setIsScrolling(false);
    },
    [isMeasured, findNearestIndex, isInfinite, data.length, scrollToIndex],
  );

  /**
   * Pagination 색상
   */
  const dotColor = {
    blue: 'bg-blue-5',
    indigo: 'bg-primary',
    amber: 'bg-amber-5',
  };

  /**
   * 중앙 정렬 패딩
   */
  const horizontalPadding = useMemo(() => {
    if (!centerFocus || !isMeasured) {
      return {
        left: 0,
        right: 0,
      };
    }

    const firstWidth = widths[0] ?? 0;

    const lastWidth = widths[widths.length - 1] ?? 0;

    return {
      left: Math.max(0, (containerWidth - firstWidth) / 2),
      right: Math.max(0, (containerWidth - lastWidth) / 2),
    };
  }, [centerFocus, isMeasured, widths, containerWidth]);

  /**
   * Carousel
   */
  if (shouldUseCarousel) {
    return (
      <View>
        <View
          className={centerFocus ? '-mx-[24px]' : ''}
          onLayout={(event) => {
            const width = event.nativeEvent.layout.width;

            if (width > 0) {
              setContainerWidth((prev) => (prev === width ? prev : width));
            }
          }}
        >
          <FlatList
            ref={listRef}
            data={flatListData}
            horizontal
            scrollEnabled={scrollEnabled && isMeasured}
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            disableIntervalMomentum
            snapToOffsets={isMeasured ? snapOffsets : undefined}
            ItemSeparatorComponent={() => <View style={{ width: spacing }} />}
            contentContainerStyle={{
              paddingLeft: horizontalPadding.left,
              paddingRight: horizontalPadding.right,
            }}
            getItemLayout={
              isMeasured
                ? (_, index) => ({
                    length: (widths[index % data.length] ?? 0) + spacing,
                    offset: itemOffsets[index] ?? 0,
                    index,
                  })
                : undefined
            }
            onScrollBeginDrag={() => {
              setIsScrolling(true);
            }}
            onMomentumScrollBegin={() => {
              setIsScrolling(true);
            }}
            onMomentumScrollEnd={(event) => {
              handleScrollEnd(event.nativeEvent.contentOffset.x);
            }}
            onScrollEndDrag={(event) => {
              const velocity = event.nativeEvent.velocity?.x ?? 0;

              if (Math.abs(velocity) < 0.01) {
                handleScrollEnd(event.nativeEvent.contentOffset.x);
              }
            }}
            renderItem={({ item, index }) => {
              const originalIndex = index % data.length;

              const key = keyExtractor(item, originalIndex);

              const isActive = !isScrolling && originalIndex === actualIndex;

              return (
                <View
                  style={
                    fixedCardWidth !== undefined
                      ? { width: fixedCardWidth }
                      : { alignSelf: 'flex-start' }
                  }
                  onLayout={(event) => {
                    handleItemLayout(key, event);
                  }}
                >
                  {renderItem({
                    item,
                    index: originalIndex,
                    isCurrIndex: isActive,
                    onPress: () => {
                      scrollToIndex(index);
                      setCurrentIndex(index);
                    },
                  })}
                </View>
              );
            }}
            keyExtractor={(item, index) => {
              const originalIndex = index % data.length;

              const key = keyExtractor(item, originalIndex);

              return isInfinite ? `${key}-${index}` : key;
            }}
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

        {/* Focused Item Children */}
        {children && focusedItem ? (
          <View className={centerFocus ? 'px-[24px]' : ''}>{children(focusedItem)}</View>
        ) : null}

        {/* Pagination */}
        {hasPagination && (
          <View className="mx-auto mt-4 flex-row gap-x-2.5">
            {data.map((_, index) => (
              <View
                key={index}
                className={`aspect-square ${
                  paginationDotSize === 'sm'
                    ? 'h-2.5'
                    : paginationDotSize === 'md'
                      ? 'h-3.5'
                      : 'h-6'
                } rounded-full ${
                  actualIndex === index
                    ? dotColor[paginationDotColor]
                    : 'bg-disabledBackground'
                }`}
              />
            ))}
          </View>
        )}

        {/* Custom Navigation */}
        {navigationBtnChildren
          ? navigationBtnChildren(handleDirection, currentIndex)
          : null}
      </View>
    );
  }

  /**
   * Carousel이 필요하지 않은 경우
   */
  return (
    <GridContainer
      columns={requiredMinimum}
      gap={spacing}
      horizontalInset={horizontalInset}
    >
      {data.map((item, index) => {
        const isCurrIndex = actualIndex === index;

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

/**
 * Navigation Button
 */
const HandleBtn = ({
  direction,
  onPress,
}: {
  direction: 'prev' | 'next';
  onPress: () => void;
}) => {
  const directionIcon = {
    prev: <ChevronLeft pointerEvents="none" size={20} />,
    next: <ChevronRight pointerEvents="none" size={20} />,
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
