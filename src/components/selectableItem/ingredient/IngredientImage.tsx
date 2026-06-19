import { image_empty_basket, categoryImagesObj } from '@/constants';
import { Ingredient } from '@/types/ingredient';
import { Image } from 'react-native';

interface IngredientImageProps {
  ingredient?: Ingredient;
  size: number;
}

export default function IngredientImage({ ingredient, size }: IngredientImageProps) {
  const getSource = () => {
    if (!ingredient) return image_empty_basket;

    if (ingredient.category === 'noCategory') return image_empty_basket;

    return categoryImagesObj[ingredient.category][ingredient?.imageName || ingredient.id];
  };

  return (
    <Image
      source={getSource()}
      style={{ width: size, height: size }}
      className="aspect-square"
    />
  );
}
