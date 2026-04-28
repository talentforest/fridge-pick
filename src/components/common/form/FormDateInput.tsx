import DateInput from '@/components/common/DateInput';
import FilterTag from '@/components/common/FilterTag';
import ModalHeader from '@/components/common/header/ModalHeader';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useOverlay } from '@/hooks/common/useOverlay';
import { formatDateString } from '@/utils';
import { addDays, addMonths, addWeeks } from 'date-fns';
import { View } from 'react-native';
import LabelContainer from '@/components/common/container/LabelContainer';
import { EditableStorageItemData } from '@/types/storage';

interface FormDateInputProps {
  currDate: string;
  onItemChange: (newData: Partial<EditableStorageItemData>) => void;
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
      label: '직접변경',
      onPress: onEditDatePickerPress,
      color: 'blue' as const,
    },
    {
      label: '+하루',
      onPress: () => onChangeDate(addDays(initialDate, 1)),
      color: 'neutral' as const,
    },
    {
      label: '+일주일',
      onPress: () => onChangeDate(addWeeks(initialDate, 1)),
      color: 'neutral' as const,
    },
    {
      label: '+한달',
      onPress: () => onChangeDate(addMonths(initialDate, 1)),
      color: 'neutral' as const,
    },
  ];

  return (
    <LabelContainer label={hasLabel ? '소비기한' : undefined}>
      <DateInput date={currDate} openDatePicker={onEditDatePickerPress} />

      <View className="mt-1.5 flex-row flex-wrap gap-1.5">
        {plusDateBtnList.map(({ label, onPress, color }) => (
          <FilterTag
            key={label}
            isActive
            name={label}
            textClassName="text-sm"
            color={color}
            onPress={onPress}
          />
        ))}
      </View>
    </LabelContainer>
  );
}
