import IconWithText from '@/components/common/IconWithText';
import Card from '@/components/common/ui/Card';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import { convenienceVariantObj, iosShadowStyle } from '@/constants';
import { ConvenienceVariant } from '@/types/meal';
import { Image, View } from 'react-native';

type MealConvenienceCardProps = {
  item: ConvenienceVariant;
};

export default function MealConvenienceCard({ item }: MealConvenienceCardProps) {
  const onPress = () => {};

  return (
    <Card className={`min-h-fit flex-1 items-center gap-x-3 !rounded-xl !pb-3`}>
      <Image source={convenienceVariantObj[item].image} className="mb-2 size-[70px]" />

      {convenienceVariantObj[item].icon && (
        <View
          style={{ ...iosShadowStyle }}
          className="absolute right-3 top-3 rounded-lg bg-white p-2"
        >
          <Icon
            name={convenienceVariantObj[item].icon}
            size={20}
            color={convenienceVariantObj[item].color}
          />
        </View>
      )}

      <View className="mb-2 items-center">
        <View className="flex-row gap-y-1">
          <Text className="border-b font-extrabold">
            {convenienceVariantObj[item].label}
          </Text>
        </View>

        <View className="mt-2.5 gap-y-1">
          <Text className="text-center text-[13px] leading-6 text-neutral-5">
            {convenienceVariantObj[item].description}
          </Text>
        </View>
      </View>

      {item !== 'readyToEat' && (
        <IconWithText
          text="장보기"
          icon="Plus"
          iconSize={14}
          iconColor="yellow"
          textClassName="text-yellow-7"
          onPress={onPress}
          className="!gap-x-0 p-2"
        />
      )}
    </Card>
  );
}
