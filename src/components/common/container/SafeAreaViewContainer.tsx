import { ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

interface SafeAreaViewContainerProps {
  children: ReactNode;
  className?: string;
}

export default function SafeAreaViewContainer({
  children,
  className,
}: SafeAreaViewContainerProps) {
  return (
    <SafeAreaView edges={['top']} className={`flex-1 ${className}`}>
      {children}
    </SafeAreaView>
  );
}
