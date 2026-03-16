import PressableIcon from '@/components/common/PressableIcon';
import Text from '@/components/common/ui/Text';
import { useOverlay } from '@/provider/OverlayProvider';
import { View } from 'react-native';

interface ModalHeaderProps {
  title: string;
}

export default function ModalHeader({ title }: ModalHeaderProps) {
  const { closeModal } = useOverlay();

  return (
    <View className="mb-4 flex-row items-center justify-between">
      <Text className="text-xl">{title}</Text>
      <PressableIcon icon="X" iconSize={26} onPress={closeModal} />
    </View>
  );
}
