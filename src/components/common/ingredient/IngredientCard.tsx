import IngredientImage from '@/components/common/ingredient/IngredientImage';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import { Ingredient } from '@/types/ingredient';
import { View } from 'react-native';

interface FoodCardProps {
  ingredient: Ingredient;
  className?: string;
  textClassName?: string;
  isCompact?: boolean;
}

export default function IngredientCard({
  ingredient,
  className = '',
  textClassName = '',
  isCompact = false,
}: FoodCardProps) {
  const { label, expirationDays } = ingredient;

  return (
    <Card
      className={`items-center justify-between gap-y-1 rounded-2xl !px-2 !pt-2 ${isCompact ? '' : 'h-40'} ${className}`}
    >
      <IngredientImage ingredient={ingredient} size={55} />

      {isCompact ? (
        <Text className={`text-center leading-5 ${textClassName}`}>{label}</Text>
      ) : (
        <View className="items-center gap-y-2">
          <Text className={`text-center leading-5 ${textClassName}`}>{label}</Text>
          <Text className={'text-red-600'}>+{expirationDays}일</Text>
        </View>
      )}
    </Card>
  );
}
