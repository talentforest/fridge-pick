import { ingredientObj } from '@/constants';
import { Ingredient, IngredientKey } from '@/types/ingredient';
import { StorageItem } from '@/types/storage';

function normalize(text: string) {
  return text.replace(/\s/g, '').toLowerCase();
}

function matchText(keyword: string, text: string) {
  return normalize(text).includes(keyword);
}

export const allIngredients: Ingredient[] = Object.values(
  ingredientObj,
).flatMap((category) => Object.values(category));

export const findIngredient = (ingredientId?: IngredientKey) => {
  if (!ingredientId) return undefined;
  return allIngredients.find(({ id }) => id === ingredientId);
};

export function searchIngredient(
  keyword: string,
  maxLength?: number,
): Ingredient[] {
  const normalized = normalize(keyword);
  if (!normalized) return [];

  const results = allIngredients.filter((item) => {
    if (matchText(normalized, item.label)) return true;

    return item.synonyms?.some((syn) => matchText(normalized, syn));
  });

  return results.slice(0, maxLength);
}

export function searchStorageItem(
  keyword: string,
  list: StorageItem[],
  maxLength?: number,
) {
  const normalized = normalize(keyword);
  if (!normalized) return [];

  const ingredientIds = new Set(searchIngredient(keyword).map(({ id }) => id));

  return list
    .filter((item) => {
      if (item.ingredientId && ingredientIds.has(item.ingredientId)) {
        return true;
      }

      if (item.customLabel) {
        return matchText(normalized, item.customLabel);
      }

      return false;
    })
    .slice(0, maxLength);
}
