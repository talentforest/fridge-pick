import RootNavigator from '@/navigation/RootNavigator';
import { SheetProvider } from '@/provider/SheetProvider';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <SheetProvider>
          <RootNavigator />
          <StatusBar style="auto" />
        </SheetProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
