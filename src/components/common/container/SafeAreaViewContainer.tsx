import { ReactNode } from 'react';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';

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
  return (
    <SafeAreaView edges={edges} className={`flex-1 ${className}`}>
      {children}
    </SafeAreaView>
  );
}
