import IconWithText from '@/components/common/IconWithText';
import Text from '@/components/common/ui/Text';
import { useNavigation } from '@react-navigation/native';
import { GestureResponderEvent, View } from 'react-native';

interface ScreenHeaderProps {
  title: string;
  isDetailPage?: boolean;
  onLeftPress?: (event: GestureResponderEvent) => void;
  className?: string;
}

export default function ScreenHeader({
  title,
  isDetailPage = true,
  onLeftPress,
  className = '',
}: ScreenHeaderProps) {
  const navigation = useNavigation();

  return (
    <View
      className={`flex-row items-end justify-between px-6 pb-4 pt-3 ${isDetailPage ? 'border-b border-border' : ''} ${className}`}
    >
      {isDetailPage ? (
        <IconWithText
          icon="ChevronLeft"
          iconSize={28}
          className="w-fit flex-row items-center justify-center"
          onPress={onLeftPress ?? (() => navigation.goBack())}
          text={title}
          textClassName="text-xl"
        />
      ) : (
        <Text className="pl-2 text-xl">{title}</Text>
      )}
    </View>
  );
}
