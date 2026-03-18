import Icon, { IconName } from '@/components/common/ui/Icon';
import { TextInput as RNTextInput, TextInputProps, View } from 'react-native';

export default function TextInput({
  icon,
  ...props
}: { icon?: IconName } & TextInputProps) {
  return (
    <View
      className={`w-full flex-row items-center gap-x-2 rounded-full bg-neutral-200 p-5 ${props.className}`}
    >
      {icon && <Icon name="Search" size={20} color="gray" />}
      <RNTextInput
        allowFontScaling
        {...props}
        className={`font-bold text-base tracking-tightest placeholder:text-neutral-400 `}
      />
    </View>
  );
}
