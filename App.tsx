import RootNavigator from '@/navigation/RootNavigator';
import Toast from '@/components/common/Toast';
import { OverlayContainer } from '@/components/common/container/OverlayContainer';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import { useColorScheme, View } from 'react-native';
import { theme } from '@/theme/color';
import './global.css';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

// App 컴포넌트가 실행되기 전에 자동으로 사라지는 것을 방지
SplashScreen.preventAutoHideAsync();

// 선택 사항: 스플래시가 사라질 때 페이드
SplashScreen.setOptions({
  duration: 500,
  fade: true,
});

export default function App() {
  const scheme = useColorScheme();

  const [fontLoaded, fontError] = useFonts({
    NanumSquareNeoExtraBold: require('./assets/fonts/NanumSquareNeoExtraBold.ttf'),
    NanumSquareNeoBold: require('./assets/fonts/NanumSquareNeoBold.ttf'),
    NanumSquareNeoRegular: require('./assets/fonts/NanumSquareNeoRegular.ttf'),
    NanumSquareNeoHeavy: require('./assets/fonts/NanumSquareNeoHeavy.ttf'),
  });

  useEffect(() => {
    // 폰트 로딩에 성공하거나 실패하면 앱을 표시
    if (fontLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontLoaded, fontError]);

  // 이 동안에는 네이티브 스플래시가 계속 표시됨
  if (!fontLoaded && !fontError) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <View style={theme[scheme ?? 'light']} className="flex-1">
          <BottomSheetModalProvider>
            <OverlayContainer>
              <RootNavigator />
              <StatusBar style="auto" />
            </OverlayContainer>
          </BottomSheetModalProvider>

          {/* 토스트 */}
          <Toast />
        </View>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
