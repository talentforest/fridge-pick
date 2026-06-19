import { Ingredient, IngredientKey } from '@/types/ingredient';
import { Meal, MealKey } from '@/types/meal';
import { Timestamp } from 'firebase/firestore';

type BaseShoppingItem = {
  /** uuid 아이디 */
  id: string;
  /** 구매 완료 여부 */
  isPurchased: boolean;
};

type MealShoppingItem = BaseShoppingItem & {
  type: 'meal';
  mealId: MealKey;
  /** 등록된 완성요리 아이템에서는 customLabel 원천 차단 */
  customLabel?: never;
};

type IngredientShoppingItem = BaseShoppingItem & {
  type: 'ingredient';
  ingredientId: IngredientKey;
  /** 등록된 식재료 아이템에서는 customLabel 원천 차단 */
  customLabel?: never;
};

type CustomShoppingItem = BaseShoppingItem & {
  type: 'custom';
  customLabel: string;
  /** 커스텀 식재료 아이템에서는 ingredientId 원천 차단 */
  ingredientId?: never;
};

export type ShoppingItem = IngredientShoppingItem | CustomShoppingItem | MealShoppingItem;
export type EnrichShoppingItem =
  | (IngredientShoppingItem & { ingredient: Ingredient })
  | (MealShoppingItem & { meal: Meal })
  | CustomShoppingItem;

export type PurchaseLog = {
  id: string;
  ingredientId?: IngredientName;
  name: string;
  quantity: number;
  unit?: string;

  purchasedAt: Timestamp;
  listId: string;

  userId: string;
};
