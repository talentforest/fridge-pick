import LabelContainer from '@/components/common/container/LabelContainer';
import SelectBtn from '@/components/common/SelectBtn';
import { DEFAULT_EXPIRATION_DAYS, storageObj } from '@/constants';
import { EditableStorageItem, StorageTypeId } from '@/types/storage';
import { formatDateString } from '@/utils';
import { addDays } from 'date-fns';
import { View } from 'react-native';

interface FormStorageProps {
  label?: string;
  currStorageType: StorageTypeId;
  onItemChange: (newData: EditableStorageItem) => void;
  ingredientExpirationDays?: {
    fridge?: number;
    freezer?: number;
    pantry?: number;
  };
}

export default function FormStorage({
  label,
  currStorageType,
  onItemChange,
  ingredientExpirationDays,
}: FormStorageProps) {
  return (
    <LabelContainer label={label} labelColor="neutral">
      <View className="flex-row gap-x-2">
        {Object.values(storageObj).map(({ id: storageType, label, icon, color }) => (
          <SelectBtn
            key={storageType}
            name={label}
            className="flex flex-1 !py-4"
            iconName={icon}
            iconSize={16}
            color={currStorageType === storageType ? color : 'inActive'}
            onPress={() => {
              const date = addDays(
                new Date(),
                ingredientExpirationDays?.[storageType] || DEFAULT_EXPIRATION_DAYS,
              );
              const expiresAt = formatDateString(date, 'yyyy-MM-dd');
              onItemChange({ storage: { type: storageType }, expiresAt });
            }}
          />
        ))}
      </View>
    </LabelContainer>
  );
}
