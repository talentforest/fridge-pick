export type ShoppingList = {
  id: string;
  title: string;
  status: 'active' | 'archived';
  createdAt: Timestamp;
  updatedAt: Timestamp;
};

export type ShoppingItem = {
  id: string; // firestore auto id

  /** Optional: Ingredient와 연결 (있으면 자동완성/아이콘 가능) */
  ingredientId?: string;

  /** Ingredient에 없는 자유 입력용 */
  label: string;

  /** 구매 완료 여부 */
  isPurchased: boolean;

  /** 기본 수량 (optional) */
  quantity: number;

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
