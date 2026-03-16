import IngredientImage from '@/components/common/ingredient/IngredientImage';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import { Ingredient } from '@/types/ingredient';
import { View } from 'react-native';

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
  const { label, expirationDays } = ingredient;

  return (
    <Card
      className={`h-40 items-center justify-between rounded-2xl ${className}`}
    >
      <IngredientImage ingredient={ingredient} size={55} />

      <View className="items-center gap-y-2">
        <Text className={textClassName}>{label}</Text>
        <Text className={'text-red-600'}>+{expirationDays}일</Text>
      </View>
    </Card>
  );
}
