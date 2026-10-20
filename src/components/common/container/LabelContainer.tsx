import Text from '@/components/common/ui/Text';
import { ReactNode } from 'react';
import { View } from 'react-native';

interface LabelContainerProps {
  children: ReactNode;
  label?: string;
  labelColor?: 'neutral' | 'primary';
  tailLabel?: string;
}

export default function LabelContainer({
  children,
  label,
  labelColor = 'neutral',
  tailLabel,
}: LabelContainerProps) {
  const textColor = {
    neutral: 'text-neutral-5',
    primary: 'text-primary',
  };
  return (
    <View>
      {/* 라벨 */}
      {label && !tailLabel && (
        <Text className={`mb-2 pl-1 !text-[13px] ${textColor[labelColor]}`}>{label}</Text>
      )}

      {label && tailLabel && (
        <View className="flex-row items-center justify-between">
          <Text className={`mb-2 pl-1 !text-[13px] ${textColor[labelColor]}`}>
            {label}
          </Text>
          <Text className={`mb-2 pr-1 !text-[13px] ${textColor[labelColor]}`}>
            {tailLabel}
          </Text>
        </View>
      )}

      {children}
    </View>
  );
}
