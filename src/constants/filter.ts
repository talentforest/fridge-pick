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
  },
} as const;
