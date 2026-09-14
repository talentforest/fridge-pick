import IconWithText from '@/components/common/IconWithText';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import { useHandleNavigate } from '@/hooks';
import { GestureResponderEvent, View } from 'react-native';

interface ScreenHeaderProps {
  title: string;
  isDetailPage?: boolean;
  onLeftPress?: (event: GestureResponderEvent) => void;
  className?: string;
  right?: { icon: 'Edit' | 'CheckCircle'; onRightPress: () => void };
}

export default function ScreenHeader({
  title,
  isDetailPage = true,
  onLeftPress,
  className = '',
  right,
}: ScreenHeaderProps) {
  const { goBack } = useHandleNavigate();

  return (
    <View
      className={`flex-row items-end justify-between px-6 pb-4 pt-3 ${isDetailPage ? 'border-b border-border' : ''} ${className}`}
    >
      {isDetailPage ? (
        !right ? (
          <IconWithText
            icon="ChevronLeft"
            iconSize={28}
            className="w-fit flex-row items-center justify-center"
            onPress={onLeftPress ?? goBack}
            text={title}
            textClassName="text-xl"
          />
        ) : (
          <View className="flex-1 flex-row justify-between">
            <IconWithText
              icon="ChevronLeft"
              iconSize={28}
              className="w-fit flex-row items-center justify-center"
              onPress={onLeftPress ?? goBack}
              text={title}
              textClassName="text-xl"
            />
            <Icon
              name={right.icon}
              size={20}
              strokeWidth={2.5}
              onPress={right.onRightPress}
              className="p-1.5"
            />
          </View>
        )
      ) : (
        <Text className="pl-2 text-xl">{title}</Text>
      )}
    </View>
  );
}
