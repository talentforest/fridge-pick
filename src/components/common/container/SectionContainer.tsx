import { ReactNode } from 'react';
import { View } from 'react-native';

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionContainer({ children, className }: SectionContainerProps) {
  return <View className={`gap-y-3 ${className}`}>{children}</View>;
}
