import { EditableStorageItem, EnrichedStorageItem } from '@/types/storage';
import { View } from 'react-native';
import { useState } from 'react';
import { useSetAtom } from 'jotai';
import { changeStorageItemAtom } from '@/atom/storageAtom';

import FormIngredient from '@/components/common/form/FormIngredient';
import SquareBtn from '@/components/common/SquareBtn';
import TrackedItemImageLabel from '@/components/trackedItem/TrackedItemImageLabel';
import StorageItemDetail from '@/components/trackedItem/storage/StorageItemDetail';
import ModalHeader from '@/components/common/header/ModalHeader';

interface StorageItemSheetProps {
  storageItem: EnrichedStorageItem;
}

export default function StorageItemSheet({ storageItem }: StorageItemSheetProps) {
  const [isEditing, setIsEditing] = useState(false);

  const [currStorageItem, setCurrStorageItem] =
    useState<EnrichedStorageItem>(storageItem);

  const changeStorageItem = useSetAtom(changeStorageItemAtom);

  const onItemChange = (newData: EditableStorageItem) => {
    setCurrStorageItem((prev) => {
      return { ...prev, ...newData };
    });
  };

  const toggleEditPress = () => setIsEditing((prev) => !prev);

  if (!storageItem) return;

  return (
    <View className="gap-y-3 pb-3">
      {!isEditing ? (
        <StorageItemDetail
          storageItem={currStorageItem}
          toggleEditPress={toggleEditPress}
        />
      ) : (
        <View className="gap-y-4">
          <ModalHeader title="식재료 정보 수정" />

          <View className="gap-y-6">
            <TrackedItemImageLabel item={currStorageItem} textClassName="text-lg" />

            <FormIngredient
              currStorageItem={currStorageItem}
              onItemChange={onItemChange}
              isSheetInput={true}
            />

            <SquareBtn
              name="수정완료"
              iconName="CheckCircle2"
              iconSize={16}
              onPress={() => {
                changeStorageItem({ id: currStorageItem.id, newData: currStorageItem });
                toggleEditPress();
              }}
            />
          </View>
        </View>
      )}
    </View>
  );
}
