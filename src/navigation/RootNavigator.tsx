import BottomTabNavigator from '@/navigation/BottomTabNavigator';
import AllFoodListScreen from '@/screens/food/AllFoodListScreen';
import MyPickScreen from '@/screens/MyPickScreen';
import OnboardingIngredientScreen from '@/screens/onboarding/OnboardingIngredientScreen';
import OnboardingIntroScreen from '@/screens/onboarding/OnboardingIntroScreen';
import OnboardingResultScreen from '@/screens/onboarding/OnboardingResultScreen';
import AddShoppingListScreen from '@/screens/shoppingList/AddShoppingListScreen';
import AddStorageItemScreen from '@/screens/storage/AddStorageItemScreen';
import StorageDetailScreen from '@/screens/storage/StorageDetailScreen';

import { colorTokens, theme } from '@/theme/color';
import { RootStackParamList } from '@/types/RootStackParamList';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Appearance, View } from 'react-native';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const colorScheme = Appearance.getColorScheme() ?? 'light';

  // const isLoggedIn = true; => LoginScreen
  const isOnboardingCompleted = false;

  const initialRouteName: keyof RootStackParamList = !isOnboardingCompleted
    ? 'OnboardingIntroScreen'
    : 'Main';

  return (
    <View style={[theme[colorScheme]]} className={`flex-1 bg-bg`}>
      <NavigationContainer
        theme={{
          ...DefaultTheme,
          colors: {
            ...DefaultTheme.colors,
            background: colorTokens[colorScheme].bg,
          },
        }}
      >
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName={initialRouteName}
        >
          {/* 온보딩 앱 설명 화면 */}
          <Stack.Screen name="OnboardingIntroScreen" component={OnboardingIntroScreen} />

          {/* 온보딩 보유 식재료 선택화면 */}
          <Stack.Screen
            name="OnboardingResultScreen"
            component={OnboardingResultScreen}
          />
          <Stack.Screen
            name="OnboardingIngredientScreen"
            component={OnboardingIngredientScreen}
          />

          <Stack.Screen name="Main" component={BottomTabNavigator} />

          {/* 디테일페이지 */}
          <Stack.Screen name="StorageDetailScreen" component={StorageDetailScreen} />
          <Stack.Screen name="AddShoppingListScreen" component={AddShoppingListScreen} />
          <Stack.Screen name="AddStorageItemScreen" component={AddStorageItemScreen} />
          <Stack.Screen name="MyPickScreen" component={MyPickScreen} />
          <Stack.Screen name="AllFoodListScreen" component={AllFoodListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
