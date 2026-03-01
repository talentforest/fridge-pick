import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import ExpiringIngredients from '@/components/home/ExpiringIngredients';
import HomeHeader from '@/components/home/HomeHeader';
import RecommendedCookingMenu from '@/components/home/RecommendedCookingMenu';
import SpaceGrid from '@/components/home/SpaceGrid';
import TodayCookingMenu from '@/components/home/TodayCookingMenu';
import { ScrollView, View } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaViewContainer>
      <ScrollView
        contentContainerClassName="gap-y-20 pb-32"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View className="px-6">
          <HomeHeader />

          <SpaceGrid />
        </View>

        <ExpiringIngredients />

        <View className="gap-y-20 px-6">
          <TodayCookingMenu />

          <RecommendedCookingMenu />
        </View>
      </ScrollView>
    </SafeAreaViewContainer>
  );
}
