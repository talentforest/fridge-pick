import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import ScrollViewContainer from '@/components/common/container/ScrollViewContainer';
import CautionStorageItemList from '@/components/home/CautionStorageItemList';
import HomeHeader from '@/components/home/HomeHeader';
import MyPickList from '@/components/home/MyPickList';
import RecommendedMenu from '@/components/home/RecommendedMenu';
import SpaceGrid from '@/components/home/SpaceGrid';
import TodayMenu from '@/components/home/TodayMenu';
import CautionStorageItemSheet from '@/components/trackedItem/storage/CautionStorageItemSheet';
import { useOverlay } from '@/hooks';
import { StackNavProp } from '@/types/RootStackParamList';
import { StorageItemWithExpiration } from '@/utils';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

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

  return (
    <SafeAreaViewContainer edges={['top']}>
      <ScrollViewContainer>
        <View>
          <HomeHeader />
          <SpaceGrid />
        </View>

        <MyPickList />

        <CautionStorageItemList
          type="expiredSoon"
          onItemPress={onCautionStorageItemPress}
        />

        <TodayMenu hasHeader />

        <RecommendedMenu />
      </ScrollViewContainer>
    </SafeAreaViewContainer>
  );
}
