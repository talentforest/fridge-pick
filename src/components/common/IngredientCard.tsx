import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import { ingredientImagesObj } from '@/constants';
import { Ingredient } from '@/types/ingredient';
import { Image, View } from 'react-native';

interface FoodCardProps {
  ingredient: Ingredient;
  className?: string;
  isCurrIndex?: boolean;
  textClassName?: string;
}

export default function IngredientCard({
  ingredient,
  className = '',
  isCurrIndex,
  textClassName = '',
}: FoodCardProps) {
  const { label, category, id, expirationDays } = ingredient;

  return (
    <Card
      className={`h-40 items-center justify-between rounded-2xl ${className}`}
    >
      {category[0] && (
        <Image
          source={ingredientImagesObj[category]![id]}
          style={{ width: 50, height: 50 }}
          className="mb-auto aspect-square"
        />
      )}

      <View className="items-center gap-y-2">
        <Text className={textClassName}>{label}</Text>
        <Text className={'text-red-600'}>+{expirationDays}일</Text>
      </View>
    </Card>
  );
}
