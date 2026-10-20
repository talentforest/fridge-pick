import Card from '@/components/common/ui/Card';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import { View } from 'react-native';

type ShoppingInsightCardProps = {};

export default function ShoppingInsightCard({}: ShoppingInsightCardProps) {
  return (
    <Card className="flex-row gap-x-4 bg-neutral-0 !px-5">
      <Icon name="CookingPot" color="indigo" />

      <View className="gap-y-1.5">
        <Text className="!text-[13px] text-primary">장보기 목록을 모두 구매하면</Text>
        <Text className="font-extrabold text-primary">
          만들 수 있는 메뉴가{' '}
          <Text className="font-extrabold text-blue-9">
            {/* {canAvailableFoodList.length}개 */}
          </Text>{' '}
          늘어나요!
        </Text>
      </View>
    </Card>
  );
}
