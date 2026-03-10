import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import ExpiringIngredients from '@/components/home/ExpiringIngredients';
import HomeHeader from '@/components/home/HomeHeader';
import RecommendedDish from '@/components/home/RecommendedDish';
import SpaceGrid from '@/components/home/SpaceGrid';
import TodayDish from '@/components/home/TodayDish';
import { ScrollView, View } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaViewContainer>
      <ScrollView
        contentContainerClassName="gap-y-20 mt-4 pb-32"
        showsVerticalScrollIndicator={false}
      >
        <View className="px-6">
          <HomeHeader />

          <SpaceGrid />
        </View>

        <ExpiringIngredients />

        <View className="gap-y-20">
          <View className="px-6">
            <TodayDish />
          </View>

          <RecommendedDish />
        </View>
      </ScrollView>
    </SafeAreaViewContainer>
  );
}
