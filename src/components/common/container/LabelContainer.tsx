import Text from '@/components/common/ui/Text';
import { ReactNode } from 'react';
import { View } from 'react-native';

interface LabelContainerProps {
  children: ReactNode;
  label?: string;
  labelColor?: 'neutral' | 'yellow';
  tailLabel?: string;
}

export default function LabelContainer({
  children,
  label,
  labelColor = 'yellow',
  tailLabel,
}: LabelContainerProps) {
  const textColor = {
    yellow: 'text-yellow-7',
    neutral: 'text-neutral-7',
  };
  return (
    <View>
      {/* 라벨 */}
      {label && !tailLabel && (
        <Text className={`mb-2 pl-1.5 ${textColor[labelColor]}`}>{label}</Text>
      )}

      {label && tailLabel && (
        <View className="flex-row items-center justify-between">
          <Text className={`mb-2 pl-1.5 ${textColor[labelColor]}`}>{label}</Text>
          <Text className={`mb-2 pr-1.5 ${textColor[labelColor]}`}>{tailLabel}</Text>
        </View>
      )}

      {children}
    </View>
  );
}
