import { Text as RNText, TextProps } from 'react-native';

export default function Text({ ...props }: TextProps) {
  const hasTextSize = props.className?.match(/text-(xs|sm|md|base|lg|xl|2xl)/);

  const hasTextColor = props.className?.match(
    /text-(bg|card|text|border|inactive|red|blue|indigo|neutral)/,
  );

  return (
    <RNText
      {...props}
      className={`font-bold tracking-tightest ${hasTextColor ? hasTextColor[0] : 'text-text'} ${
        hasTextSize ? props.className : `text-md ${props.className ?? ''}`
      }`}
    />
  );
}
