import { StorageTypeId } from '@/types/storage';

export type RootStackParamList = {
  OnBoarding: undefined;
  Main: undefined;
  Home: undefined;
  StorageDetail: { id: StorageTypeId };
  ShoppingList: undefined;
};
