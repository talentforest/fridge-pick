import { Meal } from '@/types/selectableItem';

// "rice_meal" | "soup_meal" | "noodle_meal" | "western_meal" | "main_dish_meal" | "fresh_meal"
export const mealObj = {
  chamchi_bokkeumbap: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expirationDays: {
      fridge: 3,
    },
    kind: 'meal',
    isActive: true,
    id: 'chamchi_bokkeumbap',
    label: '참치볶음밥',
    category: 'rice_meal',
    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'canned_tuna' }],
      common: [],
      seasoning: [],
      optional: [],
    },
  },
  rabokki: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expirationDays: {
      fridge: 3,
    },
    kind: 'meal',
    isActive: true,
    id: 'rabokki',
    label: '라볶이',
    category: 'main_dish_meal',
    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'ramyeon_sari' }],
      common: [],
      seasoning: [],
      optional: [],
    },
  },
  tteokbokki: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expirationDays: {
      fridge: 3,
    },
    kind: 'meal',
    isActive: true,
    id: 'tteokbokki',
    label: '떡볶이',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'tteokbokki_tteok' },
        { kind: 'ingredient', id: 'eomuk' },
      ],
      common: [{ kind: 'ingredient', id: 'daepa' }],
      seasoning: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'oligodang' },
        { kind: 'ingredient', id: 'sugar' },
        { kind: 'ingredient', id: 'soy_sauce' },
      ],
      optional: [{ kind: 'ingredient', id: 'egg' }],
    },
    synonyms: ['떡볶이 밀키트'],
  },
  dubu_kimchi: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expirationDays: {
      fridge: 3,
    },
    kind: 'meal',
    isActive: true,
    id: 'dubu_kimchi',
    label: '두부김치',
    category: 'main_dish_meal',

    difficulty: 'easy',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'dubu' },
        { kind: 'preparedFood', id: 'baechu_kimchi' },
      ],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [],
    },
  },
  kimchi_jeon: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expirationDays: {
      fridge: 3,
    },
    kind: 'meal',
    isActive: true,
    id: 'kimchi_jeon',
    label: '김치전',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'preparedFood', id: 'baechu_kimchi' },
        { kind: 'ingredient', id: 'buchim_garu' },
      ],
      common: [],
      seasoning: [{ kind: 'ingredient', id: 'cooking_oil' }],
      optional: [],
    },
  },
  saengseon_kkaseu: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expirationDays: {
      fridge: 3,
    },
    kind: 'meal',
    isActive: true,
    id: 'saengseon_kkaseu',
    label: '생선까스',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['convenience', 'takeout'],
  },
  saengseon_gui: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expirationDays: {
      fridge: 3,
    },
    kind: 'meal',
    isActive: true,
    id: 'saengseon_gui',
    label: '생선구이',
    category: 'main_dish_meal',
    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['convenience', 'takeout'],
  },
  tteokgalbi: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expirationDays: {
      fridge: 3,
    },
    kind: 'meal',
    isActive: true,
    id: 'tteokgalbi',
    label: '떡갈비',
    category: 'main_dish_meal',

    difficulty: 'hard',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
  },
  dakgangjeong: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expirationDays: {
      fridge: 3,
    },
    kind: 'meal',
    isActive: true,
    id: 'dakgangjeong',
    label: '닭강정',
    category: 'main_dish_meal',
    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
  },
  kkanpunggi: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expirationDays: {
      fridge: 3,
    },
    kind: 'meal',
    isActive: true,
    id: 'kkanpunggi',
    label: '깐풍기',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
  },
  kkwobaro: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expirationDays: {
      fridge: 3,
    },
    kind: 'meal',
    isActive: true,
    id: 'kkwobaro',
    label: '꿔바로우',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
  },
  tangsuyuk: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expirationDays: {
      fridge: 3,
    },
    kind: 'meal',
    isActive: true,
    id: 'tangsuyuk',
    label: '탕수육',
    category: 'main_dish_meal',
    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    synonyms: ['찹쌀 탕수육'],
  },
  yangnyeom_chicken: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expirationDays: {
      fridge: 3,
    },
    kind: 'meal',
    isActive: true,
    id: 'yangnyeom_chicken',
    label: '양념치킨',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
  },
  fried_chicken: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expirationDays: {
      fridge: 3,
    },
    kind: 'meal',
    isActive: true,
    id: 'fried_chicken',
    label: '치킨',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    synonyms: ['후라이드치킨'],
  },
  donkkaseu: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expirationDays: {
      fridge: 3,
    },
    kind: 'meal',
    isActive: true,
    id: 'donkkaseu',
    label: '돈까스',
    category: 'main_dish_meal',
    difficulty: 'hard',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'pork_loin' },
        { kind: 'ingredient', id: 'ppang_garu' },
      ],
      common: [
        { kind: 'ingredient', id: 'egg' },
        { kind: 'ingredient', id: 'twigim_garu' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'cooking_oil' },
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'black_pepper' },
      ],
      optional: [],
    },
    synonyms: ['돈카츠', '돈가스'],
  },
  ssuk_jeon: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'ssuk_jeon',
    label: '쑥전',
    category: 'main_dish_meal',

    difficulty: 'easy',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'ssug' },
        { kind: 'ingredient', id: 'buchim_garu' },
      ],
      common: [],
      seasoning: [{ kind: 'ingredient', id: 'cooking_oil' }],
      optional: [],
    },
  },
  sogalbi_gui: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'sogalbi_gui',
    label: '소갈비구이',
    category: 'main_dish_meal',

    difficulty: 'hard',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'beef_short_rib' }],
      common: [{ kind: 'ingredient', id: 'bae' }],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'sugar' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [],
    },
  },
  sogalbi_jjim: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'sogalbi_jjim',
    label: '소갈비찜',
    category: 'main_dish_meal',

    difficulty: 'hard',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'beef_short_rib' }],
      common: [
        { kind: 'ingredient', id: 'mu' },
        { kind: 'ingredient', id: 'carrot' },
        { kind: 'ingredient', id: 'bae' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'sugar' },
      ],
      optional: [],
    },
  },
  nokdu_jeon: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'nokdu_jeon',
    label: '녹두전',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'nokdu' }],
      common: [{ kind: 'ingredient', id: 'sukjunamul' }],
      seasoning: [
        { kind: 'ingredient', id: 'cooking_oil' },
        { kind: 'ingredient', id: 'salt' },
      ],
      optional: [],
    },
  },
  ojingeo_bokkeum: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'ojingeo_bokkeum',
    label: '오징어볶음',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'ojingeo' }],
      common: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'yangbaechu' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [],
    },
  },
  ori_jumulreok: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'ori_jumulreok',
    label: '오리주물럭',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'duck_slice' }],
      common: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [],
    },
  },
  ori_roseu: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'ori_roseu',
    label: '오리로스',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'duck_slice' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'black_pepper' },
      ],
      optional: [],
    },
  },
  pa_jeon: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'pa_jeon',
    label: '파전',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'jjokpa' },
        { kind: 'ingredient', id: 'buchim_garu' },
      ],
      common: [],
      seasoning: [{ kind: 'ingredient', id: 'cooking_oil' }],
      optional: [],
    },
  },
  la_galbi_gui: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'la_galbi_gui',
    label: 'LA갈비구이',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'beef_short_rib' }],
      common: [{ kind: 'ingredient', id: 'bae' }],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'sugar' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'chamgireum' },
      ],
      optional: [],
    },
  },
  makchang_gui: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'makchang_gui',
    label: '막창구이',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
  },
  haemul_jjim: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'haemul_jjim',
    label: '해물찜',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'ojingeo' },
        { kind: 'ingredient', id: 'saeu' },
        { kind: 'ingredient', id: 'bajirak' },
        { kind: 'ingredient', id: 'baekhap' },
      ],
      common: [
        { kind: 'ingredient', id: 'kongnamul' },
        { kind: 'ingredient', id: 'minari' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'oligodang' },
      ],
      optional: [],
    },
  },
  haemulpa_jeon: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'haemulpa_jeon',
    label: '해물파전',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'buchim_garu' },
        { kind: 'ingredient', id: 'ojingeo' },
        { kind: 'ingredient', id: 'jjokpa' },
      ],
      common: [
        { kind: 'ingredient', id: 'saeu' },
        { kind: 'ingredient', id: 'honghap' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'cooking_oil' },
        { kind: 'ingredient', id: 'salt' },
      ],
      optional: [{ kind: 'ingredient', id: 'chamchi_aekjeot' }],
    },
  },
  hamburger_steak: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'hamburger_steak',
    label: '함박스테이크',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'ground_beef' },
        { kind: 'ingredient', id: 'ground_pork' },
      ],
      common: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'ppang_garu' },
        { kind: 'ingredient', id: 'egg' },
      ],
      seasoning: [{ kind: 'ingredient', id: 'black_pepper' }],
      optional: [],
    },
  },
  hunje_ori: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'hunje_ori',
    label: '훈제오리',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'duck_slice_smoked' }],
      common: [],
      seasoning: [],
      optional: [],
    },
    synonyms: ['오리훈제'],
  },
  kodari_jorim: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'kodari_jorim',
    label: '코다리조림',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'kodari' }],
      common: [
        { kind: 'ingredient', id: 'mu' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [],
    },
    synonyms: ['코다리찜'],
  },
  nakji_bokkeum: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'nakji_bokkeum',
    label: '낙지볶음',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'nakji' }],
      common: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [],
    },
  },
  jukkumi_bokkeum: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'jukkumi_bokkeum',
    label: '주꾸미볶음',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'jukkumi' }],
      common: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [],
    },
    synonyms: ['쭈꾸미볶음'],
  },
  jogae_jjim: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'jogae_jjim',
    label: '조개찜',
    category: 'main_dish_meal',

    difficulty: 'easy',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'honghap' },
        { kind: 'ingredient', id: 'baekhap' },
        { kind: 'ingredient', id: 'bajirak' },
      ],
      common: [],
      seasoning: [],
      optional: [],
    },
  },
  jokbal: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'jokbal',
    label: '족발',
    category: 'main_dish_meal',

    difficulty: 'hard',
    servingTemperature: 'warm',
    availableFoodSources: ['takeout'],
  },
  jeyuk_bokkeum: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'jeyuk_bokkeum',
    label: '제육볶음',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'pork_belly' }],
      common: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'yangbaechu' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [],
    },
  },
  hwangtae_gui: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'hwangtae_gui',
    label: '황태양념구이',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'hwangtaechae' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'oligodang' },
      ],
      optional: [],
    },
    synonyms: ['황태고추장양념구이', '고추장황태구이'],
  },
  jangeo_gui: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'jangeo_gui',
    label: '장어구이',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'jangeo' }],
      common: [],
      seasoning: [],
      optional: [],
    },
  },
  golbaengi_muchim: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'golbaengi_muchim',
    label: '골뱅이무침',
    category: 'main_dish_meal',

    difficulty: 'easy',
    servingTemperature: 'cold',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'canned_golbaengi' }],
      common: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'cucumber' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'vinegar' },
        { kind: 'ingredient', id: 'sugar' },
      ],
      optional: [],
    },
  },
  gopchang_bokkeum: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'gopchang_bokkeum',
    label: '곱창볶음',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'gopchang' }],
      common: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'buchu' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'oligodang' },
      ],
      optional: [],
    },
  },
  gopchang_gui: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'gopchang_gui',
    label: '곱창구이',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'gopchang' }],
      common: [{ kind: 'ingredient', id: 'onion' }],
      seasoning: [],
      optional: [],
    },
  },
  godeungeo_jorim: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'godeungeo_jorim',
    label: '고등어조림',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'godeungeo' }],
      common: [
        { kind: 'ingredient', id: 'mu' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [],
    },
    synonyms: ['고등어찜'],
  },
  galchi_jorim: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'galchi_jorim',
    label: '갈치조림',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'galchi' }],
      common: [
        { kind: 'ingredient', id: 'mu' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [],
    },
    synonyms: ['갈치찜'],
  },
  gungmul_dakbal: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'gungmul_dakbal',
    label: '국물닭발',
    category: 'main_dish_meal',
    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'dakbal' }],
      common: [
        { kind: 'ingredient', id: 'daepa' },
        { kind: 'ingredient', id: 'garlic' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'black_pepper' },
        { kind: 'ingredient', id: 'sugar' },
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'oligodang' },
      ],
      optional: [{ kind: 'ingredient', id: 'cheongyang_gochu' }],
    },
  },

  dakdari_steak: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'dakdari_steak',
    label: '닭다리 스테이크',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'chicken_leg' }],
      common: [{ kind: 'ingredient', id: 'daepa' }],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'black_pepper' },
        { kind: 'ingredient', id: 'olive_oil' },
      ],
      optional: [],
    },
  },
  dakgalbi: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'dakgalbi',
    label: '닭갈비',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'chicken_leg' },
        { kind: 'ingredient', id: 'yangbaechu' },
      ],
      common: [
        { kind: 'ingredient', id: 'sweet_potato' },
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'tteokbokki_tteok' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'sugar' },
      ],
      optional: [{ kind: 'ingredient', id: 'mozzarella_cheese' }],
    },
  },
  buchu_jeon: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'buchu_jeon',
    label: '부추전',
    category: 'main_dish_meal',

    difficulty: 'easy',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'buchu' },
        { kind: 'ingredient', id: 'buchim_garu' },
      ],
      common: [{ kind: 'ingredient', id: 'egg' }],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [],
    },
  },
  bulgogi: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'bulgogi',
    label: '불고기',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'beef_shoulder' }],
      common: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'daepa' },
        { kind: 'ingredient', id: 'bae' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'sugar' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'chamgireum' },
      ],
      optional: [],
    },
    synonyms: ['소불고기'],
  },
  agu_jjim: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'agu_jjim',
    label: '아구찜',
    category: 'main_dish_meal',

    difficulty: 'hard',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'agu' },
        { kind: 'ingredient', id: 'kongnamul' },
      ],
      common: [
        { kind: 'ingredient', id: 'minari' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'oligodang' },
      ],
      optional: [{ kind: 'ingredient', id: 'saesongi_beoseot' }],
    },
  },
  bossam: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'bossam',
    label: '보쌈',
    category: 'main_dish_meal',

    difficulty: 'hard',
    servingTemperature: 'warm',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'pork_belly' },
        { kind: 'ingredient', id: 'garlic' },
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'doenjang' },
        { kind: 'ingredient', id: 'black_pepper' },
      ],
      optional: [{ kind: 'ingredient', id: 'ginger' }],
    },
  },

  baechu_jeon: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'baechu_jeon',
    label: '배추전',
    category: 'main_dish_meal',

    difficulty: 'easy',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'baechu' },
        { kind: 'ingredient', id: 'buchim_garu' },
      ],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [],
    },
  },

  aehobak_jjigae: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'aehobak_jjigae',
    label: '애호박찌개',
    category: 'soup_meal',
    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'aehobak' }],
      common: [
        { kind: 'ingredient', id: 'daepa' },
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'cheongyang_gochu' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'doenjang' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'salt' },
      ],
      optional: [
        { kind: 'ingredient', id: 'dubu' },
        { kind: 'ingredient', id: 'potato' },
        { kind: 'ingredient', id: 'pork_shoulder' },
      ],
    },
  },
  aglio_e_olio_pasta: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'aglio_e_olio_pasta',
    label: '알리오올리오파스타',
    category: 'noodle_meal',

    difficulty: 'easy',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'garlic' },
        { kind: 'ingredient', id: 'spaghetti_myeon' },
        { kind: 'ingredient', id: 'olive_oil' },
      ],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'peperoncino' },
      ],
      optional: [{ kind: 'ingredient', id: 'parmesan_cheese' }],
    },
    synonyms: ['알리오올리오', '알리오올리오스파게티'],
  },

  al_tang: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'al_tang',
    label: '알탕',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'goni' }],
      common: [
        { kind: 'ingredient', id: 'myeongran' },
        { kind: 'ingredient', id: 'daepa' },
        { kind: 'ingredient', id: 'ssukgat' },
        { kind: 'ingredient', id: 'mu' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'yuksu_coin' },
      ],
      optional: [{ kind: 'ingredient', id: 'dubu' }],
    },
  },
  bacon_cream_pasta: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'bacon_cream_pasta',
    label: '베이컨크림파스타',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'bacon' },
        { kind: 'ingredient', id: 'spaghetti_myeon' },
        { kind: 'ingredient', id: 'fresh_cream' },
        { kind: 'ingredient', id: 'milk' },
      ],
      common: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'yangsongi_beoseot' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'black_pepper' },
      ],
      optional: [{ kind: 'ingredient', id: 'parmesan_cheese' }],
    },
    synonyms: ['크림파스타', '크림베이컨파스타', '크림베이컨스파게티'],
  },

  bajirak_guk: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'bajirak_guk',
    label: '바지락국',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'bajirak' }],
      common: [
        { kind: 'ingredient', id: 'mu' },
        { kind: 'ingredient', id: 'daepa' },
        { kind: 'ingredient', id: 'cheongyang_gochu' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'salt' },
      ],
      optional: [{ kind: 'ingredient', id: 'ssukgat' }],
    },
  },
  // bajirak_kal_guksu: {
  //   defaultUnitLabel: '개',
  //   kind: 'meal',
  //   isActive: true,
  //   id: 'bajirak_kal_guksu',
  //   label: '바지락칼국수',
  //   category: 'noodle_meal',

  //   difficulty: 'medium',
  //   servingTemperature: 'hot',
  //   availableFoodSources: ['takeout'],
  //   foodStructure: {
  //     essential: [
  //       { kind: 'ingredient', id: 'bajirak' },
  //       { kind: 'ingredient', id: 'kal_guksu_myeon' },
  //     ],
  //     common: [
  //       { kind: 'ingredient', id: 'aehobak' },
  //       { kind: 'ingredient', id: 'potato' },
  //     ],
  //     seasoning: [
  //       { kind: 'ingredient', id: 'minced_garlic' },
  //       { kind: 'ingredient', id: 'salt' },
  //       { kind: 'ingredient', id: 'yuksu_coin' },
  //     ],
  //     optional: [{ kind: 'ingredient', id: 'cheongyang_gochu' }],
  //   },
  //   imageName: 'kal_guksu',
  // },

  basil_pesto_pasta: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'basil_pesto_pasta',
    label: '바질페스토파스타',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'spaghetti_myeon' },
        { kind: 'ingredient', id: 'basil_pesto' },
      ],
      common: [],
      seasoning: [],
      optional: [{ kind: 'ingredient', id: 'parmesan_cheese' }],
    },
    synonyms: ['바질페스토스파게티'],
  },
  beoteo_jang_jorim_gyeran_bap: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'beoteo_jang_jorim_gyeran_bap',
    label: '버터장조림비빔밥',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'warm',

    foodStructure: {
      essential: [
        { kind: 'preparedFood', id: 'cooked_rice' },
        { kind: 'preparedFood', id: 'gyeran_jang_jorim' },
        { kind: 'ingredient', id: 'butter' },
      ],
      common: [],
      seasoning: [],
      optional: [],
    },
  },
  bibim_guksu: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'bibim_guksu',
    label: '비빔국수',
    category: 'noodle_meal',

    difficulty: 'easy',
    servingTemperature: 'cold',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'somyeon' }],
      common: [
        { kind: 'ingredient', id: 'cucumber' },
        { kind: 'ingredient', id: 'egg' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'vinegar' },
        { kind: 'ingredient', id: 'chamgireum' },
        { kind: 'ingredient', id: 'oligodang' },
      ],
      optional: [
        { kind: 'ingredient', id: 'gim' },
        { kind: 'ingredient', id: 'carrot' },
      ],
    },
    synonyms: ['비빔면'],
  },
  bibimbap: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'bibimbap',
    label: '비빔밥',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'warm',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'preparedFood', id: 'cooked_rice' }],
      common: [
        { kind: 'ingredient', id: 'gosari' },
        { kind: 'ingredient', id: 'aehobak' },
        { kind: 'ingredient', id: 'carrot' },
        { kind: 'ingredient', id: 'sigeumchi' },
        { kind: 'ingredient', id: 'pyogo_beoseot' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'chamgireum' },
      ],
      optional: [
        { kind: 'ingredient', id: 'egg' },
        { kind: 'ingredient', id: 'ground_beef' },
      ],
    },
  },
  biji_jjigae: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'biji_jjigae',
    label: '비지찌개',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'kongbiji' }],
      common: [
        { kind: 'ingredient', id: 'daepa' },
        { kind: 'ingredient', id: 'pork_belly' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'salt' },
      ],
      optional: [{ kind: 'ingredient', id: 'cheongyang_gochu' }],
    },
    synonyms: ['콩비지찌개'],
  },

  bokkeum_udon: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'bokkeum_udon',
    label: '볶음우동',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'udon_myeon' }],
      common: [
        { kind: 'ingredient', id: 'yangbaechu' },
        { kind: 'ingredient', id: 'saeu' },
        { kind: 'ingredient', id: 'onion' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'oyster_sauce' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [
        { kind: 'ingredient', id: 'sukjunamul' },
        { kind: 'ingredient', id: 'egg' },
      ],
    },
  },
  bolognese_pasta: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'bolognese_pasta',
    label: '볼로네제파스타',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'spaghetti_myeon' },
        { kind: 'ingredient', id: 'ground_beef' },
      ],
      common: [{ kind: 'ingredient', id: 'onion' }],
      seasoning: [
        { kind: 'ingredient', id: 'tomato_sauce' },
        { kind: 'ingredient', id: 'olive_oil' },
        { kind: 'ingredient', id: 'black_pepper' },
      ],
      optional: [{ kind: 'ingredient', id: 'parmesan_cheese' }],
    },
    synonyms: ['볼로네제', '볼로네제스파게티'],
  },

  broccoli_soup: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'broccoli_soup',
    label: '브로콜리스프',
    category: 'western_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'broccoli' },
        { kind: 'ingredient', id: 'milk' },
      ],
      common: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'butter' },
      ],
      seasoning: [{ kind: 'ingredient', id: 'salt' }],
      optional: [],
    },
  },

  budae_jjigae: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'budae_jjigae',
    label: '부대찌개',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'sausage' }],
      common: [
        { kind: 'ingredient', id: 'ramyeon_sari' },
        { kind: 'ingredient', id: 'dubu' },
        { kind: 'ingredient', id: 'daepa' },
        { kind: 'ingredient', id: 'yangbaechu' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'yuksu_coin' },
      ],
      optional: [],
    },
  },
  bugeo_guk: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'bugeo_guk',
    label: '북엇국',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'hwangtaechae' }],
      common: [
        { kind: 'ingredient', id: 'egg' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'guk_ganjang' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'chamgireum' },
        { kind: 'ingredient', id: 'yuksu_coin' },
      ],
      optional: [],
    },
    synonyms: ['황태국'],
  },

  bulgogi_jeongol: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'bulgogi_jeongol',
    label: '불고기전골',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'meal', id: 'bulgogi' }],
      common: [
        { kind: 'ingredient', id: 'neutari_beoseot' },
        { kind: 'ingredient', id: 'paengi_beoseot' },
        { kind: 'ingredient', id: 'dangmyeon' },
        { kind: 'ingredient', id: 'onion' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'yuksu_coin' },
        { kind: 'ingredient', id: 'guk_ganjang' },
      ],
      optional: [],
    },
  },
  carbonara_pasta: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'carbonara_pasta',
    label: '까르보나라파스타',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'spaghetti_myeon' },
        { kind: 'ingredient', id: 'bacon' },
        { kind: 'ingredient', id: 'egg' },
      ],
      common: [],
      seasoning: [{ kind: 'ingredient', id: 'black_pepper' }],
      optional: [{ kind: 'ingredient', id: 'parmesan_cheese' }],
    },
    synonyms: ['까르보나라', '까르보나라스파게티'],
  },

  chamchi_jjigae: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'chamchi_jjigae',
    label: '참치찌개',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'canned_tuna' }],
      common: [
        { kind: 'ingredient', id: 'dubu' },
        { kind: 'ingredient', id: 'daepa' },
        { kind: 'ingredient', id: 'onion' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [],
    },
  },
  chamchi_juk: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'chamchi_juk',
    label: '참치죽',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'canned_tuna' }],
      common: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'carrot' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'chamgireum' },
      ],
      optional: [],
    },
  },

  cheonggukjang_jjigae: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'cheonggukjang_jjigae',
    label: '청국장찌개',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'cheonggukjang' }],
      common: [
        { kind: 'ingredient', id: 'dubu' },
        { kind: 'ingredient', id: 'daepa' },
        { kind: 'ingredient', id: 'onion' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'doenjang' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'yuksu_coin' },
      ],
      optional: [],
    },
  },

  corn_soup: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'corn_soup',
    label: '옥수수스프',
    category: 'western_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'canned_oksusu' },
        { kind: 'ingredient', id: 'milk' },
      ],
      common: [
        { kind: 'ingredient', id: 'butter' },
        { kind: 'ingredient', id: 'onion' },
      ],
      seasoning: [{ kind: 'ingredient', id: 'salt' }],
      optional: [],
    },
    synonyms: ['콘스프'],
  },
  cream_risotto: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'cream_risotto',
    label: '크림리조또',
    category: 'western_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'milk' },
        { kind: 'ingredient', id: 'baekmi' },
        { kind: 'ingredient', id: 'fresh_cream' },
      ],
      common: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'butter' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'black_pepper' },
      ],
      optional: [{ kind: 'ingredient', id: 'parmesan_cheese' }],
    },
  },
  cream_soup: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'cream_soup',
    label: '크림스프',
    category: 'western_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'milk' }],
      common: [
        { kind: 'ingredient', id: 'butter' },
        { kind: 'ingredient', id: 'onion' },
      ],
      seasoning: [{ kind: 'ingredient', id: 'salt' }],
      optional: [],
    },
  },
  curry_rice: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'curry_rice',
    label: '카레라이스',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'preparedFood', id: 'cooked_rice' },
        { kind: 'ingredient', id: 'curry_block' },
      ],
      common: [
        { kind: 'ingredient', id: 'potato' },
        { kind: 'ingredient', id: 'carrot' },
        { kind: 'ingredient', id: 'onion' },
      ],
      seasoning: [],
      optional: [
        { kind: 'ingredient', id: 'ground_beef' },
        { kind: 'ingredient', id: 'pork_loin' },
      ],
    },
  },
  curry_udon: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'curry_udon',
    label: '카레우동',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'udon_myeon' },
        { kind: 'ingredient', id: 'curry_block' },
      ],
      common: [{ kind: 'ingredient', id: 'onion' }],
      seasoning: [],
      optional: [],
    },
  },
  dak_hanmari: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'dak_hanmari',
    label: '닭한마리',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'chicken_whole' }],
      common: [
        { kind: 'ingredient', id: 'daepa' },
        { kind: 'ingredient', id: 'kal_guksu_myeon' },
        { kind: 'ingredient', id: 'potato' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'yuksu_coin' },
        { kind: 'ingredient', id: 'salt' },
      ],
      optional: [],
    },
  },
  dak_juk: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'dak_juk',
    label: '닭죽',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'baekmi' },
        { kind: 'ingredient', id: 'chicken_breast' },
      ],
      common: [
        { kind: 'ingredient', id: 'aehobak' },
        { kind: 'ingredient', id: 'carrot' },
        { kind: 'ingredient', id: 'onion' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'yuksu_coin' },
      ],
      optional: [
        { kind: 'ingredient', id: 'guk_ganjang' },
        { kind: 'ingredient', id: 'chamgireum' },
        { kind: 'ingredient', id: 'bokkeun_chamkkae' },
      ],
    },
  },

  dakbal_yangnyeom_bokkeum: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'dakbal_yangnyeom_bokkeum',
    label: '닭발양념볶음',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'dakbal' }],
      common: [{ kind: 'ingredient', id: 'daepa' }],
      seasoning: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'oligodang' },
      ],
      optional: [],
    },
    synonyms: ['닭발양념'],
  },
  dakbokkeum_tang: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'dakbokkeum_tang',
    label: '닭볶음탕',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'chicken_stew_cut' }],
      common: [
        { kind: 'ingredient', id: 'potato' },
        { kind: 'ingredient', id: 'carrot' },
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [],
    },
    synonyms: ['닭도리탕'],
  },

  dakgaejang: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'dakgaejang',
    label: '닭개장',
    category: 'soup_meal',

    difficulty: 'hard',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'chicken_breast' }],
      common: [
        { kind: 'ingredient', id: 'sukjunamul' },
        { kind: 'ingredient', id: 'gosari' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [],
      optional: [],
    },
  },

  dakgom_tang: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'dakgom_tang',
    label: '닭곰탕',
    category: 'soup_meal',

    difficulty: 'hard',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'chicken_whole' }],
      common: [{ kind: 'ingredient', id: 'daepa' }],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'yuksu_coin' },
      ],
      optional: [],
    },
  },

  danhobak_soup: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'danhobak_soup',
    label: '단호박스프',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'danhobak' }],
      common: [
        { kind: 'ingredient', id: 'milk' },
        { kind: 'ingredient', id: 'butter' },
      ],
      seasoning: [{ kind: 'ingredient', id: 'salt' }],
      optional: [],
    },
    synonyms: ['단호박스프'],
  },

  deulgireum_mak_guksu: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'deulgireum_mak_guksu',
    label: '들기름막국수',
    category: 'noodle_meal',

    difficulty: 'easy',
    servingTemperature: 'cold',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'memil_myeon' },
        { kind: 'ingredient', id: 'deulgireum' },
      ],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'oligodang' },
      ],
      optional: [],
    },
  },
  deulkkae_kal_guksu: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'deulkkae_kal_guksu',
    label: '들깨칼국수',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'kal_guksu_myeon' },
        { kind: 'ingredient', id: 'deulkkae_garu' },
      ],
      common: [{ kind: 'ingredient', id: 'aehobak' }],
      seasoning: [
        { kind: 'ingredient', id: 'yuksu_coin' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [{ kind: 'ingredient', id: 'potato' }],
    },
  },
  doenjang_guk: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'doenjang_guk',
    label: '된장국',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'doenjang' }],
      common: [
        { kind: 'ingredient', id: 'dubu' },
        { kind: 'ingredient', id: 'aehobak' },
        { kind: 'ingredient', id: 'onion' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'yuksu_coin' },
      ],
      optional: [],
    },
  },
  doenjang_jjigae: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'doenjang_jjigae',
    label: '된장찌개',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'doenjang' }],
      common: [
        { kind: 'ingredient', id: 'dubu' },
        { kind: 'ingredient', id: 'aehobak' },
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'yuksu_coin' },
      ],
      optional: [],
    },
  },
  dogani_tang: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'dogani_tang',
    label: '도가니곰탕',
    category: 'soup_meal',

    difficulty: 'hard',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
  },

  dongtae_jjigae: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'dongtae_jjigae',
    label: '동태찌개',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'dongtae' }],
      common: [
        { kind: 'ingredient', id: 'mu' },
        { kind: 'ingredient', id: 'dubu' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'yuksu_coin' },
      ],
      optional: [],
    },
  },

  egg_in_the_hell: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'egg_in_the_hell',
    label: '에그인더헬',
    category: 'western_meal',

    difficulty: 'easy',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'egg' },
        { kind: 'ingredient', id: 'tomato_sauce' },
      ],
      common: [{ kind: 'ingredient', id: 'onion' }],
      seasoning: [
        { kind: 'ingredient', id: 'olive_oil' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'salt' },
      ],
      optional: [],
    },
    synonyms: ['샥슈카'],
  },

  eomuk_guk: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'eomuk_guk',
    label: '어묵국',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'eomuk' }],
      common: [
        { kind: 'ingredient', id: 'mu' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'yuksu_coin' },
        { kind: 'ingredient', id: 'guk_ganjang' },
      ],
      optional: [],
    },
    synonyms: ['오뎅국'],
  },
  eomuk_tang: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'eomuk_tang',
    label: '어묵탕',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'eomuk' }],
      common: [
        { kind: 'ingredient', id: 'mu' },
        { kind: 'ingredient', id: 'daepa' },
        { kind: 'ingredient', id: 'ssukgat' },
        { kind: 'ingredient', id: 'pyogo_beoseot' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'yuksu_coin' },
        { kind: 'ingredient', id: 'guk_ganjang' },
      ],
      optional: [],
    },
    synonyms: ['오뎅탕'],
  },

  galbi_tang: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'galbi_tang',
    label: '갈비탕',
    category: 'soup_meal',

    difficulty: 'hard',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'beef_short_rib' }],
      common: [
        { kind: 'ingredient', id: 'mu' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [{ kind: 'ingredient', id: 'salt' }],
      optional: [],
    },
  },

  gambas: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'gambas',
    label: '감바스',
    category: 'western_meal',

    difficulty: 'easy',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'saeu' },
        { kind: 'ingredient', id: 'garlic' },
        { kind: 'ingredient', id: 'olive_oil' },
        { kind: 'ingredient', id: 'peperoncino' },
      ],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'black_pepper' },
        { kind: 'ingredient', id: 'salt' },
      ],
      optional: [{ kind: 'ingredient', id: 'yangsongi_beoseot' }],
    },
  },
  gamja_guk: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'gamja_guk',
    label: '맑은감자국',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'potato' }],
      common: [{ kind: 'ingredient', id: 'daepa' }],
      seasoning: [
        { kind: 'ingredient', id: 'guk_ganjang' },
        { kind: 'ingredient', id: 'yuksu_coin' },
      ],
      optional: [],
    },
  },

  gamja_soup: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'gamja_soup',
    label: '감자스프',
    category: 'western_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'potato' },
        { kind: 'ingredient', id: 'milk' },
      ],
      common: [
        { kind: 'ingredient', id: 'butter' },
        { kind: 'ingredient', id: 'onion' },
      ],
      seasoning: [{ kind: 'ingredient', id: 'salt' }],
      optional: [],
    },
  },
  gamja_tang: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'gamja_tang',
    label: '감자탕',
    category: 'soup_meal',

    difficulty: 'hard',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
  },

  ganjang_gyeran_bap: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'ganjang_gyeran_bap',
    label: '간장계란밥',
    category: 'rice_meal',

    difficulty: 'easy',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'preparedFood', id: 'cooked_rice' },
        { kind: 'ingredient', id: 'egg' },
      ],
      common: [],
      seasoning: [{ kind: 'ingredient', id: 'soy_sauce' }],
      optional: [{ kind: 'ingredient', id: 'butter' }],
    },
    synonyms: ['간장달걀밥'],
  },

  gesal_juk: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'gesal_juk',
    label: '게살죽',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'matsal' },
        { kind: 'ingredient', id: 'baekmi' },
      ],
      common: [],
      seasoning: [{ kind: 'ingredient', id: 'salt' }],
      optional: [],
    },
  },

  gimbap: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'gimbap',
    label: '김밥',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'warm',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'preparedFood', id: 'cooked_rice' },
        { kind: 'ingredient', id: 'gim' },
      ],
      common: [
        { kind: 'ingredient', id: 'egg' },
        { kind: 'ingredient', id: 'sigeumchi' },
        { kind: 'ingredient', id: 'carrot' },
      ],
      seasoning: [{ kind: 'ingredient', id: 'chamgireum' }],
      optional: [],
    },
  },

  gochujang_jjigae: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'gochujang_jjigae',
    label: '고추장찌개',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'gochujang' }],
      common: [
        { kind: 'ingredient', id: 'dubu' },
        { kind: 'ingredient', id: 'aehobak' },
        { kind: 'ingredient', id: 'onion' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'yuksu_coin' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [],
    },
  },

  goguma_soup: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'goguma_soup',
    label: '고구마스프',
    category: 'western_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'sweet_potato' },
        { kind: 'ingredient', id: 'milk' },
        { kind: 'ingredient', id: 'fresh_cream' },
      ],
      common: [{ kind: 'ingredient', id: 'butter' }],
      seasoning: [{ kind: 'ingredient', id: 'salt' }],
      optional: [],
    },
  },

  gom_tang: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'gom_tang',
    label: '곰탕',
    category: 'soup_meal',

    difficulty: 'hard',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'beef_brisket' },
        { kind: 'ingredient', id: 'sagol_yuksu' },
      ],
      common: [
        { kind: 'ingredient', id: 'daepa' },
        { kind: 'ingredient', id: 'somyeon' },
      ],
      seasoning: [{ kind: 'ingredient', id: 'salt' }],
      optional: [],
    },
  },
  gondre_bap: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'gondre_bap',
    label: '곤드레밥',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'warm',

    foodStructure: {
      essential: [
        { kind: 'preparedFood', id: 'cooked_rice' },
        { kind: 'ingredient', id: 'gondre' },
      ],
      common: [],
      seasoning: [],
      optional: [],
    },
    synonyms: ['나물밥'],
  },

  gratin: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'gratin',
    label: '그라탕',
    category: 'western_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'potato' },
        { kind: 'ingredient', id: 'mozzarella_cheese' },
        { kind: 'ingredient', id: 'milk' },
      ],
      common: [
        { kind: 'ingredient', id: 'bacon' },
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'butter' },
        { kind: 'ingredient', id: 'yangsongi_beoseot' },
      ],
      seasoning: [{ kind: 'ingredient', id: 'black_pepper' }],
      optional: [
        { kind: 'ingredient', id: 'parmesan_cheese' },
        { kind: 'ingredient', id: 'parsley' },
      ],
    },
  },

  gyeran_bokkeumbap: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'gyeran_bokkeumbap',
    label: '계란볶음밥',
    category: 'rice_meal',

    difficulty: 'easy',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'preparedFood', id: 'cooked_rice' },
        { kind: 'ingredient', id: 'egg' },
      ],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [],
    },
    synonyms: ['달걀볶음밥'],
  },
  gyeran_guk: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'gyeran_guk',
    label: '계란국',
    category: 'soup_meal',

    difficulty: 'easy',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'egg' }],
      common: [{ kind: 'ingredient', id: 'daepa' }],
      seasoning: [
        { kind: 'ingredient', id: 'guk_ganjang' },
        { kind: 'ingredient', id: 'yuksu_coin' },
      ],
      optional: [],
    },
    synonyms: ['달걀국'],
  },

  haemul_juk: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'haemul_juk',
    label: '해물죽',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'saeu' },
        { kind: 'ingredient', id: 'honghap' },
      ],
      common: [{ kind: 'ingredient', id: 'ojingeo' }],
      seasoning: [{ kind: 'ingredient', id: 'salt' }],
      optional: [],
    },
  },

  heukimja_juk: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'heukimja_juk',
    label: '흑임자죽',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'heukimja' },
        { kind: 'ingredient', id: 'chapssal' },
      ],
      common: [],
      seasoning: [{ kind: 'ingredient', id: 'salt' }],
      optional: [],
    },
  },
  hobak_juk: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'hobak_juk',
    label: '호박죽',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'hobak' },
        { kind: 'ingredient', id: 'chapssal' },
      ],
      common: [],
      seasoning: [{ kind: 'ingredient', id: 'salt' }],
      optional: [],
    },
    synonyms: ['단호박죽'],
  },
  hoe_deopbap: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'hoe_deopbap',
    label: '회덮밥',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'cold',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'preparedFood', id: 'cooked_rice' },
        { kind: 'ingredient', id: 'hoe' },
      ],
      common: [
        { kind: 'ingredient', id: 'sangchu' },
        { kind: 'ingredient', id: 'onion' },
      ],
      seasoning: [{ kind: 'ingredient', id: 'chogochujang' }],
      optional: [],
    },
  },
  honghap_tang: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'honghap_tang',
    label: '홍합탕',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'honghap' }],
      common: [{ kind: 'ingredient', id: 'daepa' }],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'guk_ganjang' },
      ],
      optional: [],
    },
  },

  jajang_bap: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'jajang_bap',
    label: '짜장밥',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'preparedFood', id: 'cooked_rice' },
        { kind: 'ingredient', id: 'jajang_garu' },
      ],
      common: [
        { kind: 'ingredient', id: 'pork_belly' },
        { kind: 'ingredient', id: 'onion' },
      ],
      seasoning: [],
      optional: [],
    },
    synonyms: ['자장밥'],
  },
  jajang_myeon: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'jajang_myeon',
    label: '짜장면',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    synonyms: ['자장면'],
  },
  janchi_guksu: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'janchi_guksu',
    label: '잔치국수',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'somyeon' }],
      common: [
        { kind: 'ingredient', id: 'egg' },
        { kind: 'ingredient', id: 'gim' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'yuksu_coin' },
        { kind: 'ingredient', id: 'guk_ganjang' },
      ],
      optional: [],
    },
  },

  japchae_bap: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'japchae_bap',
    label: '잡채밥',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'warm',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'preparedFood', id: 'cooked_rice' },
        { kind: 'preparedFood', id: 'japchae' },
      ],
      common: [],
      seasoning: [],
      optional: [],
    },
  },
  jeonbok_juk: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'jeonbok_juk',
    label: '전복죽',
    category: 'main_dish_meal',
    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['convenience', 'takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'jeonbok' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'chamgireum' },
        { kind: 'ingredient', id: 'salt' },
      ],
      optional: [],
    },
  },

  jeyuk_deopbap: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'jeyuk_deopbap',
    label: '제육덮밥',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'preparedFood', id: 'cooked_rice' },
        { kind: 'ingredient', id: 'pork_shoulder' },
      ],
      common: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'yangbaechu' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [],
    },
  },

  jjamppong: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'jjamppong',
    label: '짬뽕',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
  },
  jjolmyeon: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'jjolmyeon',
    label: '쫄면',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'cold',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'jjolmyeon_sari' }],
      common: [
        { kind: 'ingredient', id: 'cucumber' },
        { kind: 'ingredient', id: 'yangbaechu' },
        { kind: 'ingredient', id: 'egg' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'vinegar' },
        { kind: 'ingredient', id: 'sugar' },
      ],
      optional: [],
    },
  },

  jumeok_bap: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'jumeok_bap',
    label: '주먹밥',
    category: 'rice_meal',

    difficulty: 'easy',
    servingTemperature: 'warm',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'preparedFood', id: 'cooked_rice' },
        { kind: 'preparedFood', id: 'gimjaban' },
      ],
      common: [],
      seasoning: [{ kind: 'ingredient', id: 'chamgireum' }],
      optional: [],
    },
    synonyms: ['삼각김밥'],
  },
  kal_guksu: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'kal_guksu',
    label: '칼국수',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'kal_guksu_myeon' }],
      common: [
        { kind: 'ingredient', id: 'aehobak' },
        { kind: 'ingredient', id: 'potato' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'yuksu_coin' },
        { kind: 'ingredient', id: 'guk_ganjang' },
      ],
      optional: [],
    },
    imageName: 'bajirak_kal_guksu',
  },
  karaage_don: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'karaage_don',
    label: '가라아게동',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'preparedFood', id: 'cooked_rice' }],
      common: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'matsul' },
        { kind: 'ingredient', id: 'soy_sauce' },
      ],
      optional: [{ kind: 'ingredient', id: 'mayonnaise' }],
    },
    synonyms: ['치킨덮밥', '가라아게덮밥'],
  },
  katsu_don: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'katsu_don',
    label: '가츠동',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'preparedFood', id: 'cooked_rice' }],
      common: [
        { kind: 'ingredient', id: 'egg' },
        { kind: 'ingredient', id: 'onion' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'sugar' },
      ],
      optional: [],
    },
    synonyms: ['돈까스덮밥', '돈가스덮밥'],
  },

  kimchi_bokkeumbap: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'kimchi_bokkeumbap',
    label: '김치볶음밥',
    category: 'rice_meal',
    difficulty: 'easy',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'preparedFood', id: 'cooked_rice' },
        { kind: 'preparedFood', id: 'baechu_kimchi' },
      ],
      common: [{ kind: 'ingredient', id: 'egg' }],
      seasoning: [],
      optional: [
        { kind: 'ingredient', id: 'cooking_oil' },
        { kind: 'ingredient', id: 'deulgireum' },
      ],
    },
  },
  kimchi_guk: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'kimchi_guk',
    label: '김치국',
    category: 'soup_meal',

    difficulty: 'easy',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'preparedFood', id: 'baechu_kimchi' }],
      common: [
        { kind: 'ingredient', id: 'dubu' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'guk_ganjang' },
        { kind: 'ingredient', id: 'yuksu_coin' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [],
    },
    synonyms: ['김칫국'],
  },

  kimchi_jjigae: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'kimchi_jjigae',
    label: '김치찌개',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'preparedFood', id: 'baechu_kimchi' }],
      common: [
        { kind: 'ingredient', id: 'dubu' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [],
    },
  },
  kimchi_mari_guksu: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'kimchi_mari_guksu',
    label: '김치말이국수',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'cold',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'preparedFood', id: 'baechu_kimchi' },
        { kind: 'ingredient', id: 'somyeon' },
      ],
      common: [
        { kind: 'ingredient', id: 'cucumber' },
        { kind: 'ingredient', id: 'egg' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'vinegar' },
        { kind: 'ingredient', id: 'sugar' },
      ],
      optional: [],
    },
  },

  kkotge_tang: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'kkotge_tang',
    label: '꽃게탕',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'kkotge' }],
      common: [
        { kind: 'ingredient', id: 'mu' },
        { kind: 'ingredient', id: 'daepa' },
        { kind: 'ingredient', id: 'aehobak' },
        { kind: 'ingredient', id: 'ssukgat' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'yuksu_coin' },
      ],
      optional: [],
    },
  },

  kong_guksu: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'kong_guksu',
    label: '콩국수',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'cold',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'somyeon' },
        { kind: 'preparedFood', id: 'kong_mul' },
      ],
      common: [{ kind: 'ingredient', id: 'cucumber' }],
      seasoning: [{ kind: 'ingredient', id: 'salt' }],
      optional: [],
    },
  },

  kongnamul_guk: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'kongnamul_guk',
    label: '콩나물국',
    category: 'soup_meal',

    difficulty: 'easy',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'kongnamul' }],
      common: [{ kind: 'ingredient', id: 'daepa' }],
      seasoning: [
        { kind: 'ingredient', id: 'guk_ganjang' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'yuksu_coin' },
      ],
      optional: [],
    },
    synonyms: ['콩나물해장국'],
  },

  lasagna: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'lasagna',
    label: '라자냐',
    category: 'western_meal',

    difficulty: 'hard',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'lasagna_myeon' },
        { kind: 'ingredient', id: 'tomato_sauce' },
        { kind: 'ingredient', id: 'mozzarella_cheese' },
      ],
      common: [{ kind: 'ingredient', id: 'onion' }],
      seasoning: [
        { kind: 'ingredient', id: 'olive_oil' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'black_pepper' },
      ],
      optional: [{ kind: 'ingredient', id: 'parmesan_cheese' }],
    },
  },
  mac_and_cheese: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'mac_and_cheese',
    label: '맥앤치즈',
    category: 'western_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'macaroni' },
        { kind: 'ingredient', id: 'cheddar_cheese' },
      ],
      common: [{ kind: 'ingredient', id: 'butter' }],
      seasoning: [
        { kind: 'ingredient', id: 'black_pepper' },
        { kind: 'ingredient', id: 'salt' },
      ],
      optional: [
        { kind: 'ingredient', id: 'mozzarella_cheese' },
        { kind: 'ingredient', id: 'bacon' },
      ],
    },
  },

  mandu_guk: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'mandu_guk',
    label: '만둣국',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'preparedFood', id: 'frozen_mandu' }],
      common: [
        { kind: 'ingredient', id: 'daepa' },
        { kind: 'ingredient', id: 'egg' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'guk_ganjang' },
        { kind: 'ingredient', id: 'yuksu_coin' },
      ],
      optional: [],
    },
    synonyms: ['만두국'],
  },
  mandu_jeongol: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'mandu_jeongol',
    label: '만두전골',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'preparedFood', id: 'frozen_mandu' }],
      common: [
        { kind: 'ingredient', id: 'baechu' },
        { kind: 'ingredient', id: 'paengi_beoseot' },
        { kind: 'ingredient', id: 'neutari_beoseot' },
        { kind: 'ingredient', id: 'dangmyeon' },
      ],
      seasoning: [{ kind: 'ingredient', id: 'guk_ganjang' }],
      optional: [],
    },
  },

  manyeo_soup: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'manyeo_soup',
    label: '마녀스프',
    category: 'western_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'tomato' }],
      common: [],
      seasoning: [],
      optional: [],
    },
  },
  mapadubu_deopbap: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'mapadubu_deopbap',
    label: '마파두부덮밥',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'preparedFood', id: 'cooked_rice' },
        { kind: 'ingredient', id: 'dubanjang' },
        { kind: 'ingredient', id: 'dubu' },
      ],
      common: [
        { kind: 'ingredient', id: 'ground_pork' },
        { kind: 'ingredient', id: 'onion' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'oyster_sauce' },
      ],
      optional: [],
    },
  },
  mara_tang: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'mara_tang',
    label: '마라탕',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'mala_sauce' }],
      common: [
        { kind: 'ingredient', id: 'cheonggyeongchae' },
        { kind: 'ingredient', id: 'sukjunamul' },
        { kind: 'ingredient', id: 'beef_shoulder' },
      ],
      seasoning: [],
      optional: [],
    },
  },

  millefeuille_nabe: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'millefeuille_nabe',
    label: '밀푀유나베',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'baechu' },
        { kind: 'ingredient', id: 'beef_shoulder' },
      ],
      common: [
        { kind: 'ingredient', id: 'paengi_beoseot' },
        { kind: 'ingredient', id: 'neutari_beoseot' },
      ],
      seasoning: [{ kind: 'ingredient', id: 'yuksu_coin' }],
      optional: [],
    },
  },
  miyeok_guk: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'miyeok_guk',
    label: '미역국',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'miyeok' }],
      common: [{ kind: 'ingredient', id: 'beef_brisket' }],
      seasoning: [
        { kind: 'ingredient', id: 'guk_ganjang' },
        { kind: 'ingredient', id: 'chamgireum' },
      ],
      optional: [],
    },
  },

  muksabal: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'muksabal',
    label: '묵사발',
    category: 'soup_meal',

    difficulty: 'easy',
    servingTemperature: 'cold',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'dotori_muk' }],
      common: [{ kind: 'ingredient', id: 'cucumber' }],
      seasoning: [{ kind: 'ingredient', id: 'vinegar' }],
      optional: [],
    },
  },

  naengmyeon: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'naengmyeon',
    label: '냉면',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'cold',
    availableFoodSources: ['takeout'],
  },
  nakgopsae: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'nakgopsae',
    label: '낙곱새',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'nakji' },
        { kind: 'ingredient', id: 'gopchang' },
        { kind: 'ingredient', id: 'saeu' },
      ],
      common: [
        { kind: 'ingredient', id: 'daepa' },
        { kind: 'ingredient', id: 'onion' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [],
    },
  },

  nakji_deopbap: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'nakji_deopbap',
    label: '낙지덮밥',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'preparedFood', id: 'cooked_rice' },
        { kind: 'ingredient', id: 'nakji' },
      ],
      common: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'yangbaechu' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [],
    },
  },

  nurungji: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'nurungji',
    label: '누룽지',
    category: 'rice_meal',

    difficulty: 'easy',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
  },

  oi_naeng_guk: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'oi_naeng_guk',
    label: '오이냉국',
    category: 'soup_meal',

    difficulty: 'easy',
    servingTemperature: 'cold',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'cucumber' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'vinegar' },
        { kind: 'ingredient', id: 'sugar' },
        { kind: 'ingredient', id: 'salt' },
      ],
      optional: [],
    },
  },

  ojingeo_deopbap: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'ojingeo_deopbap',
    label: '오징어덮밥',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'preparedFood', id: 'cooked_rice' },
        { kind: 'ingredient', id: 'ojingeo' },
      ],
      common: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'yangbaechu' },
        { kind: 'ingredient', id: 'carrot' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [],
    },
    synonyms: ['30'],
  },

  ojingeo_mu_guk: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'ojingeo_mu_guk',
    label: '오징어무국',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'ojingeo' },
        { kind: 'ingredient', id: 'mu' },
      ],
      common: [{ kind: 'ingredient', id: 'daepa' }],
      seasoning: [
        { kind: 'ingredient', id: 'guk_ganjang' },
        { kind: 'ingredient', id: 'yuksu_coin' },
      ],
      optional: [],
    },
  },

  omu_rice: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'omu_rice',
    label: '오므라이스',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'preparedFood', id: 'cooked_rice' },
        { kind: 'ingredient', id: 'egg' },
      ],
      common: [{ kind: 'ingredient', id: 'onion' }],
      seasoning: [{ kind: 'ingredient', id: 'ketchup' }],
      optional: [],
    },
  },
  onion_soup: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'onion_soup',
    label: '양파스프',
    category: 'western_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'chicken_stock' },
        { kind: 'ingredient', id: 'butter' },
      ],
      common: [{ kind: 'ingredient', id: 'mozzarella_cheese' }],
      seasoning: [{ kind: 'ingredient', id: 'black_pepper' }],
      optional: [],
    },
  },

  pad_thai: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'pad_thai',
    label: '팟타이',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'ssal_guksu_myeon' },
        { kind: 'ingredient', id: 'saeu' },
        { kind: 'ingredient', id: 'egg' },
      ],
      common: [
        { kind: 'ingredient', id: 'sukjunamul' },
        { kind: 'ingredient', id: 'peanut' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'oyster_sauce' },
        { kind: 'ingredient', id: 'oligodang' },
        { kind: 'ingredient', id: 'vinegar' },
      ],
      optional: [],
    },
  },

  pat_juk: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'pat_juk',
    label: '팥죽',
    category: 'main_dish_meal',

    difficulty: 'hard',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'pat' }],
      common: [],
      seasoning: [],
      optional: [],
    },
  },
  pizza: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'pizza',
    label: '피자',
    category: 'western_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
  },
  poke: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'poke',
    label: '포케',
    category: 'fresh_meal',

    difficulty: 'easy',
    servingTemperature: 'cold',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'preparedFood', id: 'cooked_rice' },
        { kind: 'ingredient', id: 'yeoneo_hoe' },
        { kind: 'ingredient', id: 'baby_leaf' },
      ],
      common: [
        { kind: 'ingredient', id: 'avocado' },
        { kind: 'ingredient', id: 'cucumber' },
        { kind: 'ingredient', id: 'tomato' },
        { kind: 'ingredient', id: 'canned_oksusu' },
        { kind: 'ingredient', id: 'jeok_yangpa' },
      ],
      seasoning: [],
      optional: [],
    },
  },

  ramen: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'ramen',
    label: '라멘',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
  },
  ramyeon: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'ramyeon',
    label: '라면',
    category: 'noodle_meal',

    difficulty: 'easy',
    servingTemperature: 'hot',
  },
  rose_pasta: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'rose_pasta',
    label: '로제파스타',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'spaghetti_myeon' },
        { kind: 'ingredient', id: 'rose_sauce' },
      ],
      common: [],
      seasoning: [],
      optional: [{ kind: 'ingredient', id: 'parmesan_cheese' }],
    },
    synonyms: ['로제스파게티'],
  },
  rose_risotto: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'rose_risotto',
    label: '로제리조또',
    category: 'western_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'baekmi' },
        { kind: 'ingredient', id: 'rose_sauce' },
      ],
      common: [],
      seasoning: [],
      optional: [],
    },
  },

  saeu_bokkeumbap: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'saeu_bokkeumbap',
    label: '새우볶음밥',
    category: 'rice_meal',

    difficulty: 'easy',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'preparedFood', id: 'cooked_rice' },
        { kind: 'ingredient', id: 'saeu' },
        { kind: 'ingredient', id: 'egg' },
      ],
      common: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'carrot' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'cooking_oil' },
        { kind: 'ingredient', id: 'soy_sauce' },
      ],
      optional: [],
    },
  },

  salad: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'salad',
    label: '샐러드',
    category: 'fresh_meal',

    difficulty: 'easy',
    servingTemperature: 'cold',

    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'baby_leaf' },
        { kind: 'ingredient', id: 'yangsangchu' },
      ],
      common: [
        { kind: 'ingredient', id: 'tomato' },
        { kind: 'ingredient', id: 'egg' },
      ],
      seasoning: [],
      optional: [],
    },
  },
  samgye_juk: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'samgye_juk',
    label: '삼계죽',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
  },
  samgye_tang: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'samgye_tang',
    label: '삼계탕',
    category: 'soup_meal',

    difficulty: 'hard',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    synonyms: ['닭백숙'],
  },
  sandwich: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'sandwich',
    label: '샌드위치',
    category: 'western_meal',

    difficulty: 'easy',
    servingTemperature: 'cold',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'preparedFood', id: 'sandwich_bread' },
        { kind: 'ingredient', id: 'egg' },
      ],
      common: [
        { kind: 'ingredient', id: 'sandwich_ham' },
        { kind: 'ingredient', id: 'cheddar_cheese' },
        { kind: 'ingredient', id: 'yangsangchu' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'mayonnaise' },
        { kind: 'ingredient', id: 'wholegrain_mustard' },
      ],
      optional: [],
    },
  },

  seolleong_tang: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'seolleong_tang',
    label: '설렁탕',
    category: 'soup_meal',
    difficulty: 'hard',
    servingTemperature: 'hot',
    availableFoodSources: ['convenience', 'takeout'],

    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'sagol_yuksu' },
        { kind: 'ingredient', id: 'beef_brisket' },
      ],
      common: [{ kind: 'ingredient', id: 'daepa' }],
      seasoning: [{ kind: 'ingredient', id: 'salt' }],
      optional: [],
    },

    synonyms: ['설농탕'],
  },

  shabu_shabu: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'shabu_shabu',
    label: '샤브샤브',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'paengi_beoseot' },
        { kind: 'ingredient', id: 'beef_brisket' },
        { kind: 'ingredient', id: 'sukjunamul' },
      ],
      common: [
        { kind: 'ingredient', id: 'daepa' },
        { kind: 'ingredient', id: 'ssukgat' },
        { kind: 'ingredient', id: 'baechu' },
        { kind: 'ingredient', id: 'neutari_beoseot' },
        { kind: 'ingredient', id: 'pyogo_beoseot' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'yuksu_coin' },
        { kind: 'ingredient', id: 'salt' },
      ],
      optional: [],
    },
  },

  siraegi_guk: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'siraegi_guk',
    label: '시래기국',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'siraegi' }],
      common: [{ kind: 'ingredient', id: 'daepa' }],
      seasoning: [
        { kind: 'ingredient', id: 'doenjang' },
        { kind: 'ingredient', id: 'yuksu_coin' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [],
    },
  },

  sogogi_jeongol: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'sogogi_jeongol',
    label: '소고기전골',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'beef_shoulder' }],
      common: [
        { kind: 'ingredient', id: 'baechu' },
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'neutari_beoseot' },
        { kind: 'ingredient', id: 'paengi_beoseot' },
        { kind: 'ingredient', id: 'dangmyeon' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'yuksu_coin' },
      ],
      optional: [],
    },
  },
  sogogi_mu_guk: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'sogogi_mu_guk',
    label: '소고기무국',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'beef_brisket' },
        { kind: 'ingredient', id: 'mu' },
      ],
      common: [{ kind: 'ingredient', id: 'daepa' }],
      seasoning: [
        { kind: 'ingredient', id: 'guk_ganjang' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [],
    },
  },

  sogogi_yachae_juk: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'sogogi_yachae_juk',
    label: '소고기야채죽',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
  },
  ssal_guksu: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'ssal_guksu',
    label: '쌀국수',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
  },

  sujebi: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'sujebi',
    label: '수제비',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'sujebi' }],
      common: [
        { kind: 'ingredient', id: 'potato' },
        { kind: 'ingredient', id: 'aehobak' },
        { kind: 'ingredient', id: 'onion' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'yuksu_coin' },
        { kind: 'ingredient', id: 'guk_ganjang' },
      ],
      optional: [],
    },
  },

  sundae_guk: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'sundae_guk',
    label: '순대국',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'sagol_yuksu' }],
      common: [{ kind: 'ingredient', id: 'daepa' }],
      seasoning: [{ kind: 'ingredient', id: 'salt' }],
      optional: [],
    },
  },
  sundubu_jjigae: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'sundubu_jjigae',
    label: '순두부찌개',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'sun_dubu' }],
      common: [
        { kind: 'ingredient', id: 'egg' },
        { kind: 'ingredient', id: 'bajirak' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [],
    },
  },

  tantanmen: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'tantanmen',
    label: '탄탄멘',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
  },
  ten_don: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'ten_don',
    label: '텐동',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
  },
  tomato_caprese: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'tomato_caprese',
    label: '토마토카프레제',
    category: 'western_meal',

    difficulty: 'easy',
    servingTemperature: 'cold',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'tomato' },
        { kind: 'ingredient', id: 'mozzarella_cheese' },
      ],
      common: [],
      seasoning: [{ kind: 'ingredient', id: 'olive_oil' }],
      optional: [{ kind: 'ingredient', id: 'black_pepper' }],
    },
  },

  tomato_pasta: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'tomato_pasta',
    label: '토마토파스타',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'spaghetti_myeon' },
        { kind: 'ingredient', id: 'tomato_sauce' },
      ],
      common: [{ kind: 'ingredient', id: 'onion' }],
      seasoning: [],
      optional: [{ kind: 'ingredient', id: 'parmesan_cheese' }],
    },
    synonyms: ['토마토스파게티'],
  },
  tteok_guk: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'tteok_guk',
    label: '떡국',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'tteokguk_tteok' }],
      common: [
        { kind: 'ingredient', id: 'egg' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'guk_ganjang' },
        { kind: 'ingredient', id: 'yuksu_coin' },
      ],
      optional: [],
    },
  },

  tteokmandu_guk: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'tteokmandu_guk',
    label: '떡만두국',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'tteokguk_tteok' },
        { kind: 'preparedFood', id: 'frozen_mandu' },
      ],
      common: [{ kind: 'ingredient', id: 'egg' }],
      seasoning: [
        { kind: 'ingredient', id: 'guk_ganjang' },
        { kind: 'ingredient', id: 'yuksu_coin' },
      ],
      optional: [],
    },
    synonyms: ['만둣떡국'],
  },
  udon: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'udon',
    label: '우동',
    category: 'noodle_meal',

    difficulty: 'easy',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'udon_myeon' }],
      common: [],
      seasoning: [{ kind: 'ingredient', id: 'tsuyu' }],
      optional: [],
    },
  },

  vongole_pasta: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'vongole_pasta',
    label: '봉골레파스타',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'spaghetti_myeon' },
        { kind: 'ingredient', id: 'bajirak' },
      ],
      common: [{ kind: 'ingredient', id: 'garlic' }],
      seasoning: [
        { kind: 'ingredient', id: 'peperoncino' },
        { kind: 'ingredient', id: 'olive_oil' },
      ],
      optional: [],
    },
    synonyms: ['봉골레', '봉골레스파게티'],
  },
  wollam_ssam: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'wollam_ssam',
    label: '월남쌈',
    category: 'fresh_meal',

    difficulty: 'medium',
    servingTemperature: 'cold',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'rice_paper' }],
      common: [
        { kind: 'ingredient', id: 'cucumber' },
        { kind: 'ingredient', id: 'duck_slice' },
      ],
      seasoning: [{ kind: 'ingredient', id: 'peanut_sauce' }],
      optional: [],
    },
  },
  yachae_juk: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'yachae_juk',
    label: '야채죽',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
  },

  yangsongi_soup: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'yangsongi_soup',
    label: '양송이스프',
    category: 'western_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
  },
  yeolmu_bibimbap: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'yeolmu_bibimbap',
    label: '열무비빔밥',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'warm',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'preparedFood', id: 'cooked_rice' },
        { kind: 'preparedFood', id: 'yeolmu_kimchi' },
      ],
      common: [{ kind: 'ingredient', id: 'egg' }],
      seasoning: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'chamgireum' },
      ],
      optional: [],
    },
  },
  yeolmu_guksu: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'yeolmu_guksu',
    label: '열무국수',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'cold',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'somyeon' }],
      common: [{ kind: 'ingredient', id: 'cucumber' }],
      seasoning: [
        { kind: 'ingredient', id: 'vinegar' },
        { kind: 'ingredient', id: 'sugar' },
      ],
      optional: [{ kind: 'ingredient', id: 'egg' }],
    },
  },

  yeoneo_deopbap: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'yeoneo_deopbap',
    label: '연어덮밥',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'preparedFood', id: 'cooked_rice' },
        { kind: 'ingredient', id: 'yeoneo_hoe' },
      ],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'wasabi' },
      ],
      optional: [],
    },
  },

  yeonpo_tang: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'yeonpo_tang',
    label: '연포탕',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'nakji' }],
      common: [
        { kind: 'ingredient', id: 'mu' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'guk_ganjang' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [],
    },
  },
  yubucho_bap: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'yubucho_bap',
    label: '유부초밥',
    category: 'rice_meal',

    difficulty: 'easy',
    servingTemperature: 'warm',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [
        { kind: 'preparedFood', id: 'yubu' },
        { kind: 'preparedFood', id: 'cooked_rice' },
      ],
      common: [],
      seasoning: [],
      optional: [],
    },
  },
  yukgaejang: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'yukgaejang',
    label: '육개장',
    category: 'soup_meal',

    difficulty: 'hard',
    servingTemperature: 'hot',
    availableFoodSources: ['takeout'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'beef_brisket' }],
      common: [
        { kind: 'ingredient', id: 'gosari' },
        { kind: 'ingredient', id: 'sukjunamul' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'yuksu_coin' },
      ],
      optional: [],
    },
  },
  yukhoe_bibimbap: {
    defaultUnitLabel: '개',
    kind: 'meal',
    isActive: true,
    id: 'yukhoe_bibimbap',
    label: '육회비빔밥',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'warm',
    availableFoodSources: ['takeout'],
    synonyms: ['육회덮밥'],
  },
} as const;

export const allMealList: Meal[] = Object.values(mealObj);
