export type ShoppingList = {
  id: string;
  title: string;
  status: 'active' | 'archived';
  createdAt: Timestamp;
  updatedAt: Timestamp;
};

export type ShoppingItem = {
  id: string;
  ingredientId?: IngredientName;
  name: string;
  quantity: number;
  unit?: string;

  isChecked: boolean; // 구매 완료 표시

  createdAt: Timestamp;
  updatedAt: Timestamp;
};

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
