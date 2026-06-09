export const convenienceVariantObj = {
  ready_to_eat: {
    id: 'ready_to_eat',
    label: '바로 먹기',
    description: '구매 후 바로 먹을 수 있는 완제품',
  },

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
} as const;
