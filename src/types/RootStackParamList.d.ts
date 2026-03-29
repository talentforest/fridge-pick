import { StorageTypeId } from '@/types/storage';

export type RootStackParamList = {
  OnBoarding: undefined;
  Main: undefined;

  Home: undefined;
  ShoppingList: undefined;

  StorageDetail: { id: StorageTypeId };
  ShoppingListDetail: undefined;
  AddStorageItem: { id: StorageTypeId };
};
