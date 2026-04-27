import { StorageTypeId } from '@/types/storage';

export type RootStackParamList = {
  OnBoarding: undefined;
  Main: undefined;

  HomeScreen: undefined;

  /** [보관함] */
  StorageDetailScreen: { id: StorageTypeId };
  /** [보관함] => [보관함]에 식재료 추가 */
  AddStorageItemScreen: { id: StorageTypeId };

  /** 장보기목록 */
  ShoppingListScreen: undefined;
  /** 장보기목록 => 보관함에 추가할 식재료 */
  AddShoppingListScreen: undefined;

  /** 자주먹는 식재료 스크린 */
  FavoritesScreen: undefined;

  /** 전체 식사메뉴 스크린 */
  AllMealListScreen: undefined;
};

export type StackNavProp = NativeStackNavigationProp<RootStackParamList>;
