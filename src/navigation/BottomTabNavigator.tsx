import CookingScreen from '@/screens/CookingScreen';
import HomeScreen from '@/screens/HomeScreen';
import ManagingFoodScreen from '@/screens/ManagingFoodScreen';
import ShoppingListScreen from '@/screens/ShoppingListScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  CookingPot,
  House,
  Refrigerator,
  ShoppingBasket,
} from 'lucide-react-native';
import { Appearance } from 'react-native';

const Tab = createBottomTabNavigator();

const tabList = {
  홈: (color: string) => <House size={20} color={color} />,
  식재료관리: (color: string) => <Refrigerator size={20} color={color} />,
  장보기목록: (color: string) => <ShoppingBasket size={20} color={color} />,
  요리: (color: string) => <CookingPot size={20} color={color} />,
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
        component={ManagingFoodScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <Refrigerator size={20} color={color} />,
          tabBarActiveTintColor: '#111',
        }}
      />
      <Tab.Screen
        name="장보기목록"
        component={ShoppingListScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <ShoppingBasket size={20} color={color} />,
          tabBarActiveTintColor: '#111',
        }}
      />
      <Tab.Screen
        name="요리"
        component={CookingScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <CookingPot size={20} color={color} />,
          tabBarActiveTintColor: '#111',
        }}
      />
    </Tab.Navigator>
  );
}
