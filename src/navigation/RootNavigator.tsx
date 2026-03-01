import { theme } from '@/constants/colors';
import BottomTabNavigator from '@/navigation/BottomTabNavigator';
import DetailScreen from '@/screens/DetailScreen';
import { RootStackParamList } from '@/types/RootStackParamList';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Appearance, View } from 'react-native';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const colorScheme = Appearance.getColorScheme() ?? 'light';

  return (
    <View style={[theme[colorScheme]]} className={`flex-1 bg-bg`}>
      <NavigationContainer
        theme={{
          ...DefaultTheme,
          colors: { ...DefaultTheme.colors, background: 'transparent' },
        }}
      >
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
