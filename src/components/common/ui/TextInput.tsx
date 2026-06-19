import Icon, { IconName } from '@/components/common/ui/Icon';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { ReactNode } from 'react';
import { TextInput as RNTextInput, TextInputProps, View } from 'react-native';

export default function TextInput({
  icon,
  children,
  isSheetInput,
  ...props
}: { icon?: IconName; children?: ReactNode; isSheetInput?: boolean } & TextInputProps) {
  const inputClassName = `flex-1 py-5 font-bold text-base tracking-tightest text-text placeholder:text-inactive-text ${children ? '' : 'mr-4'}`;

  return (
    <View
      className={`relative w-full flex-row items-center rounded-xl border border-border bg-card pl-4 ${props.className}`}
    >
      {icon && <Icon name="Search" size={18} className="mr-2" />}

      {isSheetInput ? (
        <BottomSheetTextInput
          allowFontScaling
          maxLength={40}
          {...props}
          className={inputClassName}
        />
      ) : (
        <RNTextInput
          allowFontScaling
          maxLength={40}
          {...props}
          className={inputClassName}
        />
      )}

      {children}
    </View>
  );
}
