import { StorageTypeId } from '@/types/storage';

export type RootStackParamList = {
  OnBoarding: undefined;
  Main: undefined;

  HomeScreen: undefined;
  ShoppingListScreen: undefined;

  StorageDetailScreen: { id: StorageTypeId };
  ShoppingListDetailScreen: undefined;
  AddStorageItemScreen: { id: StorageTypeId };
};
