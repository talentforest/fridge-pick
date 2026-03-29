import { View, ViewProps } from 'react-native';

export default function ViewContentContainer({ ...props }: ViewProps) {
  return (
    <View className={`flex-1 gap-y-3 px-6 pb-4 ${props.className}`}>
      {props.children}
    </View>
  );
}
