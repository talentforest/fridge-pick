import {
  image_frozen,
  image_instant,
  image_mealkit,
  image_ready_to_eat,
} from '@/constants/image';

export const convenienceVariantObj = {
  readyToEat: {
    id: 'readyToEat',
    label: '완성식품',
    description: '이미 조리된 상태로 구매해서 먹어요',
    image: image_ready_to_eat,
    icon: null,
  },

  instant: {
    id: 'instant',
    label: '인스턴트',
    description: '뜨거운 물이나 전자레인지로 간편하게 조리해요',
    defaultStorage: ['pantry'],
    expirationDays: {
      pantry: 365,
    },
    image: image_instant,
    icon: 'ThermometerSun',
    color: 'yellow',
  },

  mealkit: {
    id: 'mealkit',
    label: '밀키트',
    description: '손질된 재료로 간편하게 조리해요',
    defaultStorage: ['fridge'],
    expirationDays: {
      fridge: 5,
    },
    image: image_mealkit,
    icon: 'Wind',
    color: 'blue',
  },

  frozen: {
    id: 'frozen',
    label: '냉동',
    description: '냉동 보관 후 해동하거나 가열해 먹어요',
    defaultStorage: ['freezer'],
    expirationDays: {
      freezer: 365,
    },
    image: image_frozen,
    icon: 'Snowflake',
    color: 'ice',
  },
} as const;
