export const DEFAULT_EXPIRATION_DAYS = 7;

export const DEFAULT_STORAGE = 'fridge' as const;

export const storageObj = {
  /** 냉동실 */
  freezer: {
    type: 'ingredient',
    id: 'freezer',
    label: '냉동실',
    comfortLabel: '냉동',
    side: {
      inner: {
        type: 'ingredient',
        id: 'inner',
        label: '안쪽',
        sections: [{ type: 'ingredient', id: '1', label: '1번칸' }],
      },
      door: {
        type: 'ingredient',
        id: 'door',
        label: '문쪽',
        sections: [{ type: 'ingredient', id: '1', label: '1번칸' }],
      },
    },
    order: 1,
    color: 'ice',
    icon: 'Snowflake',
  },

  /** 냉장실 */
  fridge: {
    type: 'ingredient',
    id: 'fridge',
    label: '냉장실',
    comfortLabel: '냉장',
    side: {
      inner: {
        type: 'ingredient',
        id: 'inner',
        label: '안쪽',
        sections: [{ type: 'ingredient', id: '1', label: '1번칸' }],
      },
      door: {
        type: 'ingredient',
        id: 'door',
        label: '문쪽',
        sections: [{ type: 'ingredient', id: '1', label: '1번칸' }],
      },
    },
    order: 2,
    color: 'blue',
    icon: 'Wind',
  },

  /** 실온보관 */
  pantry: {
    type: 'ingredient',
    id: 'pantry',
    label: '실온보관',
    comfortLabel: '실온',
    side: {
      inner: {
        type: 'ingredient',
        id: 'inner',
        label: '안쪽',
        sections: [{ type: 'ingredient', id: '1', label: '1번칸' }],
      },
      door: {
        type: 'ingredient',
        id: 'door',
        label: '문쪽',
        sections: [{ type: 'ingredient', id: '1', label: '1번칸' }],
      },
    },
    order: 3,
    color: 'yellow',
    icon: 'ShelvingUnit',
  },
} as const;
