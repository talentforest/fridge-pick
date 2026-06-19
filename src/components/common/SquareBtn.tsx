import Icon, { IconName } from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import { TouchableOpacityProps } from 'react-native';

interface SquareBtnProps {
  name: string;
  iconName?: IconName;
  iconSize?: number;
  textClassName?: string;
  bgColor?:
    | 'blue'
    | 'green'
    | 'yellow'
    | 'ice'
    | 'indigo'
    | 'inActive'
    | 'neutral'
    | 'transparent';
}

export default function SquareBtn({
  name,
  iconName,
  iconSize = 16,
  textClassName = '',
  bgColor = 'indigo',
  ...props
}: SquareBtnProps & TouchableOpacityProps) {
  const bgColorStyle = {
    blue: 'bg-blue-5',
    ice: 'bg-ice-5',
    green: 'bg-green-700',
    yellow: 'bg-amber-600',
    indigo: 'bg-indigo-600',
    inActive: 'bg-inactive-bg',
    neutral: 'bg-neutral-7',
    transparent: 'border border-neutral-9 bg-white',
  };

  const textStyle =
    bgColor === 'transparent'
      ? ''
      : bgColor === 'inActive'
        ? 'text-inactive-text'
        : 'text-white';

  const iconStyle =
    bgColor === 'transparent' ? 'neutral' : bgColor === 'inActive' ? 'inactive' : 'white';

  return (
    <TouchableOpacity
      {...props}
      className={`flex-row items-center justify-center gap-x-1 rounded-xl p-5 ${bgColorStyle[bgColor]} ${props.className}`}
    >
      {iconName && <Icon name={iconName} size={iconSize} color={iconStyle} />}

      <Text className={`${textStyle} ${textClassName}`}>{name}</Text>
    </TouchableOpacity>
  );
}
