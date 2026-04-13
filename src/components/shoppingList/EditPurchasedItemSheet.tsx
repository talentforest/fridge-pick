import FormIngredient from '@/components/common/form/FormIngredient';
import SquareBtn from '@/components/common/SquareBtn';
import IngredientImageLabel from '@/components/storage/IngredientImageLabel';
import { EditableStorageItemData, StorageItem } from '@/types/storage';
import { findIngredient } from '@/utils';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';

interface EditPurchasedItemSheetProps {
  initialStorageItem: StorageItem;
  onEditSubmit: (id: string, newData: Partial<EditableStorageItemData>) => void;
  scrollRef?: React.RefObject<ScrollView>;
}

export default function EditPurchasedItemSheet({
  initialStorageItem,
  onEditSubmit,
}: EditPurchasedItemSheetProps) {
  const [currStorageItem, setCurrStorageItem] = useState<StorageItem>(initialStorageItem);

  const onItemChange = (newData: Partial<EditableStorageItemData>) => {
    setCurrStorageItem((prev) => ({ ...prev, ...newData }));
  };

  const { id, ingredientId } = initialStorageItem;

  const ingredient = findIngredient(ingredientId);

  return (
    <View>
      <View className="gap-y-2">
        <IngredientImageLabel
          ingredient={ingredient}
          customLabel={initialStorageItem?.customLabel}
        />

        <View className="gap-y-6">
          <FormIngredient
            currStorageItem={currStorageItem}
            ingredient={ingredient}
            onItemChange={onItemChange}
            isSheetInput={true}
          />
        </View>

        <SquareBtn
          name="수정완료"
          iconName="CheckCircle2"
          onPress={() => onEditSubmit(id, currStorageItem)}
          className="mb-3 mt-5"
        />
      </View>
    </View>
  );
}
