import FormStorage from '@/components/common/form/FormStorage';
import ModalHeader from '@/components/common/header/ModalHeader';
import SquareBtn from '@/components/common/SquareBtn';
import { StorageItem, StorageTypeId } from '@/types/storage';
import { useState } from 'react';
import { View } from 'react-native';

interface StorageModalProps {
  currentValue: StorageTypeId;
  onItemChange: (newData: Pick<StorageItem, 'storage'>) => void;
}

export default function StorageModal({ currentValue, onItemChange }: StorageModalProps) {
  const [value, setValue] = useState<StorageTypeId>(currentValue);

  return (
    <View className="gap-y-4">
      <ModalHeader title="보관위치 변경하기" />

      <FormStorage
        label="현재 보관위치"
        currStorageType={value}
        onItemChange={(data) => {
          if (!data.storage) return;
          setValue(data.storage?.type);
        }}
      />

      <SquareBtn
        name="변경완료"
        onPress={() => onItemChange({ storage: { type: value } })}
      />
    </View>
  );
}
