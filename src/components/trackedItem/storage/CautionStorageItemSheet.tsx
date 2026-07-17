import { IconName } from '@/components/common/ui/Icon';
import { View } from 'react-native';
import { useAtomValue } from 'jotai';
import { findStorageItemById } from '@/atom/storageAtom';
import SectionTitle from '@/components/common/header/SectionTitle';
import Text from '@/components/common/ui/Text';
import SelectableItemDetailCard from '@/components/selectableItem/SelectableItemDetailCard';
import QuickActionBtnList from '@/components/trackedItem/storage/QuickActionBtnList';
import AvailableMenuAccordion from '@/components/trackedItem/storage/AvailableMenuAccordion';

type CautionStorageItemSheetProps = {
  onNavigatePress: () => void;
  storageItemId: string;
};

export type QuickAction = {
  id: 'consume' | 'discard' | 'freeze' | 'extendExpiration';
  title: string;
  icon: IconName;
  color: 'green' | 'red' | 'blue' | 'yellow';
  onPress: () => void;
};

export default function CautionStorageItemSheet({
  onNavigatePress,
  storageItemId,
}: CautionStorageItemSheetProps) {
  const cautionStorageItem = useAtomValue(findStorageItemById(storageItemId));

  if (!cautionStorageItem) return null;

  return (
    <View className="gap-y-8 py-2">
      <SelectableItemDetailCard
        storageItem={cautionStorageItem}
        onNavigatePress={onNavigatePress}
      />

      <View className="gap-y-3">
        <View className="flex-row items-end gap-x-1">
          <SectionTitle icon="Zap" type="sub" title="빠른관리" />
          <Text className="!text-[13px] text-neutral-5">
            식재료 상태를 빠르게 변경해보세요
          </Text>
        </View>

        <QuickActionBtnList storageItemId={storageItemId} hasExpirationDateBtn />
      </View>

      <AvailableMenuAccordion storageItem={cautionStorageItem} />
    </View>
  );
}
