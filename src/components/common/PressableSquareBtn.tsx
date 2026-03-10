import Icon, { IconName } from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import { Pressable, PressableProps } from 'react-native';

interface SquareBtnProps {
  text: string;
  iconName?: IconName;
  isInActive?: boolean;
}

export default function PressableSquareBtn({
  text,
  iconName,
  isInActive = false,
  ...props
}: SquareBtnProps & PressableProps) {
  const bgColorStyle = {
    blue: 'bg-blue-600',
  };

  const inActiveStyle = {
    bg: 'bg-gray-100',
    text: '!text-gray-400',
    border: '!bg-gray-200',
  };

  return (
    <Pressable
      {...props}
      className={`w-fit flex-row items-center justify-center gap-x-1 rounded-xl bg-blue-600 p-4 ${bgColorStyle} ${isInActive || props.disabled ? `${(inActiveStyle.bg, inActiveStyle.border)}` : ''} ${props.className}`}
    >
      {iconName && <Icon name={iconName} size={18} color="white" />}
      <Text
        className={`text-white ${isInActive || props.disabled ? inActiveStyle.text : ''}`}
      >
        {text}
      </Text>
    </Pressable>
  );
}
