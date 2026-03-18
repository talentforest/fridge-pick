import DatePicker from '@react-native-community/datetimepicker';

interface DateTimePickerProps {
  value: Date;
  onChange: (date: Date) => void;
}

export default function DateTimePicker({
  value,
  onChange,
}: DateTimePickerProps) {
  const onChangeDate = (_: any, selectedDate?: Date) => {
    if (!selectedDate) return;
    onChange(selectedDate);
  };

  return (
    <DatePicker
      minimumDate={new Date()}
      value={value}
      mode="date"
      display="spinner"
      onChange={onChangeDate}
      locale="ko-KR"
    />
  );
}
