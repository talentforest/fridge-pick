import { IngredientKey } from '@/types/selectableItem';

export type FavoriteIngredient = {
  /** string: Firestore doc id (slug) */
  id: string;

  ingredientId: IngredientKey;
};
