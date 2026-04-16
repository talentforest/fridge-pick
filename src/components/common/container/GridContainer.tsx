import React, { ReactNode, useState } from 'react';
import { LayoutChangeEvent, View } from 'react-native';

interface GridContainerProps {
  children: ReactNode;
  columns?: number;
  gap?: number;
  className?: string;
}

export default function GridContainer({
  children,
  columns = 2,
  gap = 12,
  className = '',
}: GridContainerProps) {
  const [containerWidth, setContainerWidth] = useState<number>(0);

  const handleLayout = (e: LayoutChangeEvent) => {
    const width = e.nativeEvent.layout.width;
    setContainerWidth(width);
  };

  const childrenArray = React.Children.toArray(children);

  const itemWidth =
    containerWidth > 0 ? Math.floor((containerWidth - gap * (columns - 1)) / columns) : 0;

  const totalRows = Math.ceil(childrenArray.length / columns);

  return (
    <View onLayout={handleLayout} className={`w-full flex-row flex-wrap ${className}`}>
      {childrenArray.map((child, index) => {
        const currentRow = Math.floor(index / columns);
        const isLastRow = currentRow === totalRows - 1;
        const isLastColumn = (index + 1) % columns === 0;

        return (
          <View
            key={index}
            style={{
              width: itemWidth,
              marginRight: isLastColumn ? 0 : gap,
              marginBottom: isLastRow ? 0 : gap,
            }}
          >
            {child}
          </View>
        );
      })}
    </View>
  );
}
