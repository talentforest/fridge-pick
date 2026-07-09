import DateInput from '@/components/common/DateInput';
import Text from '@/components/common/ui/Text';
import ModalHeader from '@/components/common/header/ModalHeader';
import DateTimePicker from '@react-native-community/datetimepicker';
import LabelContainer from '@/components/common/container/LabelContainer';
import { useOverlay } from '@/hooks';
import { formatDateString } from '@/utils';
import { addDays } from 'date-fns';
import { View } from 'react-native';
import { EditableStorageItem, StorageTypeId } from '@/types/storage';
import SelectBtn from '@/components/common/SelectBtn';
import Icon from '@/components/common/ui/Icon';
import { storageObj } from '@/constants';

interface FormDateInputProps {
  currDate: string;
  onItemChange: (newData: EditableStorageItem) => void;
  defaultExpirationDays?: number;
  hasLabel?: boolean;
  currStorageType?: StorageTypeId;
  ingredientExpirationDays?: { fridge?: number; freezer?: number; pantry?: number };
}

export default function FormDateInput({
  currDate,
  onItemChange,
  hasLabel,
  currStorageType,
  ingredientExpirationDays,
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
      color: 'neutral' as const,
    },
    {
      label: '+7일',
      onPress: () => onChangeDate(addDays(initialDate, 7)),
      color: 'neutral' as const,
    },
    {
      label: '+30일',
      onPress: () => onChangeDate(addDays(initialDate, 30)),
      color: 'neutral' as const,
    },
    {
      label: '직접변경',
      onPress: onEditDatePickerPress,
      color: 'blue' as const,
    },
  ];

  return (
    <LabelContainer label={hasLabel ? '소비기한' : undefined} labelColor="neutral">
      <DateInput
        date={currDate}
        openDatePicker={onEditDatePickerPress}
        hasConvenientButton
      />

      {currStorageType && ingredientExpirationDays?.[currStorageType] && (
        <View className="mt-1.5 flex-row items-center gap-x-1 rounded-xl bg-green-1 p-4">
          <Icon name="Info" size={13} color="green" />
          <Text className="text-sm">
            {storageObj[currStorageType].label} 권장 소비기한{' '}
            <Text className="font-extrabold text-sm !text-green-7">
              {ingredientExpirationDays?.[currStorageType]}일
            </Text>
            이 적용되었습니다.
          </Text>
        </View>
      )}

      <View className="mt-2 w-full flex-row items-start justify-end gap-x-2">
        <Text className="pl-1 pt-1 text-sm text-inactive-text">빠른변경</Text>
        <View className="flex-row gap-x-1">
          {plusDateBtnList.map(({ label, onPress, color }) => (
            <SelectBtn
              key={label}
              name={label}
              textClassName="text-sm font-extrabold"
              className="!px-3 !py-2.5"
              color={color}
              onPress={onPress}
            />
          ))}
        </View>
      </View>
    </LabelContainer>
  );
}
