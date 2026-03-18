import PressableIcon from '@/components/common/PressableIcon';
import Text from '@/components/common/ui/Text';
import { useOverlay } from '@/provider/OverlayProvider';
import { View } from 'react-native';

interface ModalHeaderProps {
  title: string;
  isDatePicker?: boolean;
}

export default function ModalHeader({ title, isDatePicker }: ModalHeaderProps) {
  const { closeModal, closeDatePicker } = useOverlay();

  return (
    <View className="flex-row items-center justify-between">
      <Text className="text-xl">{title}</Text>
      <PressableIcon
        icon="X"
        iconSize={26}
        className="p-2"
        onPress={isDatePicker ? closeDatePicker : closeModal}
      />
    </View>
  );
}
