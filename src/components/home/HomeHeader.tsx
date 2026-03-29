import PressableIcon from '@/components/common/PressableIcon';
import Text from '@/components/common/ui/Text';
import { View } from 'react-native';

export default function HomeHeader() {
  const iconCommonClassName = 'p-1';

  return (
    <View className="h-16 flex-row items-center justify-between pl-2">
      <Text className="font-extrabold !text-2xl italic !text-indigo-500">프리지픽!</Text>

      <View className="flex-row gap-x-2.5">
        <PressableIcon icon="Bell" iconSize={25} className={iconCommonClassName} />
        <PressableIcon icon="Menu" iconSize={25} className={iconCommonClassName} />
      </View>
    </View>
  );
}
