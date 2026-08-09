import { Pressable, View } from 'react-native';
import { iosShadowStyle } from '@/constants';
import ConfigToast, { ToastConfigParams } from 'react-native-toast-message';
import Text from '@/components/common/ui/Text';
import Icon from '@/components/common/ui/Icon';

export type ToastBgColor = 'blue' | 'yellow' | 'red';

const getContainerCommonClassName = ({ bgColor = 'blue' }: { bgColor: ToastBgColor }) => {
  const color = {
    blue: 'bg-blue-9',
    red: 'bg-red-9',
    yellow: 'bg-yellow-9',
  };
  return `max-w-[80%] rounded-2xl px-6 py-5 ${color[bgColor]}`;
};

const toastConfig = {
  normal: ({
    text1,
    props: { bgColor },
  }: ToastConfigParams<{ bgColor: ToastBgColor }>) => (
    <View style={iosShadowStyle} className={getContainerCommonClassName({ bgColor })}>
      <Text className="!text-neutral-1">{text1}</Text>
    </View>
  ),

  undo: ({
    text1,
    props: { bgColor, onUndo },
  }: ToastConfigParams<{ bgColor: ToastBgColor; onUndo: () => void }>) => (
    <View
      style={iosShadowStyle}
      className={`${getContainerCommonClassName({ bgColor })} items-center !pb-3`}
    >
      <Text className="!text-neutral-1">{text1}</Text>

      <Pressable onPress={onUndo} className="flex-row items-center gap-x-0.5 px-2 py-3">
        <Icon name="RotateCcw" size={12} color="lightYellow" strokeWidth={3} />
        <Text className="font-extrabold !text-[12px] text-yellow-3">되돌리기</Text>
      </Pressable>
    </View>
  ),
};

export default function Toast() {
  return (
    <ConfigToast
      position="bottom"
      bottomOffset={100}
      visibilityTime={2000}
      config={toastConfig}
    />
  );
}
