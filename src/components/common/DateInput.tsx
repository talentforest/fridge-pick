import { useOverlay } from '@/provider/OverlayProvider';
import { Pressable } from 'react-native';

import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import { formatDateString } from '@/utils';
import { getRemainingDays } from '@/utils/getExpirationDate';
import DateTimePicker from '@react-native-community/datetimepicker';

interface DateInputProps {
  date: Date;
  setDate: (date: Date) => void;
}

export default function DateInput({ date, setDate }: DateInputProps) {
  const onChange = (_: any, selectedDate?: Date) => {
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const { openDatePicker } = useOverlay();

  return (
    <Pressable
      onPress={() => {
        openDatePicker({
          hasDim: true,
          element: (
            <DateTimePicker
              minimumDate={new Date()}
              value={date}
              mode="date"
              display="spinner"
              onChange={onChange}
              locale="ko-KR"
            />
          ),
        });
      }}
      className="relative h-12 w-full flex-row items-center gap-x-2 overflow-hidden rounded-xl border bg-white px-2.5 py-1"
    >
      <Icon name="Calendar" size={18} />
      <Text className="text-lg">{formatDateString(date, 'yy. MM. dd')}</Text>
      <Text className="text-red-500">(+{getRemainingDays(date)}일)</Text>
    </Pressable>
  );
}
