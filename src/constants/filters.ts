export const filterObj = {
  cookingMenu: {
    all: {
      id: 1,
      name: 'all',
      label: '전체',
      color: 'blue',
    },
    expiredSoon: {
      id: 2,
      name: 'expiredSoon',
      label: '소비기한 임박 우선',
      color: 'red',
    },
    verySimple: {
      id: 3,
      name: 'verySimple',
      label: '초간단 완성',
      color: 'yellow',
    },
    atLeast: {
      id: 4,
      name: 'atLeast',
      label: '최소한의 식재료 사용',
      color: 'green',
    },
  },
} as const;
