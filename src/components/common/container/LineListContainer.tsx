import { ReactNode, useMemo, useState } from 'react';
import { View } from 'react-native';

interface LineListContainerProps<T> {
  data: T[];
  gap?: number;
  renderItem: (item: T, index: number) => ReactNode;
  renderMore: (hiddenCount: number) => ReactNode;
  keyExtractor: (item: T, index: number) => string;
  className?: string;
}

export default function LineListContainer<T>({
  data,
  gap = 5,
  renderItem,
  renderMore,
  keyExtractor,
  className,
}: LineListContainerProps<T>) {
  const [containerWidth, setContainerWidth] = useState(0);
  const [itemWidths, setItemWidths] = useState<Record<string, number>>({});
  const [moreWidth, setMoreWidth] = useState(0);

  const visibleCount = useMemo(() => {
    if (!containerWidth || !moreWidth) return 0;

    let width = 0;

    for (let i = 0; i < data.length; i++) {
      const key = keyExtractor(data[i]!, i);
      const itemWidth = itemWidths[key];

      if (itemWidth == null) return 0;

      const nextWidth = width + (i > 0 ? gap : 0) + itemWidth;
      const hiddenCount = data.length - i - 1;

      // 전부 들어가는 경우
      if (hiddenCount === 0 && nextWidth <= containerWidth) {
        return data.length;
      }

      // +N까지 포함해서 들어가는지 확인
      if (nextWidth + gap + moreWidth > containerWidth) {
        return i;
      }

      width = nextWidth;
    }

    return data.length;
  }, [containerWidth, data, gap, itemWidths, moreWidth, keyExtractor]);

  const hiddenCount = data.length - visibleCount;

  return (
    <View
      className={className}
      onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}
    >
      {/* 실제 표시 */}
      <View className="flex-row" style={{ gap }}>
        {data.slice(0, visibleCount).map((item, index) => (
          <View key={keyExtractor(item, index)}>{renderItem(item, index)}</View>
        ))}

        {hiddenCount > 0 && renderMore(hiddenCount)}
      </View>

      {/* 너비 측정 */}
      <View pointerEvents="none" className="absolute opacity-0">
        {data.map((item, index) => {
          const key = keyExtractor(item, index);

          return (
            <View
              key={key}
              className="self-start"
              onLayout={(e) => {
                const width = e.nativeEvent.layout.width;

                setItemWidths((prev) =>
                  prev[key] === width ? prev : { ...prev, [key]: width },
                );
              }}
            >
              {renderItem(item, index)}
            </View>
          );
        })}

        <View
          className="self-start border"
          onLayout={(e) => setMoreWidth(e.nativeEvent.layout.width)}
        >
          {renderMore(data.length)}
        </View>
      </View>
    </View>
  );
}
