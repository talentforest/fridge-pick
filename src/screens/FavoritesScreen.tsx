import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import ScreenHeader from '@/components/common/ScreenHeader';

export default function FavoritesScreen() {
  return (
    <SafeAreaViewContainer edges={['top', 'bottom']}>
      <ScreenHeader title="자주먹는 식재료" />
    </SafeAreaViewContainer>
  );
}
