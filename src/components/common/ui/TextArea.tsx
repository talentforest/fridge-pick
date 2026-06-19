import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { TextInput, TextInputProps } from 'react-native';

export default function TextArea({
  isSheetInput = false,
  ...props
}: { isSheetInput?: boolean } & TextInputProps) {
  const hasTextSize = props.className?.match(/text-(xs|sm|md|base|lg|xl|2xl)/);

  return isSheetInput ? (
    <BottomSheetTextInput
      multiline
      placeholder="내용을 입력해주세요"
      textAlignVertical="top"
      allowFontScaling
      autoFocus={false}
      {...props}
      className={`min-h-24 w-full rounded-2xl border border-border bg-card px-4 py-3.5 pb-10 font-bold leading-[20px] tracking-tightest text-text placeholder:text-inactive-text ${
        hasTextSize ? props.className : `text-base ${props.className ?? ''}`
      }`}
    />
  ) : (
    <TextInput
      multiline
      placeholder="내용을 입력해주세요"
      textAlignVertical="top"
      allowFontScaling
      autoFocus={false}
      {...props}
      className={`min-h-24 w-full rounded-2xl border border-border bg-card px-4 py-3.5 pb-10 font-bold leading-[20px] tracking-tightest text-text placeholder:text-inactive-text ${
        hasTextSize ? props.className : `text-base ${props.className ?? ''}`
      }`}
    />
  );
}
