import { View, ViewProps } from 'react-native';

interface CardProps {
  bgColor?: 'bg-white' | 'bg-indigo-100';
}

export default function Card({
  bgColor = 'bg-white',
  ...props
}: CardProps & ViewProps) {
  return (
    <View
      {...props}
      className={`rounded-2xl border border-border p-4 ${props.className} ${bgColor}`}
    >
      {props.children}
    </View>
  );
}
