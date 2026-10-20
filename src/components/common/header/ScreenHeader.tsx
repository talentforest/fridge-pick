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
  right?: { icon: 'Edit3' | 'CheckCircle2'; onRightPress: () => void };
}

export default function ScreenHeader({
  title,
  isDetailPage = true,
  onLeftPress,
  className = '',
  right,
}: ScreenHeaderProps) {
  const { goBack } = useHandleNavigate();

  const textClassName = 'text-lg';

  return (
    <View
      className={`flex-row items-end justify-between px-6 pb-2 pt-3 ${isDetailPage ? 'border-b border-border' : ''} ${className}`}
    >
      {isDetailPage ? (
        !right ? (
          <IconWithText
            icon="ChevronLeft"
            iconSize={25}
            className="w-fit flex-row items-center justify-center py-2"
            onPress={onLeftPress ?? goBack}
            text={title}
            textClassName={textClassName}
          />
        ) : (
          <View className="flex-1 flex-row justify-between">
            <IconWithText
              icon="ChevronLeft"
              iconSize={25}
              className="w-fit flex-row items-center justify-center"
              onPress={onLeftPress ?? goBack}
              text={title}
              textClassName={textClassName}
            />
            <Icon
              name={right.icon}
              size={20}
              onPress={right.onRightPress}
              className="w-8"
            />
          </View>
        )
      ) : (
        <Text className={`pl-2 ${textClassName}`}>{title}</Text>
      )}
    </View>
  );
}
