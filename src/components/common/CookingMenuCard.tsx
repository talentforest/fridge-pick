import Indicator from '@/components/common/Indicator';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import { ingredientImagesObj } from '@/constants';
import { CookingMenu } from '@/types/cookingMenu';
import { Image, View } from 'react-native';

interface CookingCardProps {
  cookingMenu: CookingMenu;
  className?: string;
}

export default function CookingMenuCard({
  cookingMenu: { ingredientList, name, filterList, time },
  className = '',
}: CookingCardProps) {
  return (
    <Card className={`${className} bg-white items-start p-5`}>
      <View className="mb-1 w-full justify-between gap-4">
        <Text className="line-clamp-2 text-lg font-extrabold">{name}</Text>
        <View className="flex-row gap-x-3">
          <Indicator type="time" value={time} />
          <Indicator type="total" value={ingredientList.length} />
        </View>
      </View>

      {ingredientList.length > 0 && (
        <View className="flex-row flex-wrap gap-y-2">
          {ingredientList.slice(0, 8).map(({ category, label, name }) => (
            <View
              key={label}
              className="h-20 items-center justify-between px-1.5"
            >
              <Image
                source={ingredientImagesObj[category][name]}
                style={{ width: 60, height: 60 }}
                className="aspect-square flex-1 "
              />
              <Text className={`text-md mt-0.5 text-center`}>{label}</Text>
            </View>
          ))}

          {ingredientList.length > 8 && (
            <View className="mb-0.5 ml-auto justify-end">
              <Text className="text-sm">...더보기</Text>
            </View>
          )}
        </View>
      )}
    </Card>
  );
}
