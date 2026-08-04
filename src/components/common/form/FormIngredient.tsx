import { EditableStorageItem, EnrichedStorageItem } from '@/types/storage';
import { formatDateString, getTrackedItemData } from '@/utils';
import { View } from 'react-native';
import FormDateInput from '@/components/common/form/FormDateInput';
import FormMemo from '@/components/common/form/FormMemo';
import FormStorage from '@/components/common/form/FormStorage';

interface FormIngredientProps {
  currStorageItem: EnrichedStorageItem;
  onItemChange: (newData: EditableStorageItem) => void;
  onMemoFocus?: () => void;
  isSheetInput?: boolean;
}

export default function FormIngredient({
  currStorageItem,
  onItemChange,
  onMemoFocus,
  isSheetInput = false,
}: FormIngredientProps) {
  const { expirationDays } = getTrackedItemData(currStorageItem);

  const onChangeDate = (date: Date) => {
    const expiresAt = formatDateString(date, 'yyyy-MM-dd');
    const storage = { type: currStorageItem.storage.type };
    onItemChange({ storage, expiresAt });
  };

  return (
    <View className="gap-y-8">
      <FormStorage
        label="보관위치"
        onItemChange={onItemChange}
        currStorageType={currStorageItem.storage.type}
        ingredientExpirationDays={expirationDays}
      />

      <FormDateInput
        hasLabel
        initialDate={currStorageItem.expiresAt}
        onItemChange={(newData) =>
          onChangeDate(newData.expiresAt ? new Date(newData.expiresAt) : new Date())
        }
        currStorageType={currStorageItem ? currStorageItem.storage.type : undefined}
        ingredientExpirationDays={expirationDays}
      />

      <FormMemo
        isSheetInput={isSheetInput}
        hasLabel
        currMemo={currStorageItem.memo || ''}
        onItemChange={onItemChange}
        onFocus={onMemoFocus}
      />
    </View>
  );
}
