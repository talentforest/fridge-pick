import { Pressable, View } from 'react-native';
import { formatDateString } from '@/utils';
import {
  formatRemainingDays,
  getExpirationStatus,
  getRemainingDays,
} from '@/utils/getExpirationDate';
import { expirationStatusObj } from '@/constants';
import { ReactNode } from 'react';
import Text from '@/components/common/ui/Text';
import DateTimePicker from '@react-native-community/datetimepicker';
import ModalHeader from '@/components/common/ModalHeader';
import { useOverlay } from '@/hooks/common/useOverlay';

interface DateInputProps {
  date: string;
  onChangeDate: (date: Date) => void;
  children?: ReactNode;
}

export default function DateInput({ date, onChangeDate, children }: DateInputProps) {
  const initialDate = new Date(date);
  const remainingDays = getRemainingDays(initialDate);
  const expirationStatus = getExpirationStatus(+remainingDays);

  const { openDatePicker } = useOverlay();

  const onChange = (_: any, selectedDate?: Date) => {
    if (selectedDate) {
      onChangeDate(selectedDate);
    }
  };

  const onEditDatePickerPress = () => {
    openDatePicker({
      hasDim: true,
      render: () => (
        <View>
          <ModalHeader title="날짜 변경하기" isDatePicker />

          <DateTimePicker
            minimumDate={new Date()}
            value={initialDate}
            mode="date"
            display="spinner"
            onChange={onChange}
            locale="ko-KR"
          />
        </View>
      ),
    });
  };

  return (
    <Pressable
      onPress={onEditDatePickerPress}
      className="h-[56] flex-row items-center gap-x-2 rounded-2xl border border-gray-200 bg-white pl-3"
    >
      <View className="flex-1 flex-row items-center gap-2">
        <View
          className={`rounded-full px-3 py-2.5 ${expirationStatusObj[expirationStatus].filterColor}`}
        >
          <Text
            className={`font-extrabold !text-md ${expirationStatusObj[expirationStatus].textColor}`}
          >
            {formatRemainingDays(remainingDays)}
          </Text>
        </View>

        <Text>{formatDateString(initialDate, 'yyyy년 MM월 dd일')}</Text>
      </View>

      {children}
    </Pressable>
  );
}
