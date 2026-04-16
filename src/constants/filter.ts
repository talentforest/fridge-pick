export const filterObj = {
  meal: {
    all: {
      id: 1,
      name: 'all',
      label: '전체',
      color: 'blue',
    },
    expiredSoon: {
      id: 2,
      name: 'expiredSoon',
      label: '소비기한 임박',
      color: 'red',
      icon: 'Siren' as const,
    },
    verySimple: {
      id: 3,
      name: 'verySimple',
      label: '초간단 완성',
      color: 'yellow',
      icon: 'Timer' as const,
    },
    atLeast: {
      id: 4,
      name: 'atLeast',
      label: '최소한의 식재료 사용',
      color: 'green',
      icon: 'SquircleDashed' as const,
    },
  },
} as const;
