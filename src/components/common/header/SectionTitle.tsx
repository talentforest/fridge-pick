import Icon, { IconName } from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import { ReactNode, useMemo } from 'react';
import { View } from 'react-native';

interface SectionTitleProps {
  title: string;
  className?: string;
  textClassName?: string;
  icon?: IconName;
  color?: 'yellow' | 'red';
  children?: ReactNode;
  highlight?: string;
}

export default function SectionTitle({
  title,
  icon,
  color = 'yellow',
  className = '',
  textClassName = '',
  children,
  highlight,
}: SectionTitleProps) {
  const colorObj = {
    yellow: 'text-yellow-7',
    red: 'text-red-5',
  };

  return (
    <View className={`flex-row items-center gap-x-1.5 pl-2 ${className}`}>
      {icon && <Icon name={icon} size={20} strokeWidth="2.5" color={color} />}

      {highlight ? (
        <TitleWithHighlight highlight={highlight} text={title} />
      ) : (
        <Text className={`mr-auto font-bold text-lg ${colorObj[color]} ${textClassName}`}>
          {title}
        </Text>
      )}

      {children}
    </View>
  );
}

interface HighlightProps {
  text: string;
  highlight: string;
}

const TitleWithHighlight = ({ text, highlight }: HighlightProps) => {
  const highlightedText = useMemo(() => {
    const regex = new RegExp(`(${highlight})`, 'gi');
    return text.split(regex).map((part: string) =>
      part.toLowerCase() === highlight?.toLowerCase() ? (
        <Text key={part} className="text-lg text-yellow-7">
          {part}
        </Text>
      ) : (
        part
      ),
    );
  }, [text, highlight]);

  return <Text className="text-lg text-text">{highlightedText}</Text>;
};
