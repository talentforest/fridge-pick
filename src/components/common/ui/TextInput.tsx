import Icon, { IconName } from '@/components/common/ui/Icon';
import { ReactNode } from 'react';
import { TextInput as RNTextInput, TextInputProps, View } from 'react-native';

export default function TextInput({
  icon,
  children,
  ...props
}: { icon?: IconName; children?: ReactNode } & TextInputProps) {
  return (
    <View
      className={`relative w-full flex-row items-center rounded-xl bg-neutral-200 pl-4 ${props.className}`}
    >
      {icon && <Icon name="Search" size={20} color="gray" className="mr-2" />}

      <RNTextInput
        allowFontScaling
        maxLength={40}
        {...props}
        className={`flex-1 py-5 font-bold text-base tracking-tightest placeholder:text-neutral-400 ${children ? '' : 'mr-4'}`}
      />

      {children}
    </View>
  );
}
