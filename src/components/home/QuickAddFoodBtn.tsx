import Icon from '@/components/common/ui/Icon';
import QuickAddStorageItemSheet from '@/components/trackedItem/storage/QuickAddStorageItemSheet';
import { useOverlay } from '@/hooks';

export default function QuickAddFoodBtn() {
  const { openSheet } = useOverlay();

  const onPlusPress = () => {
    openSheet({
      enableDynamicSizing: false,
      snapPoints: [520],
      keyboardBehavior: 'extend',
      render: () => <QuickAddStorageItemSheet />,
    });
  };
  return (
    <Icon
      name="Plus"
      hasBgColor
      strokeWidth={2.8}
      color="lightestGray"
      onPress={onPlusPress}
      size={28}
      className="absolute bottom-6 right-6 !rounded-full !bg-blue-7 p-4"
    />
  );
}
