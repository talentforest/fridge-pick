import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import ScrollViewContainer from '@/components/common/container/ScrollViewContainer';
import CautionIngredientList from '@/components/home/CautionIngredientList';
import HomeHeader from '@/components/home/HomeHeader';
import RecommendedMeal from '@/components/home/RecommendedMeal';
import SpaceGrid from '@/components/home/SpaceGrid';
import TodayMeal from '@/components/home/TodayMeal';
import { View } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaViewContainer edges={['top']}>
      <ScrollViewContainer>
        <View>
          <HomeHeader />
          <SpaceGrid />
        </View>

        <CautionIngredientList />

        <TodayMeal />

        <RecommendedMeal />
      </ScrollViewContainer>
    </SafeAreaViewContainer>
  );
}
