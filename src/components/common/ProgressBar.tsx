import Text from '@/components/common/ui/Text';
import { getPossessionStatus, styleByPercentageObj } from '@/utils';
import { ReactNode } from 'react';
import { View } from 'react-native';

interface ProgressBarProps {
  label: string;
  percentage: number;
  children?: ReactNode;
}

export default function ProgressBar({ label, percentage, children }: ProgressBarProps) {
  const status = getPossessionStatus(percentage);

  const colorObj = styleByPercentageObj[status];

  return (
    <View>
      <View className="mb-1 flex-row items-center justify-between">
        <Text className="text-neutral-9">{label}</Text>
        <Text className={colorObj.text}>{`${percentage}%`}</Text>
      </View>

      <View className="w-full flex-row items-center gap-x-2">
        <View className="h-5 flex-1 bg-neutral-3">
          <View
            style={{ width: `${percentage}%` }}
            className={`absolute h-full flex-1 ${colorObj.bg}`}
          />

          <View className="flex-row items-center">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <View
                key={i}
                className={`h-full w-[10%] border-r border-dashed ${colorObj.border}`}
              />
            ))}
            <View className="h-5 w-[10%]" />
          </View>
        </View>
      </View>

      {children}
    </View>
  );
}
