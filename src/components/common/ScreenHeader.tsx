import PressableIcon from '@/components/common/PressableIcon';
import Text from '@/components/common/ui/Text';
import { useNavigation } from '@react-navigation/native';
import { GestureResponderEvent, View } from 'react-native';

interface ScreenHeaderProps {
  title: string;
  isDetailPage?: boolean;
  onLeftPress?: (event: GestureResponderEvent) => void;
  onRightPress?: (event: GestureResponderEvent) => void;
  className?: string;
}

export default function ScreenHeader({
  title,
  isDetailPage = true,
  onLeftPress,
  onRightPress,
  className = '',
}: ScreenHeaderProps) {
  const navigation = useNavigation();

  return (
    <View
      className={`h-16 flex-row items-center justify-between px-6 ${isDetailPage ? 'border-b border-border' : ''} ${className}`}
    >
      {isDetailPage ? (
        <PressableIcon
          icon="ChevronLeft"
          iconSize={30}
          className="w-fit flex-row items-center justify-center py-2"
          onPress={onLeftPress ?? (() => navigation.goBack())}
          text={title}
          textClassName="!text-2xl"
        />
      ) : (
        <Text className="pl-2 !text-2xl">{title}</Text>
      )}

      {onRightPress && (
        <PressableIcon
          icon="Edit"
          className="size-10 items-center justify-center"
          iconSize={25}
          onPress={() => {}}
        />
      )}
    </View>
  );
}
