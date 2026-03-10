export type CategoryKey = keyof typeof categoryObj;

export type CategoryLabel =
  (typeof categoryObj)[keyof typeof categoryObj]['label'];

export type CategoryItem = (typeof categoryObj)[CategoryKey];

export const categoryObj = {
  vegetable: {
    id: 'vegetable',
    label: '채소/버섯',
    icon: 'LeafyGreen',
    color: '',
  },
  meat: {
    id: 'meat',
    label: '정육/가공육',
    icon: 'Beef',
    color: '',
  },
  seafood: {
    id: 'seafood',
    label: '수산/수산가공',
    icon: 'Fish',
    color: '',
  },
  grains: {
    id: 'grains',
    label: '쌀/잡곡',
    icon: 'Wheat',
    color: '',
  },
  noodle: {
    id: 'noodle',
    label: '면/조리용떡',
    icon: 'LineSquiggle',
    color: '',
  },
  fruit: {
    id: 'fruit',
    label: '과일/견과',
    icon: 'Grape',
    color: '',
  },
  dairy: {
    id: 'dairy',
    label: '유제품',
    icon: 'Milk',
    color: '',
  },
  sidedish: {
    id: 'sidedish',
    label: '반찬/요리',
    icon: 'Soup',
    color: '',
  },
  conveniencefood: {
    id: 'conveniencefood',
    label: '간편식',
    icon: 'Pizza',
    color: '',
  },
  seasoning: {
    id: 'seasoning',
    label: '조미료/장/오일',
    icon: '',
    color: '',
  },
  powder: {
    id: 'powder',
    label: '가루/분말',
    icon: '',
    color: '',
  },
  desert: {
    id: 'desert',
    label: '간식/베이커리',
    icon: 'Dessert',
    color: '',
  },
  drink: {
    id: 'drink',
    label: '음료/주류',
    icon: 'GlassWater',
    color: '',
  },
  health: {
    id: 'health',
    label: '건강/차',
    icon: 'HeartPulse',
    color: '',
  },
  can: {
    id: 'can',
    label: '통조림/병조림',
    icon: 'Database',
    color: '',
  },
} as const;
