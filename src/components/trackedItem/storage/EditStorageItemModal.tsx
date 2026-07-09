import { changeStorageItemAtom } from '@/atom/storageAtom';
import FormDateInput from '@/components/common/form/FormDateInput';
import FormMemo from '@/components/common/form/FormMemo';
import FormStorage from '@/components/common/form/FormStorage';
import ModalHeader from '@/components/common/header/ModalHeader';
import SquareBtn from '@/components/common/SquareBtn';
import { storageObj } from '@/constants';
import { useOverlay } from '@/hooks';
import { EditableStorageItem, EnrichedStorageItem } from '@/types/storage';
import { useSetAtom } from 'jotai';
import { useState } from 'react';
import { View } from 'react-native';

interface EditStorageItemProps {
  storageItem: EnrichedStorageItem;
  editType: '보관위치' | '소비기한' | '메모사항';
}

export default function EditStorageItemModal({
  storageItem,
  editType,
}: EditStorageItemProps) {
  const [currStorageItem, setCurrStorageItem] =
    useState<EditableStorageItem>(storageItem);

  const { closeModal, closeSheet, alert } = useOverlay();

  const changeItem = useSetAtom(changeStorageItemAtom);

  const onItemChange = (newData: EditableStorageItem) => {
    setCurrStorageItem((prev) => ({ ...prev, ...newData }));
  };

  const onSubmit = () => {
    closeModal();

    alert({
      title: '보관위치 변경 알림',
      message: `식재료를 ${storageObj[storageItem.storage.type].label}으로 옮겼습니다.`,
    });

    closeSheet();
  };

  return (
    <View className="gap-y-6">
      <ModalHeader title={`${editType} 변경`} />

      {editType === '보관위치' && (
        <FormStorage
          currStorageType={currStorageItem?.storage?.type || storageItem.storage.type}
          onItemChange={(data) => {
            if (!data.storage) return;
            onItemChange({ storage: { type: data.storage.type } });
          }}
        />
      )}

      {editType === '소비기한' && (
        <FormDateInput
          currDate={currStorageItem.expiresAt || ''}
          onItemChange={onItemChange}
        />
      )}

      {editType === '메모사항' && (
        <FormMemo
          currMemo={currStorageItem.memo || ''}
          onItemChange={onItemChange}
          autoFocus
        />
      )}

      <SquareBtn bgColor="yellow" name="변경완료" onPress={onSubmit} />
    </View>
  );
}
