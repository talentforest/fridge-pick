import DishScreen from '@/screens/DishScreen';
import HomeScreen from '@/screens/HomeScreen';
import ShoppingListScreen from '@/screens/shoppingList/ShoppingListScreen';
import StorageScreen from '@/screens/StorageScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  CookingPot,
  Grid2X2Plus,
  House,
  ShoppingBasket,
} from 'lucide-react-native';
import { Appearance } from 'react-native';

const Tab = createBottomTabNavigator();

const tabList = {
  홈: (color: string) => <House size={20} color={color} />,
  식재료관리: (color: string) => <Grid2X2Plus size={20} color={color} />,
  장보기목록: (color: string) => (
    <ShoppingBasket size={20} color={color} strokeWidth={1.8} />
  ),
  요리: (color: string) => (
    <CookingPot size={20} color={color} strokeWidth={1.8} />
  ),
};

export default function BottomTabNavigator() {
  const colorScheme = Appearance.getColorScheme() ?? 'light';

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colorScheme === 'dark' ? '#252525' : '#f0f0f0',
        },
      }}
    >
      <Tab.Screen
        name="홈"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => tabList['홈'](color),
          tabBarActiveTintColor: '#111',
        }}
      />
      <Tab.Screen
        name="식재료관리"
        component={StorageScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => tabList['식재료관리'](color),
          tabBarActiveTintColor: '#111',
        }}
      />
      <Tab.Screen
        name="ShoppingList"
        component={ShoppingListScreen}
        options={{
          title: '장보기목록',
          headerShown: false,
          tabBarIcon: ({ color }) => tabList['장보기목록'](color),
          tabBarActiveTintColor: '#111',
        }}
      />
      <Tab.Screen
        name="요리"
        component={DishScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => tabList['요리'](color),
          tabBarActiveTintColor: '#111',
        }}
      />
    </Tab.Navigator>
  );
}
