import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import ScreenHeader from '@/components/common/header/ScreenHeader';
import { View } from 'react-native';

export default function AllFoodListScreen() {
  return (
    <SafeAreaViewContainer edges={['top', 'bottom']}>
      <ScreenHeader title="모든 메뉴" />
      <View></View>
    </SafeAreaViewContainer>
  );
}
