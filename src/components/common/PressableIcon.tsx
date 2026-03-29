import Icon, { IconColor, IconName } from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import { Pressable, PressableProps } from 'react-native';

interface PressableIconProps {
  icon: IconName;
  iconSize?: number;
  text?: string;
  iconColor?: IconColor;
  textClassName?: string;
}

export default function PressableIcon({
  icon,
  iconSize = 20,
  iconColor,
  text,
  textClassName = '',
  ...props
}: PressableIconProps & PressableProps) {
  return (
    <Pressable {...props} className={`flex-row items-center gap-x-1 ${props.className}`}>
      <Icon name={icon} size={iconSize} color={iconColor} />
      {text ? <Text className={textClassName}>{text}</Text> : <></>}
    </Pressable>
  );
}
