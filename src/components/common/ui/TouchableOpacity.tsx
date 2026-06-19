import {
  TouchableOpacity as RNTouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

export default function TouchableOpacity({ ...props }: TouchableOpacityProps) {
  return <RNTouchableOpacity {...props} activeOpacity={0.8} />;
}
