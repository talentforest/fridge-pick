import Icon, { IconName } from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import { FilterColor } from '@/types/filter';

import { TouchableOpacity, View } from 'react-native';

interface FilterProps {
  name: string;
  color: FilterColor;
  icon?: IconName;
  onPress?: () => void;
  isActive?: boolean;
  textClassName?: string;
  className?: string;
}

export default function FilterTag({
  name,
  icon,
  color,
  isActive = false,
  onPress,
  textClassName,
  className = '',
}: FilterProps) {
  const bgColor = {
    green: '!bg-green-1',
    red: '!bg-red-1',
    blue: 'bg-blue-1',
    yellow: '!bg-yellow-3',
    neutral: 'bg-neutral-3',
  };

  const textColorObj = {
    green: '!text-green-7',
    red: 'text-red-7',
    blue: 'text-blue-7',
    yellow: '!text-yellow-7',
    neutral: '!text-neutral-9',
  };

  const inActiveObj = {
    bgColor: 'bg-inactive-bg',
    textColor: 'text-inactive-text',
  };

  const commonClassName = 'rounded-xl px-3.5 py-3';

  return onPress ? (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className={`${commonClassName} flex-row items-center ${isActive ? bgColor[color as FilterColor] : inActiveObj.bgColor} ${className}`}
    >
      {icon && <Icon name={icon} size={15} color={color} />}
      <Text
        className={`${isActive ? textColorObj[color] : inActiveObj.textColor} ${textClassName}`}
      >
        {name}
      </Text>
    </TouchableOpacity>
  ) : (
    <View className={`${commonClassName} ${bgColor[color as FilterColor]} ${className}`}>
      {icon && <Icon name={icon} />}
      <Text className={`${textColorObj[color]} ${textClassName}`}>{name}</Text>
    </View>
  );
}
