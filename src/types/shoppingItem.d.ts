import { Ingredient, Food, FoodId, IngredientId } from '@/types/selectableItem';
import { Timestamp } from 'firebase/firestore';

type BaseShoppingItem = {
  /** uuid 아이디 */
  id: string;
  /** 구매 완료 여부 */
  isPurchased: boolean;
};

type FoodShoppingItem = BaseShoppingItem & {
  type: 'food';
  foodId: FoodId;
};

type IngredientShoppingItem = BaseShoppingItem & {
  type: 'ingredient';
  ingredientId: IngredientId;
};

export type ShoppingItem = IngredientShoppingItem | FoodShoppingItem;

export type EnrichedShoppingItem =
  | (IngredientShoppingItem & { ingredient: Ingredient })
  | (FoodShoppingItem & { food: Food });

export type PurchaseLog = {
  id: string;
  ingredientId?: IngredientName;
  name: string;
  quantity: number;
  unit?: string;
  storedAt: Timestamp;
  listId: string;
  userId: string;
};
