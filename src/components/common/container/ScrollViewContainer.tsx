import { ScrollView, ScrollViewProps } from 'react-native';

export default function ScrollViewContainer({ ...props }: ScrollViewProps) {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="never"
      showsVerticalScrollIndicator={false}
      automaticallyAdjustContentInsets={false}
      automaticallyAdjustKeyboardInsets={false}
      contentContainerClassName={`px-[20px] pb-32 gap-y-14 ${props.contentContainerClassName}`}
    >
      {props.children}
    </ScrollView>
  );
}
