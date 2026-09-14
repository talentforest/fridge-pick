import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { TextInput, TextInputProps } from 'react-native';

export default function TextArea({
  isSheetInput = false,
  ...props
}: { isSheetInput?: boolean } & TextInputProps) {
  const hasTextSize = props.className?.match(/text-(xs|sm|md|base|lg|xl|2xl)/);

  const commonClassName =
    'min-h-[80px] w-full rounded-2xl border border-border bg-card px-5 pt-4 pb-6 font-bold leading-[20px] tracking-tightest text-text placeholder:text-inactive-text';

  return isSheetInput ? (
    <BottomSheetTextInput
      multiline
      placeholder="내용을 입력해주세요"
      textAlignVertical="top"
      allowFontScaling
      autoFocus={false}
      maxLength={100}
      {...props}
      className={`${commonClassName} ${hasTextSize ? props.className : `${props.className ?? ''}`}`}
    />
  ) : (
    <TextInput
      multiline
      placeholder="내용을 입력해주세요"
      textAlignVertical="top"
      allowFontScaling
      autoFocus={false}
      maxLength={50}
      {...props}
      className={`${commonClassName} ${hasTextSize ? props.className : `${props.className ?? ''}`}`}
    />
  );
}
