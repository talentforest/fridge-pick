import { IngredientKey } from '@/types/ingredient';

export type Favorites = {
  /** string: Firestore doc id (slug) */
  id: IngredientKey;

  /** IngredientKey */
  ingredientId: IngredientKey;
};
