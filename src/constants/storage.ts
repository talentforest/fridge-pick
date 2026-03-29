import { StorageItem } from '@/types/storage';

export const DEFAULT_EXPIRATION_DAYS = 7;
export const DEFAULT_STORAGE = 'fridge' as const;

export const colorByStorage = {
  blue: {
    bg: 'bg-blue-50',
    pointBg: 'bg-blue-100',
    border: '!border-blue-200',
    text: 'text-blue-700',
  },
  yellow: {
    bg: 'bg-amber-100',
    pointBg: 'bg-amber-200',
    border: '!border-amber-300',
    text: 'text-amber-700',
  },
  cyan: {
    bg: 'bg-cyan-100',
    pointBg: 'bg-cyan-200',
    border: '!border-cyan-300',
    text: 'text-cyan-800',
  },
};

export const storageObj = {
  /** 냉동실 */
  freezer: {
    id: 'freezer',
    label: '냉동실',
    comfortLabel: '냉동',
    side: {
      inner: {
        id: 'inner',
        label: '안쪽',
        sections: [{ id: '1', label: '1번칸' }],
      },
      door: {
        id: 'door',
        label: '문쪽',
        sections: [{ id: '1', label: '1번칸' }],
      },
    },
    order: 1,
    color: 'cyan',
    icon: 'Snowflake',
  },

  /** 냉장실 */
  fridge: {
    id: 'fridge',
    label: '냉장실',
    comfortLabel: '냉장',
    side: {
      inner: {
        id: 'inner',
        label: '안쪽',
        sections: [{ id: '1', label: '1번칸' }],
      },
      door: {
        id: 'door',
        label: '문쪽',
        sections: [{ id: '1', label: '1번칸' }],
      },
    },
    order: 2,
    color: 'blue',
    icon: 'Wind',
  },

  /** 실온보관 */
  pantry: {
    id: 'pantry',
    label: '실온보관',
    comfortLabel: '실온',
    side: {
      inner: {
        id: 'inner',
        label: '안쪽',
        sections: [{ id: '1', label: '1번칸' }],
      },
      door: {
        id: 'door',
        label: '문쪽',
        sections: [{ id: '1', label: '1번칸' }],
      },
    },
    order: 3,
    color: 'yellow',
    icon: 'ThermometerSun',
  },
} as const;

export const mockStorageItemList: StorageItem[] = [
  {
    id: '1',
    ingredientId: 'egg',
    purchasedAt: '2026-03-01',
    expiresAt: '2026-05-21',
    storage: { type: 'fridge', side: 'inner', section: '1' },
    memo: '유정란',
  },
  {
    id: '2',
    ingredientId: 'green_onion',
    purchasedAt: '2026-03-03',
    expiresAt: '2026-05-21',
    storage: { type: 'fridge', side: 'inner', section: '1' },
  },
  {
    id: '3',
    ingredientId: 'spinach',
    purchasedAt: '2026-03-02',
    expiresAt: '2026-08-21',
    storage: { type: 'fridge', side: 'inner', section: '1' },
  },
  {
    id: '4',
    ingredientId: 'broccoli',
    purchasedAt: '2026-03-01',
    expiresAt: '2026-08-21',
    storage: { type: 'fridge', side: 'inner', section: '1' },
  },
  {
    id: '5',
    ingredientId: 'korean_zucchini',
    purchasedAt: '2026-03-02',
    expiresAt: '2026-08-21',
    storage: { type: 'fridge', side: 'inner', section: '1' },
  },
  {
    id: '6',
    ingredientId: 'shiitake',
    purchasedAt: '2026-03-03',
    expiresAt: '2026-08-21',
    storage: { type: 'fridge', side: 'inner', section: '1' },
  },
  {
    id: '7',
    ingredientId: 'king_oyster',
    purchasedAt: '2026-03-03',
    expiresAt: '2026-08-10',
    storage: { type: 'fridge', side: 'inner', section: '1' },
  },
  {
    id: '8',
    ingredientId: 'kongnamul',
    purchasedAt: '2026-03-04',
    expiresAt: '2026-08-21',
    storage: { type: 'fridge', side: 'inner', section: '1' },
  },
  {
    id: '9',
    ingredientId: 'mung_sprout',
    purchasedAt: '2026-03-04',
    expiresAt: '2026-08-21',
    storage: { type: 'fridge', side: 'inner', section: '1' },
  },
  {
    id: '10',
    ingredientId: 'cheongyang_chili',
    purchasedAt: '2026-03-02',
    expiresAt: '2026-08-21',
    storage: { type: 'fridge', side: 'inner', section: '1' },
  },

  {
    id: '11',
    ingredientId: 'frozen_pork_belly',
    purchasedAt: '2026-02-10',
    expiresAt: '2026-08-10',
    storage: { type: 'freezer', side: 'inner', section: '1' },
    customLabel: '코스트코 냉동삼겹살',
  },
  {
    id: '12',
    ingredientId: 'chicken_breast',
    purchasedAt: '2026-02-25',
    expiresAt: '2026-08-10',
    storage: { type: 'freezer', side: 'inner', section: '1' },
  },
  {
    id: '13',
    ingredientId: 'duck_slice',
    purchasedAt: '2026-02-28',
    expiresAt: '2026-08-20',
    storage: { type: 'freezer', side: 'inner', section: '1' },
  },
  {
    id: '14',
    ingredientId: 'smoked_duck_slice',
    purchasedAt: '2026-02-25',
    expiresAt: '2026-04-01',
    storage: { type: 'freezer', side: 'inner', section: '1' },
  },
  {
    id: '15',
    ingredientId: 'beef_short_rib',
    purchasedAt: '2026-02-20',
    expiresAt: '2026-08-25',
    storage: { type: 'freezer', side: 'inner', section: '1' },
  },
  {
    id: '16',
    ingredientId: 'bulgogi_slice',
    purchasedAt: '2026-02-18',
    expiresAt: '2026-03-25',
    storage: { type: 'freezer', side: 'inner', section: '1' },
  },
  {
    id: '17',
    ingredientId: 'pork_neck',
    purchasedAt: '2026-02-27',
    expiresAt: '2026-03-27',
    storage: { type: 'freezer', side: 'inner', section: '1' },
  },
  {
    id: '18',
    ingredientId: 'beef_shabu_slice',
    purchasedAt: '2026-02-21',
    expiresAt: '2026-03-25',
    storage: { type: 'fridge', side: 'inner', section: '1' },
  },
  {
    id: '19',
    ingredientId: 'beef_brisket_slice',
    purchasedAt: '2026-02-22',
    expiresAt: '2026-03-25',
    storage: { type: 'freezer', side: 'inner', section: '1' },
  },
  {
    id: '20',
    ingredientId: 'thin_pork_belly',
    purchasedAt: '2026-02-24',
    expiresAt: '2026-03-28',
    storage: { type: 'freezer', side: 'inner', section: '1' },
  },

  {
    id: '21',
    ingredientId: 'spaghetti_noodle',
    purchasedAt: '2026-02-20',
    expiresAt: '2028-02-20',
    storage: { type: 'pantry', side: 'inner', section: '1' },
  },
  {
    id: '22',
    ingredientId: 'fusilli',
    purchasedAt: '2026-02-15',
    expiresAt: '2028-02-15',
    storage: { type: 'pantry', side: 'inner', section: '1' },
  },
  {
    id: '23',
    ingredientId: 'buckwheat_noodle',
    purchasedAt: '2026-02-18',
    expiresAt: '2027-02-18',
    storage: { type: 'pantry', side: 'inner', section: '1' },
  },
  {
    id: '24',
    ingredientId: 'rice_noodle',
    purchasedAt: '2026-02-19',
    expiresAt: '2027-02-19',
    storage: { type: 'pantry', side: 'inner', section: '1' },
  },
  {
    id: '25',
    ingredientId: 'flat_glass_noodle',
    purchasedAt: '2026-02-15',
    expiresAt: '2028-02-15',
    storage: { type: 'pantry', side: 'inner', section: '1' },
  },
  {
    id: '26',
    ingredientId: 'rice_paper',
    purchasedAt: '2026-02-10',
    expiresAt: '2027-02-10',
    storage: { type: 'pantry', side: 'inner', section: '1' },
  },
  {
    id: '27',
    ingredientId: 'tortilla',
    purchasedAt: '2026-03-01',
    expiresAt: '2026-03-31',
    storage: { type: 'fridge', side: 'inner', section: '1' },
  },
  {
    id: '28',
    ingredientId: 'dumpling_wrapper',
    purchasedAt: '2026-03-02',
    expiresAt: '2026-03-17',
    storage: { type: 'fridge', side: 'inner', section: '1' },
  },
  {
    id: '29',
    ingredientId: 'tteokbokki_ricecake',
    purchasedAt: '2026-03-03',
    expiresAt: '2026-08-10',
    storage: { type: 'fridge', side: 'inner', section: '1' },
  },
  {
    id: '30',
    ingredientId: 'kalguksu_noodle',
    purchasedAt: '2026-03-02',
    expiresAt: '2026-04-01',
    storage: { type: 'fridge', side: 'inner', section: '1' },
  },
];
