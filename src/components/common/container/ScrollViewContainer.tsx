import { ScrollView, ScrollViewProps } from 'react-native';

export default function ScrollViewContainer({ ...props }: ScrollViewProps) {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="never"
      showsVerticalScrollIndicator={false}
      automaticallyAdjustContentInsets={false}
      automaticallyAdjustKeyboardInsets={false}
      contentContainerClassName={`px-6 pb-32 gap-y-20 ${props.contentContainerClassName}`}
    >
      {props.children}
    </ScrollView>
  );
}
