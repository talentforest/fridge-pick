import BottomTabNavigator from '@/navigation/BottomTabNavigator';
import FavoritesScreen from '@/screens/FavoritesScreen';
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
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Main" component={BottomTabNavigator} />

          <Stack.Screen name="StorageDetailScreen" component={StorageDetailScreen} />
          <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} />
          <Stack.Screen name="AddShoppingListScreen" component={AddShoppingListScreen} />
          <Stack.Screen name="AddStorageItemScreen" component={AddStorageItemScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
