import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import { storageObj } from '@/constants';
import { StorageTypeId } from '@/types/storage';

interface NavigateToStorageBtnProps {
  storageType: StorageTypeId;
  onPress: (storageType: StorageTypeId) => void;
}

export default function NavigateToStorageBtn({
  storageType,
  onPress,
}: NavigateToStorageBtnProps) {
  return (
    <TouchableOpacity
      onPress={() => onPress(storageType)}
      className="ml-2 flex-row items-center gap-x-1 rounded-full bg-blue-1 px-2 py-2"
    >
      <Text className="text-sm text-blue-7">
        {storageObj[storageType].label}에 있어요
      </Text>

      <Icon name="ExternalLink" size={14} color="blue" />
    </TouchableOpacity>
  );
}
