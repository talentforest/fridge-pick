import { ShoppingItem } from '@/types/shoppingItem';
import { Timestamp } from 'firebase/firestore';
import { nanoid } from 'nanoid/non-secure';

export const mockShoppingList: ShoppingItem[] = [
  {
    id: nanoid(),
    ingredientId: 'milk',
    label: '우유',
    quantity: 1,
    isPurchased: false,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
  {
    id: nanoid(),
    ingredientId: 'egg',
    label: '계란',
    quantity: 1,
    isPurchased: false,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
  {
    id: nanoid(),
    ingredientId: 'banana',
    label: '바나나',
    quantity: 1,
    isPurchased: false,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
  {
    id: nanoid(),
    label: '코스트코 딸기', // 비마스터 예시
    quantity: 1,
    isPurchased: false,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
  {
    id: nanoid(),
    ingredientId: 'onion',
    label: '양파',
    quantity: 1,
    isPurchased: false,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
  {
    id: nanoid(),
    ingredientId: 'cheese',
    label: '체다치즈',
    quantity: 1,
    isPurchased: false,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
  {
    id: nanoid(),
    ingredientId: 'spinach',
    label: '시금치',
    quantity: 1,
    isPurchased: false,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
];
