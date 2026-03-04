import { Text as RNText, TextProps } from 'react-native';

export default function Text({ ...props }: TextProps) {
  return (
    <RNText
      {...props}
      className={`font-bold text-base tracking-tightest ${props.className}`}
    />
  );
}
