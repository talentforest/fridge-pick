import { ScrollView, ScrollViewProps } from 'react-native';

export default function ScrollViewContainer({ ...props }: ScrollViewProps) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerClassName={`px-6 pb-32 gap-y-20 ${props.contentContainerClassName}`}
    >
      {props.children}
    </ScrollView>
  );
}
