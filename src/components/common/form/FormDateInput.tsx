import LabelContainer from '@/components/common/container/LabelContainer';
import { findDuration, formatDateString, getRemainingDays } from '@/utils';
import { View } from 'react-native';
import { EditableStorageItem, StorageTypeId } from '@/types/storage';
import { useAtomValue } from 'jotai';
import { findStorageItemById } from '@/atom/storageAtom';
import DateInputWithQuickBtn from '@/components/common/DateInputWithQuickBtn';
import { RecommendedDurations } from '@/types/selectableItem';

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
  recommendedDurations?: RecommendedDurations;
};

export default function FormDateInput({
  initialDate,
  storageItemId,
  onItemChange,
  hasLabel,
  currStorageType,
  recommendedDurations,
}: FormDateInputProps) {
  const currStorageItem = useAtomValue(findStorageItemById(storageItemId));

  const onChangeDate = (date: Date) => {
    const expiresAt = formatDateString(date, 'yyyy-MM-dd');
    onItemChange({ expiresAt });
  };

  const currDate = initialDate || currStorageItem?.expiresAt;

  if (!currDate) return null;

  const durations = recommendedDurations ? findDuration(recommendedDurations) : null;

  const remainingDays = getRemainingDays(currDate);

  return (
    <LabelContainer label={hasLabel ? '소비기한' : undefined} labelColor="neutral">
      <View className="gap-y-1.5">
        {/* {currStorageType &&
          recommendedDuration &&
          recommendedDuration === remainingDays && (
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
          )} */}

        <DateInputWithQuickBtn
          hasDateInput
          initialDate={currDate}
          onChangeDate={onChangeDate}
        />
      </View>
    </LabelContainer>
  );
}
