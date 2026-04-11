import LabelContainer from '@/components/common/container/LabelContainer';
import IconWithText from '@/components/common/IconWithText';
import TextArea from '@/components/common/ui/TextArea';
import { EditableStorageItemData } from '@/types/storage';
import { View } from 'react-native';

interface FormMemoProps {
  currMemo: string;
  onItemChange: (newData: EditableStorageItemData) => void;
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
  return hasLabel ? (
    <LabelContainer label="메모사항">
      <TextArea
        isSheetInput={isSheetInput}
        value={currMemo}
        onChangeText={(text) => onItemChange({ memo: text })}
        placeholder="메모할 사항이 있다면 작성해주세요."
        onFocus={onFocus}
        autoFocus={autoFocus}
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
  ) : (
    <View>
      <TextArea
        isSheetInput={isSheetInput}
        value={currMemo}
        onChangeText={(text) => onItemChange({ memo: text })}
        placeholder="메모할 사항이 있다면 작성해주세요."
        onFocus={onFocus}
        autoFocus={autoFocus}
        className="!pb-14"
      />
      {onSubmit && (
        <IconWithText
          icon="CheckCircle2"
          text="수정완료"
          iconSize={16}
          iconColor="neutral"
          className="absolute bottom-2 right-2 self-end rounded-xl border border-border bg-neutral-3 px-3 py-2.5"
          textClassName="!text-[15px] !text-neutral-7"
          onPress={onSubmit}
        />
      )}
    </View>
  );
}
