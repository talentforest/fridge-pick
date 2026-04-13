import { storageObj } from '@/constants';
import { Ingredient, IngredientKey } from '@/types/ingredient';
import { Timestamp } from 'firebase/firestore';

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
  /** 이름은 커스텀했는데 ingredient 정보를 연결하는 경우. */
  customLabel?: string;
};

type CustomStorageItem = BaseStorageItem & {
  type: 'custom';
  customLabel: string;
  ingredientId?: never;
};

export type StorageItem = IngredientStorageItem | CustomStorageItem;

export type EditableStorageItemData = Pick<
  StorageItem,
  'customLabel' | 'storage' | 'expiresAt' | 'memo'
>;

export type EnrichStorageItem = StorageItem & { ingredient?: Ingredient };

// TODO: ComsumptionLog 작성하기
