import { StorageItem } from '@/types/storage';
import { DEFAULT_EXPIRATION_DAYS } from '@/constants/storage/storageObj';
import { formatDateString } from '@/utils/formatDate';
import { addDays } from 'date-fns';
import { nanoid } from 'nanoid/non-secure';

const now = new Date();

export const getExpriredAt = (days?: number) => {
  return formatDateString(addDays(now, days || DEFAULT_EXPIRATION_DAYS), 'yyyy-MM-dd');
};

export const mockStorageItemList: StorageItem[] = [
  {
    type: 'ingredient',
    id: '1',
    ingredientId: 'egg',
    storedAt: '2026-03-01',
    expiresAt: getExpriredAt(3),
    storage: { type: 'fridge', side: 'inner', section: '1' },
    memo: '유정란',
  },
  {
    type: 'ingredient',
    id: '2',
    ingredientId: 'daepa',
    storedAt: '2026-03-03',
    expiresAt: getExpriredAt(-2),
    storage: { type: 'fridge', side: 'inner', section: '1' },
  },
  {
    type: 'ingredient',
    id: '4',
    ingredientId: 'broccoli',
    storedAt: '2026-03-01',
    expiresAt: getExpriredAt(1),
    storage: { type: 'fridge', side: 'inner', section: '1' },
  },
  {
    type: 'ingredient',
    id: '4-potato',
    ingredientId: 'potato',
    storedAt: '2026-03-01',
    expiresAt: getExpriredAt(20),
    storage: { type: 'fridge', side: 'inner', section: '1' },
  },
  {
    type: 'ingredient',
    id: '5',
    ingredientId: 'aehobak',
    storedAt: '2026-03-02',
    expiresAt: getExpriredAt(2),
    storage: { type: 'fridge', side: 'inner', section: '1' },
  },
  {
    type: 'ingredient',
    id: '6',
    ingredientId: 'pyogo_beoseot',
    storedAt: '2026-03-03',
    expiresAt: getExpriredAt(3),
    storage: { type: 'fridge', side: 'inner', section: '1' },
  },

  {
    type: 'ingredient',
    id: '10',
    ingredientId: 'cheongyang_gochu',
    storedAt: '2026-03-02',
    expiresAt: getExpriredAt(3),
    storage: { type: 'fridge', side: 'inner', section: '1' },
  },
  {
    type: 'ingredient',
    id: '12',
    ingredientId: 'chicken_breast',
    storedAt: '2026-02-25',
    expiresAt: getExpriredAt(70),
    storage: { type: 'freezer', side: 'inner', section: '1' },
  },
  {
    type: 'ingredient',
    id: 'chicken_leg',
    ingredientId: 'chicken_leg',
    storedAt: '2026-02-25',
    expiresAt: getExpriredAt(14),
    storage: { type: 'freezer', side: 'inner', section: '1' },
  },
  {
    type: 'ingredient',
    id: '13',
    ingredientId: 'duck_slice',
    storedAt: '2026-02-28',
    expiresAt: getExpriredAt(-5),
    storage: { type: 'freezer', side: 'inner', section: '1' },
  },
  // {
  //   type: 'ingredient',
  //   id: '14',
  //   ingredientId: 'duck_slice_smoked',
  //   storedAt: '2026-02-25',
  //   expiresAt: getExpriredAt(-30),
  //   storage: { type: 'freezer', side: 'inner', section: '1' },
  // },
  {
    type: 'ingredient',
    id: '15',
    ingredientId: 'beef_brisket',
    storedAt: '2026-06-11',
    expiresAt: getExpriredAt(14),
    storage: { type: 'freezer', side: 'inner', section: '1' },
  },
  {
    type: 'ingredient',
    id: '17',
    ingredientId: 'pork_neck',
    storedAt: '2026-02-27',
    expiresAt: getExpriredAt(7),
    storage: { type: 'freezer', side: 'inner', section: '1' },
  },
  {
    type: 'ingredient',
    id: '18',
    ingredientId: 'baby_leaf',
    storedAt: '2026-02-21',
    expiresAt: getExpriredAt(4),
    storage: { type: 'fridge', side: 'inner', section: '1' },
  },
  {
    type: 'ingredient',
    id: '21',
    ingredientId: 'spaghetti_myeon',
    storedAt: '2026-04-28',
    expiresAt: getExpriredAt(365),
    storage: { type: 'pantry', side: 'inner', section: '1' },
  },
  {
    type: 'ingredient',
    id: '22',
    ingredientId: 'fusilli',
    storedAt: '2026-02-15',
    expiresAt: getExpriredAt(365),
    storage: { type: 'pantry', side: 'inner', section: '1' },
  },
  {
    type: 'ingredient',
    id: '23',
    ingredientId: 'memil_garu',
    storedAt: '2026-02-18',
    expiresAt: getExpriredAt(365),
    storage: { type: 'pantry', side: 'inner', section: '1' },
  },
  {
    type: 'ingredient',
    id: '24',
    ingredientId: 'ssal_guksu_myeon',
    storedAt: '2026-02-19',
    expiresAt: getExpriredAt(365),
    storage: { type: 'pantry', side: 'inner', section: '1' },
  },
  {
    type: 'ingredient',
    id: '25',
    ingredientId: 'dangmyeon',
    storedAt: '2026-02-15',
    expiresAt: getExpriredAt(365),
    storage: { type: 'pantry', side: 'inner', section: '1' },
  },
  {
    type: 'ingredient',
    id: '26',
    ingredientId: 'rice_paper',
    storedAt: '2026-02-10',
    expiresAt: getExpriredAt(365),
    storage: { type: 'pantry', side: 'inner', section: '1' },
  },

  {
    type: 'ingredient',
    id: '29',
    ingredientId: 'tteokbokki_tteok',
    storedAt: '2026-03-03',
    expiresAt: getExpriredAt(30),
    storage: { type: 'fridge', side: 'inner', section: '1' },
  },
];

export const initialCustomStorageItem: StorageItem = {
  type: 'ingredient',
  id: nanoid(),
  storage: { type: 'fridge', side: 'inner', section: '1' },
  storedAt: formatDateString(now, 'yyyy-MM-dd'),
  expiresAt: formatDateString(addDays(now, DEFAULT_EXPIRATION_DAYS), 'yyyy-MM-dd'),
  memo: '',
  ingredientId: `custom:ingredient:`,
} as const;
