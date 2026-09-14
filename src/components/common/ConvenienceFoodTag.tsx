import { useOverlay } from '@/hooks';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import ConvenienceInfoModal from '@/components/trackedItem/storage/ConvenienceInfoModal';

export default function ConvenienceFoodTag() {
  const { openModal } = useOverlay();

  const showInfo = () => {
    openModal({ children: <ConvenienceInfoModal /> });
  };

  return (
    <TouchableOpacity onPress={showInfo} className="flex-row items-center">
      <Icon name="Zap" size={12} color="yellow" hasBgColor className="!p-1" />
      <Text className="text-sm text-yellow-7">간편식</Text>
    </TouchableOpacity>
  );
}
