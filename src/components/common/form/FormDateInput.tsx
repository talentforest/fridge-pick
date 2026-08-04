import Text from '@/components/common/ui/Text';
import ModalHeader from '@/components/common/header/ModalHeader';
import DateTimePicker from '@react-native-community/datetimepicker';
import LabelContainer from '@/components/common/container/LabelContainer';
import { useOverlay } from '@/hooks';
import { formatDateString, getRemainingDays } from '@/utils';
import { View } from 'react-native';
import { EditableStorageItem, StorageTypeId } from '@/types/storage';
import Icon from '@/components/common/ui/Icon';
import { storageObj } from '@/constants';
import { useAtomValue } from 'jotai';
import { findStorageItemById } from '@/atom/storageAtom';
import DateInputWithQuickBtn from '@/components/common/DateInputWithQuickBtn';

type InitialDateProps = {
  initialDate: string;
  storageItemId?: never;
};

type StorageItemProps = {
  storageItemId: string;
  initialDate?: never;
};

type FormDateInputProps = (InitialDateProps | StorageItemProps) & {
  onItemChange: (newData: EditableStorageItem) => void;
  defaultExpirationDays?: number;
  hasLabel?: boolean;
  currStorageType?: StorageTypeId;
  ingredientExpirationDays?: {
    fridge?: number;
    freezer?: number;
    pantry?: number;
  };
};

export default function FormDateInput({
  initialDate,
  storageItemId,
  onItemChange,
  hasLabel,
  currStorageType,
  ingredientExpirationDays,
}: FormDateInputProps) {
  const currStorageItem = useAtomValue(findStorageItemById(storageItemId));

  const { openDatePicker } = useOverlay();

  const onChangeDate = (date: Date) => {
    const expiresAt = formatDateString(date, 'yyyy-MM-dd');
    onItemChange({ expiresAt });
  };

  const currDate = initialDate || currStorageItem?.expiresAt;

  if (!currDate) return null;

  const onEditDatePickerPress = () => {
    const onChange = (_: any, selectedDate?: Date) => {
      if (selectedDate) {
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

  const expirationDaysByStorage = currStorageType
    ? ingredientExpirationDays?.[currStorageType]
    : null;

  const remainingDays = getRemainingDays(currDate);

  return (
    <LabelContainer label={hasLabel ? '소비기한' : undefined} labelColor="neutral">
      <View className="gap-y-1.5">
        {currStorageType &&
          expirationDaysByStorage &&
          expirationDaysByStorage === remainingDays && (
            <View className="flex-row items-center gap-x-1 rounded-xl bg-green-1 p-4">
              <Icon name="Info" size={13} color="green" />
              <Text className="text-sm">
                {storageObj[currStorageType].label} 권장 소비기한{' '}
                <Text className="font-extrabold text-sm !text-green-7">
                  {expirationDaysByStorage}일
                </Text>
                이 적용되었습니다.
              </Text>
            </View>
          )}

        <DateInputWithQuickBtn
          hasDateInput
          initialDate={currDate}
          onChangeDate={onChangeDate}
          openDatePicker={onEditDatePickerPress}
        />
      </View>
    </LabelContainer>
  );
}
