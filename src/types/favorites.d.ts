import { IngredientKey } from '@/types/ingredient';

export type FavoriteIngredient = {
  /** string: Firestore doc id (slug) */
  id: string;

  /** IngredientKey */
  ingredientId: IngredientKey;
};
