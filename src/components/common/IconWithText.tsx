import Icon, { IconColor, IconName } from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import { TouchableOpacityProps, View } from 'react-native';

interface IconWithTextProps {
  icon: IconName;
  iconSize?: number;
  text?: string;
  iconColor?: IconColor;
  textClassName?: string;
}

export default function IconWithText({
  icon,
  iconSize = 20,
  iconColor,
  text,
  textClassName = '',
  ...props
}: IconWithTextProps & TouchableOpacityProps) {
  return props.onPress ? (
    <TouchableOpacity
      {...props}
      className={`flex-row items-center gap-x-1 ${props.className}`}
    >
      <Icon name={icon} size={iconSize} color={iconColor} />

      {text ? <Text className={textClassName}>{text}</Text> : <></>}
    </TouchableOpacity>
  ) : (
    <View className={`flex-row items-center gap-x-1 ${props.className}`}>
      <Icon name={icon} size={iconSize} color={iconColor} />
      {text ? <Text className={textClassName}>{text}</Text> : <></>}
    </View>
  );
}
