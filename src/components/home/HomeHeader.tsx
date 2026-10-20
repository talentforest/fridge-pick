import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import { useAppTheme } from '@/hooks/common/useAppTheme';
import { View } from 'react-native';

export default function HomeHeader() {
  const { changeMode } = useAppTheme();

  const iconCommonClassName = 'p-1';

  return (
    <View className="h-16 flex-row items-center justify-between pl-2">
      <Text className="font-heavy text-xl">
        Fridge<Text className="font-heavy text-xl !text-primary">Pick</Text>
      </Text>

      <View className="flex-row gap-x-2.5">
        {/* 알림 버튼 */}
        <Icon name="Bell" size={22} className={iconCommonClassName} />
        {/* 다크모드 버튼 */}
        <Icon
          name="SunMoon"
          size={25}
          className={iconCommonClassName}
          color="text"
          onPress={changeMode}
        />
      </View>
    </View>
  );
}
