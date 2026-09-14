import Icon, { IconColor, IconName } from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import { TouchableOpacityProps, View } from 'react-native';

interface IconWithTextProps {
  icon?: IconName;
  tailIcon?: IconName;
  iconSize?: number;
  text?: string;
  iconColor?: IconColor;
  textClassName?: string;
}

export default function IconWithText({
  icon,
  tailIcon,
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
      {icon ? (
        <Icon name={icon} size={iconSize} color={iconColor} strokeWidth={2.5} />
      ) : (
        <></>
      )}

      {text ? <Text className={textClassName}>{text}</Text> : <></>}

      {tailIcon ? (
        <Icon name={tailIcon} size={iconSize} color={iconColor} strokeWidth={2.5} />
      ) : (
        <></>
      )}
    </TouchableOpacity>
  ) : (
    <View className={`flex-row items-center gap-x-1 ${props.className}`}>
      {icon ? (
        <Icon name={icon} size={iconSize} color={iconColor} strokeWidth={2.5} />
      ) : (
        <></>
      )}

      {text ? <Text className={textClassName}>{text}</Text> : <></>}

      {tailIcon ? (
        <Icon name={tailIcon} size={iconSize} color={iconColor} strokeWidth={2.5} />
      ) : (
        <></>
      )}
    </View>
  );
}
