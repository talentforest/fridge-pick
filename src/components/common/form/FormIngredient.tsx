import FormMemo from '@/components/common/form/FormMemo';
import FormStorage from '@/components/common/form/FormStorage';
import { EditableStorageItemData, EnrichStorageItem } from '@/types/storage';

interface FormIngredientProps {
  currStorageItem: EnrichStorageItem;
  onItemChange: (newData: Partial<EditableStorageItemData>) => void;
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
      : currStorageItem.type === 'meal'
        ? currStorageItem.meal.expirationDays
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
