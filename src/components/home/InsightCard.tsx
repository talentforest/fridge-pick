import Card from '@/components/common/ui/Card';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';

import { View } from 'react-native';

type InsightCardProps = {};

export default function InsightCard({}: InsightCardProps) {
  return (
    <Card className="flex-row items-center !bg-red-1 !px-5 !py-5">
      <Icon name="TriangleAlert" color="red" size={22} />
      <View className="ml-3.5 flex-1 gap-y-2">
        <Text className="font-extrabold">소비기한이 지난 식재료가 2개 있어요</Text>
        <Text className="text-sm">확인하고 정리해볼까요?</Text>
      </View>
      <Icon name="ChevronRight" size={20} />
    </Card>
  );
}
