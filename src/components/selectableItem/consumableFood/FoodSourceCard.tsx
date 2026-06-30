import Card from '@/components/common/ui/Card';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import { foodSourceObj, iosShadowStyle } from '@/constants';
import { FoodSource } from '@/types/selectableItem';
import { ReactNode } from 'react';
import { Image, View } from 'react-native';

type FoodSourceCardProps = {
  type: FoodSource;
  className?: string;
  children?: ReactNode;
};

export default function FoodSourceCard({
  type,
  className = '',
  children,
}: FoodSourceCardProps) {
  const { icon, color, image, label, description } = foodSourceObj[type];

  return (
    <Card className={`flex-1 flex-row items-center gap-x-2 !py-4 !pl-2 ${className}`}>
      <Image source={image} className="size-24" />

      {icon && color && (
        <View
          style={{ ...iosShadowStyle, shadowRadius: 5 }}
          className={`absolute left-2 top-1.5 rounded-lg bg-neutral-3 p-1.5`}
        >
          <Icon name={icon} size={18} color={color} />
        </View>
      )}

      <View className="flex-1">
        <Text className={`mb-3 mr-auto mt-1 border-b font-extrabold`}>{label}</Text>

        {description.split('|').map((part) => (
          <Text key={part} className=" text-[13px] leading-6 text-neutral-5">
            {part}
          </Text>
        ))}
      </View>

      {children}
    </Card>
  );
}
