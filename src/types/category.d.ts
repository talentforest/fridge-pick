import { ingredientCategoryObj } from '@/constants';

/* -------------------------------------------------------------------------- */
/*                              Category Type                                 */
/* -------------------------------------------------------------------------- */
export type ValidCategoryKey = Exclude<keyof typeof ingredientCategoryObj, 'noCategory'>;

export type CategoryKey = keyof typeof ingredientCategoryObj;
export type CategoryLabel = (typeof ingredientCategoryObj)[CategoryKey]['label'];

export type CategoryItem = (typeof ingredientCategoryObj)[CategoryKey];
