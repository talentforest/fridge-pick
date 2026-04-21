import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import { View } from 'react-native';

interface TimeIndicatorProps {
  type: 'time' | 'total';
  value: number;
}

export default function Indicator({ type, value }: TimeIndicatorProps) {
  return (
    <View className="flex-row items-center gap-0.5">
      {type === 'time' && (
        <>
          <Icon name="Timer" size={16} color="blue" strokeWidth={2.6} />
          <Text className="text-[15px] text-blue-7">{value}분</Text>
        </>
      )}
      {type === 'total' && (
        <>
          <Icon name="EggFried" size={16} color="green" />
          <Text className="text-[15px] text-green-7">필수 식재료 {value}개</Text>
        </>
      )}
    </View>
  );
}
