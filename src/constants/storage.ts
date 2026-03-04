export const storageObj = {
  /** 냉동실 */
  freezer: {
    id: 'freezer',
    label: '냉동실',
    parts: [
      { id: 'inner', label: '안쪽' },
      { id: 'door', label: '문쪽' },
    ],
    sections: [
      { id: '1', label: '1번칸' },
      { id: '2', label: '2번칸' },
    ],
    order: 1,
    color: 'blue',
  },

  /** 냉장실 */
  fridge: {
    id: 'fridge',
    label: '냉장실',
    parts: [
      { id: 'inner', label: '안쪽' },
      { id: 'door', label: '문쪽' },
    ],
    sections: [
      { id: '1', label: '1번칸' },
      { id: '2', label: '2번칸' },
      { id: '3', label: '3번칸' },
    ],
    order: 2,
    color: 'yellow',
  },

  /** 실온보관 */
  pantry: {
    id: 'pantry',
    label: '실온보관',
    sections: [
      { id: '1', label: '1번칸' },
      { id: '2', label: '2번칸' },
      { id: '3', label: '3번칸' },
    ],
    order: 3,
    color: 'green',
  },
} as const;
