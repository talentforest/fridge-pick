import Icon, { IconColor, IconName } from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import { View } from 'react-native';

interface SectionTitleProps {
  title: string;
  className?: string;
  textClassName?: string;
  icon?: IconName;
  iconColor?: IconColor;
}

export default function SectionTitle({
  title,
  icon,
  iconColor,
  className = '',
  textClassName = '',
}: SectionTitleProps) {
  return (
    <View className={`flex-row gap-x-1.5 pb-1 pl-2 ${className}`}>
      {icon && (
        <Icon name={icon} size={20} strokeWidth="2.5" color={iconColor} />
      )}

      <Text className={`font-bold text-xl ${textClassName}`}>{title}</Text>
    </View>
  );
}
