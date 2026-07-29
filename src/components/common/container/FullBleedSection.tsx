import { horizontalInset } from '@/constants';
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
  const fullBleed = `-mx-[${horizontalInset}px]`;

  return <View className={`${fullBleed} ${className}`}>{children}</View>;
}
