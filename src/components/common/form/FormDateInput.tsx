import {
  getDurationToDays,
  findDurationByStorageType,
  formatDateString,
  getRemainingDays,
} from '@/utils';
import { View } from 'react-native';
import { EditableStorageItem, StorageTypeId } from '@/types/storage';
import { RecommendedDurations } from '@/types/selectableItem';
import { durationUnitObj, storageObj } from '@/constants';
import LabelContainer from '@/components/common/container/LabelContainer';
import DateInputWithQuickBtn from '@/components/common/DateInputWithQuickBtn';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';

type FormDateInputProps = {
  initialDate: string;
  onItemChange: (newData: EditableStorageItem) => void;
  defaultExpirationDays?: number;
  hasLabel?: boolean;
  currStorageType: StorageTypeId;
  recommendedDurations?: RecommendedDurations;
};

export default function FormDateInput({
  initialDate,
  onItemChange,
  hasLabel,
  currStorageType,
  recommendedDurations,
}: FormDateInputProps) {
  const onChangeDate = (date: Date) => {
    const expiresAt = formatDateString(date, 'yyyy-MM-dd');
    onItemChange({ expiresAt });
  };

  if (!initialDate) return null;

  const durations = recommendedDurations
    ? findDurationByStorageType(recommendedDurations, currStorageType)
    : undefined;

  const durationToDays = durations ? getDurationToDays(durations) : undefined;

  const remainingDays = getRemainingDays(initialDate);

  return (
    <LabelContainer label={hasLabel ? '소비기한' : undefined} labelColor="neutral">
      <View className="gap-y-1.5">
        {currStorageType && durations && durationToDays === remainingDays ? (
          <View className="flex-row items-center gap-x-1 rounded-xl bg-green-1 p-4">
            <Icon name="Info" size={13} color="green" />
            <Text className="text-sm">
              {storageObj[currStorageType].label} 권장 소비기한{' '}
              <Text className="font-extrabold text-sm !text-green-7">
                {durations.value}
                {durationUnitObj[durations.unit]}
              </Text>
              이 적용되었습니다.
            </Text>
          </View>
        ) : (
          <></>
        )}

        <DateInputWithQuickBtn
          hasDateInput
          initialDate={initialDate}
          onChangeDate={onChangeDate}
        />
      </View>
    </LabelContainer>
  );
}
