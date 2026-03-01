import RootNavigator from '@/navigation/RootNavigator';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './global.css';

export default function App() {
  const [fontLoaded] = useFonts({
    NanumSquareNeoExtraBold: require('./assets/fonts/NanumSquareNeoExtraBold.ttf'),
    NanumSquareNeoBold: require('./assets/fonts/NanumSquareNeoBold.ttf'),
    NanumSquareNeoRegular: require('./assets/fonts/NanumSquareNeoRegular.ttf'),
  });

  if (!fontLoaded) return null;

  return (
    <SafeAreaProvider>
      <RootNavigator />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
