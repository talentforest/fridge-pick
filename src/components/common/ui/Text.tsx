import { colorTokens } from '@/theme/color';
import { Text as RNText, TextProps } from 'react-native';

export default function Text({ ...props }: TextProps) {
  const hasTextSize = props.className?.match(/text-(xs|sm|md|base|lg|xl|2xl)/);

  const color = Object.keys(colorTokens.light).join('|');

  const hasTextColor = props.className?.match(new RegExp(`text-(${color})`));

  return (
    <RNText
      {...props}
      className={`font-bold tracking-normal ${hasTextColor ? hasTextColor[0] : 'text-text'} ${
        hasTextSize ? props.className : `text-md ${props.className ?? ''}`
      }`}
    />
  );
}
