import { ingredientObj } from '@/constants/ingredients';
import { CookingMenu } from '@/types/cookingMenu';

const { noodle, vegetable, fruit, meat } = ingredientObj;

export const cookingMenuList: CookingMenu[] = [
  {
    name: '우삼겹파스타',
    time: 15,
    filterList: ['expiredSoon'],
    ingredientList: [
      meat.beef_short_slice,
      noodle.spaghetti,
      vegetable.onion,
      vegetable.asparagus,
      vegetable.carrot,
      vegetable.garlic,
      vegetable.broccoli,
      vegetable.oyster_mushroom,
      fruit.tomato,
    ],
  },
  {
    name: '버섯피자',
    time: 20,
    filterList: ['expiredSoon'],
    ingredientList: [
      noodle.tortilla,
      vegetable.button_mushroom,
      vegetable.oyster_mushroom,
      vegetable.onion,
      fruit.cherry_tomato,
    ],
  },
  {
    name: '계란 스크램블',
    time: 5,
    filterList: ['atLeast', 'verySimple'],
    ingredientList: [meat.egg],
  },
];
