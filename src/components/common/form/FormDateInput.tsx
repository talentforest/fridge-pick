import LabelContainer from '@/components/common/container/LabelContainer';
import DateInput from '@/components/common/DateInput';
import FilterTag from '@/components/common/FilterTag';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import { OpenDatePickerOverlayVoid } from '@/provider/OverlayProvider';
import { StorageItem } from '@/types/storage';
import { formatDateString } from '@/utils';
import { addDays, addMonths, addWeeks, addYears } from 'date-fns';
import { View } from 'react-native';

interface FormDateInputProps {
  currDate: string;
  onItemChange: (
    newData: Partial<Pick<StorageItem, 'expiresAt' | 'storage' | 'memo'>>,
  ) => void;
  openDatePicker: OpenDatePickerOverlayVoid;
  defaultExpirationDays?: number;
  hasInfo?: boolean;
}

export default function FormDateInput({
  currDate,
  onItemChange,
  openDatePicker,
  defaultExpirationDays,
  hasInfo,
}: FormDateInputProps) {
  const initialDate = new Date(currDate);

  const onChangeDate = (date: Date) => {
    const expiresAt = formatDateString(date, 'yyyy-MM-dd');
    onItemChange({ expiresAt });
  };

  const plusDateBtnList = [
    { label: '+하루', onPress: () => onChangeDate(addDays(initialDate, 1)) },
    { label: '+일주일', onPress: () => onChangeDate(addWeeks(initialDate, 1)) },
    { label: '+한달', onPress: () => onChangeDate(addMonths(initialDate, 1)) },
    { label: '+일년', onPress: () => onChangeDate(addYears(initialDate, 1)) },
  ];

  return (
    <LabelContainer label="추천 소비기한">
      {hasInfo && defaultExpirationDays && (
        <View className="flex-row items-center gap-x-1 rounded-xl px-2 pb-3 pt-2">
          <Icon name="Info" size={16} />
          <Text className="text-md text-gray-700">
            추천 소비기한은{' '}
            <Text className="font-extrabold text-md text-red-500">
              {defaultExpirationDays}일
            </Text>
            입니다.
          </Text>
        </View>
      )}

      <DateInput
        date={currDate}
        onChangeDate={onChangeDate}
        openDatePicker={openDatePicker}
      >
        <View className="flex-row gap-x-1 p-5">
          <Icon name="Calendar" size={18} color="gray" />
          <Text className="text-gray-600">변경</Text>
        </View>
      </DateInput>

      <View className="mt-2 flex-row flex-wrap gap-2">
        {plusDateBtnList.map(({ label, onPress }) => (
          <FilterTag
            key={label}
            name={label}
            color="blue"
            textClassName="text-md"
            onPress={onPress}
          />
        ))}
      </View>
    </LabelContainer>
  );
}
