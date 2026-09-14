import { allIngredientList, allFoodList } from '@/constants';
import { SelectableItem } from '@/types/selectableItem';

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
  if (!text) return false;

  const normalizedText = normalize(text);

  if (normalizedText.includes(keyword)) return true;

  const chosungText = getChosung(text);
  if (chosungText.includes(keyword)) return true;

  return false;
}

export function searchSelectableItem(
  keyword: string,
  customList: SelectableItem[],
  maxLength?: number,
): SelectableItem[] {
  const normalized = normalize(keyword);
  if (!normalized) return [];

  const isChosungSearch = /^[ㄱ-ㅎ]+$/.test(keyword);

  const selectableItemList = [...allIngredientList, ...allFoodList, ...customList];

  const results = selectableItemList
    .map((item) => {
      let score = 0;

      const id = normalize(item.id as string);
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

export function findSelectableItemWithSearchKeyword(
  keyword: string,
  customList: SelectableItem[],
) {
  const normalized = normalize(keyword);

  return [...allIngredientList, ...allFoodList, ...customList].find(
    (item) =>
      normalize(item.label) === normalized ||
      normalize(item.id as string) === normalized ||
      item.synonyms?.some((syn) => normalize(syn) === normalized),
  );
}
