import Text from '@/components/common/ui/Text';
import { getPossessionStatus, styleByPercentageObj } from '@/utils';
import { ReactNode } from 'react';
import { View } from 'react-native';

interface ProgressBarProps {
  label?: string;
  percentage: number;
  possessedIngredientCount: number;
  requiredIngredientCount: number;
  children?: ReactNode;
}

export default function ProgressBar({
  label,
  percentage,
  possessedIngredientCount,
  requiredIngredientCount,
  children,
}: ProgressBarProps) {
  const status = getPossessionStatus(percentage);

  const colorObj = styleByPercentageObj[status];

  const requiredBoxList = Array.from(
    { length: requiredIngredientCount },
    (_, index) => index,
  );

  return (
    <View>
      {label ? (
        <View className="mb-[6px] flex-row items-center gap-x-1">
          <Text className="text-neutral-9">{label}</Text>
          <Text className={`${colorObj.text} font-extrabold`}>{`${percentage}%`}</Text>
          {possessedIngredientCount && requiredIngredientCount ? (
            <Text className={`!text-[13px] text-neutral-9`}>
              {possessedIngredientCount}/{requiredIngredientCount}
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
            className={`h-[16px] flex-1 ${box === 0 ? 'rounded-l-[5px]' : ''} ${box === requiredBoxList.length - 1 ? 'rounded-r-[5px]' : ''} ${possessedIngredientCount > box ? colorObj.bg : 'bg-inactive-bg'}`}
          />
        ))}
      </View>

      {children}
    </View>
  );
}
