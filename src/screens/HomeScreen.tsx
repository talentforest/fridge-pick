import { useOverlay } from '@/hooks';
import { StackNavProp } from '@/types/RootStackParamList';
import { StorageItemWithExpiration } from '@/utils';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import ScrollViewContainer from '@/components/common/container/ScrollViewContainer';
import Icon from '@/components/common/ui/Icon';
import CautionStorageItemList from '@/components/home/CautionStorageItemList';
import HomeHeader from '@/components/home/HomeHeader';
import MyPickList from '@/components/home/MyPickList';
import RecommendedMenu from '@/components/home/RecommendedMenu';
import SpaceGrid from '@/components/home/SpaceGrid';
import TodayMenu from '@/components/home/TodayMenu';
import CautionStorageItemSheet from '@/components/trackedItem/storage/CautionStorageItemSheet';
import QuickAddStorageItemSheet from '@/components/trackedItem/storage/QuickAddStorageItemSheet';

export default function HomeScreen() {
  const { openSheet, closeSheet } = useOverlay();

  const navigation = useNavigation<StackNavProp>();

  const onCautionStorageItemPress = (storageItem: StorageItemWithExpiration) => {
    const id = storageItem.storageItem.storage.type;

    openSheet({
      render: () => (
        <CautionStorageItemSheet
          storageItemId={storageItem.storageItem.id}
          onNavigatePress={() => {
            closeSheet();
            navigation.navigate('StorageDetailScreen', { id });
          }}
        />
      ),
    });
  };

  const onPlusPress = () => {
    openSheet({
      enableDynamicSizing: false,
      snapPoints: [520],
      keyboardBehavior: 'extend',
      render: () => <QuickAddStorageItemSheet />,
    });
  };

  return (
    <SafeAreaViewContainer edges={['top']}>
      <ScrollViewContainer>
        <View>
          <HomeHeader />
          <SpaceGrid />
        </View>

        <MyPickList />

        {/* NOTE: 나의 픽인데 현재 보관함에 없는 것들 
        이게 장보기 추천템인가 조금 다르긴 한데 */}

        <CautionStorageItemList
          type="expiredSoon"
          onItemPress={onCautionStorageItemPress}
        />

        <TodayMenu hasHeader />

        <RecommendedMenu />
      </ScrollViewContainer>

      <Icon
        name="Plus"
        hasBgColor
        strokeWidth={2.8}
        color="lightestGray"
        onPress={onPlusPress}
        size={28}
        className="absolute bottom-6 right-6 !rounded-full !bg-blue-7 p-4"
      />
    </SafeAreaViewContainer>
  );
}
