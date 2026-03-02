import { StockUnit } from '@/types/ingredient';

export type StorageType = 'freezer' | 'fridge' | 'pantry';

export type StorageItem = {
  id: string; // firestore auto id

  /** FK */
  ingredientId: string;

  /** 사용자 커스텀 이름 */
  customName?: string;

  /** 현재 수량 */
  quantity: number;

  /** 항상 저장 (override 여부와 무관) */
  unitLabel: StockUnit;

  /** 구매 날짜 (YYYY-MM-DD) */
  purchasedDate: string;

  /** 실제 유통기한 날짜 */
  expiresAt: string;

  /** 실제 보관 위치 (항상 저장) */
  storage: StorageType;

  memo?: string;

  createdAt: Timestamp;
  updatedAt: Timestamp;
};

export type ConsumptionLog = {
  id: string;

  ingredientId: string;

  quantity: number;

  consumedAt: string; // YYYY-MM-DD

  sourceInventoryId?: string;

  createdAt: Timestamp;
};
