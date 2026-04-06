import { ShoppingItem } from '@/types/shoppingList';
import { DocMeta } from '@/types/storage';
import { Timestamp } from 'firebase/firestore';
import { nanoid } from 'nanoid/non-secure';

export const mockShoppingList: (ShoppingItem & DocMeta)[] = [
  {
    id: nanoid(),
    customLabel: '코스트코 딸기', // 비마스터 예시
    isPurchased: false,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
];
