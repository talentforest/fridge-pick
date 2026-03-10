import { ingredientObj } from '@/constants';
import { Ingredient, IngredientKey } from '@/types/ingredient';

function normalize(text: string) {
  return text.replace(/\s/g, '').toLowerCase();
}

export const allIngredients: Ingredient[] = Object.values(
  ingredientObj,
).flatMap((category) => Object.values(category));

export const findIngredient = (ingredientId: IngredientKey) => {
  return allIngredients.find(({ id }) => id === ingredientId);
};

export function searchIngredient(keyword: string, max?: number): Ingredient[] {
  if (!keyword) return [];

  const normalized = normalize(keyword);
  if (!normalized) return [];

  const results = allIngredients.filter((item) => {
    const label = normalize(item.label);

    if (label.includes(normalized)) return true;

    return item.synonyms?.some((syn) => normalize(syn).includes(normalized));
  });

  return results
    .sort((a, b) => {
      const aLabel = normalize(a.label);
      const bLabel = normalize(b.label);

      const aExact = aLabel === normalized;
      const bExact = bLabel === normalized;

      if (aExact !== bExact) return aExact ? -1 : 1;

      const aStarts = aLabel.startsWith(normalized);
      const bStarts = bLabel.startsWith(normalized);

      if (aStarts !== bStarts) return aStarts ? -1 : 1;

      return aLabel.localeCompare(bLabel);
    })
    .slice(0, max);
}
