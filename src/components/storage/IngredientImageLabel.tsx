import IngredientImage from '@/components/common/ingredient/IngredientImage';
import Text from '@/components/common/ui/Text';
import { categoryObj } from '@/constants';
import { Ingredient } from '@/types/ingredient';
import { View } from 'react-native';

interface IngredientImageLabelProps {
  ingredient?: Ingredient;
  customLabel?: string;
}

export default function IngredientImageLabel({
  ingredient,
  customLabel,
}: IngredientImageLabelProps) {
  return (
    <View className="flex-1 flex-row items-center gap-x-3">
      <IngredientImage ingredient={ingredient} size={85} />

      <View className="flex-1 gap-y-2">
        <Text className="line-clamp-1 text-lg">{customLabel || ingredient?.label}</Text>

        {ingredient && <Text>{categoryObj[ingredient.category].label}</Text>}
      </View>
    </View>
  );
}
