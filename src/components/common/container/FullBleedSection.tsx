import { ReactNode } from 'react';
import { View } from 'react-native';

interface ScreenContainerProps {
  children: ReactNode;
  className?: string;
}

export default function FullBleedSection({
  children,
  className = '',
}: ScreenContainerProps) {
  return <View className={`-mx-[24px] ${className}`}>{children}</View>;
}
