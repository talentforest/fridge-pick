import { iosShadowStyle } from '@/constants';
import { View, ViewProps } from 'react-native';

export default function Card({ ...props }: ViewProps) {
  return (
    <View
      {...props}
      style={iosShadowStyle}
      className={`rounded-2xl border border-border bg-card px-4 pb-4 pt-4 ${props.className}`}
    >
      {props.children}
    </View>
  );
}
