import { StorageItem, CustomStorageItem } from '@/types/storage';
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
    purchasedAt: '2026-03-01',
    expiresAt: getExpriredAt(3),
    storage: { type: 'fridge', side: 'inner', section: '1' },
    memo: '유정란',
  },
  {
    type: 'ingredient',
    id: '2',
    ingredientId: 'daepa',
    purchasedAt: '2026-03-03',
    expiresAt: getExpriredAt(2),
    storage: { type: 'fridge', side: 'inner', section: '1' },
  },
  {
    type: 'ingredient',
    id: '4',
    ingredientId: 'broccoli',
    purchasedAt: '2026-03-01',
    expiresAt: getExpriredAt(1),
    storage: { type: 'fridge', side: 'inner', section: '1' },
  },
  {
    type: 'ingredient',
    id: '4-potato',
    ingredientId: 'potato',
    purchasedAt: '2026-03-01',
    expiresAt: getExpriredAt(20),
    storage: { type: 'fridge', side: 'inner', section: '1' },
  },
  {
    type: 'ingredient',
    id: '5',
    ingredientId: 'aehobak',
    purchasedAt: '2026-03-02',
    expiresAt: getExpriredAt(2),
    storage: { type: 'fridge', side: 'inner', section: '1' },
  },
  {
    type: 'ingredient',
    id: '6',
    ingredientId: 'pyogo_beoseot',
    purchasedAt: '2026-03-03',
    expiresAt: getExpriredAt(3),
    storage: { type: 'fridge', side: 'inner', section: '1' },
  },

  {
    type: 'ingredient',
    id: '10',
    ingredientId: 'cheongyang_gochu',
    purchasedAt: '2026-03-02',
    expiresAt: getExpriredAt(3),
    storage: { type: 'fridge', side: 'inner', section: '1' },
  },
  {
    type: 'ingredient',
    id: '12',
    ingredientId: 'chicken_breast',
    purchasedAt: '2026-02-25',
    expiresAt: getExpriredAt(70),
    storage: { type: 'freezer', side: 'inner', section: '1' },
  },
  {
    type: 'ingredient',
    id: 'chicken_leg',
    ingredientId: 'chicken_leg',
    purchasedAt: '2026-02-25',
    expiresAt: getExpriredAt(14),
    storage: { type: 'freezer', side: 'inner', section: '1' },
  },
  {
    type: 'ingredient',
    id: '13',
    ingredientId: 'duck_slice',
    purchasedAt: '2026-02-28',
    expiresAt: getExpriredAt(-5),
    storage: { type: 'freezer', side: 'inner', section: '1' },
  },
  {
    type: 'ingredient',
    id: '14',
    ingredientId: 'duck_slice_smoked',
    purchasedAt: '2026-02-25',
    expiresAt: getExpriredAt(-30),
    storage: { type: 'freezer', side: 'inner', section: '1' },
  },
  {
    type: 'ingredient',
    id: '15',
    ingredientId: 'beef_brisket',
    purchasedAt: '2026-06-11',
    expiresAt: getExpriredAt(14),
    storage: { type: 'freezer', side: 'inner', section: '1' },
  },
  {
    type: 'ingredient',
    id: '17',
    ingredientId: 'pork_neck',
    purchasedAt: '2026-02-27',
    expiresAt: getExpriredAt(7),
    storage: { type: 'freezer', side: 'inner', section: '1' },
  },
  {
    type: 'ingredient',
    id: '18',
    ingredientId: 'baby_leaf',
    purchasedAt: '2026-02-21',
    expiresAt: getExpriredAt(4),
    storage: { type: 'fridge', side: 'inner', section: '1' },
  },
  {
    type: 'ingredient',
    id: '20',
    ingredientId: 'pork_belly',
    purchasedAt: '2026-02-24',
    expiresAt: '2026-07-28',
    storage: { type: 'freezer', side: 'inner', section: '1' },
  },

  {
    type: 'ingredient',
    id: '21',
    ingredientId: 'spaghetti_myeon',
    purchasedAt: '2026-04-28',
    expiresAt: getExpriredAt(365),
    storage: { type: 'pantry', side: 'inner', section: '1' },
  },
  {
    type: 'ingredient',
    id: '22',
    ingredientId: 'fusilli',
    purchasedAt: '2026-02-15',
    expiresAt: getExpriredAt(365),
    storage: { type: 'pantry', side: 'inner', section: '1' },
  },
  {
    type: 'ingredient',
    id: '23',
    ingredientId: 'memil_garu',
    purchasedAt: '2026-02-18',
    expiresAt: getExpriredAt(365),
    storage: { type: 'pantry', side: 'inner', section: '1' },
  },
  {
    type: 'ingredient',
    id: '24',
    ingredientId: 'ssal_guksu_myeon',
    purchasedAt: '2026-02-19',
    expiresAt: getExpriredAt(365),
    storage: { type: 'pantry', side: 'inner', section: '1' },
  },
  {
    type: 'ingredient',
    id: '25',
    ingredientId: 'dangmyeon',
    purchasedAt: '2026-02-15',
    expiresAt: getExpriredAt(365),
    storage: { type: 'pantry', side: 'inner', section: '1' },
  },
  {
    type: 'ingredient',
    id: '26',
    ingredientId: 'rice_paper',
    purchasedAt: '2026-02-10',
    expiresAt: getExpriredAt(365),
    storage: { type: 'pantry', side: 'inner', section: '1' },
  },

  {
    type: 'ingredient',
    id: '29',
    ingredientId: 'tteokbokki_tteok',
    purchasedAt: '2026-03-03',
    expiresAt: getExpriredAt(30),
    storage: { type: 'fridge', side: 'inner', section: '1' },
  },
];

export const initialCustomStorageItem: CustomStorageItem = {
  type: 'custom',
  id: nanoid(),
  customLabel: '',
  storage: { type: 'fridge' as const },
  purchasedAt: formatDateString(now, 'yyyy-MM-dd'),
  expiresAt: formatDateString(addDays(now, DEFAULT_EXPIRATION_DAYS), 'yyyy-MM-dd'),
  memo: '',
};
