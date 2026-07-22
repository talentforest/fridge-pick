import DateInput from '@/components/common/DateInput';
import SelectBtn from '@/components/common/SelectBtn';
import { formatDateString } from '@/utils';
import { addDays } from 'date-fns';
import { useState } from 'react';
import { View } from 'react-native';
import IconWithText from '@/components/common/IconWithText';

type DateQuickBtnProps = {
  initialDate: string;
  onChangeDate: (date: Date) => void;
  containerClassName?: string;
  btnClassName?: string;
  hasDateInput?: boolean;
};

export default function DateQuickBtn({
  initialDate,
  onChangeDate,
  containerClassName = '',
  btnClassName = '',
  hasDateInput = false,
}: DateQuickBtnProps) {
  const [currDate, setCurrDate] = useState<Date>(new Date(initialDate));

  const plusDateBtnList = [
    {
      label: '+ 1일',
      onPress: () => {
        const date = addDays(currDate, 1);
        setCurrDate(date);
        onChangeDate(date);
      },
      color: 'green' as const,
    },
    {
      label: '+ 7일',
      onPress: () => {
        const date = addDays(currDate, 7);
        setCurrDate(date);
        onChangeDate(date);
      },
      color: 'blue' as const,
    },
    {
      label: '+ 30일',
      onPress: () => {
        const date = addDays(currDate, 30);
        setCurrDate(date);
        onChangeDate(date);
      },
      color: 'indigo' as const,
    },
    // {
    //   label: '직접변경',
    //   onPress: onEditDatePickerPress,
    //   color: 'blue' as const,
    // },
  ];

  return (
    <View className="gap-y-5">
      {hasDateInput ? (
        <DateInput date={formatDateString(currDate, 'yyyy-MM-dd')} />
      ) : (
        <></>
      )}

      <View className="flex-row items-start gap-x-3">
        <IconWithText
          text="빠른변경"
          iconColor="orange"
          icon="Zap"
          className="ml-1 mt-1"
          iconSize={12}
          textClassName="text-sm text-orange-7"
        />

        <View className={`flex-row gap-x-3 ${containerClassName}`}>
          {plusDateBtnList.map(({ label, onPress, color }) => (
            <SelectBtn
              key={label}
              name={label}
              iconName="CalendarPlus"
              iconSize={16}
              textClassName="font-extrabold"
              className={`items-center justify-between !px-3 !py-4 ${btnClassName}`}
              color={color}
              onPress={onPress}
            />
          ))}
        </View>
      </View>
    </View>
  );
}
