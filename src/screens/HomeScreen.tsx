import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import ScrollViewContainer from '@/components/common/container/ScrollViewContainer';
import CautionStorageItemList from '@/components/home/CautionStorageItemList';
import HomeHeader from '@/components/home/HomeHeader';
import RecommendedMenu from '@/components/home/RecommendedMenu';
import SpaceGrid from '@/components/home/SpaceGrid';
import TodayMenu from '@/components/home/TodayMenu';
import { View } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaViewContainer edges={['top']}>
      <ScrollViewContainer>
        <View>
          <HomeHeader />
          <SpaceGrid />
        </View>

        <CautionStorageItemList />

        <TodayMenu hasHeader />

        <RecommendedMenu />
      </ScrollViewContainer>
    </SafeAreaViewContainer>
  );
}
