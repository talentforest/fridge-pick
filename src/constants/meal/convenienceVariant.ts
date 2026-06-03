export const convenienceVariantObj = {
  instant: {
    id: 'instant',
    label: '인스턴트',
    description: '실온 보관 간편식',
    defaultStorage: ['pantry'],
    expirationDays: {
      pantry: 365,
    },
  },

  mealkit: {
    id: 'mealkit',
    label: '밀키트',
    description: '재료가 포함된 냉장 밀키트',
    defaultStorage: ['fridge'],
    expirationDays: {
      fridge: 5,
    },
  },

  frozen: {
    id: 'frozen',
    label: '냉동식품',
    description: '냉동 보관 식품',
    defaultStorage: ['freezer'],
    expirationDays: {
      freezer: 365,
    },
  },

  prepared: {
    id: 'prepared',
    label: '배달·포장',
    description: '완성된 상태로 구매한 음식',
    defaultStorage: ['fridge'],
    expirationDays: {
      fridge: 2,
    },
  },
} as const;
