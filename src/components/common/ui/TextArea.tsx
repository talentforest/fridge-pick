import { TextInput, TextInputProps } from 'react-native';

export default function TextArea({ ...props }: TextInputProps) {
  return (
    <TextInput
      multiline
      placeholder="내용 입력"
      textAlignVertical="top"
      allowFontScaling
      className={`h-28 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 pb-10 font-bold text-base leading-7 tracking-tightest placeholder:text-neutral-400`}
      {...props}
    />
  );
}
