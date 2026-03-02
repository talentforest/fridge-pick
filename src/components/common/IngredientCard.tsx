import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import { ingredientImagesObj } from '@/constants';
import { Ingredient } from '@/types/ingredient';
import { Dimensions, Image, View } from 'react-native';

interface FoodCardProps {
  itemWidth: number;
  isCurrIndex?: boolean;
  ingredient: Ingredient;
}

export default function IngredientCard({
  itemWidth,
  isCurrIndex,
  ingredient: { label, categories, id, expirationDays },
}: FoodCardProps) {
  const { width } = Dimensions.get('window');

  const CARD_WIDTH = width * itemWidth;

  return (
    <Card
      style={{
        width: CARD_WIDTH,
        transform: !isCurrIndex ? [{ scale: 0.9 }] : [],
      }}
      className={`h-40 items-center justify-between rounded-2xl bg-card ${isCurrIndex ? 'border border-indigo-300 bg-indigo-700' : 'opacity-80'}`}
    >
      {categories.map((category) => (
        <Image
          key={category}
          source={ingredientImagesObj[category][id]}
          style={{ width: 50, height: 50 }}
          className="mb-auto aspect-square"
        />
      ))}

      <View className="items-center gap-y-2">
        <Text className={`${isCurrIndex ? 'font-extrabold text-white' : ''}`}>
          {label}
        </Text>
        <Text className={`text-base ${isCurrIndex ? 'text-white' : ''}`}>
          +{expirationDays}일
        </Text>
      </View>
    </Card>
  );
}
