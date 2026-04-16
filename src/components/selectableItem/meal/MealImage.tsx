import { image_empty_basket, categoryImagesObj } from '@/constants';
import { Meal } from '@/types/meal';
import { Image } from 'react-native';

interface IngredientImageProps {
  meal?: Meal;
  size: number;
}

export default function MealImage({ meal, size }: IngredientImageProps) {
  const getSource = () => {
    if (!meal) return image_empty_basket;

    return categoryImagesObj['meal'][meal?.imageName || meal.id];
  };

  return (
    <Image
      source={getSource()}
      style={{ width: size, height: size }}
      className="aspect-square"
    />
  );
}
