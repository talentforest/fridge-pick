import { storageObj } from '@/constants';
import { Ingredient, IngredientKey } from '@/types/ingredient';
import { StockUnit } from '@/types/unit';

export type Storage = typeof storageObj;
export type StorageTypeId = keyof Storage;
export type StorageTypeLabel = Storage[StorageTypeId]['label'];

export type StorageSide = Storage[StorageTypeId]['side'];
export type StorageSideId = keyof StorageSide;
export type StorageSideLabel = StorageSide[StorageSideId]['label'];

export type StorageSection = StorageSide[StorageSideId]['sections'];
export type StorageSectionId = StorageSection[number]['id'];
export type StorageSectionLabel = StorageSection[number]['label'];

export type StorageSpace = {
  type: StorageTypeId;
  side?: StorageSideId;
  section?: StorageSectionId;
};

export type StorageItem = {
  id: string; // firestore auto id

  /** FK */
  ingredientId: IngredientKey;

  /** 사용자 커스텀 이름 */
  customLabel?: string;

  /** 항상 저장 (override 여부와 무관) */
  unitLabel: StockUnit;

  /** 구매 날짜 (YYYY-MM-DD) */
  purchasedDate: string;

  /** 실제 보관 위치 (항상 저장) */
  storage: StorageSpace;

  /** 실제 유통기한 날짜 Optional 없으면 기본 식재료 정보인 expirationDays 이용 */
  expiresAt?: string;

  memo?: string;

  quantity?: number;

  createdAt: Timestamp;
  updatedAt: Timestamp;
};

export type ConsumptionLog = {
  id: string;

  ingredientId: string;

  quantity: number;

  consumedAt: string; // YYYY-MM-DD

  sourceStorageId?: string;

  createdAt: Timestamp;
};

export type EnrichStorageItem = StorageItem & { ingredient: Ingredient };
