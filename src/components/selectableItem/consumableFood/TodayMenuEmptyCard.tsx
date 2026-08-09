import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import { image_empty_plate } from '@/constants';
import { Image, View } from 'react-native';

interface TodayMenuEmptyCardProps {
  className?: string;
}

export default function TodayMenuEmptyCard({ className }: TodayMenuEmptyCardProps) {
  const commonClassName = `items-center !py-6 justify-center ${className}`;

  return (
    <Card className={commonClassName}>
      <Image source={image_empty_plate} className="aspect-square h-[80px]" />

      <View className="mb-2 items-center justify-center">
        <Text className="mt-0.5 leading-5 text-neutral-5">오늘 먹을 메뉴가</Text>
        <Text className="leading-6 text-neutral-5">아직 없어요</Text>
      </View>
    </Card>
  );
}
