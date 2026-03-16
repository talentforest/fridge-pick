import { IngredientKey } from '@/types/ingredient';
import { Timestamp } from 'firebase/firestore';

export type ShoppingList = {
  id: string;
  title: string;
  status: 'active' | 'archived';
  createdAt: Timestamp;
  updatedAt: Timestamp;
};

type BaseShoppingItem = {
  /** 유니크 아이디 */
  id: string;

  /** 구매 완료 여부 */
  isPurchased: boolean;
};

type ShoppingItemWithIngredient = BaseShoppingItem & {
  ingredientId: IngredientKey;
  customLabel?: never;
};

type ShoppingItemCustom = BaseShoppingItem & {
  ingredientId?: never;
  customLabel: string;
};

export type ShoppingItem = ShoppingItemWithIngredient | ShoppingItemCustom;

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
