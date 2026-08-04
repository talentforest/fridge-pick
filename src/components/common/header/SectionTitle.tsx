import Icon, { IconName } from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import { ReactNode, useMemo } from 'react';
import { View } from 'react-native';

interface SectionTitleProps {
  title: string;
  className?: string;
  icon?: IconName;
  color?: 'yellow' | 'red';
  children?: ReactNode;
  highlight?: string;
  type?: 'main' | 'sub';
  hasShowAllBtn?: boolean;
  onShowAllPress?: () => void;
}

export default function SectionTitle({
  title,
  icon,
  color = 'yellow',
  className = '',
  children,
  highlight,
  type = 'main',
  hasShowAllBtn = false,
  onShowAllPress,
}: SectionTitleProps) {
  const colorObj = {
    yellow: 'text-yellow-7',
    red: 'text-red-5',
  };

  const textSizeObj = { main: '!text-[17px]', sub: 'text-base' };

  return (
    <View className={`flex-row items-center gap-x-1.5 pl-2 ${className}`}>
      {icon && (
        <Icon
          name={icon}
          size={type === 'main' ? 17 : 16}
          strokeWidth="3"
          color={color}
        />
      )}

      {highlight ? (
        <TitleWithHighlight
          highlight={highlight}
          text={title}
          textSize={textSizeObj[type]}
        />
      ) : (
        <Text
          className={`mr-auto font-extrabold ${textSizeObj[type]} ${colorObj[color]}`}
        >
          {title}
        </Text>
      )}

      {children ? children : <></>}

      {hasShowAllBtn && onShowAllPress && (
        <TouchableOpacity
          className="flex-row items-center gap-x-0.5 py-0.5"
          onPress={onShowAllPress}
        >
          <Text className="text-neutral-7">모두 보기</Text>
          <Icon name="ChevronRight" color="neutral" size={16} />
        </TouchableOpacity>
      )}
    </View>
  );
}

interface HighlightProps {
  text: string;
  highlight: string;
  textSize: string;
}

const TitleWithHighlight = ({ text, highlight, textSize }: HighlightProps) => {
  const highlightedText = useMemo(() => {
    const regex = new RegExp(`(${highlight})`, 'gi');
    return text.split(regex).map((part: string) =>
      part.toLowerCase() === highlight?.toLowerCase() ? (
        <Text key={part} className={`${textSize} font-extrabold text-yellow-7`}>
          {part}
        </Text>
      ) : (
        part
      ),
    );
  }, [text, highlight, textSize]);

  return (
    <Text className={`${textSize} font-extrabold text-text`}>{highlightedText}</Text>
  );
};
