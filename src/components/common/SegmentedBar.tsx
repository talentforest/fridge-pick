import { View } from 'react-native';
import Text from '@/components/common/ui/Text';
import { Fragment } from 'react';

type SegmentedBarProps = {
  label: string;
  total: number;
  dataList: { label: string; count: number; color: 'green' | 'yellow' | 'red' }[];
};

export default function SegmentedBar({ label, total, dataList }: SegmentedBarProps) {
  const bgColorObj = {
    green: 'bg-green-5',
    yellow: 'bg-yellow-5',
    red: 'bg-red-5',
  } as const;

  const textColorObj = {
    green: 'text-green-7',
    yellow: 'text-yellow-7',
    red: 'text-red-5',
  } as const;

  return (
    <View>
      <Text className="text-sm text-neutral-7">{label}</Text>

      <View className="mt-2 h-5 flex-row items-center bg-neutral-5">
        {dataList.map((item) => (
          <View
            key={item.label}
            style={{ width: `${(item.count / total) * 100}%` }}
            className={`h-full items-center justify-center ${bgColorObj[item.color]}`}
          >
            <Text className="font-heavy text-xs text-neutral-0">
              {((item.count / total) * 100).toFixed(0)}
              <Text className="font-heavy !text-[8px] text-neutral-0">%</Text>
            </Text>
          </View>
        ))}
      </View>

      <View className="mt-2 w-full flex-row items-center justify-between">
        {dataList.map((item) => (
          <Fragment key={item.label}>
            {item.count !== 0 ? (
              <View className="flex-row items-center gap-x-0.5">
                <View className={`size-2 ${bgColorObj[item.color]}`} />
                <Text className={`font-extrabold text-xs ${textColorObj[item.color]}`}>
                  {item.label}{' '}
                  <Text className="mt-1 pl-2 text-xs text-neutral-7">{item.count}개</Text>
                </Text>
              </View>
            ) : (
              <></>
            )}
          </Fragment>
        ))}
      </View>
    </View>
  );
}
