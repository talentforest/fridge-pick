import { Pressable, View } from 'react-native';
import ConfigToast from 'react-native-toast-message';
import Text from '@/components/common/ui/Text';
import { iosShadowStyle } from '@/constants';
import Icon from '@/components/common/ui/Icon';

const toastConfig = {
  custom: ({ text1, props }: any) => (
    <View
      style={iosShadowStyle}
      className={`max-w-[80%] rounded-2xl px-6 py-5 ${props.bgColor ? '' : 'bg-blue-9'}`}
    >
      <Text className="!text-neutral-1">{text1}</Text>
    </View>
  ),
  undo: ({ text1, props }: any) => (
    <View
      style={iosShadowStyle}
      className={`max-w-[80%] flex-row items-center gap-x-3 rounded-2xl bg-blue-9 px-6 py-5 ${props.bgColor ? '' : 'bg-blue-9'}`}
    >
      <Text className="mb-1 max-w-[75%] !text-neutral-1">{text1}</Text>

      <Pressable
        onPress={props.onUndo}
        className="w-[65px] flex-row items-center gap-x-0.5 py-2"
      >
        <Icon name="RotateCcw" size={12} color="yellow" className="" />
        <Text className="!text-[13px] text-yellow-3">되돌리기</Text>
      </Pressable>
    </View>
  ),
};

export default function Toast() {
  return <ConfigToast config={toastConfig} />;
}
