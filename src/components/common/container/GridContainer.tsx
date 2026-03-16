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
  gap = 16,
  className = '',
}: GridContainerProps) {
  const [containerWidth, setContainerWidth] = useState<number | null>(null);

  const handleLayout = (e: LayoutChangeEvent) => {
    const width = e.nativeEvent.layout.width;
    setContainerWidth(width);
  };

  const childrenArray = React.Children.toArray(children);

  const itemWidth =
    containerWidth !== null
      ? (containerWidth - gap * (columns - 1)) / columns
      : 0;

  return (
    <View
      onLayout={handleLayout}
      className={`flex-row flex-wrap ${className}`}
      style={{ gap }}
    >
      {containerWidth !== null &&
        childrenArray.map((child, index) => (
          <View key={index} style={{ width: itemWidth }}>
            {child}
          </View>
        ))}
    </View>
  );
}
