import { CustomIngredient, Ingredient } from '@/types/ingredient';
import { Meal } from '@/types/meal';
import { ShoppingItem } from '@/types/shoppingList';
import { StorageItem } from '@/types/storage';

/** 선택 가능한 것 */
export type SelectableItem = Ingredient | Meal | CustomIngredient;

/** 실제 사용자 데이터
 * - 보관함 아이템
 * - 장보기 목록 아이템
 */
export type TrackedItem = StorageItem | ShoppingItem;
