import { allIngredients } from '@/constants';
import { Ingredient, IngredientKey } from '@/types/ingredient';
import { StorageItem } from '@/types/storage';

const CHOSUNG = [
  'ㄱ',
  'ㄲ',
  'ㄴ',
  'ㄷ',
  'ㄸ',
  'ㄹ',
  'ㅁ',
  'ㅂ',
  'ㅃ',
  'ㅅ',
  'ㅆ',
  'ㅇ',
  'ㅈ',
  'ㅉ',
  'ㅊ',
  'ㅋ',
  'ㅌ',
  'ㅍ',
  'ㅎ',
];

function getChosung(text: string) {
  return text
    .normalize('NFC')
    .split('')
    .map((char) => {
      const code = char.charCodeAt(0) - 44032;
      if (code >= 0 && code <= 11171) {
        return CHOSUNG[Math.floor(code / 588)];
      }
      return char;
    })
    .join('');
}

function normalize(text: string) {
  return text
    .normalize('NFC')
    .toLowerCase()
    .replace(/[_\s-]/g, '');
}

function matchText(keyword: string, text: string) {
  const normalizedText = normalize(text);

  if (normalizedText.includes(keyword)) return true;

  const chosungText = getChosung(text);
  if (chosungText.includes(keyword)) return true;

  return false;
}

export function searchIngredient(keyword: string, maxLength?: number): Ingredient[] {
  const normalized = normalize(keyword);
  if (!normalized) return [];

  const isChosungSearch = /^[ㄱ-ㅎ]+$/.test(keyword);

  const results = allIngredients
    .map((item) => {
      let score = 0;

      const id = normalize(item.id);
      const label = normalize(item.label);
      const chosung = getChosung(item.label);

      // 🔥 1. 초성 검색일 경우 우선 처리
      if (isChosungSearch) {
        if (chosung === keyword) score += 100;
        else if (chosung.startsWith(keyword)) score += 80;
        else if (chosung.includes(keyword)) score += 60;

        return { item, score };
      }

      // 🔥 2. 일반 검색
      if (id === normalized) score += 100;
      if (label === normalized) score += 95;

      if (label.startsWith(normalized)) score += 80;
      if (label.includes(normalized)) score += 50;

      if (id.includes(normalized)) score += 40;

      if (item.synonyms?.some((syn) => normalize(syn) === normalized)) score += 30;
      if (item.synonyms?.some((syn) => matchText(normalized, syn))) score += 20;

      return { item, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      return a.item.label.localeCompare(b.item.label, 'ko');
    })
    .map(({ item }) => item);

  return maxLength ? results.slice(0, maxLength) : results;
}

export function findIngredient(ingredientId?: IngredientKey) {
  if (!ingredientId) return undefined;
  return allIngredients.find(({ id }) => id === ingredientId);
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
