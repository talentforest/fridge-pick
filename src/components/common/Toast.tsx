import { View } from 'react-native';
import ConfigToast, { ToastConfigParams } from 'react-native-toast-message';
import Text from '@/components/common/ui/Text';
import { iosShadowStyle } from '@/constants';

const toastConfig = {
  custom: ({ text1 }: ToastConfigParams<unknown>) => (
    <View className="rounded-2xl bg-neutral-9 p-1" style={iosShadowStyle}>
      <Text className="px-5 py-4 text-base leading-7 !text-neutral-1">{text1}</Text>
    </View>
  ),
};

export default function Toast() {
  return <ConfigToast config={toastConfig} />;
}
