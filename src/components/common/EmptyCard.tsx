import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import { initialShadowStyle, iosShadowStyle } from '@/constants';
import { Image, ImageSourcePropType, View } from 'react-native';

type EmptyCardProps = {
  source: ImageSourcePropType;
  text: string;
  subText?: string[];
  className?: string;
  hasBox?: boolean;
};

export default function EmptyCard({
  source,
  text,
  className = '',
  subText,
  hasBox = true,
}: EmptyCardProps) {
  const commonClassName = `items-center gap-y-3 !py-6 justify-center ${className}`;

  return (
    <Card
      style={hasBox ? iosShadowStyle : initialShadowStyle}
      className={commonClassName}
    >
      <Image source={source} className="-mt-2 aspect-[1/1] h-28 opacity-60" />

      <Text className="text-textDescription">{text}</Text>

      {subText && subText.length > 0 ? (
        <View className="gap-y-1">
          {subText.map((sub) => (
            <Text key={sub} className="px-10 text-center !text-[13px] text-disabledText">
              {sub}
            </Text>
          ))}
        </View>
      ) : (
        <></>
      )}
    </Card>
  );
}
