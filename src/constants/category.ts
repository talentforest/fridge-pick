export type Category = keyof typeof category;
export type CategoryLabel = (typeof category)[keyof typeof category]['label'];

export const category = {
  vegetable: {
    id: 'vegetable',
    label: '채소/버섯',
    icon: '',
    color: '',
  },
  meat: {
    id: 'meat',
    label: '정육/가공육',
    icon: '',
    color: '',
  },
  seafood: {
    id: 'seafood',
    label: '수산/수산가공',
    icon: '',
    color: '',
  },
  grains: {
    id: 'grains',
    label: '쌀/잡곡',
    icon: '',
    color: '',
  },
  noodle: {
    id: 'noodle',
    label: '면/조리용떡',
    icon: '',
    color: '',
  },
  fruit: {
    id: 'fruit',
    label: '과일/견과',
    icon: '',
    color: '',
  },
  dairy: {
    id: 'dairy',
    label: '유제품',
    icon: '',
    color: '',
  },
  sidedish: {
    id: 'sidedish',
    label: '반찬/요리',
    icon: '',
    color: '',
  },
  conveniencefood: {
    id: 'conveniencefood',
    label: '간편식',
    icon: '',
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
    icon: '',
    color: '',
  },
  drink: {
    id: 'drink',
    label: '음료/주류',
    icon: '',
    color: '',
  },
  health: {
    id: 'health',
    label: '건강/차',
    icon: '',
    color: '',
  },
  can: {
    id: 'can',
    label: '통조림/병조림',
    icon: '',
    color: '',
  },
} as const;
