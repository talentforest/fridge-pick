export const allFilterObj = {
  id: 1,
  name: 'all',
  label: '전체',
  color: 'blue',
} as const;

export const filterObj = {
  meal: {
    expiredSoon: {
      id: 2,
      name: 'expiredSoon',
      label: '소비기한 임박',
      color: 'red',
      icon: 'TriangleAlert' as const,
    },
    easy: {
      id: 3,
      name: 'easy',
      label: '간단 완성',
      color: 'yellow',
      icon: 'Timer' as const,
    },
    mininum: {
      id: 4,
      name: 'mininum',
      label: '최소 식재료 사용',
      color: 'green',
      icon: 'SquircleDashed' as const,
    },
    fastest: {
      id: 5,
      name: 'fastest',
      label: '빠르게 완성',
      color: 'green',
      icon: 'Zap' as const,
    },
    hasAll: {
      id: 6,
      name: 'hasAll',
      label: '모든 재료 있음',
      color: 'red',
      icon: 'ShoppingBag' as const,
    },
  },
} as const;
