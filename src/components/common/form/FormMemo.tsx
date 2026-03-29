import LabelContainer from '@/components/common/container/LabelContainer';
import TextArea from '@/components/common/ui/TextArea';
import { StorageItem } from '@/types/storage';

interface FormMemoProps {
  currMemo: string;
  onItemChange: (
    newData: Partial<Pick<StorageItem, 'expiresAt' | 'storage' | 'memo'>>,
  ) => void;
}

export default function FormMemo({ currMemo, onItemChange }: FormMemoProps) {
  return (
    <LabelContainer label="메모사항">
      <TextArea
        value={currMemo}
        onChangeText={(text) => onItemChange({ memo: text })}
        placeholder="메모할 사항을 작성해주세요."
      />
    </LabelContainer>
  );
}
