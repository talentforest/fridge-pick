import { ShoppingItem } from '@/types/shoppingList';
import { DocMeta } from '@/types/storage';
import { Timestamp } from 'firebase/firestore';
import { nanoid } from 'nanoid/non-secure';

export const mockShoppingList: (ShoppingItem & DocMeta)[] = [
  {
    id: nanoid(),
    ingredientId: 'milk',
    isPurchased: false,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
  {
    id: nanoid(),
    ingredientId: 'egg',
    isPurchased: false,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
  {
    id: nanoid(),
    ingredientId: 'banana',
    isPurchased: false,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
  {
    id: nanoid(),
    customLabel: '코스트코 딸기', // 비마스터 예시
    isPurchased: false,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
  {
    id: nanoid(),
    ingredientId: 'onion',
    isPurchased: false,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
  {
    id: nanoid(),
    ingredientId: 'cheese',
    isPurchased: false,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
  {
    id: nanoid(),
    ingredientId: 'spinach',
    isPurchased: false,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
];
