import Icon, { IconName } from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import { FilterColor } from '@/types/filter';
import { View } from 'react-native';

interface FilterProps {
  name: string;
  color: FilterColor;
  icon?: IconName;
  onPress?: () => void;
  isActive?: boolean;
  textClassName?: string;
  className?: string;
  iconSize?: number;
}

export default function FilterTag({
  name,
  icon,
  color,
  isActive = false,
  onPress,
  textClassName,
  className = '',
  iconSize = 15,
}: FilterProps) {
  const bgColor = {
    green: 'bg-green-1 border-green-3',
    red: 'bg-red-1 border-red-3',
    blue: 'bg-blue-1 border-blue-3',
    amber: 'bg-amber-1 border-amber-3',
    neutral: 'bg-neutral-3 border-neutral-5',
    indigo: 'bg-primaryBackgroundPressed border-primaryBorder',
    ice: 'bg-ice-1 border-ice-3',
  };

  const textColorObj = {
    green: '!text-green-7',
    red: 'text-red-7',
    blue: '!text-blue-7',
    amber: '!text-amber-7',
    neutral: '!text-text',
    indigo: '!text-primary',
    ice: '!text-ice-5',
  };

  const inActiveObj = {
    bgColor: 'bg-disabledBackground border-border',
    textColor: 'text-disabledText',
  };

  const commonClassName = 'rounded-lg px-3 py-3';

  const currBgColor = isActive ? bgColor[color as FilterColor] : inActiveObj.bgColor;

  const currTextColor = isActive
    ? `${textColorObj[color]} font-extrabold`
    : inActiveObj.textColor;

  return onPress ? (
    <TouchableOpacity
      onPress={onPress}
      className={`${commonClassName} flex-row items-center justify-center gap-x-0.5 border ${currBgColor} ${className}`}
    >
      {icon && <Icon name={icon} size={iconSize} color={isActive ? color : 'inactive'} />}
      <Text className={`${currTextColor} ${textClassName}`}>{name}</Text>
    </TouchableOpacity>
  ) : (
    <View
      className={`${commonClassName} flex-row items-center justify-center gap-x-0.5 ${currBgColor} ${className}`}
    >
      {icon && <Icon name={icon} size={iconSize} color={isActive ? color : 'inactive'} />}
      <Text className={`${currTextColor} ${textClassName}`}>{name}</Text>
    </View>
  );
}
