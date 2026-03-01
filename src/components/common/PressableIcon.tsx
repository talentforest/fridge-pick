import Icon from '@/components/common/ui/Icon';
import { Pressable, PressableProps } from 'react-native';

interface PressableIconProps {
  icon: 'Bell' | 'Menu';
}

export default function PressableIcon({
  icon,
  ...props
}: PressableIconProps & PressableProps) {
  return (
    <Pressable {...props}>
      <Icon name={icon} />
    </Pressable>
  );
}
