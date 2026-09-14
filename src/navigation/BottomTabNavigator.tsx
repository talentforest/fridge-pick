import FoodScreen from '@/screens/food/FoodScreen';
import HomeScreen from '@/screens/HomeScreen';
import ShoppingListScreen from '@/screens/shoppingList/ShoppingListScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Appearance, View } from 'react-native';

import type {
  BottomTabBarProps,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import Icon from '@/components/common/ui/Icon';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Text from '@/components/common/ui/Text';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const colorScheme = Appearance.getColorScheme() ?? 'light';

  return (
    <Tab.Navigator
      key={colorScheme}
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarStyle: { backgroundColor: 'transparent' },
        tabBarBackground: () => <View className="flex-1 bg-bg" />,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="ShoppingListScreen"
        component={ShoppingListScreen}
        options={{
          headerShown: false,
          tabBarLabel: '장보기',
          tabBarIcon: ({ focused, size }) => TabIcon({ name: '장보기', focused, size }),
        }}
      />

      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: '홈',
          tabBarIcon: ({ focused, size }) => TabIcon({ name: '홈', focused, size }),
        }}
      />

      <Tab.Screen
        name="FoodScreen"
        component={FoodScreen}
        options={{
          headerShown: false,
          tabBarLabel: '식사',
          tabBarIcon: ({ focused, size }) => TabIcon({ name: '식사', focused, size }),
        }}
      />
    </Tab.Navigator>
  );
}

function TabIcon({
  name,
  size,
  focused,
}: {
  name: '홈' | '장보기' | '식사';
  focused: boolean;
  size: number;
}) {
  const tabIconList = {
    홈: 'House' as const,
    장보기: 'ShoppingBasket' as const,
    식사: 'HandPlatter' as const,
  };

  return (
    <Icon name={tabIconList[name]} size={size} color={focused ? 'text' : 'inactive'} />
  );
}

function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{ paddingBottom: insets.bottom }}
      className="flex-row border-t border-border bg-bg px-5"
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
            className="flex-1 items-center justify-center pt-4"
          >
            <View className="items-center gap-y-2">
              {/* 아이콘 */}
              {options.tabBarIcon?.({
                focused: isFocused,
                color: '',
                size: 18,
              })}

              {/* 라벨 */}
              <Text
                className={`!text-[11px] ${isFocused ? 'font-extrabold text-text' : 'text-inactive-text'}`}
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
