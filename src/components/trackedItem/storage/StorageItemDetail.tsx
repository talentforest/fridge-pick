import { IconName } from '@/components/common/ui/Icon';
import { View } from 'react-native';
import SectionTitle from '@/components/common/header/SectionTitle';
import Text from '@/components/common/ui/Text';
import StorageItemDetailCard from '@/components/trackedItem/StorageItemDetailCard';
import QuickActionBtnList from '@/components/trackedItem/storage/QuickActionBtnList';
import AvailableFoodList from '@/components/trackedItem/storage/AvailableFoodList';
import SectionContainer from '@/components/common/container/SectionContainer';
import { EnrichedStorageItem } from '@/types/storage';

type StorageItemDetailProps = {
  storageItem: EnrichedStorageItem;
  onNavigatePress?: () => void;
  toggleEditPress?: () => void;
};

export type QuickAction = {
  id: 'consume' | 'discard' | 'freeze' | 'extendExpiration';
  title: string;
  icon: IconName;
  color: 'green' | 'red' | 'blue' | 'yellow';
  onPress: () => void;
};

export default function StorageItemDetail({
  storageItem,
  toggleEditPress,
}: StorageItemDetailProps) {
  if (!storageItem) return null;

  return (
    <View className="gap-y-8">
      <StorageItemDetailCard storageItem={storageItem} />

      <SectionContainer>
        <View className="flex-row items-end gap-x-1">
          <SectionTitle icon="Zap" type="sub" title="빠른관리">
            <Text className="!text-[13px] text-neutral-5">
              식재료 상태를 빠르게 변경해보세요
            </Text>
          </SectionTitle>
        </View>

        <QuickActionBtnList
          storageItemId={storageItem.id}
          toggleEditPress={toggleEditPress}
        />
      </SectionContainer>

      <AvailableFoodList type="accordion" storageItem={storageItem} />
    </View>
  );
}
