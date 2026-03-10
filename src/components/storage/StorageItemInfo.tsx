import Card from '@/components/common/ui/Card';
import Icon from '@/components/common/ui/Icon';
import Text from '@/components/common/ui/Text';
import { ingredientImagesObj } from '@/constants';
import { IngredientKey } from '@/types/ingredient';
import { findIngredient } from '@/utils';
import { Image, Pressable, View } from 'react-native';

export default function StorageItemInfo({
  ingredient,
  type,
}: {
  ingredient: string;
  type: 'recently' | 'favorite' | 'empty';
}) {
  const currIngredient = findIngredient(ingredient as IngredientKey);

  const infoType = {
    recently: {
      label: '최근 추가',
      icon: 'CalendarClock' as const,
      textColor: 'text-teal-800',
      bgColor: '!bg-teal-50',
      color: 'teal' as const,
    },
    favorite: {
      label: '자주 먹어요',
      icon: 'Heart' as const,
      textColor: 'text-yellow-800',
      bgColor: '!bg-yellow-50',
      color: 'yellow' as const,
    },
    empty: {
      label: '지금 없어요',
      icon: 'SquareSlash' as const,
      textColor: 'text-red-800',
      bgColor: '!bg-red-50',
      color: 'yellow' as const,
    },
  };

  return (
    currIngredient && (
      <Pressable onPress={() => console.log(currIngredient)}>
        <Card className={`${infoType[type].bgColor} w-fit !pb-2`}>
          <View className="flex-row items-center gap-x-1">
            <Icon
              name={`${infoType[type].icon}`}
              size={16}
              color={infoType[type].color}
            />
            <Text
              className={`${infoType[type].textColor} font-extrabold text-md`}
            >
              {infoType[type].label}
            </Text>
          </View>

          <View className="mt-2 flex-row items-center gap-x-0.5">
            <Image
              source={
                ingredientImagesObj[currIngredient.category]![currIngredient.id]
              }
              className="aspect-square size-9"
            />
            <Text>{currIngredient.label}</Text>

            <Icon name="PlusCircle" size="20" />
          </View>
        </Card>
      </Pressable>
    )
  );
}
