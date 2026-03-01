import { FoodCategory, ingredientObj } from '@/constants';
import { ImageSourcePropType } from 'react-native';

export type StorageType = '냉장' | '냉동' | '실온';

export type Ingredient = {
  label: string; // TODO: 아래 타입으로 변경
  name: string; // TODO: 아래 타입으로 변경
  category: FoodCategory;
  icon: ImageSourcePropType | string; // TODO: 추후 string 제거
  defaultStorage: StorageType;
  expirationDate: number;

  synonyms?: readonly string[]; // 검색용
  tags?: readonly string[]; // 관련 태그
};

export type IngredientKey =
  | NoodleIngredientKey
  | VegetableIngredientKey
  | FruitIngredientKey;

export type NoodleIngredientKey = keyof (typeof ingredientObj)['noodle'];
export type VegetableIngredientKey = keyof (typeof ingredientObj)['vegetable'];
export type FruitIngredientKey = keyof (typeof ingredientObj)['fruit'];
