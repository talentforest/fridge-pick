import { KeyboardAvoidingView, KeyboardAvoidingViewProps, Platform } from 'react-native';

export default function KeyboardAvoidingViewContainer({
  ...props
}: KeyboardAvoidingViewProps) {
  return (
    <KeyboardAvoidingView
      {...props}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      {props.children}
    </KeyboardAvoidingView>
  );
}
