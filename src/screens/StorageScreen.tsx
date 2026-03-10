import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import SectionTitle from '@/components/common/SectionTitle';
import { View } from 'react-native';

export default function StorageScreen() {
  return (
    <SafeAreaViewContainer>
      <View className="flex-1 justify-between gap-y-3 px-6 py-4">
        <SectionTitle title="식재료 관리" />
      </View>
    </SafeAreaViewContainer>
  );
}
