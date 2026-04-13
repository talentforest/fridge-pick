import { image_empty_basket, ingredientImagesObj } from '@/constants';
import { CustomIngredient, Ingredient } from '@/types/ingredient';
import { Image } from 'react-native';

interface IngredientImageProps {
  ingredient?: Ingredient | CustomIngredient;
  size: number;
}

export default function IngredientImage({ ingredient, size }: IngredientImageProps) {
  return (
    <Image
      source={
        ingredient && ingredient.category !== 'noCategory'
          ? ingredientImagesObj[ingredient.category][
              ingredient?.imageName || ingredient.id
            ]
          : image_empty_basket
      }
      style={{ width: size, height: size }}
      className="aspect-square"
    />
  );
}
