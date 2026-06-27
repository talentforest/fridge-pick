import { ShoppingItem } from '@/types/shoppingList';

import { storageObj } from '@/constants';
import {
  Ingredient,
  Meal,
  MealKey,
  PreparedFoodKey,
  PreparedFood,
  FoodSource,
} from '@/types/selectableItem';
import { Timestamp } from 'firebase/firestore';

/** 사용자 데이터 (User Data)
 * ────────────────────────────────────
 * TrackedItem
 * ├─ StorageItem
 * ├─ ShoppingItem
 * └─ TodayMeal
 */
export type TrackedItem = StorageItem | ShoppingItem;

/* -------------------------------------------------------------------------- */
/*                              Common Property                               */
/* -------------------------------------------------------------------------- */
export type DocMeta = {
  /** 메타데이터 */
  createdAt: Timestamp;
  updatedAt: Timestamp;
};

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

export type EditableProperty = 'storage' | 'expiresAt' | 'memo' | 'foodSource';

/* -------------------------------------------------------------------------- */
/*                                 StorageItem                                */
/* -------------------------------------------------------------------------- */
type BaseStorageItem = {
  /** uuid */
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

type PreparedFoodStorageItem = BaseStorageItem & {
  type: 'preparedFood';
  preparedFoodId: PreparedFoodKey;
  foodSource?: FoodSource;
};

type MealStorageItem = BaseStorageItem & {
  type: 'meal';
  mealId: MealKey;
  foodSource?: FoodSource;
}; // 커스텀 Meal은 없음.

type CustomStorageItem = BaseStorageItem & {
  type: 'custom';
  customLabel: string;
  ingredientId?: never;
};

export type StorageItem =
  | IngredientStorageItem
  | PreparedFoodStorageItem
  | MealStorageItem
  | CustomStorageItem;

type EditableMealStorageItem = Pick<MealStorageItem, EditableProperty>;

export type EditableStorageItem = Partial<{
  storage: StorageSpace;
  expiresAt: string;
  memo: string;
  foodSource: FoodSource;
  customLabel: string;
}>;

export type EnrichedStorageItem =
  | CustomStorageItem
  | (IngredientStorageItem & { ingredient: Ingredient })
  | (PreparedFoodStorageItem & { preparedFood: PreparedFood })
  | (MealStorageItem & { meal: Meal });

// TODO: ComsumptionLog 작성하기

/* -------------------------------------------------------------------------- */
/*                             Today Meal Item                                */
/*                             = 이번엔 어떻게 먹는가                              */
/* -------------------------------------------------------------------------- */

/** [메인요리 | 반찬] 타입구분
 * “이 음식이 식사의 중심이면 main, 아니면 side”
 */
export type TodayMeal = {
  consumableFood: EnrichedConsumableFoodWithFilterList;
  role: 'main' | 'side'; // 여기서 main과 side를 한번더 구분하는 이유는 오늘의 식사에서 메인 메뉴는 무조건 하나여야함. 만약 메인 메뉴를 두개 골랐는데 메인으로 선정된 메뉴 말고 다른 메뉴를 메인으로 올리고 싶을 때 수정 가능하도록
  consumeMethod: FoodSource;
  selectedAt: string;
};
