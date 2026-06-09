import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import { View } from 'react-native';

interface TimeIndicatorProps {
  type: 'time' | 'total' | 'difficulty';
  value: number | string;
}

export default function Indicator({ type, value }: TimeIndicatorProps) {
  return (
    <View className="flex-row items-center gap-x-[1px]">
      {type === 'time' && (
        <>
          <Icon name="Timer" size={16} color="blue" strokeWidth={2.6} />
          <Text className="text-[15px] text-blue-7">{value}분</Text>
        </>
      )}
      {type === 'total' && (
        <>
          <Icon name="ToolCase" size={16} color="green" />
          <Text className="text-[15px] text-green-7">{value}개</Text>
        </>
      )}
      {type === 'difficulty' && (
        <>
          <Icon name="Sparkles" size={15} color="indigo" />
          <Text className="text-[15px] text-indigo-5">
            {value === 'hard' ? '어려움' : '쉬움'}
          </Text>
        </>
      )}
    </View>
  );
}
