import { storageObj } from '@/constants';
import { Ingredient, IngredientKey } from '@/types/ingredient';
import { Meal, MealKey } from '@/types/meal';
import { Timestamp } from 'firebase/firestore';

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

export type StorageSpace = {
  type: StorageTypeId;
  side?: StorageSideId;
  section?: StorageSectionId;
};

export type DocMeta = {
  /** 메타데이터 */
  createdAt: Timestamp;
  updatedAt: Timestamp;
};

/** 내가 실제 갖고 있는 식재료 정보
 * ingredientId 속성으로 기본 식재료 정보를 찾아 사용
 */
type BaseStorageItem = {
  id: string;
  storage: StorageSpace;
  /** YYYY-MM-DD */
  purchasedAt: string;
  /** YYYY-MM-DD 형식 */
  expiresAt: string;
  /** Optional */
  memo?: string;
};

type IngredientStorageItem = BaseStorageItem & {
  type: 'ingredient';
  ingredientId: IngredientKey;
  customLabel?: never;
};

type CustomStorageItem = BaseStorageItem & {
  type: 'custom';
  customLabel: string;
  ingredientId?: never;
};

type MealStorageItem = BaseStorageItem & {
  type: 'meal';
  mealId: MealKey;
}; // 커스텀 Meal은 없음.

export type StorageItem = IngredientStorageItem | CustomStorageItem | MealStorageItem;

type EditableCustomStorageItem = Pick<CustomStorageItem, 'customLabel'>;
type EditableStorageItem = Pick<IngredientStorageItem, 'storage' | 'expiresAt' | 'memo'> &
  EditableCustomStorageItem;
type EditableMealStorageItem = Pick<MealStorageItem, 'storage' | 'expiresAt' | 'memo'>;

export type EditableStorageItemData = EditableStorageItem;

export type EnrichStorageItem =
  | CustomStorageItem
  | (IngredientStorageItem & { ingredient: Ingredient })
  | (MealStorageItem & { meal: Meal });

// TODO: ComsumptionLog 작성하기
