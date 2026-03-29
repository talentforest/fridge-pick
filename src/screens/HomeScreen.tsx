import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import ScrollViewContainer from '@/components/common/container/ScrollViewContainer';
import ExpiringIngredients from '@/components/home/ExpiringIngredients';
import HomeHeader from '@/components/home/HomeHeader';
import RecommendedDish from '@/components/home/RecommendedDish';
import SpaceGrid from '@/components/home/SpaceGrid';
import TodayDish from '@/components/home/TodayDish';
import { View } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaViewContainer edges={['top']}>
      <ScrollViewContainer>
        <View>
          <HomeHeader />
          <SpaceGrid />
        </View>

        <View>
          <ExpiringIngredients />
        </View>

        <View>
          <TodayDish />
        </View>

        <View>
          <RecommendedDish />
        </View>
      </ScrollViewContainer>
    </SafeAreaViewContainer>
  );
}
