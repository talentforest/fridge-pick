import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import { image_empty_today_food } from '@/constants';
import { Image } from 'react-native';

interface TodayFoodEmptyCardProps {
  className?: string;
}

export default function TodayFoodEmptyCard({ className }: TodayFoodEmptyCardProps) {
  const commonClassName = `items-center !py-6 justify-center ${className}`;

  return (
    <Card className={commonClassName}>
      <Image source={image_empty_today_food} className="aspect-[1/0.7] h-40 opacity-60" />

      <Text className="mt-4 leading-5 text-neutral-5">오늘 먹을 메뉴가 아직 없어요</Text>
    </Card>
  );
}
