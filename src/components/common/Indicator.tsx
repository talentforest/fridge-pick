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
          <Icon name="Clock" size={16} color="neutral" />
          <Text className="text-gray-500">{value}분</Text>
        </>
      )}
      {type === 'total' && (
        <>
          <Icon name="ChefHat" size={18} color="neutral" />
          <Text className="text-gray-500">총 {value}개의 식재료</Text>
        </>
      )}
    </View>
  );
}
