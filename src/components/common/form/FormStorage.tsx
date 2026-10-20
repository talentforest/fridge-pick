import LabelContainer from '@/components/common/container/LabelContainer';
import SelectBtn from '@/components/common/SelectBtn';
import { DEFAULT_EXPIRATION_DURATION, storageObj } from '@/constants';
import { RecommendedDurations } from '@/types/selectableItem';
import { EditableStorageItem, StorageTypeId } from '@/types/storage';
import { findDurationByStorageType, getExpirationDate } from '@/utils';
import { View } from 'react-native';

interface FormStorageProps {
  label?: string;
  currStorageType: StorageTypeId;
  onItemChange: (newData: EditableStorageItem) => void;
  recommendedDurations?: RecommendedDurations;
  containerClassName?: string;
}

export default function FormStorage({
  label,
  currStorageType,
  onItemChange,
  recommendedDurations,
  containerClassName = '',
}: FormStorageProps) {
  const onPress = (storageTypeId: StorageTypeId) => {
    const durationByStorageTypeId = recommendedDurations
      ? findDurationByStorageType(recommendedDurations, storageTypeId)
      : undefined;

    const expiresAt = getExpirationDate(
      durationByStorageTypeId ?? DEFAULT_EXPIRATION_DURATION,
    );

    onItemChange({ storage: { type: storageTypeId }, expiresAt });
  };

  return (
    <LabelContainer label={label}>
      <View className={`flex-row gap-x-2.5 ${containerClassName}`}>
        {Object.values(storageObj).map(({ id: storageTypeId, label, icon, color }) => (
          <SelectBtn
            key={storageTypeId}
            name={label}
            className="h-12 flex-1 !rounded-xl !py-0"
            iconName={icon}
            iconSize={14}
            color={currStorageType === storageTypeId ? color : 'inActive'}
            onPress={() => onPress(storageTypeId)}
          />
        ))}
      </View>
    </LabelContainer>
  );
}
