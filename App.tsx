import RootNavigator from '@/navigation/RootNavigator';
import { OverlayContainer } from '@/components/common/container/OverlayContainer';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './global.css';
import { useColorScheme, View } from 'react-native';
import { theme } from '@/theme/color';

export default function App() {
  const scheme = useColorScheme();

  const [fontLoaded] = useFonts({
    NanumSquareNeoExtraBold: require('./assets/fonts/NanumSquareNeoExtraBold.ttf'),
    NanumSquareNeoBold: require('./assets/fonts/NanumSquareNeoBold.ttf'),
    NanumSquareNeoRegular: require('./assets/fonts/NanumSquareNeoRegular.ttf'),
  });

  if (!fontLoaded) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <View style={theme[scheme ?? 'light']} className="flex-1">
          <BottomSheetModalProvider>
            <OverlayContainer>
              <RootNavigator />
              <StatusBar style="auto" />
            </OverlayContainer>
          </BottomSheetModalProvider>
        </View>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
