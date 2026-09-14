import { Food } from '@/types/selectableItem';

export const mealObj = {
  chamchi_bokkeumbap: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'chamchi_bokkeumbap',
    label: '참치볶음밥',
    category: 'rice_meal',
    difficulty: 'medium',
    servingTemperature: 'hot',

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
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'rabokki',
    label: '라볶이',
    category: 'main_dish_meal',
    difficulty: 'medium',
    servingTemperature: 'hot',

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
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'tteokbokki',
    label: '떡볶이',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'dubu_kimchi',
    label: '두부김치',
    category: 'main_dish_meal',

    difficulty: 'easy',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'dubu' },
        { kind: 'food', id: 'baechu_kimchi' },
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
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'kimchi_jeon',
    label: '김치전',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [
        { kind: 'food', id: 'baechu_kimchi' },
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
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'saengseon_kkaseu',
    label: '생선까스',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
  },
  saengseon_gui: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'saengseon_gui',
    label: '생선구이',
    category: 'main_dish_meal',
    difficulty: 'medium',
    servingTemperature: 'hot',
  },
  tteokgalbi: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'tteokgalbi',
    label: '떡갈비',
    category: 'main_dish_meal',

    difficulty: 'hard',
    servingTemperature: 'hot',
  },
  dakgangjeong: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'dakgangjeong',
    label: '닭강정',
    category: 'main_dish_meal',
    difficulty: 'medium',
    servingTemperature: 'hot',
  },
  kkanpunggi: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'kkanpunggi',
    label: '깐풍기',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
  },
  kkwobaro: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'kkwobaro',
    label: '꿔바로우',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
  },
  tangsuyuk: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'tangsuyuk',
    label: '탕수육',
    category: 'main_dish_meal',
    difficulty: 'medium',
    servingTemperature: 'hot',

    synonyms: ['찹쌀 탕수육'],
  },
  yangnyeom_chicken: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'yangnyeom_chicken',
    label: '양념치킨',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
  },
  fried_chicken: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'fried_chicken',
    label: '치킨',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

    synonyms: ['후라이드치킨'],
  },
  donkkaseu: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'donkkaseu',
    label: '돈까스',
    category: 'main_dish_meal',
    difficulty: 'hard',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'ssuk_jeon',
    label: '쑥전',
    category: 'main_dish_meal',

    difficulty: 'easy',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'sogalbi_gui',
    label: '소갈비구이',
    category: 'main_dish_meal',

    difficulty: 'hard',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'sogalbi_jjim',
    label: '소갈비찜',
    category: 'main_dish_meal',

    difficulty: 'hard',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'nokdu_jeon',
    label: '녹두전',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'ojingeo_bokkeum',
    label: '오징어볶음',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'ori_jumulreok',
    label: '오리주물럭',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'ori_roseu',
    label: '오리로스',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'pa_jeon',
    label: '파전',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'la_galbi_gui',
    label: 'LA갈비구이',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'makchang_gui',
    label: '막창구이',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
  },
  haemul_jjim: {
    defaultUnitLabel: '개',
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'haemul_jjim',
    label: '해물찜',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'haemulpa_jeon',
    label: '해물파전',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'hamburger_steak',
    label: '함박스테이크',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'hunje_ori',
    label: '훈제오리',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'kodari_jorim',
    label: '코다리조림',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'nakji_bokkeum',
    label: '낙지볶음',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'jukkumi_bokkeum',
    label: '주꾸미볶음',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'jogae_jjim',
    label: '조개찜',
    category: 'main_dish_meal',

    difficulty: 'easy',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'jokbal',
    label: '족발',
    category: 'main_dish_meal',

    difficulty: 'hard',
    servingTemperature: 'warm',
  },
  jeyuk_bokkeum: {
    defaultUnitLabel: '개',
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'jeyuk_bokkeum',
    label: '제육볶음',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'hwangtae_gui',
    label: '황태양념구이',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'jangeo_gui',
    label: '장어구이',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'jangeo' }],
      common: [],
      seasoning: [],
      optional: [],
    },
  },
  golbaengi_muchim: {
    defaultUnitLabel: '개',
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'golbaengi_muchim',
    label: '골뱅이무침',
    category: 'main_dish_meal',

    difficulty: 'easy',
    servingTemperature: 'cold',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gopchang_bokkeum',
    label: '곱창볶음',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gopchang_gui',
    label: '곱창구이',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'gopchang' }],
      common: [{ kind: 'ingredient', id: 'onion' }],
      seasoning: [],
      optional: [],
    },
  },
  godeungeo_jorim: {
    defaultUnitLabel: '개',
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'godeungeo_jorim',
    label: '고등어조림',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'galchi_jorim',
    label: '갈치조림',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gungmul_dakbal',
    label: '국물닭발',
    category: 'main_dish_meal',
    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'dakdari_steak',
    label: '닭다리 스테이크',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'dakgalbi',
    label: '닭갈비',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'buchu_jeon',
    label: '부추전',
    category: 'main_dish_meal',

    difficulty: 'easy',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'bulgogi',
    label: '불고기',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'agu_jjim',
    label: '아구찜',
    category: 'main_dish_meal',

    difficulty: 'hard',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'bossam',
    label: '보쌈',
    category: 'main_dish_meal',

    difficulty: 'hard',
    servingTemperature: 'warm',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'baechu_jeon',
    label: '배추전',
    category: 'main_dish_meal',

    difficulty: 'easy',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'aehobak_jjigae',
    label: '애호박찌개',
    category: 'soup_meal',
    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'aglio_e_olio_pasta',
    label: '알리오올리오파스타',
    category: 'noodle_meal',

    difficulty: 'easy',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'al_tang',
    label: '알탕',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'bacon_cream_pasta',
    label: '베이컨크림파스타',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'bajirak_guk',
    label: '바지락국',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
  //   kind: 'food',
  //   isActive: true,
  //   id: 'bajirak_kal_guksu',
  //   label: '바지락칼국수',
  //   category: 'noodle_meal',

  //   difficulty: 'medium',
  //   servingTemperature: 'hot',
  //
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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'basil_pesto_pasta',
    label: '바질페스토파스타',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'beoteo_jang_jorim_gyeran_bap',
    label: '버터장조림비빔밥',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'warm',

    foodStructure: {
      essential: [
        { kind: 'food', id: 'cooked_rice' },
        { kind: 'food', id: 'gyeran_jang_jorim' },
        { kind: 'ingredient', id: 'butter' },
      ],
      common: [],
      seasoning: [],
      optional: [],
    },
  },
  bibim_guksu: {
    defaultUnitLabel: '개',
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'bibim_guksu',
    label: '비빔국수',
    category: 'noodle_meal',

    difficulty: 'easy',
    servingTemperature: 'cold',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'bibimbap',
    label: '비빔밥',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'warm',

    foodStructure: {
      essential: [{ kind: 'food', id: 'cooked_rice' }],
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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'biji_jjigae',
    label: '비지찌개',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'bokkeum_udon',
    label: '볶음우동',
    category: 'noodle_meal',
    difficulty: 'medium',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'udon_myeon' },
        { kind: 'ingredient', id: 'oyster_sauce' },
      ],
      common: [
        { kind: 'ingredient', id: 'yangbaechu' },
        { kind: 'ingredient', id: 'saeu' },
        { kind: 'ingredient', id: 'onion' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'bolognese_pasta',
    label: '볼로네제파스타',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'broccoli_soup',
    label: '브로콜리스프',
    category: 'western_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'budae_jjigae',
    label: '부대찌개',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'bugeo_guk',
    label: '북엇국',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'bulgogi_jeongol',
    label: '불고기전골',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [{ kind: 'food', id: 'bulgogi' }],
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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'carbonara_pasta',
    label: '까르보나라파스타',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'chamchi_jjigae',
    label: '참치찌개',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'chamchi_juk',
    label: '참치죽',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'cheonggukjang_jjigae',
    label: '청국장찌개',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'corn_soup',
    label: '옥수수스프',
    category: 'western_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'cream_risotto',
    label: '크림리조또',
    category: 'western_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'cream_soup',
    label: '크림스프',
    category: 'western_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'curry_rice',
    label: '카레라이스',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [
        { kind: 'food', id: 'cooked_rice' },
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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'curry_udon',
    label: '카레우동',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'dak_hanmari',
    label: '닭한마리',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'dak_juk',
    label: '닭죽',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'dakbal_yangnyeom_bokkeum',
    label: '닭발양념볶음',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'dakbokkeum_tang',
    label: '닭볶음탕',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'dakgaejang',
    label: '닭개장',
    category: 'soup_meal',

    difficulty: 'hard',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'dakgom_tang',
    label: '닭곰탕',
    category: 'soup_meal',

    difficulty: 'hard',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'danhobak_soup',
    label: '단호박스프',
    category: 'main_dish_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'deulgireum_mak_guksu',
    label: '들기름막국수',
    category: 'noodle_meal',

    difficulty: 'easy',
    servingTemperature: 'cold',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'deulkkae_kal_guksu',
    label: '들깨칼국수',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'doenjang_guk',
    label: '된장국',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'doenjang_jjigae',
    label: '된장찌개',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'dogani_tang',
    label: '도가니곰탕',
    category: 'soup_meal',

    difficulty: 'hard',
    servingTemperature: 'hot',
  },

  dongtae_jjigae: {
    defaultUnitLabel: '개',
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'dongtae_jjigae',
    label: '동태찌개',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'egg_in_the_hell',
    label: '에그인더헬',
    category: 'western_meal',

    difficulty: 'easy',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'eomuk_guk',
    label: '어묵국',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'eomuk_tang',
    label: '어묵탕',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'galbi_tang',
    label: '갈비탕',
    category: 'soup_meal',

    difficulty: 'hard',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gambas',
    label: '감바스',
    category: 'western_meal',

    difficulty: 'easy',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gamja_guk',
    label: '맑은감자국',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gamja_soup',
    label: '감자스프',
    category: 'western_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gamja_tang',
    label: '감자탕',
    category: 'soup_meal',

    difficulty: 'hard',
    servingTemperature: 'hot',
  },

  ganjang_gyeran_bap: {
    defaultUnitLabel: '개',
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'ganjang_gyeran_bap',
    label: '간장계란밥',
    category: 'rice_meal',

    difficulty: 'easy',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'food', id: 'cooked_rice' },
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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gesal_juk',
    label: '게살죽',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gimbap',
    label: '김밥',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'warm',

    foodStructure: {
      essential: [
        { kind: 'food', id: 'cooked_rice' },
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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gochujang_jjigae',
    label: '고추장찌개',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'goguma_soup',
    label: '고구마스프',
    category: 'western_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gom_tang',
    label: '곰탕',
    category: 'soup_meal',

    difficulty: 'hard',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gondre_bap',
    label: '곤드레밥',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'warm',

    foodStructure: {
      essential: [
        { kind: 'food', id: 'cooked_rice' },
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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gratin',
    label: '그라탕',
    category: 'western_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gyeran_bokkeumbap',
    label: '계란볶음밥',
    category: 'rice_meal',

    difficulty: 'easy',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [
        { kind: 'food', id: 'cooked_rice' },
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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gyeran_guk',
    label: '계란국',
    category: 'soup_meal',

    difficulty: 'easy',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'haemul_juk',
    label: '해물죽',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'heukimja_juk',
    label: '흑임자죽',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'hobak_juk',
    label: '호박죽',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'hoe_deopbap',
    label: '회덮밥',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'cold',

    foodStructure: {
      essential: [
        { kind: 'food', id: 'cooked_rice' },
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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'honghap_tang',
    label: '홍합탕',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'jajang_bap',
    label: '짜장밥',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [
        { kind: 'food', id: 'cooked_rice' },
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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'jajang_myeon',
    label: '짜장면',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

    synonyms: ['자장면'],
  },
  janchi_guksu: {
    defaultUnitLabel: '개',
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'janchi_guksu',
    label: '잔치국수',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'japchae_bap',
    label: '잡채밥',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'warm',

    foodStructure: {
      essential: [
        { kind: 'food', id: 'cooked_rice' },
        { kind: 'food', id: 'japchae' },
      ],
      common: [],
      seasoning: [],
      optional: [],
    },
  },
  jeonbok_juk: {
    defaultUnitLabel: '개',
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'jeonbok_juk',
    label: '전복죽',
    category: 'rice_meal',
    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'jeyuk_deopbap',
    label: '제육덮밥',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [
        { kind: 'food', id: 'cooked_rice' },
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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'jjamppong',
    label: '짬뽕',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
  },
  jjolmyeon: {
    defaultUnitLabel: '개',
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'jjolmyeon',
    label: '쫄면',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'cold',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'jumeok_bap',
    label: '주먹밥',
    category: 'rice_meal',

    difficulty: 'easy',
    servingTemperature: 'warm',

    foodStructure: {
      essential: [
        { kind: 'food', id: 'cooked_rice' },
        { kind: 'food', id: 'gimjaban' },
      ],
      common: [],
      seasoning: [{ kind: 'ingredient', id: 'chamgireum' }],
      optional: [],
    },
    synonyms: ['삼각김밥'],
  },
  kal_guksu: {
    defaultUnitLabel: '개',
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'kal_guksu',
    label: '칼국수',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'karaage_don',
    label: '가라아게동',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [{ kind: 'food', id: 'cooked_rice' }],
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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'katsu_don',
    label: '가츠동',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [{ kind: 'food', id: 'cooked_rice' }],
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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'kimchi_bokkeumbap',
    label: '김치볶음밥',
    category: 'rice_meal',
    difficulty: 'easy',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [
        { kind: 'food', id: 'cooked_rice' },
        { kind: 'food', id: 'baechu_kimchi' },
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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'kimchi_guk',
    label: '김치국',
    category: 'soup_meal',

    difficulty: 'easy',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [{ kind: 'food', id: 'baechu_kimchi' }],
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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'kimchi_jjigae',
    label: '김치찌개',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [{ kind: 'food', id: 'baechu_kimchi' }],
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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'kimchi_mari_guksu',
    label: '김치말이국수',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'cold',

    foodStructure: {
      essential: [
        { kind: 'food', id: 'baechu_kimchi' },
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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'kkotge_tang',
    label: '꽃게탕',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'kong_guksu',
    label: '콩국수',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'cold',

    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'somyeon' },
        { kind: 'food', id: 'kong_mul' },
      ],
      common: [{ kind: 'ingredient', id: 'cucumber' }],
      seasoning: [{ kind: 'ingredient', id: 'salt' }],
      optional: [],
    },
  },

  kongnamul_guk: {
    defaultUnitLabel: '개',
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'kongnamul_guk',
    label: '콩나물국',
    category: 'soup_meal',

    difficulty: 'easy',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'lasagna',
    label: '라자냐',
    category: 'western_meal',

    difficulty: 'hard',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'mac_and_cheese',
    label: '맥앤치즈',
    category: 'western_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'mandu_guk',
    label: '만둣국',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [{ kind: 'food', id: 'frozen_mandu' }],
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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'mandu_jeongol',
    label: '만두전골',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [{ kind: 'food', id: 'frozen_mandu' }],
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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'manyeo_soup',
    label: '마녀스프',
    category: 'western_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'tomato' },
        { kind: 'ingredient', id: 'broccoli' },
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'celery' },
      ],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'black_pepper' },
      ],
      optional: [],
    },
  },
  mapadubu_deopbap: {
    defaultUnitLabel: '개',
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'mapadubu_deopbap',
    label: '마파두부덮밥',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [
        { kind: 'food', id: 'cooked_rice' },
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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'mara_tang',
    label: '마라탕',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'millefeuille_nabe',
    label: '밀푀유나베',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'miyeok_guk',
    label: '미역국',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'muksabal',
    label: '묵사발',
    category: 'soup_meal',

    difficulty: 'easy',
    servingTemperature: 'cold',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'dotori_muk' }],
      common: [{ kind: 'ingredient', id: 'cucumber' }],
      seasoning: [{ kind: 'ingredient', id: 'vinegar' }],
      optional: [],
    },
  },

  naengmyeon: {
    defaultUnitLabel: '개',
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'naengmyeon',
    label: '냉면',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'cold',
  },
  nakgopsae: {
    defaultUnitLabel: '개',
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'nakgopsae',
    label: '낙곱새',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'nakji_deopbap',
    label: '낙지덮밥',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [
        { kind: 'food', id: 'cooked_rice' },
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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'nurungji',
    label: '누룽지',
    category: 'rice_meal',

    difficulty: 'easy',
    servingTemperature: 'hot',
  },

  oi_naeng_guk: {
    defaultUnitLabel: '개',
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'oi_naeng_guk',
    label: '오이냉국',
    category: 'soup_meal',

    difficulty: 'easy',
    servingTemperature: 'cold',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'ojingeo_deopbap',
    label: '오징어덮밥',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [
        { kind: 'food', id: 'cooked_rice' },
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
  },

  ojingeo_mu_guk: {
    defaultUnitLabel: '개',
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'ojingeo_mu_guk',
    label: '오징어무국',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'omu_rice',
    label: '오므라이스',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [
        { kind: 'food', id: 'cooked_rice' },
        { kind: 'ingredient', id: 'egg' },
      ],
      common: [{ kind: 'ingredient', id: 'onion' }],
      seasoning: [{ kind: 'ingredient', id: 'ketchup' }],
      optional: [],
    },
  },
  onion_soup: {
    defaultUnitLabel: '개',
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'onion_soup',
    label: '양파스프',
    category: 'western_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'pad_thai',
    label: '팟타이',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'pat_juk',
    label: '팥죽',
    category: 'rice_meal',

    difficulty: 'hard',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'pat' }],
      common: [],
      seasoning: [],
      optional: [],
    },
  },
  pizza: {
    defaultUnitLabel: '개',
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'pizza',
    label: '피자',
    category: 'western_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
  },
  poke: {
    defaultUnitLabel: '개',
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'poke',
    label: '포케',
    category: 'fresh_meal',

    difficulty: 'easy',
    servingTemperature: 'cold',

    foodStructure: {
      essential: [
        { kind: 'food', id: 'cooked_rice' },
        { kind: 'ingredient', id: 'yeoneo_hoe' },
        { kind: 'ingredient', id: 'baby_leaf' },
        { kind: 'ingredient', id: 'avocado' },
      ],
      common: [
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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'ramen',
    label: '라멘',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
  },
  ramyeon: {
    defaultUnitLabel: '개',
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'ramyeon',
    label: '라면',
    category: 'noodle_meal',

    difficulty: 'easy',
    servingTemperature: 'hot',
  },
  rose_pasta: {
    defaultUnitLabel: '개',
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'rose_pasta',
    label: '로제파스타',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'rose_risotto',
    label: '로제리조또',
    category: 'western_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'saeu_bokkeumbap',
    label: '새우볶음밥',
    category: 'rice_meal',

    difficulty: 'easy',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [
        { kind: 'food', id: 'cooked_rice' },
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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'salad',
    label: '샐러드',
    category: 'fresh_meal',

    difficulty: 'easy',
    servingTemperature: 'cold',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'samgye_juk',
    label: '삼계죽',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
  },
  samgye_tang: {
    defaultUnitLabel: '개',
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'samgye_tang',
    label: '삼계탕',
    category: 'soup_meal',

    difficulty: 'hard',
    servingTemperature: 'hot',

    synonyms: ['닭백숙'],
  },
  sandwich: {
    defaultUnitLabel: '개',
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'sandwich',
    label: '샌드위치',
    category: 'western_meal',

    difficulty: 'easy',
    servingTemperature: 'cold',

    foodStructure: {
      essential: [
        { kind: 'food', id: 'sandwich_bread' },
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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'seolleong_tang',
    label: '설렁탕',
    category: 'soup_meal',
    difficulty: 'hard',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'shabu_shabu',
    label: '샤브샤브',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'siraegi_guk',
    label: '시래기국',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'sogogi_jeongol',
    label: '소고기전골',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'sogogi_mu_guk',
    label: '소고기무국',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'sogogi_yachae_juk',
    label: '소고기야채죽',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
  },
  ssal_guksu: {
    defaultUnitLabel: '개',
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'ssal_guksu',
    label: '쌀국수',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
  },

  sujebi: {
    defaultUnitLabel: '개',
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'sujebi',
    label: '수제비',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'sundae_guk',
    label: '순대국',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'sagol_yuksu' }],
      common: [{ kind: 'ingredient', id: 'daepa' }],
      seasoning: [{ kind: 'ingredient', id: 'salt' }],
      optional: [],
    },
  },
  sundubu_jjigae: {
    defaultUnitLabel: '개',
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'sundubu_jjigae',
    label: '순두부찌개',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'tantanmen',
    label: '탄탄멘',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
  },
  ten_don: {
    defaultUnitLabel: '개',
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'ten_don',
    label: '텐동',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
  },
  tomato_caprese: {
    defaultUnitLabel: '개',
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'tomato_caprese',
    label: '토마토카프레제',
    category: 'western_meal',

    difficulty: 'easy',
    servingTemperature: 'cold',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'tomato_pasta',
    label: '토마토파스타',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'tteok_guk',
    label: '떡국',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'tteokmandu_guk',
    label: '떡만두국',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'tteokguk_tteok' },
        { kind: 'food', id: 'frozen_mandu' },
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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'udon',
    label: '우동',
    category: 'noodle_meal',

    difficulty: 'easy',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'udon_myeon' }],
      common: [],
      seasoning: [{ kind: 'ingredient', id: 'tsuyu' }],
      optional: [],
    },
  },

  vongole_pasta: {
    defaultUnitLabel: '개',
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'vongole_pasta',
    label: '봉골레파스타',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'wollam_ssam',
    label: '월남쌈',
    category: 'fresh_meal',

    difficulty: 'medium',
    servingTemperature: 'cold',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'yachae_juk',
    label: '야채죽',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
  },

  yangsongi_soup: {
    defaultUnitLabel: '개',
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'yangsongi_soup',
    label: '양송이스프',
    category: 'western_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',
  },
  yeolmu_bibimbap: {
    defaultUnitLabel: '개',
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'yeolmu_bibimbap',
    label: '열무비빔밥',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'warm',

    foodStructure: {
      essential: [
        { kind: 'food', id: 'cooked_rice' },
        { kind: 'food', id: 'yeolmu_kimchi' },
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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'yeolmu_guksu',
    label: '열무국수',
    category: 'noodle_meal',

    difficulty: 'medium',
    servingTemperature: 'cold',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'yeoneo_deopbap',
    label: '연어덮밥',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [
        { kind: 'food', id: 'cooked_rice' },
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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'yeonpo_tang',
    label: '연포탕',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'yubucho_bap',
    label: '유부초밥',
    category: 'rice_meal',

    difficulty: 'easy',
    servingTemperature: 'warm',

    foodStructure: {
      essential: [
        { kind: 'food', id: 'yubu' },
        { kind: 'food', id: 'cooked_rice' },
      ],
      common: [],
      seasoning: [],
      optional: [],
    },
  },
  yukgaejang: {
    defaultUnitLabel: '개',
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'yukgaejang',
    label: '육개장',
    category: 'soup_meal',

    difficulty: 'medium',
    servingTemperature: 'hot',

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
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'yukhoe_bibimbap',
    label: '육회비빔밥',
    category: 'rice_meal',

    difficulty: 'medium',
    servingTemperature: 'warm',

    synonyms: ['육회덮밥'],
  },
} as const;

export const preparedFoodObj = {
  granola: {
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        pantry: { value: 6, unit: 'month' },
      },
    },
    difficulty: 'easy',
    servingTemperature: 'warm',
    defaultUnitLabel: '봉',
    id: 'granola',
    label: '그래놀라',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'light_food',
    unitOptions: ['봉', '상자', 'g'],
    synonyms: ['그라놀라', '오트그래놀라'],
  },
  yubu: {
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 1, unit: 'week' },
        freezer: { value: 1, unit: 'month' },
      },
    },
    difficulty: 'easy',
    servingTemperature: 'warm',
    defaultUnitLabel: '팩',
    id: 'yubu',
    label: '유부',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'light_food',
    unitOptions: ['팩', '장', '개', 'g'],
    synonyms: ['유부초밥유부', '조미유부'],
  },
  natto: {
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 1, unit: 'week' },
        freezer: { value: 1, unit: 'month' },
      },
    },
    difficulty: 'easy',
    servingTemperature: 'warm',
    defaultUnitLabel: '팩',
    id: 'natto',
    label: '낫또',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'light_food',
    unitOptions: ['팩', '장', '개', 'g'],
    synonyms: ['유부초밥유부', '조미유부'],
  },
  egg_baked: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    id: 'egg_baked',
    label: '훈제란',
    category: 'light_food',
    difficulty: 'easy',
    servingTemperature: 'either',
    synonyms: ['구운계란', '맥반석', '훈제달걀'],
  },
  egg_soft_boiled: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    id: 'egg_soft_boiled',
    label: '반숙란',
    category: 'light_food',
    difficulty: 'easy',
    servingTemperature: 'either',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'egg' }],
      common: [],
      seasoning: [],
      optional: [],
    },
    synonyms: ['반숙', '반숙계란', '반숙달걀'],
  },
  aehobak_bokkeum: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'aehobak_bokkeum',
    label: '애호박볶음',
    category: 'side_dish',
    difficulty: 'easy',
    servingTemperature: 'cold',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'aehobak' }],
      common: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'jjokpa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'deulgireum' },
        { kind: 'ingredient', id: 'olive_oil' },
        { kind: 'ingredient', id: 'chamchi_aekjeot' },
      ],
      optional: [
        { kind: 'ingredient', id: 'cheongyang_gochu' },
        { kind: 'ingredient', id: 'bokkeun_chamkkae' },
      ],
    },
  },
  baechu_kimchi: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'baechu_kimchi',
    label: '배추김치',
    category: 'light_food',
    difficulty: 'medium',
    servingTemperature: 'cold',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'baechu' }],
      common: [{ kind: 'ingredient', id: 'mu' }],
      seasoning: [
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'minced_ginger' },
        { kind: 'ingredient', id: 'myeolchi_aekjeot' },
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'gochugaru' },
      ],
      optional: [],
    },
    synonyms: ['김치'],
  },
  baek_kimchi: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'baek_kimchi',
    label: '백김치',
    category: 'light_food',

    difficulty: 'medium',
    servingTemperature: 'cold',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'baechu' }],
      common: [
        { kind: 'ingredient', id: 'jjokpa' },
        { kind: 'ingredient', id: 'mu' },
        { kind: 'ingredient', id: 'bae' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'salt' },
      ],
      optional: [],
    },
  },
  broccoli_bokkeum: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'broccoli_bokkeum',
    label: '브로콜리볶음',
    category: 'side_dish',

    difficulty: 'easy',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'broccoli' }],
      common: [{ kind: 'ingredient', id: 'garlic' }],
      seasoning: [
        { kind: 'ingredient', id: 'cooking_oil' },
        { kind: 'ingredient', id: 'salt' },
      ],
      optional: [],
    },
  },
  cheongpo_muk_muchim: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'cheongpo_muk_muchim',
    label: '청포묵무침',
    category: 'light_food',

    difficulty: 'easy',
    servingTemperature: 'cold',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'cheongpo_muk' }],
      common: [
        { kind: 'ingredient', id: 'cucumber' },
        { kind: 'ingredient', id: 'carrot' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'chamgireum' },
      ],
      optional: [{ kind: 'ingredient', id: 'gim' }],
    },
  },
  chicken_nuggets: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'chicken_nuggets',
    label: '치킨너겟',
    category: 'light_food',

    difficulty: 'easy',
    servingTemperature: 'hot',
  },
  chonggak_kimchi: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'chonggak_kimchi',
    label: '총각김치',
    category: 'light_food',

    difficulty: 'medium',
    servingTemperature: 'cold',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'chonggak_mu' }],
      common: [{ kind: 'ingredient', id: 'daepa' }],
      seasoning: [
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'myeolchi_aekjeot' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'minced_ginger' },
      ],
      optional: [],
    },
  },
  chwi_namul: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'chwi_namul',
    label: '취나물',
    category: 'light_food',

    difficulty: 'easy',
    servingTemperature: 'cold',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'chwinamul' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'chamgireum' },
        { kind: 'ingredient', id: 'salt' },
      ],
      optional: [],
    },
  },
  dakttongjip_twigim: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'dakttongjip_twigim',
    label: '닭똥집튀김',
    category: 'light_food',

    difficulty: 'medium',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'chicken_gizzard' },
        { kind: 'ingredient', id: 'twigim_garu' },
      ],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'black_pepper' },
      ],
      optional: [],
    },
    synonyms: ['근위튀김'],
  },
  danhobak_twigim: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'danhobak_twigim',
    label: '단호박튀김',
    category: 'light_food',

    difficulty: 'medium',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'danhobak' },
        { kind: 'ingredient', id: 'twigim_garu' },
      ],
      common: [],
      seasoning: [{ kind: 'ingredient', id: 'cooking_oil' }],
      optional: [],
    },
  },

  danmuji: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'danmuji',
    label: '단무지',
    category: 'light_food',

    difficulty: 'easy',
    servingTemperature: 'cold',
  },

  deodeok_gui: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'deodeok_gui',
    label: '고추장 더덕구이',
    category: 'light_food',

    difficulty: 'medium',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'deodeok' },
        { kind: 'ingredient', id: 'gochujang' },
      ],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'chamgireum' },
      ],
      optional: [],
    },
    synonyms: ['더덕구이'],
  },

  frozen_mandu: {
    id: 'frozen_mandu',
    label: '냉동만두',
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    category: 'light_food',

    difficulty: 'easy',
    servingTemperature: 'either',

    foodStructure: {
      essential: [],
      common: [],
      seasoning: [],
      optional: [],
    },
    synonyms: ['만두튀김'],
  },

  gun_mandu: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gun_mandu',
    label: '군만두',
    category: 'light_food',

    difficulty: 'easy',
    servingTemperature: 'either',

    foodStructure: {
      essential: [{ kind: 'food', id: 'frozen_mandu' }],
      common: [],
      seasoning: [{ kind: 'ingredient', id: 'cooking_oil' }],
      optional: [],
    },
    synonyms: ['만두튀김'],
  },
  aehobak_jeon: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'aehobak_jeon',
    label: '애호박전',
    category: 'side_dish',

    difficulty: 'easy',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'aehobak' },
        { kind: 'ingredient', id: 'egg' },
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
  donggeurangttaeng: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'donggeurangttaeng',
    label: '동그랑땡',
    category: 'light_food',

    difficulty: 'medium',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'ground_pork' }],
      common: [
        { kind: 'ingredient', id: 'dubu' },
        { kind: 'ingredient', id: 'onion' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'black_pepper' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [],
    },
  },
  dongtae_jeon: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'dongtae_jeon',
    label: '동태전',
    category: 'light_food',

    difficulty: 'medium',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'dongtae' },
        { kind: 'ingredient', id: 'egg' },
        { kind: 'ingredient', id: 'milgaru' },
      ],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [],
    },
  },
  doraji_muchim: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'doraji_muchim',
    label: '도라지무침',
    category: 'light_food',

    difficulty: 'easy',
    servingTemperature: 'cold',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'doraji' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'chamgireum' },
      ],
      optional: [],
    },
  },
  dotori_muk_muchim: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'dotori_muk_muchim',
    label: '도토리묵무침',
    category: 'light_food',

    difficulty: 'easy',
    servingTemperature: 'cold',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'dotori_muk' }],
      common: [
        { kind: 'ingredient', id: 'cucumber' },
        { kind: 'ingredient', id: 'onion' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'chamgireum' },
      ],
      optional: [],
    },
  },
  dubu_buchim: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'dubu_buchim',
    label: '두부부침',
    category: 'light_food',

    difficulty: 'easy',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'dubu' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'cooking_oil' },
        { kind: 'ingredient', id: 'salt' },
      ],
      optional: [],
    },
    synonyms: ['두부전'],
  },
  dubu_jorim: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'dubu_jorim',
    label: '두부조림',
    category: 'light_food',

    difficulty: 'medium',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'dubu' }],
      common: [{ kind: 'ingredient', id: 'daepa' }],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [],
    },
  },
  dwaeji_kkeopdegi: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'dwaeji_kkeopdegi',
    label: '돼지껍데기구이',
    category: 'light_food',

    difficulty: 'medium',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'pork_skin' }],
      common: [],
      seasoning: [],
      optional: [],
    },
  },
  eomuk_bokkeum: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'eomuk_bokkeum',
    label: '어묵볶음',
    category: 'light_food',
    difficulty: 'easy',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'eomuk' }],
      common: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'carrot' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'oligodang' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [],
    },
    synonyms: ['오뎅볶음'],
  },

  fried_egg: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'fried_egg',
    label: '계란프라이',
    category: 'side_dish',

    difficulty: 'easy',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'egg' }],
      common: [],
      seasoning: [{ kind: 'ingredient', id: 'cooking_oil' }],
      optional: [],
    },
    synonyms: ['계란후라이', '후라이'],
  },
  gaji_bokkeum: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gaji_bokkeum',
    label: '가지볶음',
    category: 'side_dish',

    difficulty: 'easy',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'gaji' }],
      common: [{ kind: 'ingredient', id: 'onion' }],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [],
    },
  },
  gamja_jeon: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gamja_jeon',
    label: '감자전',
    category: 'side_dish',

    difficulty: 'medium',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'potato' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [],
    },
  },
  gamja_jorim: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gamja_jorim',
    label: '감자조림',
    category: 'light_food',

    difficulty: 'medium',
    servingTemperature: 'either',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'potato' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'oligodang' },
      ],
      optional: [],
    },
    synonyms: ['알감자조림'],
  },
  gamja_twigim: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gamja_twigim',
    label: '감자튀김',
    category: 'side_dish',

    difficulty: 'easy',
    servingTemperature: 'hot',

    synonyms: ['프렌치프라이', '프렌치후라이'],
  },
  gamjachae_bokkeum: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gamjachae_bokkeum',
    label: '감자채볶음',
    category: 'side_dish',

    difficulty: 'easy',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'potato' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [],
    },
  },
  ganjang_hwangtaechae_bokkeum: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'ganjang_hwangtaechae_bokkeum',
    label: '간장황태채볶음',
    category: 'side_dish',

    difficulty: 'medium',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'hwangtaechae' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'oligodang' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [],
    },
  },
  gim_mari: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gim_mari',
    label: '김말이',
    category: 'light_food',

    difficulty: 'medium',
    servingTemperature: 'hot',
  },
  gimbugak: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gimbugak',
    label: '김부각',
    category: 'light_food',

    difficulty: 'easy',
    servingTemperature: 'hot',
  },
  gimjaban: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gimjaban',
    label: '김자반',
    category: 'light_food',

    difficulty: 'easy',
    servingTemperature: 'cold',

    synonyms: ['김가루'],
  },
  gochu_jangajji: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gochu_jangajji',
    label: '고추장아찌',
    category: 'side_dish',

    difficulty: 'medium',
    servingTemperature: 'cold',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'cheongyang_gochu' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'vinegar' },
        { kind: 'ingredient', id: 'sugar' },
      ],
      optional: [],
    },
    synonyms: ['고추절임'],
  },
  gochu_twigim: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gochu_twigim',
    label: '고추튀김',
    category: 'light_food',

    difficulty: 'medium',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'cheongyang_gochu' },
        { kind: 'ingredient', id: 'twigim_garu' },
      ],
      common: [],
      seasoning: [{ kind: 'ingredient', id: 'cooking_oil' }],
      optional: [],
    },
  },
  gochujang_hwangtaechae_bokkeum: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gochujang_hwangtaechae_bokkeum',
    label: '고추장황태채볶음',
    category: 'side_dish',

    difficulty: 'medium',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'hwangtaechae' },
        { kind: 'ingredient', id: 'gochujang' },
      ],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'oligodang' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [],
    },
  },
  goguma_twigim: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'goguma_twigim',
    label: '고구마튀김',
    category: 'light_food',

    difficulty: 'easy',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'sweet_potato' },
        { kind: 'ingredient', id: 'twigim_garu' },
      ],
      common: [],
      seasoning: [{ kind: 'ingredient', id: 'cooking_oil' }],
      optional: [],
    },
  },
  gosari_namul: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gosari_namul',
    label: '고사리나물',
    category: 'side_dish',

    difficulty: 'easy',
    servingTemperature: 'cold',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'gosari' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'chamgireum' },
        { kind: 'ingredient', id: 'salt' },
      ],
      optional: [],
    },
  },
  gul_jeon: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gul_jeon',
    label: '굴전',
    category: 'side_dish',

    difficulty: 'medium',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'saenggul' },
        { kind: 'ingredient', id: 'egg' },
      ],
      common: [{ kind: 'ingredient', id: 'milgaru' }],
      seasoning: [
        { kind: 'ingredient', id: 'cooking_oil' },
        { kind: 'ingredient', id: 'salt' },
      ],
      optional: [],
    },
  },
  gyeran_jang_jorim: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gyeran_jang_jorim',
    label: '계란장조림',
    category: 'side_dish',

    difficulty: 'medium',
    servingTemperature: 'cold',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'egg' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'oligodang' },
        { kind: 'ingredient', id: 'sugar' },
        { kind: 'ingredient', id: 'guk_ganjang' },
      ],
      optional: [{ kind: 'ingredient', id: 'cheongyang_gochu' }],
    },
    synonyms: ['달걀장조림'],
  },
  gyeran_jjim: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gyeran_jjim',
    label: '계란찜',
    category: 'side_dish',

    difficulty: 'easy',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'egg' }],
      common: [],
      seasoning: [{ kind: 'ingredient', id: 'salt' }],
      optional: [{ kind: 'ingredient', id: 'daepa' }],
    },
    synonyms: ['달걀찜'],
  },
  gyeran_mari: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gyeran_mari',
    label: '계란말이',
    category: 'side_dish',

    difficulty: 'easy',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'egg' }],
      common: [],
      seasoning: [{ kind: 'ingredient', id: 'salt' }],
      optional: [
        { kind: 'ingredient', id: 'daepa' },
        { kind: 'ingredient', id: 'carrot' },
      ],
    },
    synonyms: ['달걀말이'],
  },
  japchae: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'japchae',
    label: '잡채',
    category: 'side_dish',

    difficulty: 'medium',
    servingTemperature: 'warm',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'dangmyeon' }],
      common: [
        { kind: 'ingredient', id: 'beef_hongdukkae' },
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'carrot' },
        { kind: 'ingredient', id: 'sigeumchi' },
        { kind: 'ingredient', id: 'pyogo_beoseot' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'chamgireum' },
        { kind: 'ingredient', id: 'sugar' },
      ],
      optional: [],
    },
  },

  jinmichae_bokkeum: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'jinmichae_bokkeum',
    label: '진미채볶음',
    category: 'side_dish',

    difficulty: 'medium',
    servingTemperature: 'cold',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'ojingeochae' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'matsul' },
        { kind: 'ingredient', id: 'oligodang' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'soy_sauce' },
      ],
      optional: [],
    },
    synonyms: ['오징어채'],
  },
  jomigim: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'jomigim',
    label: '조미김',
    category: 'light_food',

    difficulty: 'easy',
    servingTemperature: 'cold',

    synonyms: ['김'],
  },
  kimchi_bokkeum: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'kimchi_bokkeum',
    label: '김치볶음',
    category: 'side_dish',

    difficulty: 'easy',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [{ kind: 'food', id: 'baechu_kimchi' }],
      common: [{ kind: 'ingredient', id: 'pork_belly' }],
      seasoning: [
        { kind: 'ingredient', id: 'cooking_oil' },
        { kind: 'ingredient', id: 'gochugaru' },
      ],
      optional: [],
    },
    synonyms: ['볶음김치'],
  },
  kkaennip_jangajji: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'kkaennip_jangajji',
    label: '깻잎장아찌',
    category: 'side_dish',

    difficulty: 'easy',
    servingTemperature: 'cold',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'kkaennip' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'vinegar' },
        { kind: 'ingredient', id: 'sugar' },
      ],
      optional: [],
    },
  },
  kkaennip_jeon: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'kkaennip_jeon',
    label: '깻잎전',
    category: 'side_dish',

    difficulty: 'easy',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'kkaennip' },
        { kind: 'ingredient', id: 'buchim_garu' },
      ],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'cooking_oil' },
        { kind: 'ingredient', id: 'salt' },
      ],
      optional: [
        { kind: 'ingredient', id: 'cooking_oil' },
        { kind: 'ingredient', id: 'salt' },
      ],
    },
  },
  kkakdugi: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'kkakdugi',
    label: '깍두기',
    category: 'side_dish',

    difficulty: 'medium',
    servingTemperature: 'cold',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'mu' }],
      common: [{ kind: 'ingredient', id: 'daepa' }],
      seasoning: [
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'myeolchi_aekjeot' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'minced_ginger' },
      ],
      optional: [],
    },
  },
  kkomak_muchim: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'kkomak_muchim',
    label: '꼬막무침',
    category: 'side_dish',

    difficulty: 'easy',
    servingTemperature: 'cold',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'kkomak' }],
      common: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'carrot' },
        { kind: 'ingredient', id: 'buchu' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'chamgireum' },
      ],
      optional: [],
    },
  },
  kongjaban: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'kongjaban',
    label: '콩자반',
    category: 'side_dish',

    difficulty: 'easy',
    servingTemperature: 'cold',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'black_soybeans' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'oligodang' },
      ],
      optional: [],
    },
    synonyms: ['검은콩조림'],
  },
  kongnamul_muchim: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'kongnamul_muchim',
    label: '콩나물무침',
    category: 'side_dish',

    difficulty: 'easy',
    servingTemperature: 'cold',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'kongnamul' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'chamgireum' },
        { kind: 'ingredient', id: 'salt' },
      ],
      optional: [],
    },
  },
  korean_hotdog: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'korean_hotdog',
    label: '핫도그',
    category: 'light_food',

    difficulty: 'easy',
    servingTemperature: 'hot',
  },
  maneuljjong_bokkeum: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'maneuljjong_bokkeum',
    label: '마늘쫑볶음',
    category: 'side_dish',

    difficulty: 'easy',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'maneuljjong' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [],
    },
  },
  mechurial_jang_jorim: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'mechurial_jang_jorim',
    label: '메추리알장조림',
    category: 'side_dish',

    difficulty: 'medium',
    servingTemperature: 'cold',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'quail_egg' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'oligodang' },
      ],
      optional: [],
    },
  },
  menbosha: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'menbosha',
    label: '멘보샤',
    category: 'light_food',

    difficulty: 'medium',
    servingTemperature: 'hot',
  },
  mu_namul: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'mu_namul',
    label: '무나물',
    category: 'side_dish',

    difficulty: 'easy',
    servingTemperature: 'cold',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'mu' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'deulgireum' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'salt' },
      ],
      optional: [],
    },
  },

  mumallaengi: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'mumallaengi',
    label: '무말랭이',
    category: 'side_dish',

    difficulty: 'easy',
    servingTemperature: 'cold',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'mumallaengi' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'sugar' },
      ],
      optional: [],
    },
  },
  musaengchae: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'musaengchae',
    label: '무생채',
    category: 'side_dish',

    difficulty: 'easy',
    servingTemperature: 'cold',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'mu' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'myeolchi_aekjeot' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'sugar' },
      ],
      optional: [],
    },
  },
  myeolchi_bokkeum: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'myeolchi_bokkeum',
    label: '멸치볶음',
    category: 'side_dish',

    difficulty: 'medium',
    servingTemperature: 'cold',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'myeolchi' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'oligodang' },
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [],
    },
    synonyms: ['잔멸치볶음'],
  },
  myeongran_jeotgal: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'myeongran_jeotgal',
    label: '명란젓',
    category: 'side_dish',

    difficulty: 'easy',
    servingTemperature: 'cold',

    synonyms: ['명란'],
  },
  nakji_jeotgal: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'nakji_jeotgal',
    label: '낙지젓',
    category: 'side_dish',

    difficulty: 'easy',
    servingTemperature: 'cold',

    synonyms: ['낙지젓갈'],
  },
  neutari_beoseot_bokkeum: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'neutari_beoseot_bokkeum',
    label: '느타리버섯볶음',
    category: 'side_dish',

    difficulty: 'easy',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'neutari_beoseot' }],
      common: [{ kind: 'ingredient', id: 'onion' }],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'cooking_oil' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [],
    },
  },
  oi_muchim: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'oi_muchim',
    label: '오이무침',
    category: 'side_dish',

    difficulty: 'easy',
    servingTemperature: 'cold',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'cucumber' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'vinegar' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'sugar' },
      ],
      optional: [],
    },
  },
  ojingeo_twigim: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'ojingeo_twigim',
    label: '오징어튀김',
    category: 'light_food',

    difficulty: 'medium',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'ojingeo' },
        { kind: 'ingredient', id: 'twigim_garu' },
      ],
      common: [],
      seasoning: [{ kind: 'ingredient', id: 'cooking_oil' }],
      optional: [],
    },
  },
  pa_kimchi: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'pa_kimchi',
    label: '파김치',
    category: 'light_food',

    difficulty: 'medium',
    servingTemperature: 'cold',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'jjokpa' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'myeolchi_aekjeot' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'minced_ginger' },
      ],
      optional: [],
    },
  },
  parae_gim: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'parae_gim',
    label: '파래김',
    category: 'light_food',

    difficulty: 'easy',
    servingTemperature: 'cold',
  },
  saeu_twigim: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'saeu_twigim',
    label: '새우튀김',
    category: 'light_food',

    difficulty: 'medium',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'saeu' },
        { kind: 'ingredient', id: 'twigim_garu' },
      ],
      common: [],
      seasoning: [{ kind: 'ingredient', id: 'cooking_oil' }],
      optional: [],
    },
  },
  saeu_wanja: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'saeu_wanja',
    label: '새우완자',
    category: 'light_food',

    difficulty: 'medium',
    servingTemperature: 'hot',
  },
  sausage_bokkeum: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'sausage_bokkeum',
    label: '소시지볶음',
    category: 'light_food',

    difficulty: 'easy',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'sausage' }],
      common: [{ kind: 'ingredient', id: 'onion' }],
      seasoning: [
        { kind: 'ingredient', id: 'ketchup' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [],
    },
  },
  sigeumchi_namul: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'sigeumchi_namul',
    label: '시금치나물',
    category: 'light_food',

    difficulty: 'easy',
    servingTemperature: 'cold',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'sigeumchi' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'chamgireum' },
        { kind: 'ingredient', id: 'salt' },
      ],
      optional: [],
    },
  },
  sogogi_jang_jorim: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'sogogi_jang_jorim',
    label: '소고기장조림',
    category: 'light_food',

    difficulty: 'medium',
    servingTemperature: 'cold',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'beef_round' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'oligodang' },
      ],
      optional: [],
    },
    synonyms: ['쇠고기장조림'],
  },
  sukjunamul_muchim: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'sukjunamul_muchim',
    label: '숙주나물무침',
    category: 'light_food',

    difficulty: 'easy',
    servingTemperature: 'cold',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'sukjunamul' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'chamgireum' },
        { kind: 'ingredient', id: 'salt' },
      ],
      optional: [],
    },
  },

  tomato_gyeran_bokkeum: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'tomato_gyeran_bokkeum',
    label: '토마토계란볶음',
    category: 'light_food',

    difficulty: 'easy',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'tomato' },
        { kind: 'ingredient', id: 'egg' },
      ],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'cooking_oil' },
        { kind: 'ingredient', id: 'salt' },
      ],
      optional: [],
    },
    synonyms: ['토마토달걀볶음'],
  },
  ueong_jorim: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'ueong_jorim',
    label: '우엉조림',
    category: 'light_food',

    difficulty: 'medium',
    servingTemperature: 'cold',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'ueong' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'oligodang' },
      ],
      optional: [],
    },
  },
  yangpa_jangajji: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'yangpa_jangajji',
    label: '양파장아찌',
    category: 'light_food',

    difficulty: 'easy',
    servingTemperature: 'cold',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'onion' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'vinegar' },
        { kind: 'ingredient', id: 'sugar' },
      ],
      optional: [],
    },
  },
  yeongeun_jorim: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'yeongeun_jorim',
    label: '연근조림',
    category: 'light_food',

    difficulty: 'medium',
    servingTemperature: 'cold',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'yeongeun' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'oligodang' },
      ],
      optional: [],
    },
  },
  cheese_ball: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'cheese_ball',
    label: '치즈볼',
    category: 'light_food',

    difficulty: 'easy',
    servingTemperature: 'either',
  },
  cheese_stick: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'cheese_stick',
    label: '치즈스틱',
    category: 'light_food',

    difficulty: 'easy',
    servingTemperature: 'either',
  },
  corn_cheese: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'corn_cheese',
    label: '콘치즈',
    category: 'light_food',

    difficulty: 'easy',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'mozzarella_cheese' },
        { kind: 'ingredient', id: 'canned_oksusu' },
      ],
      common: [],
      seasoning: [{ kind: 'ingredient', id: 'mayonnaise' }],
      optional: [],
    },
  },
  dak_kkochi: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'dak_kkochi',
    label: '닭꼬치',
    category: 'light_food',

    difficulty: 'medium',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'chicken_leg' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'oligodang' },
      ],
      optional: [],
    },
  },
  mattang: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'mattang',
    label: '맛탕',
    category: 'snack_dessert',

    difficulty: 'medium',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'sweet_potato' },
        { kind: 'ingredient', id: 'mulyeot' },
      ],
      common: [],
      seasoning: [],
      optional: [],
    },
  },
  mul_mandu: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'mul_mandu',
    label: '물만두',
    category: 'light_food',

    difficulty: 'easy',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [{ kind: 'food', id: 'frozen_mandu' }],
      common: [],
      seasoning: [],
      optional: [],
    },
  },
  sundae: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'sundae',
    label: '순대',
    category: 'light_food',

    difficulty: 'medium',
    servingTemperature: 'hot',

    synonyms: ['찰순대'],
  },
  baechu_geotjeori: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'baechu_geotjeori',
    label: '배추겉절이',
    category: 'light_food',

    difficulty: 'medium',
    servingTemperature: 'cold',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'baechu' }],
      common: [
        { kind: 'ingredient', id: 'buchu' },
        { kind: 'ingredient', id: 'onion' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'myeolchi_aekjeot' },
        { kind: 'ingredient', id: 'sugar' },
        { kind: 'ingredient', id: 'salt' },
      ],
      optional: [],
    },
  },
  buchu_geotjeori: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'buchu_geotjeori',
    label: '부추겉절이',
    category: 'light_food',

    difficulty: 'easy',
    servingTemperature: 'cold',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'buchu' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'myeolchi_aekjeot' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [],
    },
  },
  dongchimi: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'dongchimi',
    label: '동치미',
    category: 'light_food',

    difficulty: 'medium',
    servingTemperature: 'cold',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'mu' }],
      common: [{ kind: 'ingredient', id: 'jjokpa' }],
      seasoning: [{ kind: 'ingredient', id: 'salt' }],
      optional: [],
    },
  },
  maneul_jangajji: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'maneul_jangajji',
    label: '마늘장아찌',
    category: 'light_food',

    difficulty: 'easy',
    servingTemperature: 'cold',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'garlic' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'vinegar' },
        { kind: 'ingredient', id: 'sugar' },
      ],
      optional: [],
    },
  },
  oi_sobagi: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'oi_sobagi',
    label: '오이소박이',
    category: 'light_food',

    difficulty: 'medium',
    servingTemperature: 'cold',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'cucumber' }],
      common: [
        { kind: 'ingredient', id: 'buchu' },
        { kind: 'ingredient', id: 'carrot' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'myeolchi_aekjeot' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'minced_ginger' },
      ],
      optional: [],
    },
  },
  ojingeo_jeotgal: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'ojingeo_jeotgal',
    label: '오징어젓갈',
    category: 'light_food',

    difficulty: 'easy',
    servingTemperature: 'cold',

    synonyms: ['오징어젓'],
  },
  ssammu: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'ssammu',
    label: '쌈무',
    category: 'light_food',

    difficulty: 'easy',
    servingTemperature: 'cold',
  },

  yeolmu_kimchi: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'yeolmu_kimchi',
    label: '열무김치',
    category: 'light_food',

    difficulty: 'medium',
    servingTemperature: 'cold',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'yeolmu' }],
      common: [{ kind: 'ingredient', id: 'hong_gochu' }],
      seasoning: [{ kind: 'ingredient', id: 'gochugaru' }],
      optional: [],
    },
  },
  cooked_rice: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'cooked_rice',
    label: '밥',
    category: 'light_food',

    difficulty: 'easy',
    servingTemperature: 'hot',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'baekmi' }],
      common: [],
      seasoning: [],
      optional: [],
    },
    synonyms: ['햇반'],
  },
  boiled_egg: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'boiled_egg',
    label: '삶은계란',
    category: 'light_food',

    difficulty: 'easy',
    servingTemperature: 'either',

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'egg' }],
      common: [],
      seasoning: [],
      optional: [],
    },
    synonyms: ['삶은달걀', '감동란'],
  },
  cereal: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'cereal',
    label: '시리얼',
    category: 'light_food',

    difficulty: 'easy',
    servingTemperature: 'cold',

    foodStructure: {
      essential: [{ kind: 'food', id: 'cereal' }],
      common: [{ kind: 'ingredient', id: 'milk' }],
      seasoning: [],
      optional: [],
    },
  },

  chocolate_jam: {
    id: 'chocolate_jam',
    label: '초코잼',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        pantry: { value: 1, unit: 'month' },
        fridge: { value: 2, unit: 'month' },
      },
    },
    defaultUnitLabel: '통',
    unitOptions: ['통', '병', '개'],
    synonyms: ['초콜릿잼', '초코스프레드'],
  },

  black_sesame_tteok: {
    id: 'black_sesame_tteok',
    label: '흑임자떡',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 1, unit: 'month' } },
    },
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉'],
  },
  cake_slice: {
    id: 'cake_slice',
    label: '조각케이크',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 30, unit: 'month' } },
    },
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉'],
  },
  caramel: {
    id: 'caramel',
    label: '카라멜',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 3, unit: 'month' } },
    },
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉'],
  },
  chapssal_tteok: {
    id: 'chapssal_tteok',
    label: '찹쌀떡',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 1, unit: 'month' } },
    },
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉'],
  },
  chips: {
    id: 'chips',
    label: '칩',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 3, unit: 'month' } },
    },
    defaultUnitLabel: '봉',
    unitOptions: ['봉', '상자'],
    synonyms: ['감자칩'],
  },
  choco_bar: {
    id: 'choco_bar',
    label: '초코바',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 3, unit: 'month' } },
    },
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉'],
  },
  chocolate: {
    id: 'chocolate',
    label: '초콜렛',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 3, unit: 'month' } },
    },
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉'],
  },
  chocolate_bar: {
    id: 'chocolate_bar',
    label: '초콜렛바',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 3, unit: 'month' } },
    },
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉'],
  },
  cookie: {
    id: 'cookie',
    label: '쿠키',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 3, unit: 'month' } },
    },
    defaultUnitLabel: '봉',
    unitOptions: ['봉', '상자'],
  },
  cracker: {
    id: 'cracker',
    label: '크래커',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 3, unit: 'month' } },
    },
    defaultUnitLabel: '봉',
    unitOptions: ['봉', '상자'],
  },
  dried_persimmon: {
    id: 'dried_persimmon',
    label: '곶감',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 1, unit: 'month' } },
    },
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉'],
  },
  energy_bar: {
    id: 'energy_bar',
    label: '에너지바',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 3, unit: 'month' } },
    },
    defaultUnitLabel: '봉',
    unitOptions: ['봉', '상자'],
  },
  garaetteok: {
    id: 'garaetteok',
    label: '가래떡',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 1, unit: 'month' } },
    },
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉'],
  },

  grape_jam: {
    id: 'grape_jam',
    label: '포도잼',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 2, unit: 'week' } },
    },
    defaultUnitLabel: '병',
    unitOptions: ['병', '통'],
  },
  hangwa: {
    id: 'hangwa',
    label: '한과',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 1, unit: 'month' } },
    },
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉'],
  },
  honey_rice_cake: {
    id: 'honey_rice_cake',
    label: '꿀떡',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 1, unit: 'month' } },
    },
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉'],
  },
  ice_cream_bar: {
    id: 'ice_cream_bar',
    label: '아이스크림바',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 1, unit: 'month' } },
    },
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉'],
  },
  ice_cream_tub: {
    id: 'ice_cream_tub',
    label: '아이스크림통',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'freezer',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { freezer: { value: 3, unit: 'month' } },
    },
    defaultUnitLabel: '통',
    unitOptions: ['통', '개'],
  },
  injeolmi: {
    id: 'injeolmi',
    label: '인절미떡',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 1, unit: 'month' } },
    },
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉'],
  },
  jelly: {
    id: 'jelly',
    label: '젤리',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 3, unit: 'month' } },
    },
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉'],
  },
  marshmallow: {
    id: 'marshmallow',
    label: '마시멜로우',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 1, unit: 'month' } },
    },
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉'],
  },

  nachos: {
    id: 'nachos',
    label: '나쵸',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 1, unit: 'month' } },
    },
    defaultUnitLabel: '봉',
    unitOptions: ['봉', '상자'],
  },
  omegi_tteok: {
    id: 'omegi_tteok',
    label: '오메기떡',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 1, unit: 'month' } },
    },
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉'],
  },
  oranda: {
    id: 'oranda',
    label: '오란다',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 1, unit: 'month' } },
    },
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉'],
  },
  pancake: {
    id: 'pancake',
    label: '팬케이크',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 1, unit: 'year' } },
    },
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉'],
    synonyms: ['핫케이크'],
  },
  peanut_butter: {
    id: 'peanut_butter',
    label: '땅콩잼',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 1, unit: 'month' } },
    },
    defaultUnitLabel: '병',
    unitOptions: ['병', '통'],
  },

  popcorn: {
    id: 'popcorn',
    label: '팝콘',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 3, unit: 'month' } },
    },
    defaultUnitLabel: '봉',
    unitOptions: ['봉', '상자'],
  },

  pudding: {
    id: 'pudding',
    label: '푸딩',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 1, unit: 'month' } },
    },
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉'],
  },
  rice_cracker: {
    id: 'rice_cracker',
    label: '쌀과자',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 1, unit: 'month' } },
    },
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉'],
  },

  sandwich_cookie: {
    id: 'sandwich_cookie',
    label: '샌드쿠키',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 3, unit: 'month' } },
    },
    defaultUnitLabel: '봉',
    unitOptions: ['봉', '상자'],
    synonyms: ['오레오'],
  },

  strawberry_jam: {
    id: 'strawberry_jam',
    label: '딸기잼',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 2, unit: 'month' } },
    },
    defaultUnitLabel: '병',
    unitOptions: ['병', '통'],
  },
  whole_cake: {
    id: 'whole_cake',
    label: '홀케이크',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 1, unit: 'month' } },
    },
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉'],
    synonyms: ['케잌', '홀케잌'],
  },
  yokan: {
    id: 'yokan',
    label: '양갱',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 1, unit: 'month' } },
    },
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉'],
  },
  yugwa: {
    id: 'yugwa',
    label: '유과',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 1, unit: 'month' } },
    },
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉'],
  },

  bagel: {
    id: 'bagel',
    label: '베이글',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 5, unit: 'day' } },
    },
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉'],
  },
  baguette: {
    id: 'baguette',
    label: '바게뜨',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 5, unit: 'day' } },
    },
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉'],
  },
  castella: {
    id: 'castella',
    label: '카스테라',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 5, unit: 'day' } },
    },
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉'],
  },
  cinnamon_roll: {
    id: 'cinnamon_roll',
    label: '시나몬롤',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 1, unit: 'month' } },
    },
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉'],
  },
  croissant: {
    id: 'croissant',
    label: '크로와상',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 5, unit: 'day' } },
    },
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉'],
  },
  dinner_roll: {
    id: 'dinner_roll',
    label: '모닝빵',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 1, unit: 'month' } },
    },
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉'],
  },
  donut: {
    id: 'donut',
    label: '도넛',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 5, unit: 'day' } },
    },
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉'],
  },
  garlic_bread: {
    id: 'garlic_bread',
    label: '마늘빵',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 5, unit: 'day' } },
    },
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉'],
  },
  muffin: {
    id: 'muffin',
    label: '머핀',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 5, unit: 'day' } },
    },
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉'],
  },
  pie: {
    id: 'pie',
    label: '파이',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 1, unit: 'month' } },
    },
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉'],
  },
  pretzel: {
    id: 'pretzel',
    label: '프레첼',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 3, unit: 'month' } },
    },
    defaultUnitLabel: '봉',
    unitOptions: ['봉', '상자'],
  },
  red_bean_bread: {
    id: 'red_bean_bread',
    label: '단팥빵',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 5, unit: 'day' } },
    },
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉'],
  },

  roll_cake: {
    id: 'roll_cake',
    label: '롤케이크',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 1, unit: 'month' } },
    },
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉'],
  },
  rye_bread: {
    id: 'rye_bread',
    label: '호밀빵',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 5, unit: 'day' } },
    },
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉'],
  },
  salt_bread: {
    id: 'salt_bread',
    label: '소금빵',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 5, unit: 'day' } },
    },
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉'],
  },
  sandwich_bread: {
    id: 'sandwich_bread',
    label: '식빵',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 5, unit: 'day' } },
    },
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉'],
  },
  steamed_bun: {
    id: 'steamed_bun',
    label: '찐빵',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 1, unit: 'month' } },
    },
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉'],
  },
  tart: {
    id: 'tart',
    label: '타르트',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 1, unit: 'month' } },
    },
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉'],
  },

  kong_mul: {
    id: 'kong_mul',
    label: '콩물',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'drink',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: {
        fridge: { value: 5, unit: 'day' },
        freezer: { value: 1, unit: 'month' },
      },
    },
    defaultUnitLabel: '병',
    unitOptions: ['병', '팩', '개'],
    synonyms: ['콩국물', '콩국수콩물'],
  },

  banana_milk: {
    id: 'banana_milk',
    label: '바나나우유',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'drink',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { fridge: { value: 1, unit: 'month' } },
    },
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '병'],
  },
  beer: {
    id: 'beer',
    label: '맥주',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'drink',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 1, unit: 'year' } },
    },
    defaultUnitLabel: '병',
    unitOptions: ['병', '캔'],
  },
  chocolate_milk: {
    id: 'chocolate_milk',
    label: '초코우유',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'drink',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { fridge: { value: 7, unit: 'day' } },
    },
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '병'],
  },
  can_coffee: {
    id: 'can_coffee',
    label: '캔커피',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'drink',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 1, unit: 'year' } },
    },
    defaultUnitLabel: '캔',
    unitOptions: ['캔', '팩'],
  },
  can_cola: {
    id: 'can_cola',
    label: '캔콜라',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'drink',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 1, unit: 'year' } },
    },
    defaultUnitLabel: '캔',
    unitOptions: ['캔', '팩'],
  },
  coffee_milk: {
    id: 'coffee_milk',
    label: '커피우유',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'drink',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { fridge: { value: 7, unit: 'day' } },
    },
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '병'],
  },
  drink_yogurt: {
    id: 'drink_yogurt',
    label: '요구르트',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'drink',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { fridge: { value: 7, unit: 'day' } },
    },
    defaultUnitLabel: '병',
    unitOptions: ['병', '캔'],
  },
  energy_drink: {
    id: 'energy_drink',
    label: '에너지드링크',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'drink',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 6, unit: 'month' } },
    },
    defaultUnitLabel: '병',
    unitOptions: ['병', '캔'],
    synonyms: ['몬스터에너지', '핫식스', '클룹', '레드불'],
  },
  gwachae_juice: {
    id: 'gwachae_juice',
    label: '과채주스',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'drink',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 6, unit: 'month' } },
    },
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '병'],
  },
  ion_drink: {
    id: 'ion_drink',
    label: '이온음료',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'drink',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 6, unit: 'month' } },
    },
    defaultUnitLabel: '병',
    unitOptions: ['병', '캔'],
  },
  makgeolli: {
    id: 'makgeolli',
    label: '막걸리',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'drink',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 6, unit: 'month' } },
    },
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '병'],
  },
  protein_drink: {
    id: 'protein_drink',
    label: '프로틴음료',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'drink',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { fridge: { value: 2, unit: 'week' } },
    },
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '병'],
  },
  soju: {
    id: 'soju',
    label: '소주',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'drink',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 1, unit: 'year' } },
    },
    defaultUnitLabel: '병',
    unitOptions: ['병', '캔'],
  },
  soy_milk: {
    id: 'soy_milk',
    label: '두유',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'drink',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { fridge: { value: 2, unit: 'week' } },
    },
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '병'],
  },
  sparkling_water: {
    id: 'sparkling_water',
    label: '탄산수',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'drink',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 1, unit: 'year' } },
    },
    defaultUnitLabel: '병',
    unitOptions: ['병', '캔'],
  },
  strawberry_milk: {
    id: 'strawberry_milk',
    label: '딸기우유',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'drink',
    defaultStorage: 'fridge',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { fridge: { value: 7, unit: 'day' } },
    },
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '병'],
  },
  tea_bag: {
    id: 'tea_bag',
    label: '티백',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'drink',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 1, unit: 'year' } },
    },
    defaultUnitLabel: '상자',
    unitOptions: ['상자', '봉'],
  },
  bottled_water: {
    id: 'bottled_water',
    label: '생수',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'drink',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 1, unit: 'year' } },
    },
    defaultUnitLabel: '병',
    unitOptions: ['병', '캔'],
  },
  whiskey: {
    id: 'whiskey',
    label: '위스키',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'drink',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 1, unit: 'year' } },
    },
    defaultUnitLabel: '병',
    unitOptions: ['병', '캔'],
  },
  wine: {
    id: 'wine',
    label: '와인',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'drink',
    defaultStorage: 'pantry',
    expiration: {
      mode: 'recommended',
      recommendedDurations: { pantry: { value: 1, unit: 'year' } },
    },
    defaultUnitLabel: '병',
    unitOptions: ['병', '캔'],
  },
} as const;

export const foodObj = { ...mealObj, ...preparedFoodObj };

export const allFoodList: Food[] = Object.values(foodObj);
