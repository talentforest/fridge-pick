import Icon, { IconName } from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import { TouchableOpacityProps } from 'react-native';

interface SelectBtnProps {
  name: string;
  iconName?: IconName;
  tailIconName?: IconName;
  iconSize?: number;
  textClassName?: string;
  color?:
    | 'red'
    | 'blue'
    | 'green'
    | 'yellow'
    | 'ice'
    | 'indigo'
    | 'inActive'
    | 'neutral'
    | 'black'
    | 'transparent';
}

export default function SelectBtn({
  name,
  iconName,
  tailIconName,
  iconSize = 16,
  textClassName = '',
  color = 'indigo',
  ...props
}: SelectBtnProps & TouchableOpacityProps) {
  const bgColorStyle = {
    red: 'bg-card border-red-3',
    blue: 'bg-blue-1 border-blue-3',
    ice: 'bg-ice-1 border-ice-3',
    green: 'bg-green-1 border-green-3',
    yellow: 'bg-yellow-1 border-yellow-5',
    indigo: 'bg-indigo-1 border-indigo-3',
    inActive: 'bg-inactive-bg border-neutral-3',
    neutral: 'bg-card border-neutral-3',
    transparent: 'border border-neutral-1 bg-white',
    black: 'bg-neutral-1 border-neutral-7',
  };

  const textColorStyle = {
    red: 'text-red-5',
    blue: 'text-blue-7',
    ice: 'text-ice-7',
    green: 'text-green-7',
    yellow: 'text-yellow-7',
    indigo: 'text-indigo-5',
    inActive: 'text-neutral-5',
    neutral: 'text-neutral-7',
    transparent: 'border border-neutral-9 bg-white',
    black: 'text-neutral-9',
  };

  const iconStyle =
    color === 'transparent' ? 'neutral' : color === 'inActive' ? 'inactive' : color;

  return (
    <TouchableOpacity
      {...props}
      className={`flex-row items-center justify-center gap-x-1 rounded-xl border px-5 py-5 ${bgColorStyle[color]} ${props.className}`}
    >
      {iconName && (
        <Icon name={iconName} size={iconSize} color={iconStyle} strokeWidth={2.5} />
      )}

      <Text className={`${textColorStyle[color]} ${textClassName} font-extrabold`}>
        {name}
      </Text>

      {tailIconName && (
        <Icon name={tailIconName} size={iconSize} color={iconStyle} strokeWidth={2.5} />
      )}
    </TouchableOpacity>
  );
}
