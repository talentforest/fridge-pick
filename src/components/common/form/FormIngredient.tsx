import FormMemo from '@/components/common/form/FormMemo';
import FormStorage from '@/components/common/form/FormStorage';
import { Ingredient } from '@/types/ingredient';
import { EditableStorageItemData, StorageItem } from '@/types/storage';

interface FormIngredientProps {
  currStorageItem: StorageItem;
  ingredient?: Ingredient;
  onItemChange: (newData: Partial<EditableStorageItemData>) => void;
  onMemoFocus?: () => void;
  isSheetInput?: boolean;
}

export default function FormIngredient({
  currStorageItem,
  ingredient,
  onItemChange,
  onMemoFocus,
  isSheetInput = false,
}: FormIngredientProps) {
  return (
    <>
      <FormStorage
        label="보관위치와 소비기한"
        currStorageType={currStorageItem.storage.type}
        currDate={currStorageItem.expiresAt}
        onItemChange={onItemChange}
        ingredientExpirationDays={ingredient?.expirationDays}
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
