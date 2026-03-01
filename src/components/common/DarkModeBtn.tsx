import { Appearance, Button, View } from 'react-native';

export default function DarkModeBtn() {
  return (
    <View className="flex-row">
      <Button
        title="darkMode"
        onPress={() => Appearance.setColorScheme('dark')}
      />
      <Button
        title="lightMode"
        onPress={() => Appearance.setColorScheme('light')}
      />
    </View>
  );
}
