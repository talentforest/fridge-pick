import FormIngredient from '@/components/common/form/FormIngredient';
import SquareBtn from '@/components/common/SquareBtn';
import IngredientImageLabel from '@/components/storage/IngredientImageLabel';
import { EditableStorageItemData, EnrichStorageItem } from '@/types/storage';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';

interface EditPurchasedItemSheetProps {
  initialItem: EnrichStorageItem;
  onEditSubmit: (id: string, newData: Partial<EditableStorageItemData>) => void;
  scrollRef?: React.RefObject<ScrollView>;
}

export default function EditPurchasedItemSheet({
  initialItem,
  onEditSubmit,
}: EditPurchasedItemSheetProps) {
  const [currStorageItem, setCurrStorageItem] = useState<EnrichStorageItem>(initialItem);

  const { ingredient, ...storageItem } = currStorageItem || {};

  const onItemChange = (newData: Partial<EditableStorageItemData>) => {
    setCurrStorageItem((prev) => ({ ...prev, ...newData }));
  };

  return (
    <View>
      <View className="gap-y-2">
        <IngredientImageLabel
          customLabel={storageItem.customLabel}
          ingredient={ingredient}
        />

        <View className="gap-y-6">
          <FormIngredient
            currStorageItem={currStorageItem}
            onItemChange={onItemChange}
            isSheetInput={true}
          />
        </View>

        <SquareBtn
          name="수정완료"
          iconName="CheckCircle2"
          onPress={() => onEditSubmit(storageItem?.id, currStorageItem)}
          className="mb-3 mt-5"
        />
      </View>
    </View>
  );
}
