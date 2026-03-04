import Card from '@/components/common/ui/Card';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import { View } from 'react-native';

export default function TodayDish() {
  return (
    <Card className="round justify-between gap-y-5 bg-yellow-300 !p-6">
      <View className="flex-row items-center gap-x-1">
        <Icon name="HandPlatter" color="yellow" />
        <Text className="font-extrabold text-base text-yellow-900">
          오늘의 선택 메뉴
        </Text>
      </View>
      <View className="flex-row gap-x-1">
        <Text className="text-lg">우삼겹파스타</Text>
      </View>
    </Card>
  );
}
