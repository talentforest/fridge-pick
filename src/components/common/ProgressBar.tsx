import Text from '@/components/common/ui/Text';
import { getPossessionStatus, styleByPercentageObj } from '@/utils';
import { ReactNode } from 'react';
import { View } from 'react-native';

interface ProgressBarProps {
  label?: string;
  percentage: number;
  possessedCount: number;
  requiredCount: number;
  children?: ReactNode;
}

export default function ProgressBar({
  label,
  percentage,
  possessedCount,
  requiredCount,
  children,
}: ProgressBarProps) {
  const status = getPossessionStatus(percentage);
  const colorObj = styleByPercentageObj[status];

  const requiredBoxList = Array.from({ length: requiredCount }, (_, index) => index);

  return (
    <View>
      {label ? (
        <View className="mb-[6px] flex-row items-center gap-x-1">
          <Text className="text-sm text-neutral-9">{label}</Text>
          <Text
            className={`${colorObj.text} font-extrabold text-sm`}
          >{`${percentage}%`}</Text>
          {possessedCount && requiredCount ? (
            <Text className={`ml-1 text-sm text-neutral-7`}>
              {possessedCount}/{requiredCount}
            </Text>
          ) : (
            <></>
          )}
        </View>
      ) : (
        <></>
      )}

      <View className="w-full flex-row items-center gap-x-1">
        {requiredBoxList.map((box) => (
          <View
            key={box}
            className={`h-[14px] flex-1 ${box === 0 ? 'rounded-l' : ''} ${box === requiredBoxList.length - 1 ? 'rounded-r' : ''} ${possessedCount > box ? colorObj.bg : 'bg-inactive-bg'}`}
          />
        ))}
      </View>

      {children}
    </View>
  );
}
