import { Image, View } from 'react-native';
import { useAppTheme } from '@/hooks/common/useAppTheme';
import { splash_dark, splash_light, splash_logo } from '@/constants';

const splashImages = {
  light: splash_light,
  dark: splash_dark,
};

export default function CustomSplashScreen() {
  const { colorScheme } = useAppTheme();

  return (
    <View className="flex-1 items-center justify-center border">
      <Image
        source={splashImages[colorScheme]}
        resizeMode="cover"
        className="absolute top-0 h-full w-full"
      />

      <Image
        source={splash_logo}
        style={{ width: 180, height: 68 }}
        resizeMode="contain"
      />
    </View>
  );
}
