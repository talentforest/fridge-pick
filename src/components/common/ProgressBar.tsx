import Text from '@/components/common/ui/Text';
import { colorTokens } from '@/theme/color';
import { getPossessionStatus, styleByPercentageObj } from '@/utils';
import { ReactNode } from 'react';
import { useColorScheme, View } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

interface ProgressBarProps {
  label?: string;
  percentage: number;
  possessedCount: number;
  requiredCount: number;
  children?: ReactNode;
  type?: 'bar' | 'circular';
  color?: 'red' | 'yellow' | 'green';
}

export default function ProgressBar({
  label,
  percentage,
  possessedCount,
  requiredCount,
  children,
  type = 'bar',
  color = 'red',
}: ProgressBarProps) {
  const colorScheme = useColorScheme() ?? 'light';

  const scheme = colorTokens[colorScheme];

  const status = getPossessionStatus(percentage);
  const colorObj = styleByPercentageObj[status];

  const schemeObj = {
    green: scheme.green[5],
    red: scheme.red[5],
    yellow: scheme.yellow[5],
  };

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
                  className={`h-3 flex-1 ${box === 0 ? 'rounded-l' : ''} ${box === requiredBoxList.length - 1 ? 'rounded-r' : ''} ${possessedCount > box ? colorObj.bg : 'bg-inactive-bg'}`}
                />
              ))}
            </View>
            <Text className={`${colorObj.text} font-heavy text-sm`}>{percentage}%</Text>
          </View>

          {children}
        </View>
      ) : (
        <></>
      )}

      {type === 'circular' ? (
        <View>
          <CircularProgress
            value={percentage}
            radius={30}
            showProgressValue={false}
            activeStrokeColor={schemeObj[color]}
            inActiveStrokeColor={scheme.neutral[3]}
          />

          <View className="absolute left-2.5 top-2.5 h-[72%] w-[72%] flex-row items-center justify-center gap-x-0.5 rounded-full">
            <Text
              className={`font-extrabold text-base !tracking-[-0.08em] ${colorObj.text}`}
            >
              {percentage}
            </Text>
            <Text className="font-extrabold text-xs text-neutral-5">%</Text>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
