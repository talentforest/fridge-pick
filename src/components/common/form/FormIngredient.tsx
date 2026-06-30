import FormMemo from '@/components/common/form/FormMemo';
import FormStorage from '@/components/common/form/FormStorage';
import { EditableStorageItem, EnrichedStorageItem } from '@/types/storage';

interface FormIngredientProps {
  currStorageItem: EnrichedStorageItem;
  onItemChange: (newData: Partial<EditableStorageItem>) => void;
  onMemoFocus?: () => void;
  isSheetInput?: boolean;
}

export default function FormIngredient({
  currStorageItem,
  onItemChange,
  onMemoFocus,
  isSheetInput = false,
}: FormIngredientProps) {
  const days =
    currStorageItem.type === 'ingredient'
      ? currStorageItem.ingredient?.expirationDays
      : currStorageItem.type === 'preparedFood'
        ? currStorageItem.preparedFood.expirationDays
        : undefined;

  return (
    <>
      <FormStorage
        label="보관위치와 소비기한"
        currStorageType={currStorageItem.storage.type}
        currDate={currStorageItem.expiresAt}
        onItemChange={onItemChange}
        ingredientExpirationDays={days}
      />

      <FormMemo
        isSheetInput={isSheetInput}
        hasLabel
        currMemo={currStorageItem.memo || ''}
        onItemChange={onItemChange}
        onFocus={onMemoFocus}
      />
    </>
  );
}
