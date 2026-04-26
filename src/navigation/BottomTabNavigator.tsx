import MealScreen from '@/screens/MealScreen';
import HomeScreen from '@/screens/HomeScreen';
import ShoppingListScreen from '@/screens/shoppingList/ShoppingListScreen';
import StorageScreen from '@/screens/storage/StorageScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Appearance, View, TouchableOpacity } from 'react-native';

import type {
  BottomTabBarProps,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import Icon from '@/components/common/ui/Icon';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Text from '@/components/common/ui/Text';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const colorScheme = Appearance.getColorScheme() ?? 'light';

  return (
    <Tab.Navigator
      key={colorScheme}
      screenOptions={{
        tabBarStyle: { backgroundColor: 'transparent' },
        tabBarBackground: () => <View className="flex-1 bg-bg" />,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: '홈',
          tabBarIcon: ({ focused }) => TabIcon({ name: '홈', focused }),
        }}
      />
      <Tab.Screen
        name="StorageScreen"
        component={StorageScreen}
        options={{
          headerShown: false,
          tabBarLabel: '식재료관리',
          tabBarIcon: ({ focused }) => TabIcon({ name: '식재료관리', focused }),
        }}
      />
      <Tab.Screen
        name="ShoppingListScreen"
        component={ShoppingListScreen}
        options={{
          headerShown: false,
          tabBarLabel: '장보기목록',
          tabBarIcon: ({ focused }) => TabIcon({ name: '장보기목록', focused }),
        }}
      />
      <Tab.Screen
        name="MealScreen"
        component={MealScreen}
        options={{
          headerShown: false,
          tabBarLabel: '식사',
          tabBarIcon: ({ focused }) => TabIcon({ name: '식사', focused }),
        }}
      />
    </Tab.Navigator>
  );
}

function TabIcon({
  name,
  focused,
}: {
  name: '홈' | '식재료관리' | '장보기목록' | '식사';
  focused: boolean;
}) {
  const tabIconList = {
    홈: 'House' as const,
    식재료관리: 'Grid2X2Plus' as const,
    장보기목록: 'ShoppingBasket' as const,
    식사: 'HandPlatter' as const,
  };

  return (
    <Icon name={tabIconList[name]} size={18} color={focused ? 'text' : 'inactive'} />
  );
}

function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{ paddingBottom: insets.bottom }}
      className="flex-row border-t border-border bg-bg"
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key] as {
          options: BottomTabNavigationOptions;
        };

        const label = options.tabBarLabel as string;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            activeOpacity={0.8}
            className="flex-1 items-center justify-center pt-4"
          >
            <View className="items-center gap-y-2">
              {/* 아이콘 */}
              {options.tabBarIcon?.({
                focused: isFocused,
                color: '',
                size: 20,
              })}

              {/* 라벨 */}
              <Text
                className={isFocused ? 'text-xs text-text' : 'text-xs text-inactive-text'}
              >
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
