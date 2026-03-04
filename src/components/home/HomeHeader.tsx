import PressableIcon from '@/components/common/PressableIcon';
import Text from '@/components/common/ui/Text';
import { View } from 'react-native';

export default function HomeHeader() {
  return (
    <View className="mx-2 mb-6 flex-row items-center justify-between">
      <Text className="font-extrabold !text-2xl italic !text-indigo-500">
        프리지픽
      </Text>
      <View className="flex-row gap-4">
        <PressableIcon icon="Bell" />
      </View>
    </View>
  );
}
