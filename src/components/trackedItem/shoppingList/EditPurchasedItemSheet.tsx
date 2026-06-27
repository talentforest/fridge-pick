import FormIngredient from '@/components/common/form/FormIngredient';
import SquareBtn from '@/components/common/SquareBtn';
import TrackedItemImageLabel from '@/components/trackedItem/TrackedItemImageLabel';

import { EditableStorageItem, EnrichedStorageItem } from '@/types/storage';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';

interface EditPurchasedItemSheetProps {
  initialStorageItem: EnrichedStorageItem;
  onEditSubmit: (id: string, newData: Partial<EditableStorageItem>) => void;
  scrollRef?: React.RefObject<ScrollView>;
}

export default function EditPurchasedItemSheet({
  initialStorageItem,
  onEditSubmit,
}: EditPurchasedItemSheetProps) {
  const [currStorageItem, setCurrStorageItem] =
    useState<EnrichedStorageItem>(initialStorageItem);

  const onItemChange = (newData: Partial<EditableStorageItem>) => {
    setCurrStorageItem((prev) => {
      return { ...prev, newData };
    });
  };

  return (
    <View>
      <View className="gap-y-2">
        <TrackedItemImageLabel
          item={currStorageItem}
          imageSize={85}
          hasCategory
          textClassName="text-base"
          isHorizontal
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
          onPress={() => onEditSubmit(currStorageItem.id, currStorageItem)}
          className="mb-3 mt-5"
        />
      </View>
    </View>
  );
}
