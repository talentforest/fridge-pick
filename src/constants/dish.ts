import { ingredientObj } from '@/constants/ingredient';
import { Dish } from '@/types/dish';

const { noodle, vegetable, fruit, meat, dairy } = ingredientObj;

export const dishList: Dish[] = [
  {
    name: '우삼겹파스타',
    time: 15,
    filterList: ['expiredSoon'],
    ingredientList: [
      meat.beef_short_slice,
      noodle.spaghetti_noodle,
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
      dairy.shredded_cheese,
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
