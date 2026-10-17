import Icon, { IconName } from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import { TouchableOpacityProps } from 'react-native';

interface SquareBtnProps {
  name: string;
  iconName?: IconName;
  tailIconName?: IconName;
  iconSize?: number;
  textClassName?: string;
  bgColor?:
    | 'red'
    | 'amber'
    | 'blue'
    | 'green'
    | 'amber'
    | 'ice'
    | 'indigo'
    | 'inActive'
    | 'neutral'
    | 'black'
    | 'transparent';
}

export default function SquareBtn({
  name,
  iconName,
  tailIconName,
  iconSize = 16,
  textClassName = '',
  bgColor = 'indigo',
  ...props
}: SquareBtnProps & TouchableOpacityProps) {
  const bgColorStyle = {
    blue: 'bg-blue-5',
    red: '!bg-[#aa2525]',
    ice: 'bg-ice-5',
    green: 'bg-green-700',
    amber: 'bg-amber-600',
    indigo: 'bg-primary',
    inActive: 'bg-disabledBackground',
    neutral: 'bg-neutral-3',
    transparent: 'border border-neutral-9 bg-white',
    black: 'bg-[#333]',
  };

  const textStyle =
    bgColor === 'transparent'
      ? ''
      : bgColor === 'inActive'
        ? 'text-disabledText'
        : 'text-white';

  const iconStyle =
    bgColor === 'transparent' ? 'neutral' : bgColor === 'inActive' ? 'inactive' : 'white';

  return (
    <TouchableOpacity
      {...props}
      className={`flex-row items-center justify-center gap-x-1 rounded-xl px-5 py-5 ${bgColorStyle[bgColor]} ${props.className}`}
    >
      {iconName ? <Icon name={iconName} size={iconSize} color={iconStyle} /> : <></>}

      <Text className={`${textStyle} font-extrabold ${textClassName}`}>{name}</Text>

      {tailIconName ? (
        <Icon name={tailIconName} size={iconSize} color={iconStyle} />
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
}
