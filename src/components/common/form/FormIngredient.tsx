import { EditableStorageItem, EnrichedStorageItem } from '@/types/storage';
import { getTrackedItemData } from '@/utils';
import { View } from 'react-native';
import FormMemo from '@/components/common/form/FormMemo';
import FormStorage from '@/components/common/form/FormStorage';
import FormDateInput from '@/components/common/form/FormDateInput';

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
  const { recommendedDurations } = getTrackedItemData(currStorageItem);

  return (
    <View className="gap-y-8">
      <FormStorage
        label="보관위치"
        onItemChange={onItemChange}
        currStorageType={currStorageItem.storage.type}
        recommendedDurations={recommendedDurations}
      />

      <FormDateInput
        hasLabel
        initialDate={currStorageItem.expiresAt}
        onItemChange={onItemChange}
        currStorageType={currStorageItem.storage.type}
        recommendedDurations={recommendedDurations}
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
