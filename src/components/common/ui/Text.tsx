import { Text as RNText, TextProps } from 'react-native';

export default function Text({ ...props }: TextProps) {
  return (
    <RNText
      {...props}
      className={`tracking-tightest text-base font-bold text-text ${props.className}`}
    />
  );
}
