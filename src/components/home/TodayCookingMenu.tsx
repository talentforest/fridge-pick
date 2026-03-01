import Card from '@/components/common/ui/Card';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import { View } from 'react-native';

export default function TodayCookingMenu() {
  return (
    <Card className="round bg-yellow-300 justify-between gap-y-5 !p-6">
      <View className="flex-row items-center gap-x-1">
        <Icon name="HandPlatter" color="yellow" />
        <Text className="text-base font-extrabold text-yellow-900">
          오늘의 선택 메뉴
        </Text>
      </View>
      <View className="flex-row gap-x-1">
        <Text className="text-lg">우삼겹파스타</Text>
      </View>
    </Card>
  );
}
