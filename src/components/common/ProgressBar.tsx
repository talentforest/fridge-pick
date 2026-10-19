import Text from '@/components/common/ui/Text';
import { getPossessionStatus, styleByPercentageObj } from '@/utils';
import { ReactNode } from 'react';
import { View } from 'react-native';
// import CircularProgress from 'react-native-circular-progress-indicator';

interface ProgressBarProps {
  label?: string;
  percentage: number;
  possessedCount: number;
  requiredCount: number;
  children?: ReactNode;
  type?: 'bar' | 'circular';
  color?: 'red' | 'amber' | 'green';
}

export default function ProgressBar({
  label,
  percentage,
  possessedCount,
  requiredCount,
  children,
  type = 'bar',
  // color = 'red',
}: ProgressBarProps) {
  // const { colorScheme } = useAppTheme();

  const status = getPossessionStatus(percentage);
  const colorObj = styleByPercentageObj[status];

  const requiredBoxList = Array.from({ length: requiredCount }, (_, index) => index);

  return (
    <>
      {type === 'bar' ? (
        <View className="gap-y-1">
          {label ? (
            <View className="flex-row items-center gap-x-1">
              <Text className="text-sm text-neutral-7">{label}</Text>

              {possessedCount && requiredCount ? (
                <Text className={`text-sm text-neutral-7`}>
                  {possessedCount} / {requiredCount}
                </Text>
              ) : (
                <></>
              )}
            </View>
          ) : (
            <></>
          )}

          <View className="w-full flex-row items-center justify-between gap-x-1.5">
            <View className="flex-1 flex-row items-center justify-between gap-x-0.5">
              {requiredBoxList.map((box) => (
                <View
                  key={box}
                  className={`h-3 flex-1 ${box === 0 ? 'rounded-l-sm' : ''} ${box === requiredBoxList.length - 1 ? 'rounded-r-sm' : ''} ${possessedCount > box ? colorObj.bg : 'bg-disabledBackground'}`}
                />
              ))}
            </View>
            {/* <Text className={`${colorObj.text} font-heavy text-sm`}>{percentage}%</Text> */}
          </View>

          {children}
        </View>
      ) : (
        <></>
      )}

      {type === 'circular' ? (
        <View>
          {/* <CircularProgress
            value={percentage}
            radius={18}
            showProgressValue={false}
            activeStrokeColor={schemeObj[color]}
            inActiveStrokeColor={scheme.neutral[3]}
            inActiveStrokeWidth={6}
            activeStrokeWidth={6}
          /> */}

          <View className="absolute left-0 right-0 aspect-square flex-row items-center justify-center rounded-full">
            <Text className={`font-heavy !text-[11px] ${colorObj.text}`}>
              {percentage}
            </Text>
            <Text className="mt-0.5 !text-[7px] text-neutral-5">%</Text>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
