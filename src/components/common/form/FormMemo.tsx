import LabelContainer from '@/components/common/container/LabelContainer';
import IconWithText from '@/components/common/IconWithText';
import TextArea from '@/components/common/ui/TextArea';
import { useOverlay } from '@/hooks/common/useOverlay';
import { EditableStorageItemData } from '@/types/storage';

interface FormMemoProps {
  currMemo: string;
  onItemChange: (newData: Partial<EditableStorageItemData>) => void;
  hasLabel?: boolean;
  onSubmit?: () => void;
  onFocus?: () => void;
  autoFocus?: boolean;
  isSheetInput?: boolean;
}

export default function FormMemo({
  currMemo,
  onItemChange,
  onSubmit,
  onFocus,
  hasLabel,
  autoFocus,
  isSheetInput,
}: FormMemoProps) {
  const { shrinkSheet } = useOverlay();

  return (
    <LabelContainer label={hasLabel ? '메모사항' : undefined}>
      <TextArea
        isSheetInput={isSheetInput}
        value={currMemo}
        onChangeText={(text) => onItemChange({ memo: text })}
        placeholder="메모할 사항이 있다면 작성해주세요."
        autoFocus={autoFocus}
        onFocus={onFocus}
        onBlur={shrinkSheet}
      />
      {onSubmit && (
        <IconWithText
          icon="CheckCircle2"
          text="수정완료"
          iconSize={16}
          iconColor="neutral"
          className="absolute bottom-2 right-2 self-end rounded-xl bg-neutral-3 px-3.5 py-3"
          textClassName="!text-[15px] !text-neutral-7"
          onPress={onSubmit}
        />
      )}
    </LabelContainer>
  );
}
