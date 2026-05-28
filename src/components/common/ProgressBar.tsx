import Text from '@/components/common/ui/Text';
import { ReactNode } from 'react';
import { View } from 'react-native';

interface ProgressBarProps {
  label: string;
  percentage: number;
  children?: ReactNode;
}

export default function ProgressBar({ label, percentage, children }: ProgressBarProps) {
  const getColorByPercentage = (percentage: number) => {
    if (percentage >= 80) {
      return {
        bg: 'bg-green-5',
        border: 'border-green-3',
      };
    }
    if (percentage >= 50) {
      return {
        bg: 'bg-yellow-5',
        border: 'border-yellow-3',
      };
    }
    return {
      bg: 'bg-red-5',
      border: 'border-red-3',
    };
  };

  const colorObj = getColorByPercentage(percentage);

  return (
    <View>
      <View className="mb-1.5 flex-row items-center justify-between">
        <Text className="text-yellow-7">{label}</Text>
        <Text className="text-yellow-7">{`${percentage}%`}</Text>
      </View>
      <View className="w-full flex-row items-center gap-x-2">
        <View className="h-6 flex-1 bg-neutral-3">
          <View
            style={{ width: `${percentage}%` }}
            className={`absolute h-6 flex-1 ${colorObj.bg}`}
          />
          <View className="flex-row items-center">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <View
                key={i}
                className={`h-6 w-[10%] border-r border-dashed ${colorObj.border}`}
              />
            ))}
            <View className="h-6 w-[10%]" />
          </View>
        </View>
      </View>

      {children}
    </View>
  );
}
