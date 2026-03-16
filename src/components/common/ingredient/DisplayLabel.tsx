import Text from '@/components/common/ui/Text';
import { Ingredient } from '@/types/ingredient';

type LabelSource =
  | { customLabel: string; ingredient?: never }
  | { customLabel?: never; ingredient: Ingredient };

interface IngredientLabelProps<T extends LabelSource> {
  item: T;
  className?: string;
}

export default function DisplayLabel<T extends LabelSource>({
  item,
  className = '',
}: IngredientLabelProps<T>) {
  return (
    <Text className={className}>
      {'customLabel' in item ? item.customLabel : item.ingredient.label}
    </Text>
  );
}
