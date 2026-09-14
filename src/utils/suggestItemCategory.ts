import { allIngredientList, foodObj, ingredientCategoryObj } from '@/constants';
import { FoodCategoryKey, IngredientCategoryKey } from '@/types/category';
import type { Food } from '@/types/selectableItem';

type MatchType = 'exact' | 'suffix' | 'included';
type SearchEntrySource = 'data' | 'rule';

export type CategorySuggestion =
  | {
      kind: 'ingredient';
      category: IngredientCategoryKey;
      matchedKeyword: string;
      matchedBy: MatchType;
      source: SearchEntrySource;
    }
  | {
      kind: 'food';
      category: FoodCategoryKey;
      matchedKeyword: string;
      matchedBy: MatchType;
      source: SearchEntrySource;
    };

type IngredientSearchEntry = {
  kind: 'ingredient';
  category: IngredientCategoryKey;
  keyword: string;
  source: SearchEntrySource;
  allowIncluded: boolean;
};

type FoodSearchEntry = {
  kind: 'food';
  category: FoodCategoryKey;
  keyword: string;
  source: SearchEntrySource;
  allowIncluded: boolean;
};

type SearchEntry = IngredientSearchEntry | FoodSearchEntry;

type MatchedEntry = SearchEntry & {
  matchedBy: MatchType;
};

const ingredientSuffixKeywordObj = {
  meat: ['돼지고기', '소고기', '닭고기'],

  seasoning: ['드레싱', '소스', '오일', '간장', '양념'],

  powder: ['파우더', '분말', '가루'],

  can: ['통조림', '병조림', '캔'],
} satisfies Partial<Record<IngredientCategoryKey, readonly string[]>>;

const foodSuffixKeywordObj = {
  soup_meal: ['국밥', '찌개', '전골', '나베', '수프', '스프', '국', '탕'],

  rice_meal: [
    '볶음밥',
    '비빔밥',
    '덮밥',
    '솥밥',
    '주먹밥',
    '김밥',
    '초밥',
    '오므라이스',
    '카레라이스',
    '리조또',
    '죽',
    '밥',
  ],

  noodle_meal: [
    '칼국수',
    '쌀국수',
    '비빔국수',
    '볶음면',
    '비빔면',
    '국수',
    '냉면',
    '우동',
    '라면',
    '면',
  ],

  side_dish: ['겉절이', '장아찌', '젓갈', '김치', '무침', '나물'],

  light_food: [
    '샌드위치',
    '햄버거',
    '치즈스틱',
    '치즈볼',
    '핫도그',
    '토스트',
    '버거',
    '만두',
  ],

  bakery: [
    '롤케이크',
    '치즈케이크',
    '크루아상',
    '크로와상',
    '케이크',
    '케잌',
    '식빵',
    '베이글',
    '바게트',
    '바게뜨',
    '카스테라',
    '모닝빵',
    '마늘빵',
    '단팥빵',
    '호밀빵',
    '소금빵',
    '찐빵',
    '도넛',
    '머핀',
    '타르트',
    '파이',
    '빵',
  ],

  snack_dessert: ['아이스크림', '빙수', '쿠키', '푸딩', '젤리'],

  drink: ['밀크티', '버블티', '아이스티', '스무디', '에이드', '라떼', '주스', '커피'],

  fresh_meal: ['샐러드', '포케'],

  western_meal: ['스파게티', '파스타', '스테이크', '그라탱', '그라탕', '피자'],

  main_dish_meal: ['볶음탕', '떡볶이'],
} satisfies Partial<Record<FoodCategoryKey, readonly string[]>>;

const ambiguousFoodSuffixes = [
  '볶음',
  '조림',
  '전',
  '튀김',
  '구이',
  '찜',
  '말이',
] as const;

const matchScore: Record<MatchType, number> = {
  exact: 300,
  suffix: 200,
  included: 100,
};

export function normalizeCategoryKeyword(value: string) {
  return value
    .normalize('NFKC')
    .trim()
    .toLowerCase()
    .replace(/[\s\-_/()[\]{}.,]/g, '');
}

function createIngredientDataEntries(): SearchEntry[] {
  return allIngredientList.flatMap((item) => {
    if (!(item.category in ingredientCategoryObj)) {
      return [];
    }

    const category = item.category as IngredientCategoryKey;

    return [item.label, ...(item.synonyms ?? [])].map(
      (keyword): IngredientSearchEntry => ({
        kind: 'ingredient',
        category,
        keyword: normalizeCategoryKeyword(keyword),
        source: 'data',
        allowIncluded: true,
      }),
    );
  });
}

function createFoodDataEntries(): SearchEntry[] {
  const items = Object.values(foodObj) as Food[];

  return items.flatMap((item) =>
    [item.label, ...(item.synonyms ?? [])].map((keyword): FoodSearchEntry => ({
      kind: 'food',
      category: item.category,
      keyword: normalizeCategoryKeyword(keyword),
      source: 'data',
      allowIncluded: true,
    })),
  );
}

function createIngredientRuleEntries(): SearchEntry[] {
  return (
    Object.entries(ingredientSuffixKeywordObj) as [
      IngredientCategoryKey,
      readonly string[],
    ][]
  ).flatMap(([category, keywords]) =>
    keywords.map((keyword): IngredientSearchEntry => ({
      kind: 'ingredient',
      category,
      keyword: normalizeCategoryKeyword(keyword),
      source: 'rule',
      allowIncluded: false,
    })),
  );
}

function createFoodRuleEntries(): SearchEntry[] {
  return (
    Object.entries(foodSuffixKeywordObj) as [FoodCategoryKey, readonly string[]][]
  ).flatMap(([category, keywords]) =>
    keywords.map((keyword): FoodSearchEntry => ({
      kind: 'food',
      category,
      keyword: normalizeCategoryKeyword(keyword),
      source: 'rule',
      allowIncluded: false,
    })),
  );
}

const categorySearchEntries = [
  ...createIngredientDataEntries(),
  ...createFoodDataEntries(),
  ...createIngredientRuleEntries(),
  ...createFoodRuleEntries(),
].filter(({ keyword }) => keyword.length > 0);

function matchSearchEntry(input: string, entry: SearchEntry): MatchedEntry | null {
  if (input === entry.keyword) {
    return {
      ...entry,
      matchedBy: 'exact',
    };
  }

  // 명시적인 규칙에서는 '국', '탕', '밥' 같은
  // 한 글자 접미사도 허용한다.
  const canUseSuffix = entry.source === 'rule' || entry.keyword.length >= 2;

  if (canUseSuffix && input.endsWith(entry.keyword)) {
    return {
      ...entry,
      matchedBy: 'suffix',
    };
  }

  // 기존 데이터의 한 글자 이름은 포함 검색에서 제외한다.
  if (entry.allowIncluded && entry.keyword.length >= 2 && input.includes(entry.keyword)) {
    return {
      ...entry,
      matchedBy: 'included',
    };
  }

  return null;
}

function compareMatchedEntries(a: MatchedEntry, b: MatchedEntry) {
  const scoreDifference = matchScore[b.matchedBy] - matchScore[a.matchedBy];

  if (scoreDifference !== 0) {
    return scoreDifference;
  }

  // 같은 매칭 방식이면 더 긴 키워드를 우선한다.
  const lengthDifference = b.keyword.length - a.keyword.length;

  if (lengthDifference !== 0) {
    return lengthDifference;
  }

  // 조건이 같다면 직접 만든 규칙보다 실제 데이터를 우선한다.
  if (a.source !== b.source) {
    return a.source === 'data' ? -1 : 1;
  }

  return 0;
}

function selectSuggestion(matches: MatchedEntry[]): CategorySuggestion | null {
  const first = matches[0];

  if (!first) return null;

  const conflict = matches.find(
    (entry) =>
      entry !== first &&
      matchScore[entry.matchedBy] === matchScore[first.matchedBy] &&
      entry.keyword.length === first.keyword.length &&
      (entry.kind !== first.kind || entry.category !== first.category),
  );

  if (conflict) return null;

  if (first.kind === 'ingredient') {
    return {
      kind: 'ingredient',
      category: first.category,
      matchedKeyword: first.keyword,
      matchedBy: first.matchedBy,
      source: first.source,
    };
  }

  return {
    kind: 'food',
    category: first.category,
    matchedKeyword: first.keyword,
    matchedBy: first.matchedBy,
    source: first.source,
  };
}

export function suggestItemCategory(value: string): CategorySuggestion | null {
  const input = normalizeCategoryKeyword(value);

  if (!input) return null;

  const matches = categorySearchEntries
    .map((entry) => matchSearchEntry(input, entry))
    .filter((entry): entry is MatchedEntry => entry !== null)
    .sort(compareMatchedEntries);

  const strongMatches = matches.filter(({ matchedBy }) => matchedBy !== 'included');

  // 정확히 일치하거나 접미사로 일치한 결과 우선
  if (strongMatches.length > 0) {
    return selectSuggestion(strongMatches);
  }

  /*
   * 볶음·조림·구이처럼 음식인 것은 알 수 있지만
   * 반찬인지 메인요리인지 결정할 수 없다면,
   * 앞부분의 식재료 이름으로 잘못 추천하지 않는다.
   */
  const hasAmbiguousFoodSuffix = ambiguousFoodSuffixes.some((suffix) =>
    input.endsWith(normalizeCategoryKeyword(suffix)),
  );

  if (hasAmbiguousFoodSuffix) {
    return null;
  }

  return selectSuggestion(matches);
}
