import LabelContainer from '@/components/common/container/LabelContainer';
import TextArea from '@/components/common/ui/TextArea';
import Text from '@/components/common/ui/Text';
import { useOverlay } from '@/hooks';
import { EditableStorageItem } from '@/types/storage';

interface FormMemoProps {
  currMemo: string;
  onItemChange: (newData: EditableStorageItem) => void;
  hasLabel?: boolean;
  onFocus?: () => void;
  autoFocus?: boolean;
  isSheetInput?: boolean;
}

export default function FormMemo({
  currMemo,
  onItemChange,
  onFocus,
  hasLabel,
  autoFocus,
  isSheetInput,
}: FormMemoProps) {
  const { shrinkSheet } = useOverlay();

  return (
    <LabelContainer label={hasLabel ? '메모 (선택)' : undefined} labelColor="neutral">
      <TextArea
        className="border !p-5"
        isSheetInput={isSheetInput}
        value={currMemo}
        onChangeText={(text) => onItemChange({ memo: text })}
        placeholder="메모할 사항이 있다면 작성해주세요."
        autoFocus={autoFocus}
        onFocus={onFocus}
        onBlur={shrinkSheet}
      />

      <Text className="absolute bottom-4 right-5 text-sm text-neutral-5">
        {currMemo.length} / 50
      </Text>
    </LabelContainer>
  );
}
