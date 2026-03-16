import { Ingredient, IngredientKey } from '@/types/ingredient';
import { findIngredient } from '@/utils/searchIngredient';

export const enrichIngredient = <T extends { ingredientId?: IngredientKey }>(
  item: T,
): T & { ingredient?: Ingredient } => {
  if (!item.ingredientId) return item;

  const ingredient = findIngredient(item.ingredientId);

  if (!ingredient) return item;

  return { ...item, ingredient };
};
