import SafeAreaViewContainer from '@/components/common/container/SafeAreaViewContainer';
import Text from '@/components/common/ui/Text';
import { RootStackParamList } from '@/types/RootStackParamList';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, View } from 'react-native';

type HomeNavProp = NativeStackNavigationProp<RootStackParamList, 'Detail'>;

export default function DetailScreen() {
  const navigation = useNavigation<HomeNavProp>();

  return (
    <SafeAreaViewContainer>
      <View className="flex-1 items-center gap-y-3 bg-bg px-6 pt-[18%]">
        <Text>DetailScreen</Text>
        <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
      </View>
    </SafeAreaViewContainer>
  );
}
