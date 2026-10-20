import { Pressable, View } from 'react-native';
import { iosShadowStyle } from '@/constants';
import ConfigToast, { ToastConfigParams } from 'react-native-toast-message';
import Text from '@/components/common/ui/Text';
import Icon from '@/components/common/ui/Icon';

export type ToastBgColor = 'neutral' | 'blue' | 'amber' | 'red';

const getContainerCommonClassName = ({
  bgColor = 'neutral',
}: {
  bgColor: ToastBgColor;
}) => {
  const color = {
    neutral: 'bg-neutral-9',
    blue: 'bg-blue-7',
    red: 'bg-red-7',
    amber: 'bg-amber-7',
  };
  return `max-w-[80%] rounded-2xl px-6 py-5 ${color[bgColor]}`;
};

const toastConfig = {
  normal: ({
    text1,
    props: { bgColor },
  }: ToastConfigParams<{ bgColor: ToastBgColor }>) => (
    <View style={iosShadowStyle} className={getContainerCommonClassName({ bgColor })}>
      <Text className="font-extrabold leading-6 !text-neutral-1">{text1}</Text>
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
      <Text className="font-extrabold leading-6 !text-neutral-1">{text1}</Text>

      <Pressable onPress={onUndo} className="flex-row items-center gap-x-0.5 px-2 py-3">
        <Icon name="RotateCcw" size={12} color="amber" strokeWidth={3} />
        <Text className="font-extrabold text-sm text-amber-3">되돌리기</Text>
      </Pressable>
    </View>
  ),
};

export default function Toast() {
  return (
    <ConfigToast
      position="bottom"
      bottomOffset={140}
      visibilityTime={2000}
      config={toastConfig}
    />
  );
}
