import { View, ViewProps } from 'react-native';

interface CardProps {
  bgColor?: 'bg-card' | 'bg-indigo-100';
}

export default function Card({ bgColor = 'bg-card', ...props }: CardProps & ViewProps) {
  return (
    <View
      {...props}
      // style={{
      //   shadowColor: '#aaa',
      //   shadowOpacity: 0.2,
      //   shadowOffset: { width: 0, height: 0 },
      //   shadowRadius: 5,
      // }}
      className={`rounded-2xl border border-border p-4 ${props.className} ${bgColor}`}
    >
      {props.children}
    </View>
  );
}
