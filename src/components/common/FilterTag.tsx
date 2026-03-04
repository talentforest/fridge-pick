import Text from '@/components/common/ui/Text';
import { FilterColor } from '@/types/filter';

import { Pressable, View } from 'react-native';

interface FilterProps {
  name: string;
  color: FilterColor;
  onPress?: () => void;
  isActive?: boolean;
  textClassName?: string;
}

export default function FilterTag({
  name,
  color,
  isActive,
  onPress,
  textClassName = '',
}: FilterProps) {
  const bgColor = {
    green: '!bg-green-100',
    red: '!bg-red-100',
    blue: '!bg-blue-100',
    yellow: '!bg-yellow-100',
    gray: '!bg-gray-100',
  };

  const textColorObj = {
    green: '!text-green-700',
    red: '!text-red-500',
    blue: '!text-blue-700',
    yellow: '!text-yellow-700',
    gray: '!text-gray-600',
  };

  const inActiveObj = {
    bgColor: 'bg-gray-200',
    textColor: 'text-neutral-400',
  };

  const commonClassName = 'rounded-xl px-3 py-2.5';

  return onPress ? (
    <Pressable
      onPress={onPress}
      className={`${commonClassName} ${isActive ? bgColor[color as FilterColor] : inActiveObj.bgColor}`}
    >
      <Text
        className={`text-md ${isActive ? textColorObj[color] : inActiveObj.textColor} ${textClassName}`}
      >
        {name}
      </Text>
    </Pressable>
  ) : (
    <View className={`${commonClassName} ${bgColor[color as FilterColor]}`}>
      <Text className={`${textColorObj[color]} ${textClassName}`}>{name}</Text>
    </View>
  );
}
