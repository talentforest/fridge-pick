import { ReactNode } from 'react';
import { View } from 'react-native';
import { Edge, useSafeAreaInsets } from 'react-native-safe-area-context';

interface SafeAreaViewContainerProps {
  children: ReactNode;
  className?: string;
  edges?: Edge[];
}

export default function SafeAreaViewContainer({
  children,
  className = '',
  edges = ['top'],
}: SafeAreaViewContainerProps) {
  const insets = useSafeAreaInsets();

  const insetStyleMap = {
    top: { paddingTop: insets.top },
    bottom: { paddingBottom: insets.bottom },
    left: { paddingLeft: insets.left },
    right: { paddingRight: insets.right },
  };

  const safeAreaStyle = edges.reduce(
    (acc, edge) => ({ ...acc, ...insetStyleMap[edge] }),
    {},
  );

  return (
    <View style={safeAreaStyle} className={`flex-1 ${className}`}>
      {children}
    </View>
  );
}
