export const filterObj = {
  meal: {
    all: {
      name: 'all',
      label: '전체',
      color: 'blue',
      icon: 'HandPlatter',
    },

    expiredSoon: {
      name: 'expiredSoon',
      label: '소비기한 임박',
      color: 'red',
      icon: 'TriangleAlert',
    },

    easy: {
      name: 'easy',
      label: '쉬운 메뉴',
      color: 'yellow',
      icon: 'Sparkles',
    },

    highPossession: {
      name: 'highPossession',
      label: '식재료 보유율 높음',
      color: 'green',
      icon: 'SquircleDashed',
    },

    favorite: {
      name: 'favorite',
      label: '나의 픽',
      color: 'yellow',
      icon: 'Heart',
    },
  },
} as const;
