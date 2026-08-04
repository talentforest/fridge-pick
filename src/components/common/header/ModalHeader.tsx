import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import { useOverlay } from '@/hooks';
import { View } from 'react-native';

interface ModalHeaderProps {
  title: string;
  isDatePicker?: boolean;
  hasX?: boolean;
}

export default function ModalHeader({
  title,
  isDatePicker,
  hasX = false,
}: ModalHeaderProps) {
  const { closeModal, closeDatePicker } = useOverlay();

  return (
    <View className="flex-row items-center justify-between">
      <Text className="text-xl">{title}</Text>

      {hasX && (
        <Icon
          name="X"
          size={24}
          className="p-1"
          onPress={isDatePicker ? closeDatePicker : closeModal}
        />
      )}
    </View>
  );
}
