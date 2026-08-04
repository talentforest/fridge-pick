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
  openDatePicker?: () => void;
};

export default function DateInputWithQuickBtn({
  initialDate,
  onChangeDate,
  containerClassName = '',
  btnClassName = '',
  hasDateInput = false,
  openDatePicker,
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
      color: 'neutral' as const,
    },
    {
      label: '+ 7일',
      onPress: () => {
        const date = addDays(currDate, 7);
        setCurrDate(date);
        onChangeDate(date);
      },
      color: 'neutral' as const,
    },
    {
      label: '+ 30일',
      onPress: () => {
        const date = addDays(currDate, 30);
        setCurrDate(date);
        onChangeDate(date);
      },
      color: 'neutral' as const,
    },
    {
      label: '직접변경',
      onPress: openDatePicker,
      color: 'neutral' as const,
    },
  ];

  return (
    <View className="gap-y-1.5">
      {hasDateInput ? (
        <DateInput
          openDatePicker={openDatePicker}
          date={formatDateString(currDate, 'yyyy-MM-dd')}
        />
      ) : (
        <></>
      )}

      <View className="flex-row items-start gap-x-2">
        <IconWithText
          text="빠른변경"
          iconColor="darkGray"
          icon="Zap"
          className="ml-1 mt-1"
          iconSize={11}
          textClassName="text-sm text-neutral-7"
        />

        <View className={`flex-row gap-x-1.5 ${containerClassName}`}>
          {plusDateBtnList.map(({ label, onPress, color }) => (
            <SelectBtn
              key={label}
              name={label}
              textClassName="!font-extrabold text-sm"
              className={`items-center justify-between !rounded-lg !px-3 !py-2 ${btnClassName}`}
              color={color}
              onPress={onPress}
            />
          ))}
        </View>
      </View>
    </View>
  );
}
