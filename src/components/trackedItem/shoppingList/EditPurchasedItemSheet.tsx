import FormIngredient from '@/components/common/form/FormIngredient';
import SquareBtn from '@/components/common/SquareBtn';
import TrackedItemImageLabel from '@/components/trackedItem/TrackedItemImageLabel';

import { EditableStorageItem, EnrichedStorageItem } from '@/types/storage';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';

interface EditPurchasedItemSheetProps {
  initialStorageItem: EnrichedStorageItem;
  onEditSubmit: (id: string, newData: EditableStorageItem) => void;
  scrollRef?: React.RefObject<ScrollView>;
}

export default function EditPurchasedItemSheet({
  initialStorageItem,
  onEditSubmit,
}: EditPurchasedItemSheetProps) {
  const [currStorageItem, setCurrStorageItem] =
    useState<EnrichedStorageItem>(initialStorageItem);

  const onItemChange = (newData: EditableStorageItem) => {
    setCurrStorageItem((prev) => {
      if (prev.type === 'custom') {
        return { ...prev, ...newData };
      }

      const { customLabel: _, ...rest } = newData;

      return { ...prev, ...rest };
    });
  };

  return (
    <View className="mt-2 gap-y-5">
      <TrackedItemImageLabel
        item={currStorageItem}
        imageSize={70}
        hasCategory
        textClassName="text-lg"
        isHorizontal
        hasImageBox
      />

      <FormIngredient
        currStorageItem={currStorageItem}
        onItemChange={onItemChange}
        isSheetInput={true}
      />

      <SquareBtn
        name="수정완료"
        iconName="CheckCircle2"
        onPress={() => onEditSubmit(currStorageItem.id, currStorageItem)}
        className="mb-3 mt-5"
      />
    </View>
  );
}
