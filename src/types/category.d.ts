import { categoryObj } from '@/constants';

/* -------------------------------------------------------------------------- */
/*                              Category Type                                 */
/* -------------------------------------------------------------------------- */
export type ValidCategoryKey = Exclude<keyof typeof categoryObj, 'noCategory'>;

export type CategoryKey = keyof typeof categoryObj;
export type CategoryLabel = (typeof categoryObj)[CategoryKey]['label'];

export type CategoryItem = (typeof categoryObj)[CategoryKey];
