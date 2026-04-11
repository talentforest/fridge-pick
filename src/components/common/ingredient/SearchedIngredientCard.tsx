import IngredientImage from '@/components/common/ingredient/IngredientImage';
import Card from '@/components/common/ui/Card';
import Text from '@/components/common/ui/Text';
import { Ingredient } from '@/types/ingredient';

interface SearchedIngredientCardProps {
  ingredient: Ingredient;
  className?: string;
  textClassName?: string;
}

export default function SearchedIngredientCard({
  ingredient,
  className = '',
  textClassName = '',
}: SearchedIngredientCardProps) {
  const { label } = ingredient;

  return (
    <Card
      className={`items-center justify-between gap-y-1 rounded-2xl !border-0 !px-2 !pt-2 ${className}`}
    >
      <IngredientImage ingredient={ingredient} size={55} />

      <Text className={`line-clamp-1 text-center leading-5 ${textClassName}`}>
        {label}
      </Text>
    </Card>
  );
}
