import { ShoppingItem } from '@/types/shoppingList';
import { DocMeta } from '@/types/storage';
import { Timestamp } from 'firebase/firestore';
import { nanoid } from 'nanoid/non-secure';

export const mockShoppingList: (ShoppingItem & DocMeta)[] = [
  {
    type: 'custom',
    id: nanoid(),
    customLabel: '코스트코 딸기', // 비마스터 예시
    isPurchased: false,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
  {
    type: 'ingredient',
    id: nanoid(),
    ingredientId: 'tangerine',
    isPurchased: false,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
  {
    type: 'meal',
    id: nanoid(),
    mealId: 'abalone_porridge',
    isPurchased: false,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
];
