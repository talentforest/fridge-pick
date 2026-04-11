import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import { Appearance, useColorScheme, View } from 'react-native';

export default function HomeHeader() {
  const scheme = useColorScheme();

  const color = scheme === 'light' ? 'dark' : 'light';

  const iconCommonClassName = 'p-1';

  return (
    <View className="h-16 flex-row items-center justify-between pl-2">
      <Text className="font-extrabold text-2xl italic !text-indigo-500">프리지픽!</Text>

      <View className="flex-row gap-x-2.5">
        {/* 알림 버튼 */}
        <Icon name="Bell" size={25} className={iconCommonClassName} color="text" />
        {/* 다크모드 버튼 */}
        <Icon
          name="SunMoon"
          size={25}
          className={iconCommonClassName}
          color="text"
          onPress={() => Appearance.setColorScheme(color)}
        />
      </View>
    </View>
  );
}
