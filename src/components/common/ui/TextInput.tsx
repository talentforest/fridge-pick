import { TextInput as RNTextInput, TextInputProps } from 'react-native';

export default function TextInput({ ...props }: TextInputProps) {
  return (
    <RNTextInput
      allowFontScaling
      {...props}
      className={`w-full rounded-full bg-neutral-200 p-5 font-bold text-base tracking-tightest placeholder:text-neutral-400 ${props.className}`}
    />
  );
}
