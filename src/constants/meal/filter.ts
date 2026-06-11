export const allFilterObj = {
  id: 1,
  name: 'all',
  label: '전체',
  color: 'blue',
} as const;

export const filterObj = {
  meal: {
    expiredSoon: {
      name: 'expiredSoon',
      label: '소비기한 임박 식재료 포함',
      color: 'red',
      icon: 'TriangleAlert' as const,
    },

    hasAll: {
      name: 'hasAll',
      label: '모든 재료 있음',
      color: 'red',
      icon: 'ShoppingBag' as const,
    },

    minimum: {
      name: 'minimum',
      label: '최소한의 식재료 사용',
      color: 'green',
      icon: 'SquircleDashed' as const,
    },

    easy: {
      name: 'easy',
      label: '쉬운 난이도',
      color: 'yellow',
      icon: 'Timer' as const,
    },

    favorite: {
      name: 'favorite',
      label: '즐겨찾기',
      color: 'yellow',
      icon: 'Timer' as const,
    },
  },
} as const;
