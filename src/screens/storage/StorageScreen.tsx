import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import SectionTitle from '@/components/common/header/SectionTitle';

export default function StorageScreen() {
  return (
    <SafeAreaViewContainer edges={['top']}>
      <SectionTitle title="식재료 관리" />
    </SafeAreaViewContainer>
  );
}
