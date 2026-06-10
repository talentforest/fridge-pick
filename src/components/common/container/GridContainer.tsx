import React, { ReactNode } from 'react';
import { useWindowDimensions, View } from 'react-native';

interface GridContainerProps {
  children: ReactNode;
  horizontalInset?: number;
  columns?: number;
  gap?: number;
  className?: string;
}

export default function GridContainer({
  children,
  horizontalInset = 24,
  columns = 2,
  gap = 8,
  className = '',
}: GridContainerProps) {
  const childrenArray = React.Children.toArray(children);

  const { width } = useWindowDimensions();

  const containerWidth = width - horizontalInset * 2;

  const itemWidth = Math.floor((containerWidth - gap * (columns - 1)) / columns);

  const totalRows = Math.ceil(childrenArray.length / columns);

  return (
    <View className={`w-full flex-row flex-wrap ${className}`}>
      {childrenArray.map((child, index) => {
        const currentRow = Math.floor(index / columns);
        const isLastRow = currentRow === totalRows - 1;
        const isLastColumn = (index + 1) % columns === 0;

        return child ? (
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
        ) : (
          <View className="border border-red-5" />
        );
      })}
    </View>
  );
}
