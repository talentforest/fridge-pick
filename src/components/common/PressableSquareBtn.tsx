import Icon, { IconName } from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import { Pressable, PressableProps } from 'react-native';

interface SquareBtnProps {
  name: string;
  iconName?: IconName;
  iconSize?: number;
  isInActive?: boolean;
  textClassName?: string;
  color?: 'blue' | 'green' | 'yellow' | 'cyan' | 'indigo' | 'inActive';
}

export default function PressableSquareBtn({
  name,
  iconName,
  iconSize = 18,
  isInActive = false,
  textClassName = '',
  color = 'indigo',
  ...props
}: SquareBtnProps & PressableProps) {
  const bgColorStyle = {
    blue: 'bg-blue-700',
    cyan: 'bg-cyan-600',
    green: 'bg-green-700',
    yellow: 'bg-amber-600',
    indigo: 'bg-indigo-600',
    inActive: 'bg-gray-200',
  };

  const textColorStyle = {
    blue: '!text-white',
    cyan: 'text-white',
    inActive: '!text-gray-400',
    green: '!text-white',
    indigo: '!text-white',
    yellow: '!text-white',
  };

  return (
    <Pressable
      {...props}
      className={`w-fit flex-row items-center justify-center gap-x-1 rounded-xl px-5 py-4 ${bgColorStyle[color]} ${props.className}`}
    >
      {iconName && (
        <Icon
          name={iconName}
          size={iconSize}
          color={color === 'inActive' ? 'gray' : 'white'}
        />
      )}

      <Text className={`${textColorStyle[color]} ${textClassName}`}>
        {name}
      </Text>
    </Pressable>
  );
}
