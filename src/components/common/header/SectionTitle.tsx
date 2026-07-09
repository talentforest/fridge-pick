import Icon, { IconName } from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
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
}

export default function SectionTitle({
  title,
  icon,
  color = 'yellow',
  className = '',
  children,
  highlight,
  type = 'main',
}: SectionTitleProps) {
  const colorObj = {
    yellow: 'text-yellow-7',
    red: 'text-red-5',
  };

  const textSizeObj = { main: 'text-lg', sub: 'text-base' };

  return (
    <View className={`flex-row items-center gap-x-1.5 pl-2 ${className}`}>
      {icon && (
        <Icon
          name={icon}
          size={type === 'main' ? 18 : 16}
          strokeWidth="2.5"
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
        <Text className={`mr-auto font-bold ${textSizeObj[type]} ${colorObj[color]}`}>
          {title}
        </Text>
      )}

      {children ? children : <></>}
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
        <Text key={part} className={`${textSize} text-yellow-7`}>
          {part}
        </Text>
      ) : (
        part
      ),
    );
  }, [text, highlight, textSize]);

  return <Text className={`${textSize} text-text`}>{highlightedText}</Text>;
};
