import type { storageObj } from '@/constants';
import type {
  Ingredient,
  Food,
  FoodForm,
  IngredientVariantKey,
  FoodId,
  IngredientId,
  FoodVariantId,
} from '@/types/selectableItem';
import type { ShoppingItem } from '@/types/shoppingItem';
import type { Timestamp } from 'firebase/firestore';

/* -------------------------------------------------------------------------- */
/*                                   Storage                                  */
/* -------------------------------------------------------------------------- */
export type ExpirationStatus = 'safe' | 'expired' | 'expiredSoon' | 'unknown';

export type Storage = typeof storageObj;
export type StorageTypeId = keyof Storage;
export type StorageTypeLabel = Storage[StorageTypeId]['label'];

export type StorageSide = Storage[StorageTypeId]['side'];
export type StorageSideId = keyof StorageSide;
export type StorageSideLabel = StorageSide[StorageSideId]['label'];

export type StorageSection = StorageSide[StorageSideId]['sections'];
export type StorageSectionId = StorageSection[number]['id'];
export type StorageSectionLabel = StorageSection[number]['label'];

export type StorageLocation = {
  type: StorageTypeId;
  side?: StorageSideId;
  section?: StorageSectionId;
};

/* -------------------------------------------------------------------------- */
/*                                 StorageItem                                */
/* -------------------------------------------------------------------------- */

export type DocMeta = {
  /** 메타데이터 */
  createdAt: Timestamp;
  updatedAt: Timestamp;
};

export type StorageItemDocument = StorageItem & DocMeta;

/** 내가 실제 갖고 있는 식재료 정보
 * ingredientId 속성으로 기본 식재료 정보를 찾아 사용
 */
type BaseStorageItem = {
  id: string;
  storage: StorageLocation;
  /** YYYY-MM-DD 형식 */
  storedAt: string;
  /** YYYY-MM-DD 형식 */
  expiresAt: string;
  /** Optional */
  memo?: string;
};

type IngredientStorageItem = BaseStorageItem & {
  type: 'ingredient';
  ingredientId: IngredientId;
  variantId?: IngredientVariantKey;
};

type FoodStorageItem = BaseStorageItem & {
  type: 'food';
  foodId: FoodId;
  variantId?: FoodVariantId;
  foodForm?: FoodForm;
  isLeftover?: boolean;
};

export type StorageItem = IngredientStorageItem | FoodStorageItem;

export type EditableStorageItem = Partial<{
  storage: StorageLocation;
  expiresAt: string;
  memo: string;
}>;

export type EnrichedStorageItem =
  | (IngredientStorageItem & { ingredient: Ingredient })
  | (FoodStorageItem & { food: Food });

// TODO: ComsumptionLog 작성하기

/** 사용자 데이터 (User Data)
 * ────────────────────────────────────
 * TrackedItem
 * ├─ StorageItem
 * └─ ShoppingItem
 */
export type TrackedItem = StorageItem | ShoppingItem;
