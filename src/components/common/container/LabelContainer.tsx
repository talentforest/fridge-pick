import Text from '@/components/common/ui/Text';
import { ReactNode } from 'react';
import { View } from 'react-native';

interface LabelContainerProps {
  children: ReactNode;
  label: string;
}

export default function LabelContainer({ children, label }: LabelContainerProps) {
  return (
    <View>
      {/* 라벨 */}
      <Text className="mb-2 pl-1.5 text-md text-indigo-600">{label}</Text>

      {children}
    </View>
  );
}
