import DateInput from '@/components/common/DateInput';
import FilterTag from '@/components/common/FilterTag';
import ModalHeader from '@/components/common/header/ModalHeader';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useOverlay } from '@/hooks';
import { formatDateString } from '@/utils';
import { addDays } from 'date-fns';
import { View } from 'react-native';
import LabelContainer from '@/components/common/container/LabelContainer';
import { EditableStorageItem } from '@/types/storage';

interface FormDateInputProps {
  currDate: string;
  onItemChange: (newData: Partial<EditableStorageItem>) => void;
  defaultExpirationDays?: number;
  hasLabel?: boolean;
}

export default function FormDateInput({
  currDate,
  onItemChange,
  hasLabel,
}: FormDateInputProps) {
  const initialDate = new Date(currDate);

  const onChangeDate = (date: Date) => {
    const expiresAt = formatDateString(date, 'yyyy-MM-dd');
    onItemChange({ expiresAt });
  };

  const onChange = (_: any, selectedDate?: Date) => {
    if (selectedDate) {
      onChangeDate(selectedDate);
    }
  };

  const { openDatePicker } = useOverlay();

  const onEditDatePickerPress = () => {
    openDatePicker({
      hasDim: true,
      render: () => (
        <View>
          <ModalHeader title="소비기한 변경하기" isDatePicker hasX={false} />
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

  const plusDateBtnList = [
    {
      label: '+1일',
      onPress: () => onChangeDate(addDays(initialDate, 1)),
      color: 'green' as const,
    },
    {
      label: '+7일',
      onPress: () => onChangeDate(addDays(initialDate, 7)),
      color: 'green' as const,
    },
    {
      label: '+30일',
      onPress: () => onChangeDate(addDays(initialDate, 30)),
      color: 'green' as const,
    },
    {
      label: '직접변경',
      onPress: onEditDatePickerPress,
      color: 'blue' as const,
    },
  ];

  return (
    <LabelContainer label={hasLabel ? '소비기한' : undefined}>
      <DateInput
        date={currDate}
        openDatePicker={onEditDatePickerPress}
        hasConvenientButton
      >
        <View className="w-full flex-row flex-wrap justify-end gap-1.5 border-dashed border-inactive-text pt-1">
          {plusDateBtnList.map(({ label, onPress, color }) => (
            <FilterTag
              key={label}
              isActive
              name={label}
              textClassName="!text-[13px]"
              color={color}
              onPress={onPress}
            />
          ))}
        </View>
      </DateInput>
    </LabelContainer>
  );
}
