import Card from '@/components/common/ui/Card';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import { image_empty_plate } from '@/constants';
import { Image, View } from 'react-native';

interface TodayMealEmptyCardProps {
  type: 'mainMenu' | 'sideMenu';
  className?: string;
}

export default function TodayMealEmptyCard({ type, className }: TodayMealEmptyCardProps) {
  const commonClassName = `items-center justify-center !px-1 ${type === 'mainMenu' ? '!py-4 h-[220px]' : 'h-[105px] !bg-border'} ${className}`;

  return (
    <Card className={commonClassName}>
      {type === 'mainMenu' && (
        <>
          <Image source={image_empty_plate} className="aspect-square h-[80px]" />

          <View className="my-3 items-center justify-center">
            <Text className="mb-0.5 leading-6 text-neutral-5">오늘의 메뉴가</Text>
            <Text className="leading-6 text-neutral-5">아직 없어요</Text>
          </View>
        </>
      )}

      {type === 'sideMenu' && (
        <TouchableOpacity
          onPress={() => console.log('??')}
          className="h-full items-center justify-center gap-y-2"
        >
          <Icon name="PlusCircle" color="inactive" />
          <Text className="w-16 text-center !text-sm leading-4 text-inactive-text">
            사이드메뉴 추가
          </Text>
        </TouchableOpacity>
      )}
    </Card>
  );
}
