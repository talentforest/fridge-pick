import Icon, { IconName } from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface SquareBtnProps {
  name: string;
  iconName?: IconName;
  iconSize?: number;
  textClassName?: string;
  color?: 'blue' | 'green' | 'yellow' | 'ice' | 'indigo' | 'inActive';
}

export default function SquareBtn({
  name,
  iconName,
  iconSize = 16,
  textClassName = '',
  color = 'indigo',
  ...props
}: SquareBtnProps & TouchableOpacityProps) {
  const bgColorStyle = {
    blue: 'bg-blue-5',
    ice: 'bg-ice-5',
    green: 'bg-green-700',
    yellow: 'bg-amber-600',
    indigo: 'bg-indigo-600',
    inActive: 'bg-inactive-bg',
  };

  const textColorStyle = {
    blue: '!text-white',
    ice: 'text-white',
    green: '!text-white',
    indigo: '!text-white',
    yellow: '!text-white',
    inActive: '!text-inactive-text',
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      {...props}
      className={`flex-row items-center justify-center gap-x-1 rounded-xl p-5 ${bgColorStyle[color]} ${props.className}`}
    >
      {iconName && (
        <Icon
          name={iconName}
          size={iconSize}
          color={color === 'inActive' ? 'inactive' : 'white'}
        />
      )}

      <Text className={`${textColorStyle[color]} !text-[15px] ${textClassName}`}>
        {name}
      </Text>
    </TouchableOpacity>
  );
}
