export const noCategoryObj = {
  noCategory: {
    id: 'noCategory',
    label: '카테고리 없음',
    icon: 'Database',
    color: 'blue',
  },
};

export const ingredientCategoryObj = {
  vegetable: {
    id: 'vegetable',
    label: '채소/버섯',
    icon: 'LeafyGreen',
    color: 'green',
  },
  meat: {
    id: 'meat',
    label: '정육/가공육',
    icon: 'Beef',
    color: 'red',
  },
  seafood: {
    id: 'seafood',
    label: '수산/수산가공',
    icon: 'Fish',
    color: 'blue',
  },
  grains: {
    id: 'grains',
    label: '쌀/콩/잡곡',
    icon: 'Wheat',
    color: 'red',
  },
  noodle: {
    id: 'noodle',
    label: '면/조리용떡',
    icon: 'LineSquiggle',
    color: 'yellow',
  },
  fruit: {
    id: 'fruit',
    label: '과일/견과',
    icon: 'Apple',
    color: 'red',
  },
  dairy: {
    id: 'dairy',
    label: '유제품',
    icon: 'Milk',
    color: 'yellow',
  },
  seasoning: {
    id: 'seasoning',
    label: '조미료/장/오일',
    icon: 'Amphora',
    color: 'red',
  },
  powder: {
    id: 'powder',
    label: '가루/분말',
    icon: 'HeartPulse',
    color: 'red',
  },
  can: {
    id: 'can',
    label: '통조림/병조림',
    icon: 'Database',
    color: 'blue',
  },
} as const;

export const preparedFoodCategoryObj = {
  side_dish: {
    id: 'side_dish',
    label: '반찬',
    icon: 'Salad',
    color: 'green',
  },
  snack_dessert: {
    id: 'snack_dessert',
    label: '간식/디저트',
    icon: 'Dessert',
    color: 'yellow',
  },
  bakery: {
    id: 'bakery',
    label: '베이커리',
    icon: 'Croissant',
    color: 'yellow',
  },
  light_food: {
    id: 'light_food',
    label: '간편식',
    icon: 'Egg',
    color: 'blue',
  },
  drink: {
    id: 'drink',
    label: '음료',
    icon: 'GlassWater',
    color: 'blue',
  },
} as const;

export const mealCategoryObj = {
  rice_meal: {
    id: 'rice_meal',
    label: '밥류',
    icon: 'Soup',
    color: 'red',
  },
  noodle_meal: {
    id: 'noodle_meal',
    label: '면류',
    icon: 'LineSquiggle',
    color: 'yellow',
  },
  soup_meal: {
    id: 'soup_meal',
    label: '국물류',
    icon: 'Soup',
    color: 'blue',
  },
  main_dish_meal: {
    id: 'main_dish_meal',
    label: '메인요리',
    icon: 'UtensilsCrossed',
    color: 'red',
  },
  western_meal: {
    id: 'western_meal',
    label: '서양식',
    icon: 'UtensilsCrossed',
    color: 'blue',
  },
  fresh_meal: {
    id: 'fresh_meal',
    label: '샐러드/프레시',
    icon: 'Salad',
    color: 'green',
  },
} as const;
