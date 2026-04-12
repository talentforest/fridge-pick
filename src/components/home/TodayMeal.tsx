import Card from '@/components/common/ui/Card';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import { image_empty_plate } from '@/constants';
import { Image, View } from 'react-native';

export default function TodayMeal() {
  return (
    <Card className="round justify-between gap-y-2 !p-6">
      <View className="flex-row items-center gap-x-1">
        <Icon name="UtensilsCrossed" size={18} />
        <Text className="text-base">오늘의 선택 메뉴</Text>
      </View>

      <View className="mb-2 mt-6 items-center gap-y-4">
        <Image source={image_empty_plate} className="h-[97px] w-[100px]" />
        <Text className="text-neutral-7">오늘의 메뉴가 없어요</Text>
      </View>
    </Card>
  );
}
