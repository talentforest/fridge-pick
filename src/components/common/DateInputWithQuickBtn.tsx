import DateInput from '@/components/common/DateInput';
import ModalHeader from '@/components/common/header/ModalHeader';
import SelectBtn from '@/components/common/SelectBtn';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useOverlay } from '@/hooks';
import { formatDateString } from '@/utils';
import { addDays } from 'date-fns';
import { useState } from 'react';
import { View } from 'react-native';

type DateQuickBtnProps = {
  initialDate: string;
  onChangeDate: (date: Date) => void;
  containerClassName?: string;
  btnClassName?: string;
  hasDateInput?: boolean;
};

export default function DateInputWithQuickBtn({
  initialDate,
  onChangeDate,
  containerClassName = '',
  btnClassName = '',
  hasDateInput = false,
}: DateQuickBtnProps) {
  const [currDate, setCurrDate] = useState<Date>(new Date(initialDate));

  const onChangeDatePress = (day?: number) => {
    if (!day) {
      const date = new Date();
      setCurrDate(date);
      onChangeDate(date);
      return;
    }
    const date = addDays(currDate, day);
    setCurrDate(date);
    onChangeDate(date);
  };

  const onEditDatePickerPress = () => {
    const onChange = (_: any, selectedDate?: Date) => {
      if (selectedDate) {
        setCurrDate(selectedDate);
        onChangeDate(selectedDate);
      }
    };

    openDatePicker({
      render: () => (
        <View>
          <ModalHeader title="소비기한 직접 변경" isDatePicker hasX />
          <DateTimePicker
            minimumDate={new Date()}
            value={new Date(currDate)}
            mode="date"
            display="spinner"
            onChange={onChange}
            locale="ko-KR"
          />
        </View>
      ),
    });
  };

  const plusDateBtnList = [
    {
      label: '+ 1일',
      onPress: () => onChangeDatePress(1),
      color: 'green' as const,
    },
    {
      label: '+ 7일',
      onPress: () => onChangeDatePress(7),
      color: 'green' as const,
    },
    {
      label: '+ 30일',
      onPress: () => onChangeDatePress(30),
      color: 'green' as const,
    },
    {
      label: '직접변경',
      onPress: onEditDatePickerPress,
      color: 'neutral' as const,
    },
  ];

  const { openDatePicker } = useOverlay();

  return (
    <View className="gap-y-1.5">
      {hasDateInput ? (
        <DateInput
          openDatePicker={onEditDatePickerPress}
          date={formatDateString(currDate, 'yyyy-MM-dd')}
          onResetPress={onChangeDatePress}
        />
      ) : (
        <></>
      )}

      <View className={`flex-row justify-end gap-x-1.5 ${containerClassName}`}>
        {plusDateBtnList.map(({ label, onPress, color }) => (
          <SelectBtn
            key={label}
            name={label}
            textClassName="text-sm"
            className={`items-center justify-between !rounded-lg !bg-neutral-0 !px-3 !py-2 ${btnClassName}`}
            color={color}
            onPress={onPress}
          />
        ))}
      </View>
    </View>
  );
}
