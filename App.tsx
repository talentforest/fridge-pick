import RootNavigator from '@/navigation/RootNavigator';
import Toast from '@/components/common/Toast';
import { OverlayContainer } from '@/components/common/container/OverlayContainer';

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';

import { View } from 'react-native';
import { useEffect, useState } from 'react';

import { theme } from '@/theme/color';
import { useAppTheme } from '@/hooks/common/useAppTheme';

import './global.css';
import CustomSplashScreen from '@/screens/CustomSplashScreen';

SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 300,
  fade: true,
});

export default function App() {
  const { colorScheme } = useAppTheme();

  const [fontLoaded, fontError] = useFonts({
    NanumSquareNeoExtraBold: require('./assets/fonts/NanumSquareNeoExtraBold.ttf'),
    NanumSquareNeoBold: require('./assets/fonts/NanumSquareNeoBold.ttf'),
    NanumSquareNeoRegular: require('./assets/fonts/NanumSquareNeoRegular.ttf'),
    NanumSquareNeoHeavy: require('./assets/fonts/NanumSquareNeoHeavy.ttf'),
  });

  const [isAppReady, setIsAppReady] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  // 앱 초기화
  useEffect(() => {
    async function prepare() {
      try {
        // Firebase Auth 초기화 등
      } finally {
        setIsAppReady(true);
      }
    }

    prepare();
  }, []);

  const isReady = (fontLoaded || !!fontError) && isAppReady;

  // 커스텀 스플래시 표시 시간
  useEffect(() => {
    if (!isReady) return;

    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isReady]);

  // 초기화 전에는 네이티브 스플래시 유지
  if (!isReady) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <View
          style={[theme[colorScheme], { flex: 1 }]}
          onLayout={() => {
            SplashScreen.hideAsync();
          }}
        >
          {showSplash ? (
            <CustomSplashScreen />
          ) : (
            <>
              <BottomSheetModalProvider>
                <OverlayContainer>
                  <RootNavigator />
                  <StatusBar style="auto" />
                </OverlayContainer>

                <Toast />
              </BottomSheetModalProvider>
            </>
          )}
        </View>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
