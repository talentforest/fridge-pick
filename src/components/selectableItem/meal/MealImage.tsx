import { categoryImagesObj, image_empty_plate } from '@/constants';
import { Meal } from '@/types/meal';
import { Image } from 'react-native';

interface IngredientImageProps {
  meal?: Meal;
  size: number;
}

export default function MealImage({ meal, size }: IngredientImageProps) {
  const getSource = () => {
    if (!meal) return image_empty_plate;

    return categoryImagesObj['meal'][meal?.imageName || meal.id];
  };

  return getSource() ? (
    <Image
      source={getSource()}
      style={{ width: size, height: size }}
      className="aspect-square"
    />
  ) : (
    <Image
      source={image_empty_plate}
      style={{ width: size, height: size }}
      className="aspect-square p-3"
    />
  );
}
