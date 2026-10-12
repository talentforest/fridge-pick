import { Food } from '@/types/selectableItem';

// 간편식
const light_food = {
  granola: {
    id: 'granola',
    label: '그래놀라',
    kind: 'food',
    category: 'light_food',
    isActive: true,
    recommendLevel: 'general',

    defaultStorage: 'pantry',
    recommendedDurations: {
      // 미개봉 건조 시리얼의 품질 유지 기간을 적용한 추정값
      packaged: {
        pantry: { value: 6, unit: 'month' },
      },
      homemade: {
        pantry: { value: 6, unit: 'month' },
      },
    },
    servingTemperature: 'room_temperature',
    defaultUnitLabel: '봉',
    unitOptions: ['봉', '상자', 'g'],
    availableFoodForm: ['ready_to_eat'],
    synonyms: ['그라놀라', '오트그래놀라'],
  },

  egg_baked: {
    id: 'egg_baked',
    label: '구운계란',
    kind: 'food',
    category: 'light_food',
    isActive: true,
    recommendLevel: 'general',

    defaultStorage: 'fridge',
    recommendedDurations: {
      // 완숙으로 조리한 달걀의 냉장 지침을 적용
      homemade: {
        fridge: { value: 1, unit: 'week' },
      },
    },

    difficulty: 'hard',
    servingTemperature: 'either',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩'],
    availableFoodForm: ['ready_to_eat'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'egg' }],
      common: [],
      seasoning: [],
      optional: [],
    },
    synonyms: ['구운달걀', '맥반석계란', '맥반석달걀'],
  },

  egg_soft_boiled: {
    id: 'egg_soft_boiled',
    label: '반숙란',
    kind: 'food',
    category: 'light_food',
    isActive: true,
    recommendLevel: 'general',

    defaultStorage: 'fridge',
    recommendedDurations: {
      // 완숙란의 1주일을 적용하지 않고 짧게 잡은 앱 추정값
      homemade: {
        fridge: { value: 2, unit: 'day' },
      },
    },

    difficulty: 'easy',
    servingTemperature: 'either',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩'],
    availableFoodForm: ['ready_to_eat'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'egg' }],
      common: [],
      seasoning: [],
      optional: [],
    },
    synonyms: ['반숙', '반숙계란', '반숙달걀'],
  },

  natto: {
    id: 'natto',
    label: '낫또',
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',

    defaultStorage: 'fridge',
    recommendedDurations: {
      // 제품별 차이가 있어 짧게 잡은 앱 추정값
      packaged: {
        fridge: { value: 1, unit: 'week' },
      },
    },
    servingTemperature: 'cold',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '개', 'g'],
    availableFoodForm: ['ready_to_eat'],
    synonyms: ['낫토', '나또'],
  },

  chicken_nuggets: {
    id: 'chicken_nuggets',
    label: '치킨너겟',
    kind: 'food',
    category: 'light_food',
    isActive: true,
    recommendLevel: 'general',
    // 냉동 시판품과 조리 완료된 수제 너겟의 보관 형태가 달라 생략
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉', '팩', 'g'],
    recommendedDurations: {
      homemade: {
        fridge: { value: 4, unit: 'day' },
        freezer: { value: 1, unit: 'month' },
      },
    },

    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'chicken_breast' }],
      common: [
        { kind: 'ingredient', id: 'milgaru' },
        { kind: 'ingredient', id: 'egg' },
        { kind: 'ingredient', id: 'ppang_garu' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'black_pepper' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [],
    },
    synonyms: ['치킨너겟', '너겟'],
  },

  dakttongjip_twigim: {
    id: 'dakttongjip_twigim',
    label: '닭똥집튀김',
    kind: 'food',
    category: 'light_food',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    defaultUnitLabel: 'g',
    unitOptions: ['g', '팩', '개'],
    recommendedDurations: {
      homemade: {
        fridge: { value: 3, unit: 'day' },
        freezer: { value: 10, unit: 'day' },
      },
    },

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
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [],
    },
    synonyms: ['근위튀김', '닭근위튀김'],
  },

  danhobak_twigim: {
    id: 'danhobak_twigim',
    label: '단호박튀김',
    kind: 'food',
    category: 'light_food',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    recommendedDurations: {
      homemade: {
        fridge: { value: 3, unit: 'day' },
        freezer: { value: 10, unit: 'day' },
      },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'danhobak' },
        { kind: 'ingredient', id: 'twigim_garu' },
      ],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'cooking_oil' },
        { kind: 'ingredient', id: 'salt' },
      ],
      optional: [],
    },
    synonyms: [],
  },

  mandu: {
    id: 'mandu',
    label: '만두',
    kind: 'food',
    category: 'light_food',
    isActive: true,
    recommendLevel: 'general',
    // 시판 냉동만두와 직접 만든 만두의 보관 형태가 달라 기본값 생략
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉', '팩', 'g'],
    recommendedDurations: {
      homemade: {
        fridge: { value: 2, unit: 'day' },
        freezer: { value: 3, unit: 'month' },
      },
    },
    difficulty: 'hard',
    servingTemperature: 'hot',
    availableFoodForm: ['ready_to_cook', 'ready_to_heat'],
    // 고기·김치·채소 등 만두소가 다양해 단일 foodStructure는 생략
    synonyms: [],
  },

  gun_mandu: {
    id: 'gun_mandu',
    label: '군만두',
    kind: 'food',
    category: 'light_food',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    recommendedDurations: {
      homemade: {
        fridge: { value: 3, unit: 'day' },
        freezer: { value: 10, unit: 'day' },
      },
    },
    difficulty: 'easy',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'food', id: 'mandu' }],
      common: [],
      seasoning: [{ kind: 'ingredient', id: 'cooking_oil' }],
      optional: [],
    },
    synonyms: ['구운만두'],
  },

  dwaeji_kkeopdegi: {
    defaultUnitLabel: 'g',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },

    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'dwaeji_kkeopdegi',
    label: '돼지껍데기구이',
    category: 'light_food',
    difficulty: 'hard',
    servingTemperature: 'hot',
    unitOptions: ['g', '팩', '조각'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'pork_skin' }],
      common: [],
      seasoning: [{ kind: 'ingredient', id: 'salt' }],
      optional: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'black_pepper' },
      ],
    },
  },

  gamja_twigim: {
    defaultUnitLabel: 'g',
    recommendedDurations: {
      packaged: {
        freezer: { value: 9, unit: 'month' },
      },
      homemade: {
        fridge: { value: 1, unit: 'day' },
      },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gamja_twigim',
    defaultStorage: 'freezer',
    label: '감자튀김',
    category: 'light_food',
    difficulty: 'medium',
    servingTemperature: 'hot',
    unitOptions: ['g', '봉', '팩'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'potato' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'cooking_oil' },
        { kind: 'ingredient', id: 'salt' },
      ],
      optional: [],
    },
    synonyms: ['프렌치프라이', '프렌치후라이'],
  },

  gim_mari: {
    defaultUnitLabel: '개',
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },

    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gim_mari',
    label: '김말이',
    category: 'light_food',
    difficulty: 'hard',
    servingTemperature: 'hot',
    unitOptions: ['개', '봉', '팩', 'g'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'gim' },
        { kind: 'ingredient', id: 'dangmyeon' },
        { kind: 'ingredient', id: 'twigim_garu' },
      ],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'chamgireum' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [
        { kind: 'ingredient', id: 'carrot' },
        { kind: 'ingredient', id: 'black_pepper' },
      ],
    },
  },

  gimbugak: {
    defaultUnitLabel: '봉',
    defaultStorage: 'pantry',
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gimbugak',
    label: '김부각',
    category: 'light_food',
    difficulty: 'hard',
    servingTemperature: 'room_temperature',
    unitOptions: ['봉', '팩', '조각', 'g'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'gim' },
        { kind: 'ingredient', id: 'chapssal_garu' },
      ],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [{ kind: 'ingredient', id: 'bokkeun_chamkkae' }],
    },
  },

  gochu_twigim: {
    defaultUnitLabel: '개',
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gochu_twigim',
    label: '고추튀김',
    category: 'light_food',
    difficulty: 'medium',
    servingTemperature: 'hot',
    unitOptions: ['개', '팩', 'g'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'put_gochu' },
        { kind: 'ingredient', id: 'ground_pork' },
        { kind: 'ingredient', id: 'twigim_garu' },
      ],
      common: [
        { kind: 'ingredient', id: 'dubu' },
        { kind: 'ingredient', id: 'egg' },
        { kind: 'ingredient', id: 'onion' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [{ kind: 'ingredient', id: 'carrot' }],
    },
  },

  goguma_twigim: {
    defaultUnitLabel: '개',
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'goguma_twigim',
    label: '고구마튀김',
    category: 'light_food',
    difficulty: 'medium',
    servingTemperature: 'hot',
    unitOptions: ['개', '팩', 'g'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'sweet_potato' },
        { kind: 'ingredient', id: 'twigim_garu' },
      ],
      common: [],
      seasoning: [{ kind: 'ingredient', id: 'cooking_oil' }],
      optional: [{ kind: 'ingredient', id: 'salt' }],
    },
  },

  korean_hotdog: {
    id: 'korean_hotdog',
    label: '핫도그',
    kind: 'food',
    category: 'light_food',
    isActive: true,
    recommendLevel: 'general',
    // 완성한 핫도그와 시판 냉동 핫도그의 보관 형태가 달라 기본값 생략
    recommendedDurations: {
      homemade: {
        fridge: { value: 2, unit: 'day' },
        freezer: { value: 1, unit: 'month' },
      },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉', '팩'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'sausage' },
        { kind: 'ingredient', id: 'milgaru' },
        { kind: 'ingredient', id: 'ppang_garu' },
      ],
      common: [
        { kind: 'ingredient', id: 'egg' },
        { kind: 'ingredient', id: 'milk' },
        { kind: 'ingredient', id: 'baking_powder' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'sugar' },
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [],
    },
  },

  menbosha: {
    id: 'menbosha',
    label: '멘보샤',
    kind: 'food',
    category: 'light_food',
    isActive: true,
    recommendLevel: 'general',
    // 완성품 냉장과 시판 냉동 제품을 하나의 기본 보관법으로 묶지 않음
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'saeu' },
        { kind: 'food', id: 'sandwich_bread' },
      ],
      common: [
        { kind: 'ingredient', id: 'egg' },
        { kind: 'ingredient', id: 'jeonbun_garu' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'black_pepper' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [],
    },
  },

  ojingeo_twigim: {
    id: 'ojingeo_twigim',
    label: '오징어튀김',
    kind: 'food',
    category: 'light_food',
    isActive: true,
    recommendLevel: 'general',
    // 완성한 튀김과 조리 전 시판 냉동 제품의 보관 형태가 다름
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    defaultUnitLabel: '개',
    unitOptions: ['개', 'g', '봉', '팩'],
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

  saeu_twigim: {
    id: 'saeu_twigim',
    label: '새우튀김',
    kind: 'food',
    category: 'light_food',
    isActive: true,
    recommendLevel: 'general',
    // 완성한 튀김과 조리 전 시판 냉동 제품의 보관 형태가 다름
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    defaultUnitLabel: '개',
    unitOptions: ['개', 'g', '봉', '팩'],
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

  cheese_ball: {
    id: 'cheese_ball',
    label: '치즈볼',
    kind: 'food',
    category: 'light_food',
    isActive: true,
    recommendLevel: 'general',
    // 완성한 치즈볼과 시판 냉동 제품의 보관 형태가 다름
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉', '팩', 'g'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'mozzarella_cheese' },
        { kind: 'ingredient', id: 'chapssal_garu' },
      ],
      common: [
        { kind: 'ingredient', id: 'milgaru' },
        { kind: 'ingredient', id: 'milk' },
        { kind: 'ingredient', id: 'baking_powder' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'sugar' },
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [],
    },
  },

  cheese_stick: {
    id: 'cheese_stick',
    label: '치즈스틱',
    kind: 'food',
    category: 'light_food',
    isActive: true,
    recommendLevel: 'general',
    // 완성한 치즈스틱과 시판 냉동 제품의 보관 형태가 다름
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉', '팩', 'g'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'mozzarella_cheese' },
        { kind: 'ingredient', id: 'ppang_garu' },
      ],
      common: [
        { kind: 'ingredient', id: 'milgaru' },
        { kind: 'ingredient', id: 'egg' },
      ],
      seasoning: [{ kind: 'ingredient', id: 'cooking_oil' }],
      optional: [],
    },
  },

  corn_cheese: {
    id: 'corn_cheese',
    label: '콘치즈',
    kind: 'food',
    category: 'light_food',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 2, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'hot',
    defaultUnitLabel: 'g',
    unitOptions: ['g', '팩', '통'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'canned_oksusu' },
        { kind: 'ingredient', id: 'mozzarella_cheese' },
      ],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'mayonnaise' },
        { kind: 'ingredient', id: 'sugar' },
      ],
      optional: [{ kind: 'ingredient', id: 'butter' }],
    },
  },

  dak_kkochi: {
    id: 'dak_kkochi',
    label: '닭꼬치',
    kind: 'food',
    category: 'light_food',
    isActive: true,
    recommendLevel: 'general',
    // 완성한 닭꼬치와 조리 전 시판 냉동 제품의 보관 형태가 다름
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'chicken_leg' }],
      common: [{ kind: 'ingredient', id: 'daepa' }],
      seasoning: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'oligodang' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [],
    },
  },

  mul_mandu: {
    id: 'mul_mandu',
    label: '물만두',
    kind: 'food',
    category: 'light_food',
    isActive: true,
    recommendLevel: 'general',
    // 수제 완성품과 시판 냉동 제품의 보관 형태가 다름
    recommendedDurations: {
      homemade: { fridge: { value: 2, unit: 'day' } },
    },
    difficulty: 'hard',
    servingTemperature: 'hot',
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉', '팩', 'g'],
    // 속재료가 다양하므로 하나의 재료 구성을 기본값으로 강제하지 않음
  },

  sundae: {
    id: 'sundae',
    label: '순대',
    kind: 'food',
    category: 'light_food',
    isActive: true,
    recommendLevel: 'general',
    // 수제 완성품과 시판 냉장·냉동 제품의 보관 형태가 다름
    recommendedDurations: {
      homemade: { fridge: { value: 2, unit: 'day' } },
    },
    difficulty: 'hard',
    servingTemperature: 'hot',
    defaultUnitLabel: 'g',
    unitOptions: ['g', '팩', '개'],
    // 선지·순대용 창자 등 핵심 재료 ID가 없어 foodStructure 보류
  },

  boiled_egg: {
    id: 'boiled_egg',
    label: '삶은계란',
    kind: 'food',
    category: 'light_food',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: {
        fridge: { value: 1, unit: 'week' },
      },
    },
    difficulty: 'easy',
    servingTemperature: 'either',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'egg' }],
      common: [],
      seasoning: [],
      optional: [],
    },
    synonyms: ['삶은달걀', '완숙란'],
  },

  cereal: {
    id: 'cereal',
    label: '시리얼',
    kind: 'food',
    category: 'light_food',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'pantry',
    servingTemperature: 'either',
    defaultUnitLabel: '상자',
    unitOptions: ['상자', '봉', 'g'],
    synonyms: [],
  },
} as const;

// 반찬
const side_dish = {
  muksabal: {
    id: 'muksabal',
    label: '묵사발',
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'cold',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'dotori_muk' }],
      common: [
        { kind: 'ingredient', id: 'cucumber' },
        { kind: 'food', id: 'baechu_kimchi' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'vinegar' },
        { kind: 'ingredient', id: 'sugar' },
      ],
      optional: [{ kind: 'ingredient', id: 'gim' }],
    },
  },

  aehobak_bokkeum: {
    id: 'aehobak_bokkeum',
    label: '애호박볶음',
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',

    defaultStorage: 'fridge',
    recommendedDurations: {
      // 냉장한 익힌 음식의 식품군 지침 적용
      homemade: {
        fridge: { value: 4, unit: 'day' },
      },
    },

    difficulty: 'easy',
    servingTemperature: 'either',
    defaultUnitLabel: 'g',
    unitOptions: ['g', '팩', '통'],

    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'aehobak' }],
      common: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'cooking_oil' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'saeujeot' },
      ],
      optional: [
        { kind: 'ingredient', id: 'deulgireum' },
        { kind: 'ingredient', id: 'bokkeun_chamkkae' },
        { kind: 'ingredient', id: 'cheongyang_gochu' },
      ],
    },
    synonyms: ['호박볶음', '애호박나물'],
  },

  baechu_kimchi: {
    id: 'baechu_kimchi',
    label: '배추김치',
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    defaultUnitLabel: 'g',
    unitOptions: ['g', '포기', '팩', '통'],
    recommendedDurations: {
      homemade: {
        fridge: { value: 3, unit: 'month' },
      },
    },
    difficulty: 'hard',
    servingTemperature: 'cold',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'baechu' }],
      common: [
        { kind: 'ingredient', id: 'mu' },
        { kind: 'ingredient', id: 'jjokpa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'minced_ginger' },
        { kind: 'ingredient', id: 'myeolchi_aekjeot' },
      ],
      optional: [{ kind: 'ingredient', id: 'saeujeot' }],
    },
    synonyms: ['포기김치'],
  },

  baek_kimchi: {
    id: 'baek_kimchi',
    label: '백김치',
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    defaultUnitLabel: 'g',
    unitOptions: ['g', '포기', '팩', '통'],
    recommendedDurations: {
      homemade: {
        fridge: { value: 1, unit: 'month' },
      },
    },
    difficulty: 'hard',
    servingTemperature: 'cold',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'baechu' }],
      common: [
        { kind: 'ingredient', id: 'mu' },
        { kind: 'ingredient', id: 'bae' },
        { kind: 'ingredient', id: 'jjokpa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'minced_ginger' },
      ],
      optional: [{ kind: 'ingredient', id: 'saeujeot' }],
    },
    synonyms: [],
  },

  broccoli_bokkeum: {
    id: 'broccoli_bokkeum',
    label: '브로콜리볶음',
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    defaultUnitLabel: 'g',
    unitOptions: ['g', '팩', '통'],
    recommendedDurations: {
      homemade: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    difficulty: 'easy',
    servingTemperature: 'either',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'broccoli' }],
      common: [{ kind: 'ingredient', id: 'garlic' }],
      seasoning: [
        { kind: 'ingredient', id: 'cooking_oil' },
        { kind: 'ingredient', id: 'salt' },
      ],
      optional: [],
    },
    synonyms: ['브로콜리마늘볶음'],
  },

  cheongpo_muk_muchim: {
    id: 'cheongpo_muk_muchim',
    label: '청포묵무침',
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    defaultUnitLabel: 'g',
    unitOptions: ['g', '팩', '통'],
    recommendedDurations: {
      homemade: {
        fridge: { value: 2, unit: 'day' },
      },
    },
    difficulty: 'easy',
    servingTemperature: 'cold',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'cheongpo_muk' }],
      common: [{ kind: 'ingredient', id: 'gim' }],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'chamgireum' },
      ],
      optional: [
        { kind: 'ingredient', id: 'cucumber' },
        { kind: 'ingredient', id: 'carrot' },
      ],
    },
    synonyms: ['청포묵김무침'],
  },

  chonggak_kimchi: {
    id: 'chonggak_kimchi',
    label: '총각김치',
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    defaultUnitLabel: 'g',
    unitOptions: ['g', '단', '팩', '통'],
    recommendedDurations: {
      homemade: {
        fridge: { value: 3, unit: 'month' },
      },
    },
    difficulty: 'hard',
    servingTemperature: 'cold',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'chonggak_mu' }],
      common: [{ kind: 'ingredient', id: 'jjokpa' }],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'myeolchi_aekjeot' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [{ kind: 'ingredient', id: 'minced_ginger' }],
    },
    synonyms: ['알타리김치'],
  },

  chwi_namul_muchim: {
    id: 'chwi_namul_muchim',
    label: '취나물무침',
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    defaultUnitLabel: 'g',
    unitOptions: ['g', '팩', '통'],
    recommendedDurations: {
      homemade: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    difficulty: 'easy',
    servingTemperature: 'cold',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'chwinamul' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'guk_ganjang' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'chamgireum' },
        { kind: 'ingredient', id: 'bokkeun_chamkkae' },
      ],
      optional: [{ kind: 'ingredient', id: 'daepa' }],
    },
    synonyms: [],
  },

  danmuji: {
    id: 'danmuji',
    label: '단무지',
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '개', 'g'],
    recommendedDurations: {
      homemade: {
        fridge: { value: 1, unit: 'week' },
      },
    },
    difficulty: 'hard',
    servingTemperature: 'cold',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'mu' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'sugar' },
        { kind: 'ingredient', id: 'vinegar' },
      ],
      optional: [],
    },
    synonyms: [],
  },

  deodeok_gui: {
    id: 'deodeok_gui',
    label: '고추장 더덕구이',
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    defaultUnitLabel: 'g',
    unitOptions: ['g', '개', '팩'],
    recommendedDurations: {
      homemade: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    difficulty: 'medium',
    servingTemperature: 'warm',
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
        { kind: 'ingredient', id: 'mulyeot' },
      ],
      optional: [],
    },
    synonyms: ['더덕구이'],
  },

  aehobak_jeon: {
    id: 'aehobak_jeon',
    label: '애호박전',
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    recommendedDurations: {
      homemade: {
        fridge: { value: 3, unit: 'day' },
        freezer: { value: 10, unit: 'day' },
      },
    },
    difficulty: 'medium',
    servingTemperature: 'either',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'aehobak' }],
      common: [
        { kind: 'ingredient', id: 'egg' },
        { kind: 'ingredient', id: 'buchim_garu' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [],
    },
    synonyms: ['호박전'],
  },

  donggeurangttaeng: {
    id: 'donggeurangttaeng',
    label: '동그랑땡',
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    recommendedDurations: {
      homemade: {
        fridge: { value: 3, unit: 'day' },
        freezer: { value: 1, unit: 'month' },
      },
    },
    difficulty: 'hard',
    servingTemperature: 'either',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'ground_pork' }],
      common: [
        { kind: 'ingredient', id: 'dubu' },
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'egg' },
        { kind: 'ingredient', id: 'milgaru' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'black_pepper' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [{ kind: 'ingredient', id: 'buchu' }],
    },
    synonyms: ['완자전'],
  },

  dongtae_jeon: {
    id: 'dongtae_jeon',
    label: '동태전',
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    recommendedDurations: {
      homemade: {
        fridge: { value: 3, unit: 'day' },
        freezer: { value: 10, unit: 'day' },
      },
    },
    difficulty: 'medium',
    servingTemperature: 'warm',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'dongtae' }],
      common: [
        { kind: 'ingredient', id: 'egg' },
        { kind: 'ingredient', id: 'milgaru' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [{ kind: 'ingredient', id: 'black_pepper' }],
    },
    synonyms: ['동태포전'],
  },

  doraji_muchim: {
    id: 'doraji_muchim',
    label: '도라지무침',
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    defaultUnitLabel: 'g',
    unitOptions: ['g', '팩', '통'],
    recommendedDurations: {
      homemade: {
        fridge: { value: 1, unit: 'week' },
      },
    },
    difficulty: 'medium',
    servingTemperature: 'cold',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'doraji' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'vinegar' },
        { kind: 'ingredient', id: 'sugar' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'chamgireum' },
      ],
      optional: [],
    },
    synonyms: ['도라지초무침'],
  },

  dotori_muk_muchim: {
    id: 'dotori_muk_muchim',
    label: '도토리묵무침',
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    defaultUnitLabel: 'g',
    unitOptions: ['g', '팩', '통'],
    recommendedDurations: {
      homemade: {
        fridge: { value: 2, unit: 'day' },
      },
    },
    difficulty: 'easy',
    servingTemperature: 'cold',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'dotori_muk' }],
      common: [
        { kind: 'ingredient', id: 'sangchu' },
        { kind: 'ingredient', id: 'cucumber' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'chamgireum' },
        { kind: 'ingredient', id: 'sugar' },
      ],
      optional: [{ kind: 'ingredient', id: 'onion' }],
    },
    synonyms: ['묵무침'],
  },

  dubu_buchim: {
    id: 'dubu_buchim',
    label: '두부부침',
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    defaultUnitLabel: '조각',
    unitOptions: ['조각', '팩', 'g'],
    recommendedDurations: {
      homemade: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    difficulty: 'easy',
    servingTemperature: 'either',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'dubu' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'cooking_oil' },
        { kind: 'ingredient', id: 'salt' },
      ],
      optional: [],
    },
    synonyms: [],
  },

  dubu_jorim: {
    id: 'dubu_jorim',
    label: '두부조림',
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    defaultUnitLabel: '조각',
    unitOptions: ['조각', '팩', 'g'],
    recommendedDurations: {
      homemade: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    difficulty: 'medium',
    servingTemperature: 'either',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'dubu' }],
      common: [
        { kind: 'ingredient', id: 'daepa' },
        { kind: 'ingredient', id: 'onion' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'sugar' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [],
    },
    synonyms: [],
  },

  eomuk_bokkeum: {
    defaultUnitLabel: 'g',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'eomuk_bokkeum',
    label: '어묵볶음',
    category: 'side_dish',
    difficulty: 'medium',
    servingTemperature: 'either',
    unitOptions: ['g', '팩', '통'],
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
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [{ kind: 'ingredient', id: 'bokkeun_chamkkae' }],
    },
    synonyms: ['오뎅볶음'],
  },

  fried_egg: {
    defaultUnitLabel: '개',
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'fried_egg',
    label: '계란프라이',
    category: 'side_dish',
    difficulty: 'easy',
    servingTemperature: 'hot',
    unitOptions: ['개'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'egg' }],
      common: [],
      seasoning: [{ kind: 'ingredient', id: 'cooking_oil' }],
      optional: [{ kind: 'ingredient', id: 'salt' }],
    },
    synonyms: ['계란후라이', '달걀프라이'],
  },

  gaji_bokkeum: {
    defaultUnitLabel: 'g',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gaji_bokkeum',
    label: '가지볶음',
    category: 'side_dish',
    difficulty: 'easy',
    servingTemperature: 'either',
    unitOptions: ['g', '팩', '통'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'gaji' }],
      common: [{ kind: 'ingredient', id: 'onion' }],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [{ kind: 'ingredient', id: 'bokkeun_chamkkae' }],
    },
  },

  gamja_jeon: {
    defaultUnitLabel: '개',
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gamja_jeon',
    label: '감자전',
    category: 'side_dish',
    difficulty: 'medium',
    servingTemperature: 'hot',
    unitOptions: ['개', 'g', '팩'],
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
    defaultUnitLabel: 'g',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gamja_jorim',
    label: '감자조림',
    category: 'side_dish',
    difficulty: 'medium',
    servingTemperature: 'either',
    unitOptions: ['g', '팩', '통'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'potato' }],
      common: [{ kind: 'ingredient', id: 'onion' }],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'oligodang' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [{ kind: 'ingredient', id: 'bokkeun_chamkkae' }],
    },
    synonyms: ['간장감자조림'],
  },

  gamjachae_bokkeum: {
    defaultUnitLabel: 'g',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gamjachae_bokkeum',
    label: '감자채볶음',
    category: 'side_dish',
    difficulty: 'medium',
    servingTemperature: 'either',
    unitOptions: ['g', '팩', '통'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'potato' }],
      common: [
        { kind: 'ingredient', id: 'carrot' },
        { kind: 'ingredient', id: 'onion' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [{ kind: 'ingredient', id: 'black_pepper' }],
    },
  },

  ganjang_hwangtaechae_bokkeum: {
    defaultUnitLabel: 'g',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'ganjang_hwangtaechae_bokkeum',
    label: '간장황태채볶음',
    category: 'side_dish',
    difficulty: 'medium',
    servingTemperature: 'either',
    unitOptions: ['g', '팩', '통'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'hwangtaechae' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'oligodang' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [
        { kind: 'ingredient', id: 'daepa' },
        { kind: 'ingredient', id: 'bokkeun_chamkkae' },
      ],
    },
  },

  gimjaban: {
    defaultUnitLabel: '봉',
    defaultStorage: 'pantry',
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gimjaban',
    label: '김자반',
    category: 'side_dish',
    difficulty: 'medium',
    servingTemperature: 'room_temperature',
    unitOptions: ['봉', '통', 'g'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'gim' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'cooking_oil' },
        { kind: 'ingredient', id: 'chamgireum' },
        { kind: 'ingredient', id: 'salt' },
      ],
      optional: [
        { kind: 'ingredient', id: 'sugar' },
        { kind: 'ingredient', id: 'bokkeun_chamkkae' },
      ],
    },
    synonyms: ['김자반볶음'],
  },

  gochu_jangajji: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gochu_jangajji',
    label: '고추장아찌',
    category: 'side_dish',
    difficulty: 'medium',
    servingTemperature: 'cold',
    unitOptions: ['개', '통', 'g'],
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
    synonyms: ['간장고추장아찌', '고추절임'],
  },

  gochujang_hwangtaechae_bokkeum: {
    defaultUnitLabel: 'g',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gochujang_hwangtaechae_bokkeum',
    label: '고추장황태채볶음',
    category: 'side_dish',
    difficulty: 'easy',
    servingTemperature: 'either',
    unitOptions: ['g', '팩', '통'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'hwangtaechae' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'oligodang' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'bokkeun_chamkkae' },
      ],
    },
  },

  gosari_namul: {
    defaultUnitLabel: 'g',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gosari_namul',
    label: '고사리나물',
    category: 'side_dish',
    difficulty: 'medium',
    servingTemperature: 'either',
    unitOptions: ['g', '팩', '통'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'gosari' }],
      common: [{ kind: 'ingredient', id: 'daepa' }],
      seasoning: [
        { kind: 'ingredient', id: 'guk_ganjang' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'deulgireum' },
      ],
      optional: [{ kind: 'ingredient', id: 'bokkeun_chamkkae' }],
    },
    synonyms: ['고사리볶음'],
  },

  gul_jeon: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gul_jeon',
    label: '굴전',
    category: 'side_dish',
    difficulty: 'medium',
    servingTemperature: 'hot',
    unitOptions: ['개', '팩', 'g'],
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
      optional: [{ kind: 'ingredient', id: 'jjokpa' }],
    },
  },

  gyeran_jang_jorim: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gyeran_jang_jorim',
    label: '계란장조림',
    category: 'side_dish',
    difficulty: 'medium',
    servingTemperature: 'cold',
    unitOptions: ['개', '팩', '통'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'egg' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'sugar' },
      ],
      optional: [{ kind: 'ingredient', id: 'cheongyang_gochu' }],
    },
    synonyms: ['달걀장조림'],
  },

  gyeran_jjim: {
    defaultUnitLabel: '개',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gyeran_jjim',
    label: '계란찜',
    category: 'side_dish',
    difficulty: 'easy',
    servingTemperature: 'hot',
    unitOptions: ['개', '통', 'g'],
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
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'gyeran_mari',
    label: '계란말이',
    category: 'side_dish',
    difficulty: 'medium',
    servingTemperature: 'either',
    unitOptions: ['개', '팩', 'g'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'egg' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [
        { kind: 'ingredient', id: 'daepa' },
        { kind: 'ingredient', id: 'carrot' },
      ],
    },
    synonyms: ['달걀말이'],
  },

  japchae: {
    defaultUnitLabel: 'g',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'japchae',
    label: '잡채',
    category: 'side_dish',
    difficulty: 'hard',
    servingTemperature: 'either',
    unitOptions: ['g', '팩', '통'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'dangmyeon' }],
      common: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'carrot' },
        { kind: 'ingredient', id: 'sigeumchi' },
        { kind: 'ingredient', id: 'pyogo_beoseot' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'sugar' },
        { kind: 'ingredient', id: 'chamgireum' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [{ kind: 'ingredient', id: 'beef_hongdukkae' }],
    },
  },

  jinmichae_bokkeum: {
    defaultUnitLabel: 'g',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'jinmichae_bokkeum',
    label: '진미채볶음',
    category: 'side_dish',
    difficulty: 'easy',
    servingTemperature: 'cold',
    unitOptions: ['g', '팩', '통'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'ojingeochae' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'oligodang' },
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [
        { kind: 'ingredient', id: 'mayonnaise' },
        { kind: 'ingredient', id: 'bokkeun_chamkkae' },
      ],
    },
    synonyms: ['오징어채볶음', '일미채볶음'],
  },

  jomigim: {
    defaultUnitLabel: '봉',
    defaultStorage: 'pantry',
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'jomigim',
    label: '조미김',
    category: 'side_dish',
    difficulty: 'medium',
    servingTemperature: 'room_temperature',
    unitOptions: ['봉', '팩', '장', 'g'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'gim' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'chamgireum' },
        { kind: 'ingredient', id: 'salt' },
      ],
      optional: [],
    },
    synonyms: ['맛김'],
  },

  kimchi_bokkeum: {
    defaultUnitLabel: 'g',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'kimchi_bokkeum',
    label: '김치볶음',
    category: 'side_dish',
    difficulty: 'easy',
    servingTemperature: 'either',
    unitOptions: ['g', '팩', '통'],
    foodStructure: {
      essential: [{ kind: 'food', id: 'baechu_kimchi' }],
      common: [],
      seasoning: [{ kind: 'ingredient', id: 'cooking_oil' }],
      optional: [
        { kind: 'ingredient', id: 'sugar' },
        { kind: 'ingredient', id: 'daepa' },
      ],
    },
    synonyms: ['볶음김치'],
  },

  kkaennip_jangajji: {
    defaultUnitLabel: '장',
    defaultStorage: 'fridge',
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'kkaennip_jangajji',
    label: '깻잎장아찌',
    category: 'side_dish',
    difficulty: 'medium',
    servingTemperature: 'cold',
    unitOptions: ['장', '통', 'g'],
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
    synonyms: ['간장깻잎장아찌'],
  },

  kkaennip_jeon: {
    defaultUnitLabel: '개',
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'kkaennip_jeon',
    label: '깻잎전',
    category: 'side_dish',
    difficulty: 'hard',
    servingTemperature: 'hot',
    unitOptions: ['개', '팩', 'g'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'kkaennip' },
        { kind: 'ingredient', id: 'ground_pork' },
        { kind: 'ingredient', id: 'egg' },
        { kind: 'ingredient', id: 'buchim_garu' },
      ],
      common: [
        { kind: 'ingredient', id: 'dubu' },
        { kind: 'ingredient', id: 'onion' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [{ kind: 'ingredient', id: 'carrot' }],
    },
  },

  kkakdugi: {
    defaultUnitLabel: 'g',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'month' } },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'kkakdugi',
    label: '깍두기',
    category: 'side_dish',
    difficulty: 'medium',
    servingTemperature: 'cold',
    unitOptions: ['g', '통', '팩'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'mu' }],
      common: [{ kind: 'ingredient', id: 'jjokpa' }],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'myeolchi_aekjeot' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'sugar' },
      ],
      optional: [{ kind: 'ingredient', id: 'minced_ginger' }],
    },
  },

  kkomak_muchim: {
    defaultUnitLabel: 'g',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'kkomak_muchim',
    label: '꼬막무침',
    category: 'side_dish',
    difficulty: 'hard',
    servingTemperature: 'cold',
    unitOptions: ['g', '팩', '통'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'kkomak' }],
      common: [{ kind: 'ingredient', id: 'buchu' }],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'chamgireum' },
      ],
      optional: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'bokkeun_chamkkae' },
      ],
    },
  },

  kongjaban: {
    defaultUnitLabel: 'g',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    kind: 'food',
    isActive: true,
    recommendLevel: 'general',
    id: 'kongjaban',
    label: '콩자반',
    category: 'side_dish',
    difficulty: 'medium',
    servingTemperature: 'cold',
    unitOptions: ['g', '팩', '통'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'black_soybeans' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'oligodang' },
      ],
      optional: [{ kind: 'ingredient', id: 'bokkeun_chamkkae' }],
    },
    synonyms: ['검은콩조림'],
  },

  kongnamul_muchim: {
    id: 'kongnamul_muchim',
    label: '콩나물무침',
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 2, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'cold',
    defaultUnitLabel: 'g',
    unitOptions: ['g', '팩', '통'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'kongnamul' }],
      common: [{ kind: 'ingredient', id: 'daepa' }],
      seasoning: [
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'chamgireum' },
        { kind: 'ingredient', id: 'salt' },
      ],
      optional: [{ kind: 'ingredient', id: 'bokkeun_chamkkae' }],
    },
  },

  maneuljjong_bokkeum: {
    id: 'maneuljjong_bokkeum',
    label: '마늘쫑볶음',
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'either',
    defaultUnitLabel: 'g',
    unitOptions: ['g', '팩', '통'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'maneuljjong' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'oligodang' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [{ kind: 'ingredient', id: 'bokkeun_chamkkae' }],
    },
  },

  mechurial_jang_jorim: {
    id: 'mechurial_jang_jorim',
    label: '메추리알장조림',
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'cold',
    defaultUnitLabel: '개',
    unitOptions: ['개', 'g', '팩', '통'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'quail_egg' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'oligodang' },
      ],
      optional: [{ kind: 'ingredient', id: 'minced_garlic' }],
    },
  },

  mu_namul: {
    id: 'mu_namul',
    label: '무나물',
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'either',
    defaultUnitLabel: 'g',
    unitOptions: ['g', '팩', '통'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'mu' }],
      common: [{ kind: 'ingredient', id: 'daepa' }],
      seasoning: [
        { kind: 'ingredient', id: 'deulgireum' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'salt' },
      ],
      optional: [],
    },
  },

  mumallaengi_muchim: {
    id: 'mumallaengi_muchim',
    label: '무말랭이무침',
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'cold',
    defaultUnitLabel: 'g',
    unitOptions: ['g', '팩', '통'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'mumallaengi' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'myeolchi_aekjeot' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'oligodang' },
      ],
      optional: [{ kind: 'ingredient', id: 'bokkeun_chamkkae' }],
    },
  },

  musaengchae: {
    id: 'musaengchae',
    label: '무생채',
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 2, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'cold',
    defaultUnitLabel: 'g',
    unitOptions: ['g', '팩', '통'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'mu' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'myeolchi_aekjeot' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'sugar' },
        { kind: 'ingredient', id: 'vinegar' },
      ],
      optional: [{ kind: 'ingredient', id: 'jjokpa' }],
    },
  },

  myeolchi_bokkeum: {
    id: 'myeolchi_bokkeum',
    label: '멸치볶음',
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'cold',
    defaultUnitLabel: 'g',
    unitOptions: ['g', '팩', '통'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'myeolchi' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'oligodang' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [{ kind: 'ingredient', id: 'bokkeun_chamkkae' }],
    },
  },

  myeongran_jeotgal: {
    id: 'myeongran_jeotgal',
    label: '명란젓',
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    difficulty: 'hard',
    servingTemperature: 'cold',
    defaultUnitLabel: 'g',
    unitOptions: ['g', '팩', '통'],
    // 원료인 명태알 ingredient ID가 없어 foodStructure는 보류
    // 염도·제조법·제품 상태별 편차가 커 일괄 권장 기간도 보류
  },

  nakji_jeotgal: {
    id: 'nakji_jeotgal',
    label: '낙지젓',
    synonyms: ['낙지젓갈'],
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    // 염도·제조법에 따른 차이가 커 일괄 권장 기간은 생략
    difficulty: 'hard',
    servingTemperature: 'cold',
    defaultUnitLabel: 'g',
    unitOptions: ['g', '팩', '통'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'nakji' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'oligodang' },
      ],
      optional: [{ kind: 'ingredient', id: 'minced_ginger' }],
    },
  },

  neutari_beoseot_bokkeum: {
    id: 'neutari_beoseot_bokkeum',
    label: '느타리버섯볶음',
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'either',
    defaultUnitLabel: 'g',
    unitOptions: ['g', '팩', '통'],
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
    id: 'oi_muchim',
    label: '오이무침',
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'cold',
    defaultUnitLabel: 'g',
    unitOptions: ['g', '팩', '통'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'cucumber' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'vinegar' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'sugar' },
        { kind: 'ingredient', id: 'salt' },
      ],
      optional: [{ kind: 'ingredient', id: 'bokkeun_chamkkae' }],
    },
  },

  pa_kimchi: {
    id: 'pa_kimchi',
    label: '파김치',
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 2, unit: 'week' } },
    },
    difficulty: 'medium',
    servingTemperature: 'cold',
    defaultUnitLabel: 'g',
    unitOptions: ['g', '팩', '통'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'jjokpa' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'myeolchi_aekjeot' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'sugar' },
      ],
      optional: [{ kind: 'ingredient', id: 'minced_ginger' }],
    },
  },

  parae_gim: {
    id: 'parae_gim',
    label: '구운파래김',
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'pantry',
    // 포장·방습 상태에 크게 좌우되어 일괄 권장 기간 생략
    difficulty: 'easy',
    servingTemperature: 'room_temperature',
    defaultUnitLabel: '봉',
    unitOptions: ['봉', '장', '팩', 'g'],
    // 현재 재료 목록에 '파래김 원물' ID가 없어 foodStructure 생략
  },

  saeu_wanja: {
    id: 'saeu_wanja',
    label: '새우완자',
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    // 아래 기간은 완전히 익힌 수제 완자 기준
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    defaultUnitLabel: '개',
    unitOptions: ['개', 'g', '팩'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'saeu' }],
      common: [
        { kind: 'ingredient', id: 'egg' },
        { kind: 'ingredient', id: 'jeonbun_garu' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'black_pepper' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [{ kind: 'ingredient', id: 'jjokpa' }],
    },
  },

  sausage_bokkeum: {
    id: 'sausage_bokkeum',
    label: '소시지볶음',
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'either',
    defaultUnitLabel: 'g',
    unitOptions: ['g', '팩', '통'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'sausage' }],
      common: [{ kind: 'ingredient', id: 'onion' }],
      seasoning: [
        { kind: 'ingredient', id: 'ketchup' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [{ kind: 'ingredient', id: 'green_paprika' }],
    },
  },

  sigeumchi_namul: {
    id: 'sigeumchi_namul',
    label: '시금치나물',
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 2, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'cold',
    defaultUnitLabel: 'g',
    unitOptions: ['g', '팩', '통'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'sigeumchi' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'chamgireum' },
        { kind: 'ingredient', id: 'salt' },
      ],
      optional: [{ kind: 'ingredient', id: 'bokkeun_chamkkae' }],
    },
  },

  sogogi_jang_jorim: {
    id: 'sogogi_jang_jorim',
    label: '소고기장조림',
    synonyms: ['쇠고기장조림'],
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'hard',
    servingTemperature: 'cold',
    defaultUnitLabel: 'g',
    unitOptions: ['g', '팩', '통'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'beef_round' }],
      common: [
        { kind: 'ingredient', id: 'garlic' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'oligodang' },
      ],
      optional: [{ kind: 'ingredient', id: 'cheongyang_gochu' }],
    },
  },

  sukjunamul_muchim: {
    id: 'sukjunamul_muchim',
    label: '숙주나물무침',
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 2, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'cold',
    defaultUnitLabel: 'g',
    unitOptions: ['g', '팩', '통'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'sukjunamul' }],
      common: [{ kind: 'ingredient', id: 'daepa' }],
      seasoning: [
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'chamgireum' },
        { kind: 'ingredient', id: 'salt' },
      ],
      optional: [{ kind: 'ingredient', id: 'bokkeun_chamkkae' }],
    },
  },

  tomato_gyeran_bokkeum: {
    id: 'tomato_gyeran_bokkeum',
    label: '토마토계란볶음',
    synonyms: ['토마토달걀볶음'],
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 2, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'hot',
    defaultUnitLabel: 'g',
    unitOptions: ['g', '팩', '통'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'tomato' },
        { kind: 'ingredient', id: 'egg' },
      ],
      common: [{ kind: 'ingredient', id: 'daepa' }],
      seasoning: [
        { kind: 'ingredient', id: 'cooking_oil' },
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'sugar' },
      ],
      optional: [],
    },
  },

  ueong_jorim: {
    id: 'ueong_jorim',
    label: '우엉조림',
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'cold',
    defaultUnitLabel: 'g',
    unitOptions: ['g', '팩', '통'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'ueong' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'oligodang' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [{ kind: 'ingredient', id: 'bokkeun_chamkkae' }],
    },
  },

  yangpa_jangajji: {
    id: 'yangpa_jangajji',
    label: '양파장아찌',
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 2, unit: 'week' } },
    },
    difficulty: 'easy',
    servingTemperature: 'cold',
    defaultUnitLabel: 'g',
    unitOptions: ['g', '팩', '통'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'onion' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'vinegar' },
        { kind: 'ingredient', id: 'sugar' },
      ],
      optional: [{ kind: 'ingredient', id: 'cheongyang_gochu' }],
    },
  },

  yeongeun_jorim: {
    id: 'yeongeun_jorim',
    label: '연근조림',
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'cold',
    defaultUnitLabel: 'g',
    unitOptions: ['g', '팩', '통'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'yeongeun' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'oligodang' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [{ kind: 'ingredient', id: 'vinegar' }],
    },
  },

  baechu_geotjeori: {
    id: 'baechu_geotjeori',
    label: '배추겉절이',
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 2, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'cold',
    defaultUnitLabel: 'g',
    unitOptions: ['g', '팩', '통'],
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
    id: 'buchu_geotjeori',
    label: '부추겉절이',
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'cold',
    defaultUnitLabel: 'g',
    unitOptions: ['g', '팩', '통'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'buchu' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'myeolchi_aekjeot' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'sugar' },
      ],
      optional: [{ kind: 'ingredient', id: 'vinegar' }],
    },
  },

  dongchimi: {
    id: 'dongchimi',
    label: '동치미',
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 2, unit: 'week' } },
    },
    difficulty: 'medium',
    servingTemperature: 'cold',
    defaultUnitLabel: '통',
    unitOptions: ['통', '팩', 'g', 'L'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'mu' }],
      common: [
        { kind: 'ingredient', id: 'jjokpa' },
        { kind: 'ingredient', id: 'garlic' },
        { kind: 'ingredient', id: 'ginger' },
      ],
      seasoning: [{ kind: 'ingredient', id: 'salt' }],
      optional: [{ kind: 'ingredient', id: 'bae' }],
    },
  },

  maneul_jangajji: {
    id: 'maneul_jangajji',
    label: '마늘장아찌',
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    // 절임 비율·숙성 방식에 따라 차이가 커 일괄 권장 기간 생략
    difficulty: 'medium',
    servingTemperature: 'cold',
    defaultUnitLabel: 'g',
    unitOptions: ['g', '통', '팩'],
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
    id: 'oi_sobagi',
    label: '오이소박이',
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'week' } },
    },
    difficulty: 'medium',
    servingTemperature: 'cold',
    defaultUnitLabel: '개',
    unitOptions: ['개', 'g', '팩', '통'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'cucumber' }],
      common: [
        { kind: 'ingredient', id: 'buchu' },
        { kind: 'ingredient', id: 'carrot' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'myeolchi_aekjeot' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'sugar' },
      ],
      optional: [{ kind: 'ingredient', id: 'minced_ginger' }],
    },
  },

  ojingeo_jeotgal: {
    id: 'ojingeo_jeotgal',
    label: '오징어젓갈',
    synonyms: ['오징어젓'],
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    // 염도·숙성 방식에 따라 차이가 커 일괄 권장 기간 생략
    difficulty: 'hard',
    servingTemperature: 'cold',
    defaultUnitLabel: 'g',
    unitOptions: ['g', '팩', '통'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'ojingeo' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'mulyeot' },
      ],
      optional: [{ kind: 'ingredient', id: 'minced_ginger' }],
    },
  },

  ssammu: {
    id: 'ssammu',
    label: '쌈무',
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'week' } },
    },
    difficulty: 'easy',
    servingTemperature: 'cold',
    defaultUnitLabel: '장',
    unitOptions: ['장', 'g', '팩', '통'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'mu' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'vinegar' },
        { kind: 'ingredient', id: 'sugar' },
        { kind: 'ingredient', id: 'salt' },
      ],
      optional: [],
    },
  },

  yeolmu_kimchi: {
    id: 'yeolmu_kimchi',
    label: '열무김치',
    kind: 'food',
    category: 'side_dish',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: {
        fridge: { value: 2, unit: 'week' },
      },
    },
    difficulty: 'medium',
    servingTemperature: 'cold',
    defaultUnitLabel: '통',
    unitOptions: ['통', '팩', 'g'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'yeolmu' }],
      common: [
        { kind: 'ingredient', id: 'jjokpa' },
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'hong_gochu' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'myeolchi_aekjeot' },
        { kind: 'ingredient', id: 'chapssal_garu' },
      ],
      optional: [{ kind: 'ingredient', id: 'ginger' }],
    },
    synonyms: [],
  },
} as const;

// 디저트/간식
const snack_dessert = {
  mattang: {
    id: 'mattang',
    label: '맛탕',
    kind: 'food',
    category: 'snack_dessert',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    defaultUnitLabel: 'g',
    unitOptions: ['g', '팩', '개'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'sweet_potato' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'mulyeot' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [{ kind: 'ingredient', id: 'bokkeun_chamkkae' }],
    },
  },

  chocolate_jam: {
    id: 'chocolate_jam',
    label: '초코잼',
    kind: 'food',
    category: 'snack_dessert',
    isActive: true,
    recommendLevel: 'general',
    difficulty: 'easy',
    servingTemperature: 'either',
    defaultUnitLabel: '통',
    unitOptions: ['통', '병', 'g'],
    foodStructure: {
      essential: [{ kind: 'food', id: 'chocolate' }],
      common: [{ kind: 'ingredient', id: 'fresh_cream' }],
      seasoning: [],
      optional: [{ kind: 'ingredient', id: 'butter' }],
    },
    synonyms: ['초콜릿잼', '초코스프레드'],
  },

  black_sesame_tteok: {
    id: 'black_sesame_tteok',
    label: '흑임자떡',
    kind: 'food',
    category: 'snack_dessert',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'freezer',
    recommendedDurations: {
      homemade: {
        freezer: { value: 1, unit: 'month' },
      },
    },
    difficulty: 'medium',
    servingTemperature: 'either',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    synonyms: [],
  },

  cake_slice: {
    id: 'cake_slice',
    label: '조각케이크',
    kind: 'food',
    category: 'snack_dessert',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    servingTemperature: 'cold',
    defaultUnitLabel: '조각',
    unitOptions: ['조각', '개', '상자'],
    synonyms: ['케이크 조각'],
  },

  caramel: {
    id: 'caramel',
    label: '카라멜',
    kind: 'food',
    category: 'snack_dessert',
    isActive: true,
    recommendLevel: 'general',
    difficulty: 'medium',
    servingTemperature: 'either',
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉', '상자'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'sugar' }],
      common: [
        { kind: 'ingredient', id: 'fresh_cream' },
        { kind: 'ingredient', id: 'butter' },
      ],
      seasoning: [{ kind: 'ingredient', id: 'salt' }],
      optional: [{ kind: 'ingredient', id: 'mulyeot' }],
    },
    synonyms: ['캐러멜'],
  },

  chapssal_tteok: {
    id: 'chapssal_tteok',
    label: '찹쌀떡',
    kind: 'food',
    category: 'snack_dessert',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'freezer',
    recommendedDurations: {
      homemade: {
        freezer: { value: 1, unit: 'month' },
      },
    },
    difficulty: 'medium',
    servingTemperature: 'either',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'chapssal_garu' }],
      common: [{ kind: 'ingredient', id: 'pat' }],
      seasoning: [
        { kind: 'ingredient', id: 'sugar' },
        { kind: 'ingredient', id: 'salt' },
      ],
      optional: [{ kind: 'ingredient', id: 'gamja_jeonbun' }],
    },
    synonyms: [],
  },

  chips: {
    id: 'chips',
    label: '칩과자',
    kind: 'food',
    category: 'snack_dessert',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'pantry',
    servingTemperature: 'either',
    defaultUnitLabel: '봉',
    unitOptions: ['봉', '상자', 'g'],
    synonyms: ['감자칩'],
  },

  choco_bar: {
    id: 'choco_bar',
    label: '초코바',
    kind: 'food',
    category: 'snack_dessert',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'pantry',
    servingTemperature: 'either',
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉', '상자'],
    synonyms: ['초코 간식바'],
  },

  chocolate: {
    id: 'chocolate',
    label: '초콜릿',
    kind: 'food',
    category: 'snack_dessert',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'pantry',
    servingTemperature: 'either',
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉', '판', 'g'],
    synonyms: ['초콜렛'],
  },

  chocolate_bar: {
    id: 'chocolate_bar',
    label: '초콜릿바',
    kind: 'food',
    category: 'snack_dessert',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'pantry',
    servingTemperature: 'either',
    defaultUnitLabel: '개',
    unitOptions: ['개', '판', '봉', 'g'],
    synonyms: ['판초콜릿', '초콜렛바'],
  },

  cookie: {
    id: 'cookie',
    label: '쿠키',
    kind: 'food',
    category: 'snack_dessert',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'pantry',
    recommendedDurations: {
      // 크림·과일 등의 충전물이 없는 일반 구운 쿠키 기준
      homemade: {
        pantry: { value: 1, unit: 'week' },
      },
    },
    difficulty: 'medium',
    servingTemperature: 'either',
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉', '상자', 'g'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'milgaru' },
        { kind: 'ingredient', id: 'sugar' },
        { kind: 'ingredient', id: 'butter' },
      ],
      common: [{ kind: 'ingredient', id: 'egg' }],
      seasoning: [{ kind: 'ingredient', id: 'salt' }],
      optional: [
        { kind: 'ingredient', id: 'baking_powder' },
        { kind: 'food', id: 'chocolate' },
      ],
    },
    synonyms: [],
  },

  cracker: {
    id: 'cracker',
    label: '크래커',
    kind: 'food',
    category: 'snack_dessert',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'pantry',
    difficulty: 'medium',
    servingTemperature: 'either',
    defaultUnitLabel: '봉',
    unitOptions: ['봉', '상자', '개', 'g'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'milgaru' }],
      common: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      seasoning: [],
      optional: [
        { kind: 'ingredient', id: 'baking_powder' },
        { kind: 'ingredient', id: 'chamkkae' },
      ],
    },
    synonyms: [],
  },

  dried_persimmon: {
    id: 'dried_persimmon',
    label: '곶감',
    kind: 'food',
    category: 'snack_dessert',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'freezer',
    difficulty: 'medium',
    servingTemperature: 'either',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', '상자', 'g'],
    synonyms: ['건시', '반건시'],
  },

  energy_bar: {
    id: 'energy_bar',
    label: '에너지바',
    kind: 'food',
    category: 'snack_dessert',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'pantry',
    servingTemperature: 'either',
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉', '상자'],
    synonyms: [],
  },

  garaetteok: {
    id: 'garaetteok',
    label: '가래떡',
    kind: 'food',
    category: 'snack_dessert',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'freezer',
    recommendedDurations: {
      homemade: {
        freezer: { value: 1, unit: 'month' },
      },
    },
    difficulty: 'medium',
    servingTemperature: 'either',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'baekmi' }],
      common: [],
      seasoning: [{ kind: 'ingredient', id: 'salt' }],
      optional: [{ kind: 'ingredient', id: 'chamgireum' }],
    },
    synonyms: [],
  },

  grape_jam: {
    id: 'grape_jam',
    label: '포도잼',
    kind: 'food',
    category: 'snack_dessert',
    isActive: true,
    recommendLevel: 'general',
    recommendedDurations: {
      // 살균·밀봉한 상온 저장 잼이 아닌, 집에서 만들어 냉장하는 잼
      homemade: {
        fridge: { value: 1, unit: 'month' },
      },
    },
    difficulty: 'easy',
    servingTemperature: 'either',
    defaultUnitLabel: '병',
    unitOptions: ['병', '통', 'g'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'grape' }],
      common: [{ kind: 'ingredient', id: 'sugar' }],
      seasoning: [],
      optional: [{ kind: 'ingredient', id: 'lemon' }],
    },
    synonyms: ['포도쨈'],
  },

  hangwa: {
    id: 'hangwa',
    label: '한과',
    kind: 'food',
    category: 'snack_dessert',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'pantry',
    servingTemperature: 'either',
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉', '상자', 'g'],
    synonyms: [],
  },

  honey_rice_cake: {
    id: 'honey_rice_cake',
    label: '꿀떡',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'freezer',
    recommendedDurations: {
      homemade: {
        freezer: { value: 1, unit: 'month' },
      },
    },
    difficulty: 'medium',
    servingTemperature: 'either',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'baekmi' }],
      common: [
        { kind: 'ingredient', id: 'chamkkae' },
        { kind: 'ingredient', id: 'sugar' },
      ],
      seasoning: [{ kind: 'ingredient', id: 'salt' }],
      optional: [{ kind: 'ingredient', id: 'honey' }],
    },
    synonyms: [],
  },

  ice_cream_bar: {
    id: 'ice_cream_bar',
    label: '아이스크림바',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'freezer',
    recommendedDurations: {
      homemade: {
        freezer: { value: 1, unit: 'month' },
      },
    },
    difficulty: 'medium',
    servingTemperature: 'cold',
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉', '상자'],
    synonyms: ['막대아이스크림'],
  },

  ice_cream_tub: {
    id: 'ice_cream_tub',
    label: '통아이스크림',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'freezer',
    recommendedDurations: {
      homemade: {
        freezer: { value: 2, unit: 'month' },
      },
    },
    difficulty: 'medium',
    servingTemperature: 'cold',
    defaultUnitLabel: '통',
    unitOptions: ['통', '개', 'g', 'ml'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'milk' },
        { kind: 'ingredient', id: 'fresh_cream' },
      ],
      common: [{ kind: 'ingredient', id: 'sugar' }],
      seasoning: [],
      optional: [{ kind: 'ingredient', id: 'egg' }],
    },
    synonyms: ['아이스크림통'],
  },

  injeolmi: {
    id: 'injeolmi',
    label: '인절미',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'freezer',
    recommendedDurations: {
      homemade: {
        freezer: { value: 1, unit: 'month' },
      },
    },
    difficulty: 'medium',
    servingTemperature: 'either',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    synonyms: ['인절미떡'],
  },

  jelly: {
    id: 'jelly',
    label: '젤리',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    servingTemperature: 'either',
    defaultUnitLabel: '봉',
    unitOptions: ['봉', '개', '상자', 'g'],
    synonyms: ['젤리과자'],
  },

  marshmallow: {
    id: 'marshmallow',
    label: '마시멜로',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    servingTemperature: 'either',
    defaultUnitLabel: '봉',
    unitOptions: ['봉', '개', 'g'],
    synonyms: ['마시멜로우'],
  },

  nachos: {
    id: 'nachos',
    label: '나초칩',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    servingTemperature: 'either',
    defaultUnitLabel: '봉',
    unitOptions: ['봉', '상자', 'g'],
    synonyms: ['나초', '나쵸'],
  },

  omegi_tteok: {
    id: 'omegi_tteok',
    label: '오메기떡',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'freezer',
    recommendedDurations: {
      homemade: {
        freezer: { value: 1, unit: 'month' },
      },
    },
    difficulty: 'medium',
    servingTemperature: 'either',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'chajo' }],
      common: [{ kind: 'ingredient', id: 'pat' }],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'sugar' },
      ],
      optional: [{ kind: 'ingredient', id: 'ssug' }],
    },
    synonyms: [],
  },

  oranda: {
    id: 'oranda',
    label: '오란다',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    servingTemperature: 'either',
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉', '상자', 'g'],
    synonyms: [],
  },

  pancake: {
    id: 'pancake',
    label: '팬케이크',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: {
        fridge: { value: 3, unit: 'day' },
        freezer: { value: 2, unit: 'month' },
      },
    },
    difficulty: 'easy',
    servingTemperature: 'hot',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'milgaru' },
        { kind: 'ingredient', id: 'milk' },
      ],
      common: [
        { kind: 'ingredient', id: 'egg' },
        { kind: 'ingredient', id: 'baking_powder' },
        { kind: 'ingredient', id: 'sugar' },
      ],
      seasoning: [{ kind: 'ingredient', id: 'salt' }],
      optional: [{ kind: 'ingredient', id: 'butter' }],
    },
    synonyms: ['핫케이크'],
  },

  peanut_butter: {
    id: 'peanut_butter',
    label: '땅콩버터',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    difficulty: 'easy',
    servingTemperature: 'either',
    defaultUnitLabel: '병',
    unitOptions: ['병', '통', 'g'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'peanut' }],
      common: [],
      seasoning: [],
      optional: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'sugar' },
      ],
    },
    synonyms: ['땅콩잼', '피넛버터'],
  },

  popcorn: {
    id: 'popcorn',
    label: '팝콘',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    difficulty: 'easy',
    servingTemperature: 'either',
    defaultUnitLabel: '봉',
    unitOptions: ['봉', '상자', 'g'],
    synonyms: [],
  },

  pudding: {
    id: 'pudding',
    label: '푸딩',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: {
        fridge: { value: 3, unit: 'day' },
      },
    },
    difficulty: 'easy',
    servingTemperature: 'cold',
    defaultUnitLabel: '개',
    unitOptions: ['개', '컵', '팩', 'g'],
    synonyms: [],
  },

  rice_cracker: {
    id: 'rice_cracker',
    label: '쌀과자',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    servingTemperature: 'either',
    defaultUnitLabel: '봉',
    unitOptions: ['봉', '개', '상자', 'g'],
    synonyms: [],
  },

  sandwich_cookie: {
    id: 'sandwich_cookie',
    label: '샌드쿠키',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    difficulty: 'medium',
    servingTemperature: 'either',
    defaultUnitLabel: '봉',
    unitOptions: ['봉', '개', '상자', 'g'],
    foodStructure: {
      essential: [{ kind: 'food', id: 'cookie' }],
      common: [
        { kind: 'ingredient', id: 'butter' },
        { kind: 'ingredient', id: 'sugar' },
      ],
      seasoning: [],
      optional: [{ kind: 'food', id: 'chocolate' }],
    },
    synonyms: [],
  },

  strawberry_jam: {
    id: 'strawberry_jam',
    label: '딸기잼',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    recommendedDurations: {
      homemade: {
        fridge: { value: 1, unit: 'month' },
      },
    },
    difficulty: 'easy',
    servingTemperature: 'either',
    defaultUnitLabel: '병',
    unitOptions: ['병', '통', 'g'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'strawberry' }],
      common: [{ kind: 'ingredient', id: 'sugar' }],
      seasoning: [],
      optional: [{ kind: 'ingredient', id: 'lemon' }],
    },
    synonyms: ['딸기쨈'],
  },

  whole_cake: {
    id: 'whole_cake',
    label: '홀케이크',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: {
        fridge: { value: 3, unit: 'day' },
      },
    },

    servingTemperature: 'cold',
    defaultUnitLabel: '개',
    unitOptions: ['개', '상자'],
    synonyms: ['케이크', '홀케잌', '케잌'],
  },

  yokan: {
    id: 'yokan',
    label: '양갱',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    servingTemperature: 'either',
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉', '상자', 'g'],
    synonyms: ['연양갱'],
  },

  yugwa: {
    id: 'yugwa',
    label: '유과',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    difficulty: 'hard',
    servingTemperature: 'either',
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉', '상자', 'g'],
    synonyms: [],
  },

  pretzel: {
    id: 'pretzel',
    label: '프레첼 과자',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    defaultUnitLabel: '봉',
    unitOptions: ['봉', '상자', 'g'],
    synonyms: ['프레첼', '프레즐'],
  },

  red_bean_bread: {
    id: 'red_bean_bread',
    label: '단팥빵',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    defaultStorage: 'pantry',
    recommendedDurations: {
      homemade: {
        pantry: { value: 2, unit: 'day' },
        freezer: { value: 1, unit: 'month' },
      },
    },
    difficulty: 'medium',
    servingTemperature: 'either',
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉', '상자'],
  },

  roll_cake: {
    id: 'roll_cake',
    label: '롤케이크',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    difficulty: 'medium',
    servingTemperature: 'cold',
    defaultUnitLabel: '개',
    unitOptions: ['개', '조각', '상자'],
    synonyms: ['롤케익'],
  },

  steamed_bun: {
    id: 'steamed_bun',
    label: '찐빵',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    recommendedDurations: {
      homemade: {
        fridge: { value: 1, unit: 'day' },
      },
    },
    difficulty: 'medium',
    servingTemperature: 'either',
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉', '팩'],
    synonyms: ['호빵'],
  },

  tart: {
    id: 'tart',
    label: '타르트',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'snack_dessert',
    difficulty: 'medium',
    servingTemperature: 'either',
    defaultUnitLabel: '개',
    unitOptions: ['개', '조각', '상자'],
  },
} as const;

// 베이커리
const bakery = {
  bagel: {
    id: 'bagel',
    label: '베이글',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'bakery',
    defaultStorage: 'pantry',
    recommendedDurations: {
      homemade: {
        pantry: { value: 3, unit: 'day' },
        freezer: { value: 1, unit: 'month' },
      },
    },
    difficulty: 'medium',
    servingTemperature: 'either',
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉', '팩'],
    synonyms: [],
  },

  baguette: {
    id: 'baguette',
    label: '바게트',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'bakery',
    defaultStorage: 'pantry',
    recommendedDurations: {
      homemade: {
        pantry: { value: 1, unit: 'day' },
        freezer: { value: 3, unit: 'month' },
      },
    },
    difficulty: 'medium',
    servingTemperature: 'either',
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉', '조각', 'g'],
    synonyms: ['바게뜨'],
  },

  castella: {
    id: 'castella',
    label: '카스테라',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'bakery',
    defaultStorage: 'pantry',
    recommendedDurations: {
      homemade: {
        pantry: { value: 2, unit: 'day' },
        freezer: { value: 1, unit: 'month' },
      },
    },
    difficulty: 'medium',
    servingTemperature: 'either',
    defaultUnitLabel: '개',
    unitOptions: ['개', '조각', '봉', 'g'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'egg' },
        { kind: 'ingredient', id: 'milgaru' },
        { kind: 'ingredient', id: 'sugar' },
      ],
      common: [],
      seasoning: [],
      optional: [
        { kind: 'ingredient', id: 'honey' },
        { kind: 'ingredient', id: 'milk' },
      ],
    },
  },

  cinnamon_roll: {
    id: 'cinnamon_roll',
    label: '시나몬롤',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'bakery',
    difficulty: 'medium',
    servingTemperature: 'either',
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉', '상자'],
  },

  croissant: {
    id: 'croissant',
    label: '크루아상',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'bakery',
    defaultStorage: 'pantry',
    recommendedDurations: {
      homemade: {
        pantry: { value: 2, unit: 'day' },
      },
    },
    difficulty: 'hard',
    servingTemperature: 'either',
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉', '상자'],
    synonyms: ['크로와상', '크로아상'],
  },

  dinner_roll: {
    id: 'dinner_roll',
    label: '모닝빵',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'bakery',
    defaultStorage: 'pantry',
    recommendedDurations: {
      homemade: {
        pantry: { value: 3, unit: 'day' },
        freezer: { value: 3, unit: 'month' },
      },
    },
    difficulty: 'medium',
    servingTemperature: 'either',
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉', '팩'],
  },

  donut: {
    id: 'donut',
    label: '도넛',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'bakery',
    difficulty: 'medium',
    servingTemperature: 'either',
    defaultUnitLabel: '개',
    unitOptions: ['개', '상자', '봉'],
  },

  garlic_bread: {
    id: 'garlic_bread',
    label: '마늘빵',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'bakery',
    difficulty: 'easy',
    servingTemperature: 'hot',
    defaultUnitLabel: '개',
    unitOptions: ['개', '조각', '봉'],
    foodStructure: {
      essential: [
        { kind: 'food', id: 'baguette' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      common: [{ kind: 'ingredient', id: 'butter' }],
      seasoning: [{ kind: 'ingredient', id: 'salt' }],
      optional: [
        { kind: 'ingredient', id: 'parsley' },
        { kind: 'ingredient', id: 'parmesan_cheese' },
      ],
    },
  },

  muffin: {
    id: 'muffin',
    label: '머핀',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'bakery',
    defaultStorage: 'pantry',
    recommendedDurations: {
      homemade: {
        pantry: { value: 2, unit: 'day' },
        freezer: { value: 1, unit: 'month' },
      },
    },
    difficulty: 'easy',
    servingTemperature: 'either',
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉', '상자'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'milgaru' },
        { kind: 'ingredient', id: 'egg' },
        { kind: 'ingredient', id: 'sugar' },
        { kind: 'ingredient', id: 'baking_powder' },
      ],
      common: [
        { kind: 'ingredient', id: 'milk' },
        { kind: 'ingredient', id: 'butter' },
      ],
      seasoning: [{ kind: 'ingredient', id: 'salt' }],
      optional: [],
    },
  },

  pie: {
    id: 'pie',
    label: '파이',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'bakery',
    difficulty: 'medium',
    servingTemperature: 'either',
    defaultUnitLabel: '개',
    unitOptions: ['개', '조각', '상자'],
  },

  rye_bread: {
    id: 'rye_bread',
    label: '호밀빵',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'bakery',
    defaultStorage: 'pantry',
    recommendedDurations: {
      homemade: {
        pantry: { value: 3, unit: 'day' },
        freezer: { value: 3, unit: 'month' },
      },
    },
    difficulty: 'medium',
    servingTemperature: 'either',
    defaultUnitLabel: '개',
    unitOptions: ['개', '장', '봉'],
  },

  salt_bread: {
    id: 'salt_bread',
    label: '소금빵',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'bakery',
    defaultStorage: 'pantry',
    recommendedDurations: {
      homemade: {
        pantry: { value: 2, unit: 'day' },
      },
    },
    difficulty: 'medium',
    servingTemperature: 'either',
    defaultUnitLabel: '개',
    unitOptions: ['개', '봉', '상자'],
  },

  sandwich_bread: {
    id: 'sandwich_bread',
    label: '식빵',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'bakery',
    defaultStorage: 'pantry',
    recommendedDurations: {
      homemade: {
        pantry: { value: 4, unit: 'day' },
        freezer: { value: 3, unit: 'month' },
      },
    },
    difficulty: 'medium',
    servingTemperature: 'either',
    defaultUnitLabel: '개',
    unitOptions: ['개', '장', '봉'],
  },
} as const;

// 음료
const drink = {
  kong_mul: {
    id: 'kong_mul',
    label: '콩물',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'drink',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: {
        fridge: { value: 1, unit: 'day' },
      },
    },
    difficulty: 'medium',
    servingTemperature: 'cold',
    defaultUnitLabel: '병',
    unitOptions: ['병', '팩', 'ml', 'L'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'daedu' }],
      common: [],
      seasoning: [],
      optional: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'sugar' },
      ],
    },
    synonyms: ['콩국물', '콩국수콩물'],
  },

  banana_milk: {
    id: 'banana_milk',
    label: '바나나우유',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'drink',
    recommendedDurations: {
      homemade: {
        fridge: { value: 1, unit: 'day' },
      },
    },
    difficulty: 'easy',
    servingTemperature: 'cold',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '병', '개', 'ml'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'banana' },
        { kind: 'ingredient', id: 'milk' },
      ],
      common: [],
      seasoning: [],
      optional: [{ kind: 'ingredient', id: 'honey' }],
    },
  },

  beer: {
    id: 'beer',
    label: '맥주',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'drink',
    servingTemperature: 'cold',
    defaultUnitLabel: '병',
    unitOptions: ['병', '캔', 'ml', 'L'],
  },

  chocolate_milk: {
    id: 'chocolate_milk',
    label: '초코우유',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'drink',
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'cold',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '병', 'ml'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'milk' },
        { kind: 'ingredient', id: 'cocoa_powder' },
      ],
      common: [],
      seasoning: [{ kind: 'ingredient', id: 'sugar' }],
      optional: [],
    },
    synonyms: ['초콜릿우유'],
  },

  can_coffee: {
    id: 'can_coffee',
    label: '캔커피',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'drink',
    defaultStorage: 'pantry',
    servingTemperature: 'either',
    defaultUnitLabel: '캔',
    unitOptions: ['캔', 'ml'],
    synonyms: ['캔 커피'],
  },

  can_cola: {
    id: 'can_cola',
    label: '캔콜라',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'drink',
    defaultStorage: 'pantry',
    servingTemperature: 'cold',
    defaultUnitLabel: '캔',
    unitOptions: ['캔', 'ml'],
    synonyms: ['콜라', '캔 콜라'],
  },

  coffee_milk: {
    id: 'coffee_milk',
    label: '커피우유',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'drink',
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'cold',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '병', 'ml'],
  },

  drink_yogurt: {
    id: 'drink_yogurt',
    label: '요구르트',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'drink',
    servingTemperature: 'cold',
    defaultUnitLabel: '병',
    unitOptions: ['병', '팩', '개', 'ml'],
    synonyms: ['마시는 요구르트', '드링킹요거트'],
  },

  energy_drink: {
    id: 'energy_drink',
    label: '에너지드링크',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'drink',
    defaultStorage: 'pantry',
    servingTemperature: 'cold',
    defaultUnitLabel: '캔',
    unitOptions: ['캔', '병', 'ml'],
    synonyms: ['에너지음료', '몬스터에너지', '핫식스', '레드불'],
  },

  gwachae_juice: {
    id: 'gwachae_juice',
    label: '과채주스',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'drink',
    difficulty: 'easy',
    servingTemperature: 'cold',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '병', 'ml', 'L'],
    synonyms: ['과일채소주스'],
  },

  ion_drink: {
    id: 'ion_drink',
    label: '이온음료',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'drink',
    defaultStorage: 'pantry',
    servingTemperature: 'cold',
    defaultUnitLabel: '병',
    unitOptions: ['병', '캔', '팩', 'ml', 'L'],
    synonyms: ['스포츠음료'],
  },

  makgeolli: {
    id: 'makgeolli',
    label: '막걸리',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'drink',
    servingTemperature: 'cold',
    defaultUnitLabel: '병',
    unitOptions: ['병', '팩', 'ml', 'L'],
  },

  protein_drink: {
    id: 'protein_drink',
    label: '프로틴음료',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'drink',
    servingTemperature: 'cold',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '병', 'ml'],
    synonyms: ['단백질음료', '프로틴드링크'],
  },

  soju: {
    id: 'soju',
    label: '소주',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'drink',
    defaultStorage: 'pantry',
    servingTemperature: 'either',
    defaultUnitLabel: '병',
    unitOptions: ['병', '캔', 'ml'],
  },

  soy_milk: {
    id: 'soy_milk',
    label: '두유',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'drink',
    recommendedDurations: {
      homemade: {
        fridge: { value: 1, unit: 'day' },
      },
    },
    difficulty: 'medium',
    servingTemperature: 'either',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '병', 'ml', 'L'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'daedu' }],
      common: [],
      seasoning: [],
      optional: [
        { kind: 'ingredient', id: 'sugar' },
        { kind: 'ingredient', id: 'salt' },
      ],
    },
  },

  sparkling_water: {
    id: 'sparkling_water',
    label: '탄산수',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'drink',
    defaultStorage: 'pantry',
    servingTemperature: 'cold',
    defaultUnitLabel: '병',
    unitOptions: ['병', '캔', 'ml', 'L'],
  },

  strawberry_milk: {
    id: 'strawberry_milk',
    label: '딸기우유',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'drink',
    recommendedDurations: {
      homemade: {
        fridge: { value: 1, unit: 'day' },
      },
    },
    difficulty: 'easy',
    servingTemperature: 'cold',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '병', 'ml'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'strawberry' },
        { kind: 'ingredient', id: 'milk' },
      ],
      common: [],
      seasoning: [],
      optional: [{ kind: 'ingredient', id: 'sugar' }],
    },
    synonyms: ['딸기 우유'],
  },

  bottled_water: {
    id: 'bottled_water',
    label: '생수',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'drink',
    defaultStorage: 'pantry',
    servingTemperature: 'either',
    defaultUnitLabel: '병',
    unitOptions: ['병', '묶음', 'ml', 'L'],
    synonyms: ['먹는샘물'],
  },

  whiskey: {
    id: 'whiskey',
    label: '위스키',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'drink',
    defaultStorage: 'pantry',
    servingTemperature: 'either',
    defaultUnitLabel: '병',
    unitOptions: ['병', 'ml'],
  },

  wine: {
    id: 'wine',
    label: '와인',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'drink',
    servingTemperature: 'either',
    defaultUnitLabel: '병',
    unitOptions: ['병', '캔', 'ml'],
    synonyms: ['포도주'],
  },

  tea_bag: {
    id: 'tea_bag',
    label: '티백',
    isActive: true,
    recommendLevel: 'general',
    kind: 'food',
    category: 'drink',
    defaultStorage: 'pantry',
    recommendedDurations: {
      packaged: {
        pantry: { value: 6, unit: 'month' },
      },
    },
    defaultUnitLabel: '상자',
    unitOptions: ['상자', '봉', '개', '포'],
  },
} as const;

export const preparedFoodObj = {
  ...light_food,
  ...side_dish,
  ...snack_dessert,
  ...bakery,
  ...drink,
} as const;

// 신선식품
const fresh_meal = {
  poke: {
    id: 'poke',
    label: '포케',
    kind: 'food',
    category: 'fresh_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    difficulty: 'easy',
    servingTemperature: 'cold',
  },

  salad: {
    id: 'salad',
    label: '샐러드',
    kind: 'food',
    category: 'fresh_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '개', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'cold',
  },

  wollam_ssam: {
    id: 'wollam_ssam',
    label: '월남쌈',
    kind: 'food',
    category: 'fresh_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'cold',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'rice_paper' }],
      common: [
        { kind: 'ingredient', id: 'cucumber' },
        { kind: 'ingredient', id: 'carrot' },
        { kind: 'ingredient', id: 'yangsangchu' },
      ],
      seasoning: [{ kind: 'ingredient', id: 'peanut_sauce' }],
      optional: [{ kind: 'ingredient', id: 'duck_slice' }],
    },
  },
} as const;

// 밥류
const rice_meal = {
  cooked_rice: {
    id: 'cooked_rice',
    label: '밥',
    kind: 'food',
    category: 'rice_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: {
        fridge: { value: 3, unit: 'day' },
      },
      packaged: {
        pantry: { value: 6, unit: 'month' },
      },
    },
    difficulty: 'easy',
    servingTemperature: 'hot',
    defaultUnitLabel: 'g',
    unitOptions: ['g', '팩', '개'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'baekmi' }],
      common: [],
      seasoning: [],
      optional: [],
    },
    synonyms: ['흰밥', '쌀밥'],
  },

  chamchi_bokkeumbap: {
    id: 'chamchi_bokkeumbap',
    label: '참치볶음밥',
    kind: 'food',
    category: 'rice_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'hot',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    foodStructure: {
      essential: [
        { kind: 'food', id: 'cooked_rice' },
        { kind: 'ingredient', id: 'canned_tuna' },
      ],
      common: [
        { kind: 'ingredient', id: 'egg' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'cooking_oil' },
        { kind: 'ingredient', id: 'soy_sauce' },
      ],
      optional: [{ kind: 'ingredient', id: 'onion' }],
    },
  },

  beoteo_jang_jorim_gyeran_bap: {
    id: 'beoteo_jang_jorim_gyeran_bap',
    label: '버터장조림비빔밥',
    kind: 'food',
    category: 'rice_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '개', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'easy',
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

  bibimbap: {
    id: 'bibimbap',
    label: '비빔밥',
    kind: 'food',
    category: 'rice_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '개', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'warm',
    foodStructure: {
      essential: [{ kind: 'food', id: 'cooked_rice' }],
      common: [
        { kind: 'ingredient', id: 'sigeumchi' },
        { kind: 'ingredient', id: 'gosari' },
        { kind: 'ingredient', id: 'carrot' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'chamgireum' },
      ],
      optional: [
        { kind: 'ingredient', id: 'aehobak' },
        { kind: 'ingredient', id: 'pyogo_beoseot' },
        { kind: 'ingredient', id: 'egg' },
        { kind: 'ingredient', id: 'ground_beef' },
      ],
    },
  },

  chamchi_juk: {
    id: 'chamchi_juk',
    label: '참치죽',
    kind: 'food',
    category: 'rice_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'food', id: 'cooked_rice' },
        { kind: 'ingredient', id: 'canned_tuna' },
      ],
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

  curry_rice: {
    id: 'curry_rice',
    label: '카레라이스',
    kind: 'food',
    category: 'rice_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '개', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
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
      optional: [{ kind: 'ingredient', id: 'pork_loin' }],
    },
  },

  dak_juk: {
    id: 'dak_juk',
    label: '닭죽',
    kind: 'food',
    category: 'rice_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'baekmi' },
        { kind: 'ingredient', id: 'chicken_breast' },
      ],
      common: [
        { kind: 'ingredient', id: 'carrot' },
        { kind: 'ingredient', id: 'aehobak' },
        { kind: 'ingredient', id: 'onion' },
      ],
      seasoning: [{ kind: 'ingredient', id: 'salt' }],
      optional: [
        { kind: 'ingredient', id: 'chamgireum' },
        { kind: 'ingredient', id: 'bokkeun_chamkkae' },
      ],
    },
  },

  ganjang_gyeran_bap: {
    id: 'ganjang_gyeran_bap',
    label: '간장계란밥',
    kind: 'food',
    category: 'rice_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    difficulty: 'easy',
    servingTemperature: 'warm',
    foodStructure: {
      essential: [
        { kind: 'food', id: 'cooked_rice' },
        { kind: 'ingredient', id: 'egg' },
      ],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'chamgireum' },
      ],
      optional: [{ kind: 'ingredient', id: 'butter' }],
    },
    synonyms: ['간장달걀밥'],
  },

  gesal_juk: {
    id: 'gesal_juk',
    label: '게살죽',
    kind: 'food',
    category: 'rice_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'hard',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'kkotge' },
        { kind: 'ingredient', id: 'baekmi' },
      ],
      common: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'carrot' },
      ],
      seasoning: [{ kind: 'ingredient', id: 'salt' }],
      optional: [],
    },
  },

  gimbap: {
    id: 'gimbap',
    label: '김밥',
    kind: 'food',
    category: 'rice_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'either',
    foodStructure: {
      essential: [
        { kind: 'food', id: 'cooked_rice' },
        { kind: 'ingredient', id: 'gim' },
      ],
      common: [
        { kind: 'food', id: 'danmuji' },
        { kind: 'ingredient', id: 'egg' },
        { kind: 'ingredient', id: 'carrot' },
      ],
      seasoning: [{ kind: 'ingredient', id: 'chamgireum' }],
      optional: [
        { kind: 'ingredient', id: 'ham' },
        { kind: 'ingredient', id: 'sigeumchi' },
      ],
    },
  },

  gondre_bap: {
    id: 'gondre_bap',
    label: '곤드레밥',
    kind: 'food',
    category: 'rice_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '개', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'warm',
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'baekmi' },
        { kind: 'ingredient', id: 'gondre' },
      ],
      common: [],
      seasoning: [{ kind: 'ingredient', id: 'soy_sauce' }],
      optional: [{ kind: 'ingredient', id: 'chamgireum' }],
    },
  },

  gyeran_bokkeumbap: {
    id: 'gyeran_bokkeumbap',
    label: '계란볶음밥',
    kind: 'food',
    category: 'rice_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '개', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'food', id: 'cooked_rice' },
        { kind: 'ingredient', id: 'egg' },
      ],
      common: [{ kind: 'ingredient', id: 'daepa' }],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [],
    },
    synonyms: ['달걀볶음밥'],
  },

  hoe_deopbap: {
    id: 'hoe_deopbap',
    label: '회덮밥',
    kind: 'food',
    category: 'rice_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    difficulty: 'medium',
    servingTemperature: 'cold',
    foodStructure: {
      essential: [
        { kind: 'food', id: 'cooked_rice' },
        { kind: 'ingredient', id: 'hoe' },
      ],
      common: [
        { kind: 'ingredient', id: 'sangchu' },
        { kind: 'ingredient', id: 'cucumber' },
      ],
      seasoning: [{ kind: 'ingredient', id: 'chogochujang' }],
      optional: [{ kind: 'ingredient', id: 'onion' }],
    },
  },

  jajang_bap: {
    id: 'jajang_bap',
    label: '짜장밥',
    kind: 'food',
    category: 'rice_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'food', id: 'cooked_rice' },
        { kind: 'ingredient', id: 'jajang_garu' },
      ],
      common: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'pork_shoulder' },
      ],
      seasoning: [{ kind: 'ingredient', id: 'cooking_oil' }],
      optional: [
        { kind: 'ingredient', id: 'potato' },
        { kind: 'ingredient', id: 'aehobak' },
      ],
    },
    synonyms: ['자장밥'],
  },

  japchae_bap: {
    id: 'japchae_bap',
    label: '잡채밥',
    kind: 'food',
    category: 'rice_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
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
    id: 'jeonbok_juk',
    label: '전복죽',
    kind: 'food',
    category: 'rice_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'jeonbok' },
        { kind: 'ingredient', id: 'baekmi' },
      ],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'chamgireum' },
        { kind: 'ingredient', id: 'salt' },
      ],
      optional: [],
    },
  },

  jeyuk_deopbap: {
    id: 'jeyuk_deopbap',
    label: '제육덮밥',
    kind: 'food',
    category: 'rice_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'food', id: 'cooked_rice' },
        { kind: 'ingredient', id: 'pork_shoulder' },
      ],
      common: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'sugar' },
      ],
      optional: [{ kind: 'ingredient', id: 'yangbaechu' }],
    },
  },

  jumeok_bap: {
    id: 'jumeok_bap',
    label: '주먹밥',
    kind: 'food',
    category: 'rice_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'warm',
    foodStructure: {
      essential: [{ kind: 'food', id: 'cooked_rice' }],
      common: [{ kind: 'food', id: 'gimjaban' }],
      seasoning: [{ kind: 'ingredient', id: 'chamgireum' }],
      optional: [],
    },
  },

  karaage_don: {
    id: 'karaage_don',
    label: '가라아게동',
    kind: 'food',
    category: 'rice_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'food', id: 'cooked_rice' },
        { kind: 'ingredient', id: 'chicken_leg' },
      ],
      common: [
        { kind: 'ingredient', id: 'gamja_jeonbun' },
        { kind: 'ingredient', id: 'onion' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'matsul' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [
        { kind: 'ingredient', id: 'daepa' },
        { kind: 'ingredient', id: 'mayonnaise' },
      ],
    },
    synonyms: ['가라아게덮밥'],
  },

  katsu_don: {
    id: 'katsu_don',
    label: '가츠동',
    kind: 'food',
    category: 'rice_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'food', id: 'cooked_rice' },
        { kind: 'food', id: 'donkkaseu' },
      ],
      common: [
        { kind: 'ingredient', id: 'egg' },
        { kind: 'ingredient', id: 'onion' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'sugar' },
        { kind: 'ingredient', id: 'matsul' },
      ],
      optional: [{ kind: 'ingredient', id: 'daepa' }],
    },
    synonyms: ['돈까스덮밥', '돈가스덮밥'],
  },

  kimchi_bokkeumbap: {
    id: 'kimchi_bokkeumbap',
    label: '김치볶음밥',
    kind: 'food',
    category: 'rice_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'food', id: 'cooked_rice' },
        { kind: 'food', id: 'baechu_kimchi' },
      ],
      common: [{ kind: 'ingredient', id: 'daepa' }],
      seasoning: [{ kind: 'ingredient', id: 'cooking_oil' }],
      optional: [
        { kind: 'ingredient', id: 'egg' },
        { kind: 'ingredient', id: 'deulgireum' },
      ],
    },
  },

  mapadubu_deopbap: {
    id: 'mapadubu_deopbap',
    label: '마파두부덮밥',
    kind: 'food',
    category: 'rice_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'food', id: 'cooked_rice' },
        { kind: 'ingredient', id: 'dubu' },
        { kind: 'ingredient', id: 'dubanjang' },
      ],
      common: [
        { kind: 'ingredient', id: 'ground_pork' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'oyster_sauce' },
      ],
      optional: [{ kind: 'ingredient', id: 'onion' }],
    },
  },

  nakji_deopbap: {
    id: 'nakji_deopbap',
    label: '낙지덮밥',
    kind: 'food',
    category: 'rice_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'food', id: 'cooked_rice' },
        { kind: 'ingredient', id: 'nakji' },
      ],
      common: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'soy_sauce' },
      ],
      optional: [{ kind: 'ingredient', id: 'yangbaechu' }],
    },
  },

  nurungji: {
    id: 'nurungji',
    label: '누룽지',
    kind: 'food',
    category: 'light_food',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '봉',
    unitOptions: ['봉', '팩', 'g'],
    difficulty: 'easy',
    servingTemperature: 'either',
    foodStructure: {
      essential: [{ kind: 'food', id: 'cooked_rice' }],
      common: [],
      seasoning: [],
      optional: [],
    },
  },

  ojingeo_deopbap: {
    id: 'ojingeo_deopbap',
    label: '오징어덮밥',
    kind: 'food',
    category: 'rice_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
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
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'soy_sauce' },
      ],
      optional: [{ kind: 'ingredient', id: 'carrot' }],
    },
  },

  omu_rice: {
    id: 'omu_rice',
    label: '오므라이스',
    kind: 'food',
    category: 'rice_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'food', id: 'cooked_rice' },
        { kind: 'ingredient', id: 'egg' },
      ],
      common: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'carrot' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'ketchup' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [],
    },
  },

  pat_juk: {
    id: 'pat_juk',
    label: '팥죽',
    kind: 'food',
    category: 'rice_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'hard',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'pat' }],
      common: [{ kind: 'ingredient', id: 'chapssal' }],
      seasoning: [{ kind: 'ingredient', id: 'salt' }],
      optional: [{ kind: 'ingredient', id: 'chapssal_garu' }],
    },
  },

  saeu_bokkeumbap: {
    id: 'saeu_bokkeumbap',
    label: '새우볶음밥',
    kind: 'food',
    category: 'rice_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'food', id: 'cooked_rice' },
        { kind: 'ingredient', id: 'saeu' },
      ],
      common: [
        { kind: 'ingredient', id: 'egg' },
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

  samgye_juk: {
    id: 'samgye_juk',
    label: '삼계죽',
    kind: 'food',
    category: 'rice_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'chicken_whole' },
        { kind: 'ingredient', id: 'chapssal' },
      ],
      common: [{ kind: 'ingredient', id: 'garlic' }],
      seasoning: [{ kind: 'ingredient', id: 'salt' }],
      optional: [],
    },
  },

  sogogi_yachae_juk: {
    id: 'sogogi_yachae_juk',
    label: '소고기야채죽',
    kind: 'food',
    category: 'rice_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'baekmi' },
        { kind: 'ingredient', id: 'ground_beef' },
      ],
      common: [
        { kind: 'ingredient', id: 'carrot' },
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'aehobak' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'chamgireum' },
      ],
      optional: [],
    },
  },

  ten_don: {
    id: 'ten_don',
    label: '텐동',
    kind: 'food',
    category: 'rice_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'food', id: 'cooked_rice' },
        { kind: 'food', id: 'saeu_twigim' },
      ],
      common: [{ kind: 'food', id: 'danhobak_twigim' }],
      seasoning: [
        { kind: 'ingredient', id: 'tsuyu' },
        { kind: 'ingredient', id: 'sugar' },
      ],
      optional: [{ kind: 'food', id: 'ojingeo_twigim' }],
    },
  },

  yachae_juk: {
    id: 'yachae_juk',
    label: '야채죽',
    kind: 'food',
    category: 'rice_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'baekmi' }],
      common: [
        { kind: 'ingredient', id: 'carrot' },
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'aehobak' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'chamgireum' },
      ],
      optional: [],
    },
  },

  yeolmu_bibimbap: {
    id: 'yeolmu_bibimbap',
    label: '열무비빔밥',
    kind: 'food',
    category: 'rice_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'warm',
    foodStructure: {
      essential: [
        { kind: 'food', id: 'cooked_rice' },
        { kind: 'food', id: 'yeolmu_kimchi' },
      ],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'chamgireum' },
      ],
      optional: [{ kind: 'ingredient', id: 'egg' }],
    },
  },

  yubucho_bap: {
    id: 'yubucho_bap',
    label: '유부초밥',
    kind: 'food',
    category: 'rice_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'warm',
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'yubu' },
        { kind: 'food', id: 'cooked_rice' },
      ],
      common: [],
      seasoning: [],
      optional: [],
    },
  },

  yukhoe_bibimbap: {
    id: 'yukhoe_bibimbap',
    label: '육회비빔밥',
    kind: 'food',
    category: 'rice_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    difficulty: 'medium',
    servingTemperature: 'cold',
    synonyms: ['육회덮밥'],
  },

  yeoneo_deopbap: {
    id: 'yeoneo_deopbap',
    label: '연어덮밥',
    kind: 'food',
    category: 'rice_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    difficulty: 'medium',
    servingTemperature: 'cold',
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
      optional: [{ kind: 'ingredient', id: 'onion' }],
    },
  },
} as const;

// 메인음식
const main_dish_meal = {
  kkwobaro: {
    id: 'kkwobaro',
    label: '꿔바로우',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'hard',
    servingTemperature: 'hot',
    defaultUnitLabel: '조각',
    unitOptions: ['조각', '팩', 'g'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'pork_loin' },
        { kind: 'ingredient', id: 'gamja_jeonbun' },
      ],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'cooking_oil' },
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'sugar' },
        { kind: 'ingredient', id: 'vinegar' },
        { kind: 'ingredient', id: 'soy_sauce' },
      ],
      optional: [{ kind: 'ingredient', id: 'carrot' }],
    },
  },

  tangsuyuk: {
    id: 'tangsuyuk',
    label: '탕수육',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'hard',
    servingTemperature: 'hot',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '조각', 'g'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'pork_loin' },
        { kind: 'ingredient', id: 'jeonbun_garu' },
      ],
      common: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'carrot' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'cooking_oil' },
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'sugar' },
        { kind: 'ingredient', id: 'vinegar' },
        { kind: 'ingredient', id: 'soy_sauce' },
      ],
      optional: [{ kind: 'ingredient', id: 'cucumber' }],
    },
  },

  yangnyeom_chicken: {
    id: 'yangnyeom_chicken',
    label: '양념치킨',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'hard',
    servingTemperature: 'hot',
    defaultUnitLabel: '마리',
    unitOptions: ['마리', '조각', '팩', 'g'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'chicken_whole' },
        { kind: 'ingredient', id: 'twigim_garu' },
      ],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'cooking_oil' },
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'ketchup' },
        { kind: 'ingredient', id: 'oligodang' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [{ kind: 'ingredient', id: 'bokkeun_chamkkae' }],
    },
  },

  fried_chicken: {
    id: 'fried_chicken',
    label: '후라이드치킨',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'hard',
    servingTemperature: 'hot',
    defaultUnitLabel: '마리',
    unitOptions: ['마리', '조각', '팩', 'g'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'chicken_whole' },
        { kind: 'ingredient', id: 'twigim_garu' },
      ],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'cooking_oil' },
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'black_pepper' },
      ],
      optional: [],
    },
    synonyms: ['프라이드치킨', '후라이드'],
  },

  donkkaseu: {
    id: 'donkkaseu',
    label: '돈까스',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'hard',
    servingTemperature: 'hot',
    defaultUnitLabel: '장',
    unitOptions: ['장', '개', '팩', 'g'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'pork_loin' },
        { kind: 'ingredient', id: 'milgaru' },
        { kind: 'ingredient', id: 'egg' },
        { kind: 'ingredient', id: 'ppang_garu' },
      ],
      common: [],
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
    id: 'ssuk_jeon',
    label: '쑥전',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'hot',
    defaultUnitLabel: '장',
    unitOptions: ['장', '개', 'g'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'ssug' },
        { kind: 'ingredient', id: 'buchim_garu' },
      ],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'cooking_oil' },
        { kind: 'ingredient', id: 'salt' },
      ],
      optional: [{ kind: 'ingredient', id: 'egg' }],
    },
  },

  sogalbi_gui: {
    id: 'sogalbi_gui',
    label: '소갈비구이',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    defaultUnitLabel: '조각',
    unitOptions: ['조각', '팩', 'g'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'beef_short_rib' }],
      common: [
        { kind: 'ingredient', id: 'bae' },
        { kind: 'ingredient', id: 'onion' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'sugar' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'chamgireum' },
      ],
      optional: [],
    },
  },

  sogalbi_jjim: {
    id: 'sogalbi_jjim',
    label: '소갈비찜',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'hard',
    servingTemperature: 'hot',
    defaultUnitLabel: '조각',
    unitOptions: ['조각', '팩', 'g'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'beef_short_rib' }],
      common: [
        { kind: 'ingredient', id: 'mu' },
        { kind: 'ingredient', id: 'carrot' },
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
  },

  nokdu_jeon: {
    id: 'nokdu_jeon',
    label: '녹두전',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'hard',
    servingTemperature: 'hot',
    defaultUnitLabel: '장',
    unitOptions: ['장', '개', 'g'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'nokdu' }],
      common: [
        { kind: 'ingredient', id: 'sukjunamul' },
        { kind: 'ingredient', id: 'ground_pork' },
        { kind: 'food', id: 'baechu_kimchi' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'cooking_oil' },
        { kind: 'ingredient', id: 'salt' },
      ],
      optional: [{ kind: 'ingredient', id: 'daepa' }],
    },
  },

  ojingeo_bokkeum: {
    id: 'ojingeo_bokkeum',
    label: '오징어볶음',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '개', 'g'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'ojingeo' }],
      common: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'yangbaechu' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'cooking_oil' },
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'sugar' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [{ kind: 'ingredient', id: 'cheongyang_gochu' }],
    },
  },

  rabokki: {
    id: 'rabokki',
    label: '라볶이',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'hot',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'ramyeon_sari' },
        { kind: 'ingredient', id: 'tteokbokki_tteok' },
      ],
      common: [
        { kind: 'ingredient', id: 'eomuk' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'sugar' },
        { kind: 'ingredient', id: 'soy_sauce' },
      ],
      optional: [{ kind: 'ingredient', id: 'egg' }],
    },
  },

  tteokbokki: {
    id: 'tteokbokki',
    label: '떡볶이',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'hot',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'tteokbokki_tteok' }],
      common: [
        { kind: 'ingredient', id: 'eomuk' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'sugar' },
        { kind: 'ingredient', id: 'soy_sauce' },
      ],
      optional: [{ kind: 'ingredient', id: 'egg' }],
    },
  },

  dubu_kimchi: {
    id: 'dubu_kimchi',
    label: '두부김치',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'hot',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'dubu' },
        { kind: 'food', id: 'baechu_kimchi' },
      ],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'cooking_oil' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'sugar' },
      ],
      optional: [{ kind: 'ingredient', id: 'pork_shoulder' }],
    },
  },

  kimchi_jeon: {
    id: 'kimchi_jeon',
    label: '김치전',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'hot',
    defaultUnitLabel: '장',
    unitOptions: ['장', '개', 'g'],
    foodStructure: {
      essential: [
        { kind: 'food', id: 'baechu_kimchi' },
        { kind: 'ingredient', id: 'buchim_garu' },
      ],
      common: [],
      seasoning: [{ kind: 'ingredient', id: 'cooking_oil' }],
      optional: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'canned_tuna' },
      ],
    },
  },

  saengseon_kkaseu: {
    id: 'saengseon_kkaseu',
    label: '생선까스',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
  },

  saengseon_gui: {
    id: 'saengseon_gui',
    label: '생선구이',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'hot',
    defaultUnitLabel: '마리',
    unitOptions: ['마리', '조각', 'g'],
  },

  tteokgalbi: {
    id: 'tteokgalbi',
    label: '떡갈비',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'ground_beef' }],
      common: [
        { kind: 'ingredient', id: 'ground_pork' },
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'sugar' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'chamgireum' },
      ],
      optional: [{ kind: 'ingredient', id: 'ppang_garu' }],
    },
  },

  dakgangjeong: {
    id: 'dakgangjeong',
    label: '닭강정',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'hard',
    servingTemperature: 'either',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'chicken_tenderloin' },
        { kind: 'ingredient', id: 'jeonbun_garu' },
      ],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'cooking_oil' },
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'ketchup' },
        { kind: 'ingredient', id: 'oligodang' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [{ kind: 'ingredient', id: 'bokkeun_chamkkae' }],
    },
  },

  kkanpunggi: {
    id: 'kkanpunggi',
    label: '깐풍기',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'hard',
    servingTemperature: 'hot',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'chicken_leg' },
        { kind: 'ingredient', id: 'jeonbun_garu' },
      ],
      common: [
        { kind: 'ingredient', id: 'daepa' },
        { kind: 'ingredient', id: 'onion' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'cooking_oil' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'vinegar' },
        { kind: 'ingredient', id: 'sugar' },
      ],
      optional: [{ kind: 'ingredient', id: 'hong_gochu' }],
    },
  },

  ori_jumulreok: {
    id: 'ori_jumulreok',
    label: '오리주물럭',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', 'g'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'duck_slice' }],
      common: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'sugar' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [{ kind: 'ingredient', id: 'buchu' }],
    },
  },

  ori_roseu: {
    id: 'ori_roseu',
    label: '오리로스',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'hot',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', 'g'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'duck_slice' }],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'black_pepper' },
      ],
      optional: [
        { kind: 'ingredient', id: 'garlic' },
        { kind: 'ingredient', id: 'buchu' },
      ],
    },
  },

  pa_jeon: {
    id: 'pa_jeon',
    label: '파전',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'hot',
    defaultUnitLabel: '장',
    unitOptions: ['장', '개', 'g'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'jjokpa' },
        { kind: 'ingredient', id: 'buchim_garu' },
      ],
      common: [],
      seasoning: [{ kind: 'ingredient', id: 'cooking_oil' }],
      optional: [{ kind: 'ingredient', id: 'egg' }],
    },
  },

  la_galbi_gui: {
    id: 'la_galbi_gui',
    label: 'LA갈비구이',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    defaultUnitLabel: '조각',
    unitOptions: ['조각', '팩', 'g'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'beef_short_rib' }],
      common: [
        { kind: 'ingredient', id: 'bae' },
        { kind: 'ingredient', id: 'onion' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'sugar' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'chamgireum' },
        { kind: 'ingredient', id: 'black_pepper' },
      ],
      optional: [{ kind: 'ingredient', id: 'daepa' }],
    },
  },

  makchang_gui: {
    id: 'makchang_gui',
    label: '막창구이',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'hard',
    servingTemperature: 'hot',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', 'g'],
  },

  haemul_jjim: {
    id: 'haemul_jjim',
    label: '해물찜',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'hard',
    servingTemperature: 'hot',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', 'g'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'ojingeo' },
        { kind: 'ingredient', id: 'saeu' },
      ],
      common: [
        { kind: 'ingredient', id: 'kongnamul' },
        { kind: 'ingredient', id: 'minari' },
        { kind: 'ingredient', id: 'bajirak' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'sugar' },
        { kind: 'ingredient', id: 'jeonbun_garu' },
      ],
      optional: [],
    },
  },

  haemulpa_jeon: {
    id: 'haemulpa_jeon',
    label: '해물파전',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    defaultUnitLabel: '장',
    unitOptions: ['장', '개', 'g'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'jjokpa' },
        { kind: 'ingredient', id: 'buchim_garu' },
        { kind: 'ingredient', id: 'ojingeo' },
      ],
      common: [
        { kind: 'ingredient', id: 'saeu' },
        { kind: 'ingredient', id: 'egg' },
      ],
      seasoning: [{ kind: 'ingredient', id: 'cooking_oil' }],
      optional: [{ kind: 'ingredient', id: 'honghap' }],
    },
  },

  hamburger_steak: {
    id: 'hamburger_steak',
    label: '함박스테이크',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'ground_beef' }],
      common: [
        { kind: 'ingredient', id: 'ground_pork' },
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'ppang_garu' },
        { kind: 'ingredient', id: 'egg' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'black_pepper' },
      ],
      optional: [],
    },
  },

  hunje_ori: {
    id: 'hunje_ori',
    label: '훈제오리',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'hard',
    servingTemperature: 'either',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', 'g'],
    synonyms: ['오리훈제'],
  },

  kodari_jorim: {
    id: 'kodari_jorim',
    label: '코다리조림',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    defaultUnitLabel: '마리',
    unitOptions: ['마리', '조각', '팩', 'g'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'kodari' }],
      common: [
        { kind: 'ingredient', id: 'mu' },
        { kind: 'ingredient', id: 'daepa' },
        { kind: 'ingredient', id: 'onion' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'sugar' },
      ],
      optional: [{ kind: 'ingredient', id: 'cheongyang_gochu' }],
    },
    synonyms: ['코다리찜'],
  },

  nakji_bokkeum: {
    id: 'nakji_bokkeum',
    label: '낙지볶음',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', 'g'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'nakji' }],
      common: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'cooking_oil' },
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'sugar' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [{ kind: 'ingredient', id: 'cheongyang_gochu' }],
    },
  },

  jukkumi_bokkeum: {
    id: 'jukkumi_bokkeum',
    label: '주꾸미볶음',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', 'g'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'jukkumi' }],
      common: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'cooking_oil' },
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'sugar' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [{ kind: 'ingredient', id: 'yangbaechu' }],
    },
    synonyms: ['쭈꾸미볶음'],
  },

  jogae_jjim: {
    id: 'jogae_jjim',
    label: '조개찜',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'hot',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', 'kg', 'g'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'baekhap' }],
      common: [{ kind: 'ingredient', id: 'bajirak' }],
      seasoning: [],
      optional: [{ kind: 'ingredient', id: 'honghap' }],
    },
  },

  jokbal: {
    id: 'jokbal',
    label: '족발',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'hard',
    servingTemperature: 'either',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
  },

  jeyuk_bokkeum: {
    id: 'jeyuk_bokkeum',
    label: '제육볶음',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', 'g'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'pork_shoulder' }],
      common: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'cooking_oil' },
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'sugar' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [{ kind: 'ingredient', id: 'yangbaechu' }],
    },
  },

  hwangtae_gui: {
    id: 'hwangtae_gui',
    label: '황태양념구이',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    defaultUnitLabel: '마리',
    unitOptions: ['마리', '조각', 'g'],
    synonyms: ['황태고추장양념구이', '고추장황태구이'],
  },

  jangeo_gui: {
    id: 'jangeo_gui',
    label: '장어구이',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    defaultUnitLabel: '마리',
    unitOptions: ['마리', '조각', 'g'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'jangeo' }],
      common: [],
      seasoning: [{ kind: 'ingredient', id: 'salt' }],
      optional: [],
    },
  },

  golbaengi_muchim: {
    id: 'golbaengi_muchim',
    label: '골뱅이무침',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultStorage: 'fridge',
    recommendedDurations: {
      homemade: { fridge: { value: 2, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'cold',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', 'g'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'canned_golbaengi' }],
      common: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'cucumber' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'vinegar' },
        { kind: 'ingredient', id: 'sugar' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [{ kind: 'ingredient', id: 'somyeon' }],
    },
  },

  gopchang_bokkeum: {
    id: 'gopchang_bokkeum',
    label: '곱창볶음',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'hard',
    servingTemperature: 'hot',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', 'g'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'gopchang' }],
      common: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'yangbaechu' },
        { kind: 'ingredient', id: 'kkaennip' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'oligodang' },
      ],
      optional: [{ kind: 'ingredient', id: 'buchu' }],
    },
  },

  gopchang_gui: {
    id: 'gopchang_gui',
    label: '곱창구이',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'hard',
    servingTemperature: 'hot',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', 'g'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'gopchang' }],
      common: [],
      seasoning: [{ kind: 'ingredient', id: 'salt' }],
      optional: [
        { kind: 'ingredient', id: 'garlic' },
        { kind: 'ingredient', id: 'onion' },
      ],
    },
  },

  godeungeo_jorim: {
    id: 'godeungeo_jorim',
    label: '고등어조림',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    defaultUnitLabel: '마리',
    unitOptions: ['마리', '조각', '팩', 'g'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'godeungeo' }],
      common: [
        { kind: 'ingredient', id: 'mu' },
        { kind: 'ingredient', id: 'daepa' },
        { kind: 'ingredient', id: 'onion' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'sugar' },
      ],
      optional: [{ kind: 'ingredient', id: 'cheongyang_gochu' }],
    },
  },

  galchi_jorim: {
    id: 'galchi_jorim',
    label: '갈치조림',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    defaultUnitLabel: '조각',
    unitOptions: ['조각', '마리', '팩', 'g'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'galchi' }],
      common: [
        { kind: 'ingredient', id: 'mu' },
        { kind: 'ingredient', id: 'daepa' },
        { kind: 'ingredient', id: 'onion' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'sugar' },
      ],
      optional: [{ kind: 'ingredient', id: 'cheongyang_gochu' }],
    },
  },

  gungmul_dakbal: {
    id: 'gungmul_dakbal',
    label: '국물닭발',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'hard',
    servingTemperature: 'hot',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '개', 'g'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'dakbal' }],
      common: [{ kind: 'ingredient', id: 'daepa' }],
      seasoning: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'sugar' },
        { kind: 'ingredient', id: 'black_pepper' },
      ],
      optional: [{ kind: 'ingredient', id: 'cheongyang_gochu' }],
    },
  },

  dakdari_steak: {
    id: 'dakdari_steak',
    label: '닭다리 스테이크',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    defaultUnitLabel: '개',
    unitOptions: ['개', '조각', '팩', 'g'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'chicken_leg' }],
      common: [{ kind: 'ingredient', id: 'garlic' }],
      seasoning: [
        { kind: 'ingredient', id: 'olive_oil' },
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'sugar' },
        { kind: 'ingredient', id: 'black_pepper' },
      ],
      optional: [{ kind: 'ingredient', id: 'butter' }],
    },
  },

  dakgalbi: {
    id: 'dakgalbi',
    label: '닭갈비',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', 'g'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'chicken_leg' }],
      common: [
        { kind: 'ingredient', id: 'yangbaechu' },
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'sugar' },
      ],
      optional: [
        { kind: 'ingredient', id: 'sweet_potato' },
        { kind: 'ingredient', id: 'tteokbokki_tteok' },
      ],
    },
  },

  buchu_jeon: {
    id: 'buchu_jeon',
    label: '부추전',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'hot',
    defaultUnitLabel: '장',
    unitOptions: ['장', '개', 'g'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'buchu' },
        { kind: 'ingredient', id: 'buchim_garu' },
      ],
      common: [],
      seasoning: [{ kind: 'ingredient', id: 'cooking_oil' }],
      optional: [{ kind: 'ingredient', id: 'egg' }],
    },
    synonyms: ['부추부침개'],
  },

  bulgogi: {
    id: 'bulgogi',
    label: '불고기',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', 'g'],
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
    id: 'agu_jjim',
    label: '아구찜',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'hard',
    servingTemperature: 'hot',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', 'g'],
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
        { kind: 'ingredient', id: 'jeonbun_garu' },
      ],
      optional: [{ kind: 'ingredient', id: 'gochujang' }],
    },
    synonyms: ['아귀찜'],
  },

  bossam: {
    id: 'bossam',
    label: '보쌈',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'warm',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '조각', 'g'],
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'pork_belly' }],
      common: [
        { kind: 'ingredient', id: 'garlic' },
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'doenjang' },
        { kind: 'ingredient', id: 'black_pepper' },
      ],
      optional: [{ kind: 'ingredient', id: 'ginger' }],
    },
  },

  baechu_jeon: {
    id: 'baechu_jeon',
    label: '배추전',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'hot',
    defaultUnitLabel: '장',
    unitOptions: ['장', '개', 'g'],
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'baechu' },
        { kind: 'ingredient', id: 'buchim_garu' },
      ],
      common: [],
      seasoning: [{ kind: 'ingredient', id: 'cooking_oil' }],
      optional: [],
    },
    synonyms: ['배추부침개'],
  },

  dakbal_yangnyeom_bokkeum: {
    id: 'dakbal_yangnyeom_bokkeum',
    label: '닭발양념볶음',
    kind: 'food',
    category: 'main_dish_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '개', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'dakbal' }],
      common: [{ kind: 'ingredient', id: 'daepa' }],
      seasoning: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'oligodang' },
      ],
      optional: [],
    },
  },
} as const;

// 국/찌개
const soup_meal = {
  aehobak_jjigae: {
    id: 'aehobak_jjigae',
    label: '애호박찌개',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'aehobak' }],
      common: [
        { kind: 'ingredient', id: 'pork_shoulder' },
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'saeujeot' },
      ],
      optional: [
        { kind: 'ingredient', id: 'cheongyang_gochu' },
        { kind: 'ingredient', id: 'dubu' },
        { kind: 'ingredient', id: 'potato' },
      ],
    },
  },

  al_tang: {
    id: 'al_tang',
    label: '알탕',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],
    recommendedDurations: {
      homemade: { fridge: { value: 2, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    // 생선알 ingredient ID가 확인되면 foodStructure를 추가해야 함.
    // goni(곤이)는 생선알을 대신하는 essential이 될 수 없음.
  },

  bajirak_guk: {
    id: 'bajirak_guk',
    label: '바지락국',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'bajirak' }],
      common: [
        { kind: 'ingredient', id: 'mu' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'salt' },
      ],
      optional: [{ kind: 'ingredient', id: 'cheongyang_gochu' }],
    },
  },

  biji_jjigae: {
    id: 'biji_jjigae',
    label: '비지찌개',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'kongbiji' }],
      common: [
        { kind: 'food', id: 'baechu_kimchi' },
        { kind: 'ingredient', id: 'pork_belly' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'salt' },
      ],
      optional: [{ kind: 'ingredient', id: 'cheongyang_gochu' }],
    },
    synonyms: ['콩비지찌개'],
  },

  broccoli_soup: {
    id: 'broccoli_soup',
    label: '브로콜리스프',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'broccoli' }],
      common: [
        { kind: 'ingredient', id: 'milk' },
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'butter' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'black_pepper' },
      ],
      optional: [{ kind: 'ingredient', id: 'potato' }],
    },
  },

  budae_jjigae: {
    id: 'budae_jjigae',
    label: '부대찌개',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'sausage' },
        { kind: 'ingredient', id: 'ham' },
      ],
      common: [
        { kind: 'food', id: 'baechu_kimchi' },
        { kind: 'ingredient', id: 'dubu' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'soy_sauce' },
      ],
      optional: [
        { kind: 'ingredient', id: 'ramyeon_sari' },
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'onion' },
      ],
    },
  },

  bugeo_guk: {
    id: 'bugeo_guk',
    label: '북엇국',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'easy',
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
      ],
      optional: [{ kind: 'ingredient', id: 'yuksu_coin' }],
    },
    synonyms: ['황태국'],
  },

  bulgogi_jeongol: {
    id: 'bulgogi_jeongol',
    label: '불고기전골',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'food', id: 'bulgogi' }],
      common: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'neutari_beoseot' },
        { kind: 'ingredient', id: 'paengi_beoseot' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [{ kind: 'ingredient', id: 'guk_ganjang' }],
      optional: [
        { kind: 'ingredient', id: 'dangmyeon' },
        { kind: 'ingredient', id: 'yuksu_coin' },
      ],
    },
  },

  chamchi_jjigae: {
    id: 'chamchi_jjigae',
    label: '참치찌개',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'canned_tuna' }],
      common: [
        { kind: 'ingredient', id: 'dubu' },
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'soy_sauce' },
      ],
      optional: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'cheongyang_gochu' },
      ],
    },
  },

  cheonggukjang_jjigae: {
    id: 'cheonggukjang_jjigae',
    label: '청국장찌개',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'cheonggukjang' }],
      common: [
        { kind: 'ingredient', id: 'dubu' },
        { kind: 'ingredient', id: 'daepa' },
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'aehobak' },
      ],
      seasoning: [{ kind: 'ingredient', id: 'minced_garlic' }],
      optional: [
        { kind: 'food', id: 'baechu_kimchi' },
        { kind: 'ingredient', id: 'doenjang' },
        { kind: 'ingredient', id: 'yuksu_coin' },
      ],
    },
  },

  corn_soup: {
    id: 'corn_soup',
    label: '옥수수스프',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
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
      optional: [
        { kind: 'ingredient', id: 'milgaru' },
        { kind: 'ingredient', id: 'black_pepper' },
      ],
    },
    synonyms: ['콘스프'],
  },

  cream_soup: {
    id: 'cream_soup',
    label: '크림스프',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'milk' },
        { kind: 'ingredient', id: 'butter' },
        { kind: 'ingredient', id: 'milgaru' },
      ],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'black_pepper' },
      ],
      optional: [{ kind: 'ingredient', id: 'onion' }],
    },
  },

  dak_hanmari: {
    id: 'dak_hanmari',
    label: '닭한마리',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'chicken_whole' }],
      common: [
        { kind: 'ingredient', id: 'daepa' },
        { kind: 'ingredient', id: 'garlic' },
        { kind: 'ingredient', id: 'potato' },
      ],
      seasoning: [{ kind: 'ingredient', id: 'salt' }],
      optional: [{ kind: 'ingredient', id: 'kal_guksu_myeon' }],
    },
  },

  eomuk_guk: {
    id: 'eomuk_guk',
    label: '어묵국',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],

    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },

    difficulty: 'easy',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'eomuk' }],
      common: [
        { kind: 'ingredient', id: 'mu' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [{ kind: 'ingredient', id: 'guk_ganjang' }],
      optional: [{ kind: 'ingredient', id: 'yuksu_coin' }],
    },
    synonyms: ['오뎅국'],
  },

  eomuk_tang: {
    id: 'eomuk_tang',
    label: '어묵탕',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],

    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },

    difficulty: 'easy',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'eomuk' }],
      common: [
        { kind: 'ingredient', id: 'mu' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [{ kind: 'ingredient', id: 'guk_ganjang' }],
      optional: [
        { kind: 'ingredient', id: 'ssukgat' },
        { kind: 'ingredient', id: 'pyogo_beoseot' },
        { kind: 'ingredient', id: 'yuksu_coin' },
      ],
    },
    synonyms: ['오뎅탕'],
  },

  galbi_tang: {
    id: 'galbi_tang',
    label: '갈비탕',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],

    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },

    difficulty: 'hard',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'beef_short_rib' }],
      common: [
        { kind: 'ingredient', id: 'mu' },
        { kind: 'ingredient', id: 'daepa' },
        { kind: 'ingredient', id: 'garlic' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'black_pepper' },
      ],
      optional: [],
    },
  },

  gamja_guk: {
    id: 'gamja_guk',
    label: '맑은감자국',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],

    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },

    difficulty: 'easy',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'potato' }],
      common: [
        { kind: 'ingredient', id: 'daepa' },
        { kind: 'ingredient', id: 'onion' },
      ],
      seasoning: [{ kind: 'ingredient', id: 'guk_ganjang' }],
      optional: [{ kind: 'ingredient', id: 'yuksu_coin' }],
    },
    synonyms: ['감자국'],
  },

  gamja_soup: {
    id: 'gamja_soup',
    label: '감자스프',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],

    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },

    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'potato' }],
      common: [
        { kind: 'ingredient', id: 'milk' },
        { kind: 'ingredient', id: 'butter' },
        { kind: 'ingredient', id: 'onion' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'black_pepper' },
      ],
      optional: [{ kind: 'ingredient', id: 'fresh_cream' }],
    },
  },

  gamja_tang: {
    id: 'gamja_tang',
    label: '감자탕',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],

    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },

    difficulty: 'hard',
    servingTemperature: 'hot',
    // 돼지등뼈 ingredient ID가 없어 foodStructure 보류.
  },

  dakbokkeum_tang: {
    id: 'dakbokkeum_tang',
    label: '닭볶음탕',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'g'],

    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },

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
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'sugar' },
      ],
      optional: [{ kind: 'ingredient', id: 'gochujang' }],
    },
    synonyms: ['닭도리탕'],
  },

  dakgaejang: {
    id: 'dakgaejang',
    label: '닭개장',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],

    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },

    difficulty: 'hard',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'chicken_breast' }],
      common: [
        { kind: 'ingredient', id: 'sukjunamul' },
        { kind: 'ingredient', id: 'gosari' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'guk_ganjang' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [{ kind: 'ingredient', id: 'black_pepper' }],
    },
  },

  dakgom_tang: {
    id: 'dakgom_tang',
    label: '닭곰탕',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],

    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },

    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'chicken_whole' }],
      common: [
        { kind: 'ingredient', id: 'daepa' },
        { kind: 'ingredient', id: 'garlic' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'black_pepper' },
      ],
      optional: [],
    },
  },

  danhobak_soup: {
    id: 'danhobak_soup',
    label: '단호박스프',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],

    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },

    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'danhobak' }],
      common: [
        { kind: 'ingredient', id: 'milk' },
        { kind: 'ingredient', id: 'butter' },
      ],
      seasoning: [{ kind: 'ingredient', id: 'salt' }],
      optional: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'fresh_cream' },
      ],
    },
  },

  doenjang_guk: {
    id: 'doenjang_guk',
    label: '된장국',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],

    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },

    difficulty: 'easy',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'doenjang' }],
      common: [{ kind: 'ingredient', id: 'daepa' }],
      seasoning: [{ kind: 'ingredient', id: 'minced_garlic' }],
      optional: [
        { kind: 'ingredient', id: 'sigeumchi' },
        { kind: 'ingredient', id: 'dubu' },
        { kind: 'ingredient', id: 'mu' },
        { kind: 'ingredient', id: 'yuksu_coin' },
      ],
    },
  },

  doenjang_jjigae: {
    id: 'doenjang_jjigae',
    label: '된장찌개',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],

    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },

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
      seasoning: [{ kind: 'ingredient', id: 'minced_garlic' }],
      optional: [
        { kind: 'ingredient', id: 'cheongyang_gochu' },
        { kind: 'ingredient', id: 'yuksu_coin' },
      ],
    },
  },

  dogani_tang: {
    id: 'dogani_tang',
    label: '도가니곰탕',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],

    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },

    difficulty: 'hard',
    servingTemperature: 'hot',
    // 제공된 ingredient 목록에 도가니 ID가 없어 foodStructure 보류.
  },

  dongtae_jjigae: {
    id: 'dongtae_jjigae',
    label: '동태찌개',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],

    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },

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
        { kind: 'ingredient', id: 'guk_ganjang' },
      ],
      optional: [
        { kind: 'ingredient', id: 'cheongyang_gochu' },
        { kind: 'ingredient', id: 'ssukgat' },
      ],
    },
  },

  gochujang_jjigae: {
    id: 'gochujang_jjigae',
    label: '고추장찌개',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],

    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'gochujang' }],
      common: [
        { kind: 'ingredient', id: 'pork_shoulder' },
        { kind: 'ingredient', id: 'potato' },
        { kind: 'ingredient', id: 'aehobak' },
        { kind: 'ingredient', id: 'onion' },
      ],
      seasoning: [{ kind: 'ingredient', id: 'minced_garlic' }],
      optional: [
        { kind: 'ingredient', id: 'dubu' },
        { kind: 'ingredient', id: 'cheongyang_gochu' },
        { kind: 'ingredient', id: 'yuksu_coin' },
      ],
    },
  },

  goguma_soup: {
    id: 'goguma_soup',
    label: '고구마스프',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],

    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'sweet_potato' }],
      common: [
        { kind: 'ingredient', id: 'milk' },
        { kind: 'ingredient', id: 'butter' },
      ],
      seasoning: [{ kind: 'ingredient', id: 'salt' }],
      optional: [
        { kind: 'ingredient', id: 'fresh_cream' },
        { kind: 'ingredient', id: 'onion' },
      ],
    },
  },

  gom_tang: {
    id: 'gom_tang',
    label: '곰탕',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],

    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'hard',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'beef_brisket' }],
      common: [{ kind: 'ingredient', id: 'daepa' }],
      seasoning: [{ kind: 'ingredient', id: 'salt' }],
      optional: [
        { kind: 'ingredient', id: 'sagol_yuksu' },
        { kind: 'ingredient', id: 'somyeon' },
      ],
    },
  },

  gyeran_guk: {
    id: 'gyeran_guk',
    label: '계란국',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],

    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'egg' }],
      common: [{ kind: 'ingredient', id: 'daepa' }],
      seasoning: [{ kind: 'ingredient', id: 'guk_ganjang' }],
      optional: [{ kind: 'ingredient', id: 'yuksu_coin' }],
    },
    synonyms: ['달걀국'],
  },

  haemul_juk: {
    id: 'haemul_juk',
    label: '해물죽',
    kind: 'food',
    category: 'rice_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'g'],

    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'baekmi' },
        { kind: 'ingredient', id: 'saeu' },
      ],
      common: [
        { kind: 'ingredient', id: 'honghap' },
        { kind: 'ingredient', id: 'ojingeo' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'chamgireum' },
      ],
      optional: [],
    },
  },

  heukimja_juk: {
    id: 'heukimja_juk',
    label: '흑임자죽',
    kind: 'food',
    category: 'rice_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'g'],

    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'heukimja' },
        { kind: 'ingredient', id: 'chapssal_garu' },
      ],
      common: [],
      seasoning: [{ kind: 'ingredient', id: 'salt' }],
      optional: [{ kind: 'ingredient', id: 'sugar' }],
    },
  },

  hobak_juk: {
    id: 'hobak_juk',
    label: '호박죽',
    kind: 'food',
    category: 'rice_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'g'],

    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'hobak' },
        { kind: 'ingredient', id: 'chapssal_garu' },
      ],
      common: [],
      seasoning: [{ kind: 'ingredient', id: 'salt' }],
      optional: [{ kind: 'ingredient', id: 'sugar' }],
    },
  },

  honghap_tang: {
    id: 'honghap_tang',
    label: '홍합탕',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],

    recommendedDurations: {
      homemade: { fridge: { value: 2, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'honghap' }],
      common: [{ kind: 'ingredient', id: 'daepa' }],
      seasoning: [{ kind: 'ingredient', id: 'salt' }],
      optional: [
        { kind: 'ingredient', id: 'guk_ganjang' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
    },
  },

  kimchi_guk: {
    id: 'kimchi_guk',
    label: '김치국',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],

    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
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
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [{ kind: 'ingredient', id: 'yuksu_coin' }],
    },
    synonyms: ['김칫국'],
  },

  kkotge_tang: {
    id: 'kkotge_tang',
    label: '꽃게탕',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],

    recommendedDurations: {
      homemade: { fridge: { value: 2, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'kkotge' }],
      common: [
        { kind: 'ingredient', id: 'mu' },
        { kind: 'ingredient', id: 'daepa' },
        { kind: 'ingredient', id: 'aehobak' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'doenjang' },
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [
        { kind: 'ingredient', id: 'ssukgat' },
        { kind: 'ingredient', id: 'yuksu_coin' },
      ],
    },
  },

  kongnamul_guk: {
    id: 'kongnamul_guk',
    label: '콩나물국',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],

    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'kongnamul' }],
      common: [{ kind: 'ingredient', id: 'daepa' }],
      seasoning: [
        { kind: 'ingredient', id: 'guk_ganjang' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [{ kind: 'ingredient', id: 'yuksu_coin' }],
    },
  },

  mandu_guk: {
    id: 'mandu_guk',
    label: '만둣국',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],

    recommendedDurations: {
      homemade: { fridge: { value: 2, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'food', id: 'mandu' }],
      common: [{ kind: 'ingredient', id: 'daepa' }],
      seasoning: [
        { kind: 'ingredient', id: 'guk_ganjang' },
        { kind: 'ingredient', id: 'yuksu_coin' },
      ],
      optional: [{ kind: 'ingredient', id: 'egg' }],
    },
    synonyms: ['만두국'],
  },

  mandu_jeongol: {
    id: 'mandu_jeongol',
    label: '만두전골',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],

    recommendedDurations: {
      homemade: { fridge: { value: 2, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'food', id: 'mandu' }],
      common: [
        { kind: 'ingredient', id: 'baechu' },
        { kind: 'ingredient', id: 'daepa' },
        { kind: 'ingredient', id: 'paengi_beoseot' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'guk_ganjang' },
        { kind: 'ingredient', id: 'yuksu_coin' },
      ],
      optional: [
        { kind: 'ingredient', id: 'neutari_beoseot' },
        { kind: 'ingredient', id: 'dangmyeon' },
      ],
    },
  },

  manyeo_soup: {
    id: 'manyeo_soup',
    label: '마녀스프',
    kind: 'food',
    category: 'western_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],

    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'tomato' },
        { kind: 'ingredient', id: 'yangbaechu' },
        { kind: 'ingredient', id: 'onion' },
      ],
      common: [{ kind: 'ingredient', id: 'carrot' }],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'black_pepper' },
      ],
      optional: [
        { kind: 'ingredient', id: 'celery' },
        { kind: 'ingredient', id: 'broccoli' },
      ],
    },
    synonyms: ['마녀수프'],
  },

  mara_tang: {
    id: 'mara_tang',
    label: '마라탕',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],

    recommendedDurations: {
      homemade: { fridge: { value: 2, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'mala_sauce' }],
      common: [
        { kind: 'ingredient', id: 'cheonggyeongchae' },
        { kind: 'ingredient', id: 'sukjunamul' },
        { kind: 'ingredient', id: 'baechu' },
      ],
      seasoning: [],
      optional: [
        { kind: 'ingredient', id: 'beef_plate' },
        { kind: 'ingredient', id: 'paengi_beoseot' },
        { kind: 'ingredient', id: 'dangmyeon' },
        { kind: 'ingredient', id: 'sagol_yuksu' },
      ],
    },
  },

  millefeuille_nabe: {
    id: 'millefeuille_nabe',
    label: '밀푀유나베',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],

    recommendedDurations: {
      homemade: { fridge: { value: 2, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'baechu' },
        { kind: 'ingredient', id: 'beef_shoulder' },
        { kind: 'ingredient', id: 'kkaennip' },
      ],
      common: [
        { kind: 'ingredient', id: 'sukjunamul' },
        { kind: 'ingredient', id: 'paengi_beoseot' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'yuksu_coin' },
        { kind: 'ingredient', id: 'guk_ganjang' },
      ],
      optional: [{ kind: 'ingredient', id: 'neutari_beoseot' }],
    },
  },

  miyeok_guk: {
    id: 'miyeok_guk',
    label: '미역국',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],

    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
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

  kimchi_jjigae: {
    id: 'kimchi_jjigae',
    label: '김치찌개',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],

    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
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
      optional: [{ kind: 'ingredient', id: 'pork_shoulder' }],
    },
  },

  nakgopsae: {
    id: 'nakgopsae',
    label: '낙곱새',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'g'],

    recommendedDurations: {
      homemade: { fridge: { value: 2, unit: 'day' } },
    },
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

  oi_naeng_guk: {
    id: 'oi_naeng_guk',
    label: '오이냉국',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],

    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
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
      optional: [{ kind: 'ingredient', id: 'kkaennip' }],
    },
  },

  ojingeo_mu_guk: {
    id: 'ojingeo_mu_guk',
    label: '오징어무국',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],

    recommendedDurations: {
      homemade: { fridge: { value: 2, unit: 'day' } },
    },
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
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [{ kind: 'ingredient', id: 'yuksu_coin' }],
    },
  },

  onion_soup: {
    id: 'onion_soup',
    label: '양파스프',
    kind: 'food',
    category: 'western_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],

    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'butter' },
        { kind: 'ingredient', id: 'chicken_stock' },
      ],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'black_pepper' },
      ],
      optional: [{ kind: 'ingredient', id: 'mozzarella_cheese' }],
    },
    synonyms: ['양파수프'],
  },

  samgye_tang: {
    id: 'samgye_tang',
    label: '삼계탕',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'g'],

    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'hard',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'chicken_whole' },
        { kind: 'ingredient', id: 'chapssal' },
      ],
      common: [{ kind: 'ingredient', id: 'garlic' }],
      seasoning: [{ kind: 'ingredient', id: 'salt' }],
      optional: [],
    },
  },

  seolleong_tang: {
    id: 'seolleong_tang',
    label: '설렁탕',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],

    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
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
    id: 'shabu_shabu',
    label: '샤브샤브',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'g'],

    recommendedDurations: {
      homemade: { fridge: { value: 2, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'beef_shoulder' }],
      common: [
        { kind: 'ingredient', id: 'baechu' },
        { kind: 'ingredient', id: 'paengi_beoseot' },
        { kind: 'ingredient', id: 'sukjunamul' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'yuksu_coin' },
        { kind: 'ingredient', id: 'salt' },
      ],
      optional: [
        { kind: 'ingredient', id: 'ssukgat' },
        { kind: 'ingredient', id: 'neutari_beoseot' },
        { kind: 'ingredient', id: 'pyogo_beoseot' },
      ],
    },
  },

  siraegi_guk: {
    id: 'siraegi_guk',
    label: '시래기국',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],

    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'siraegi' }],
      common: [{ kind: 'ingredient', id: 'daepa' }],
      seasoning: [
        { kind: 'ingredient', id: 'doenjang' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [{ kind: 'ingredient', id: 'yuksu_coin' }],
    },
  },

  sogogi_jeongol: {
    id: 'sogogi_jeongol',
    label: '소고기전골',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'g'],

    recommendedDurations: {
      homemade: { fridge: { value: 2, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'beef_shoulder' }],
      common: [
        { kind: 'ingredient', id: 'baechu' },
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'neutari_beoseot' },
        { kind: 'ingredient', id: 'paengi_beoseot' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'yuksu_coin' },
      ],
      optional: [{ kind: 'ingredient', id: 'dangmyeon' }],
    },
  },

  sogogi_mu_guk: {
    id: 'sogogi_mu_guk',
    label: '소고기무국',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],

    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
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

  sujebi: {
    id: 'sujebi',
    label: '수제비',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'g'],

    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
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
    id: 'sundae_guk',
    label: '순댓국',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],

    recommendedDurations: {
      homemade: { fridge: { value: 2, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'food', id: 'sundae' }],
      common: [
        { kind: 'ingredient', id: 'sagol_yuksu' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [{ kind: 'ingredient', id: 'salt' }],
      optional: [
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
    },
    synonyms: ['순대국'],
  },

  sundubu_jjigae: {
    id: 'sundubu_jjigae',
    label: '순두부찌개',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],

    recommendedDurations: {
      homemade: { fridge: { value: 2, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'sun_dubu' }],
      common: [{ kind: 'ingredient', id: 'daepa' }],
      seasoning: [
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [
        { kind: 'ingredient', id: 'egg' },
        { kind: 'ingredient', id: 'bajirak' },
      ],
    },
  },

  tteok_guk: {
    id: 'tteok_guk',
    label: '떡국',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'g'],

    recommendedDurations: {
      homemade: { fridge: { value: 2, unit: 'day' } },
    },
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
      optional: [{ kind: 'ingredient', id: 'gim' }],
    },
  },

  tteokmandu_guk: {
    id: 'tteokmandu_guk',
    label: '떡만둣국',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'g'],

    recommendedDurations: {
      homemade: { fridge: { value: 2, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'tteokguk_tteok' },
        { kind: 'food', id: 'mandu' },
      ],
      common: [{ kind: 'ingredient', id: 'daepa' }],
      seasoning: [
        { kind: 'ingredient', id: 'guk_ganjang' },
        { kind: 'ingredient', id: 'yuksu_coin' },
      ],
      optional: [{ kind: 'ingredient', id: 'egg' }],
    },
    synonyms: ['떡만두국'],
  },

  yangsongi_soup: {
    id: 'yangsongi_soup',
    label: '양송이스프',
    kind: 'food',
    category: 'western_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],

    recommendedDurations: {
      homemade: { fridge: { value: 2, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'yangsongi_beoseot' }],
      common: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'milk' },
        { kind: 'ingredient', id: 'butter' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'black_pepper' },
      ],
      optional: [{ kind: 'ingredient', id: 'fresh_cream' }],
    },
  },

  yeonpo_tang: {
    id: 'yeonpo_tang',
    label: '연포탕',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],

    recommendedDurations: {
      homemade: { fridge: { value: 2, unit: 'day' } },
    },
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

  yukgaejang: {
    id: 'yukgaejang',
    label: '육개장',
    kind: 'food',
    category: 'soup_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'ml'],

    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
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
        { kind: 'ingredient', id: 'guk_ganjang' },
      ],
      optional: [{ kind: 'ingredient', id: 'yuksu_coin' }],
    },
  },
} as const;

// 면
const noodle_meal = {
  aglio_e_olio_pasta: {
    id: 'aglio_e_olio_pasta',
    label: '알리오올리오파스타',
    kind: 'food',
    category: 'noodle_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '개', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 2, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'spaghetti_myeon' },
        { kind: 'ingredient', id: 'garlic' },
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

  bacon_cream_pasta: {
    id: 'bacon_cream_pasta',
    label: '베이컨크림파스타',
    kind: 'food',
    category: 'noodle_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '개', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 2, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'spaghetti_myeon' },
        { kind: 'ingredient', id: 'bacon' },
        { kind: 'ingredient', id: 'fresh_cream' },
      ],
      common: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'garlic' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'black_pepper' },
      ],
      optional: [
        { kind: 'ingredient', id: 'milk' },
        { kind: 'ingredient', id: 'yangsongi_beoseot' },
        { kind: 'ingredient', id: 'parmesan_cheese' },
      ],
    },
    synonyms: ['크림베이컨파스타', '크림베이컨스파게티'],
  },

  basil_pesto_pasta: {
    id: 'basil_pesto_pasta',
    label: '바질페스토파스타',
    kind: 'food',
    category: 'noodle_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '개', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 2, unit: 'day' } },
    },
    difficulty: 'easy',
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

  bibim_guksu: {
    id: 'bibim_guksu',
    label: '비빔국수',
    kind: 'food',
    category: 'noodle_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '개', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'cold',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'somyeon' }],
      common: [{ kind: 'ingredient', id: 'cucumber' }],
      seasoning: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'vinegar' },
        { kind: 'ingredient', id: 'oligodang' },
        { kind: 'ingredient', id: 'chamgireum' },
      ],
      optional: [
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'egg' },
        { kind: 'ingredient', id: 'gim' },
      ],
    },
  },

  bokkeum_udon: {
    id: 'bokkeum_udon',
    label: '볶음우동',
    kind: 'food',
    category: 'noodle_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '개', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 2, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'udon_myeon' }],
      common: [
        { kind: 'ingredient', id: 'yangbaechu' },
        { kind: 'ingredient', id: 'onion' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'oyster_sauce' },
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'cooking_oil' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [
        { kind: 'ingredient', id: 'saeu' },
        { kind: 'ingredient', id: 'sukjunamul' },
        { kind: 'ingredient', id: 'egg' },
      ],
    },
  },

  bolognese_pasta: {
    id: 'bolognese_pasta',
    label: '볼로네제파스타',
    kind: 'food',
    category: 'noodle_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '개', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 2, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'spaghetti_myeon' },
        { kind: 'ingredient', id: 'ground_beef' },
        { kind: 'ingredient', id: 'tomato_sauce' },
      ],
      common: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'carrot' },
        { kind: 'ingredient', id: 'celery' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'olive_oil' },
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'black_pepper' },
      ],
      optional: [{ kind: 'ingredient', id: 'parmesan_cheese' }],
    },
    synonyms: ['볼로네제스파게티'],
  },

  carbonara_pasta: {
    id: 'carbonara_pasta',
    label: '까르보나라파스타',
    kind: 'food',
    category: 'noodle_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '개', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 2, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'spaghetti_myeon' },
        { kind: 'ingredient', id: 'egg' },
        { kind: 'ingredient', id: 'bacon' },
        { kind: 'ingredient', id: 'parmesan_cheese' },
      ],
      common: [],
      seasoning: [{ kind: 'ingredient', id: 'black_pepper' }],
      optional: [],
    },
    synonyms: ['까르보나라', '까르보나라스파게티'],
  },

  cream_risotto: {
    id: 'cream_risotto',
    label: '크림리조또',
    kind: 'food',
    category: 'western_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '개', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
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
      optional: [
        { kind: 'ingredient', id: 'milk' },
        { kind: 'ingredient', id: 'parmesan_cheese' },
      ],
    },
  },

  curry_udon: {
    id: 'curry_udon',
    label: '카레우동',
    kind: 'food',
    category: 'noodle_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '개', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 2, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'udon_myeon' },
        { kind: 'ingredient', id: 'curry_block' },
      ],
      common: [{ kind: 'ingredient', id: 'onion' }],
      seasoning: [],
      optional: [
        { kind: 'ingredient', id: 'daepa' },
        { kind: 'ingredient', id: 'yuksu_coin' },
      ],
    },
  },

  deulgireum_mak_guksu: {
    id: 'deulgireum_mak_guksu',
    label: '들기름막국수',
    kind: 'food',
    category: 'noodle_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '개', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'cold',
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'memil_myeon' },
        { kind: 'ingredient', id: 'deulgireum' },
      ],
      common: [
        { kind: 'ingredient', id: 'gim' },
        { kind: 'ingredient', id: 'bokkeun_chamkkae' },
      ],
      seasoning: [{ kind: 'ingredient', id: 'soy_sauce' }],
      optional: [{ kind: 'ingredient', id: 'jjokpa' }],
    },
  },

  deulkkae_kal_guksu: {
    id: 'deulkkae_kal_guksu',
    label: '들깨칼국수',
    kind: 'food',
    category: 'noodle_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '통', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 2, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'kal_guksu_myeon' },
        { kind: 'ingredient', id: 'deulkkae_garu' },
      ],
      common: [
        { kind: 'ingredient', id: 'aehobak' },
        { kind: 'ingredient', id: 'onion' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'guk_ganjang' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [
        { kind: 'ingredient', id: 'potato' },
        { kind: 'ingredient', id: 'yuksu_coin' },
      ],
    },
  },

  kal_guksu: {
    id: 'kal_guksu',
    label: '칼국수',
    kind: 'food',
    category: 'noodle_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'kal_guksu_myeon' }],
      common: [
        { kind: 'ingredient', id: 'aehobak' },
        { kind: 'ingredient', id: 'onion' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'yuksu_coin' },
        { kind: 'ingredient', id: 'guk_ganjang' },
      ],
      optional: [{ kind: 'ingredient', id: 'potato' }],
    },
  },

  jajang_myeon: {
    id: 'jajang_myeon',
    label: '짜장면',
    kind: 'food',
    category: 'noodle_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'junghwa_myeon' },
        { kind: 'ingredient', id: 'jajang_garu' },
      ],
      common: [
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'pork_shoulder' },
      ],
      seasoning: [{ kind: 'ingredient', id: 'cooking_oil' }],
      optional: [
        { kind: 'ingredient', id: 'aehobak' },
        { kind: 'ingredient', id: 'cucumber' },
      ],
    },
    synonyms: ['자장면'],
  },

  janchi_guksu: {
    id: 'janchi_guksu',
    label: '잔치국수',
    kind: 'food',
    category: 'noodle_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'somyeon' }],
      common: [
        { kind: 'ingredient', id: 'egg' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'yuksu_coin' },
        { kind: 'ingredient', id: 'guk_ganjang' },
      ],
      optional: [
        { kind: 'ingredient', id: 'gim' },
        { kind: 'ingredient', id: 'aehobak' },
      ],
    },
  },

  jjamppong: {
    id: 'jjamppong',
    label: '짬뽕',
    kind: 'food',
    category: 'noodle_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'junghwa_myeon' }],
      common: [
        { kind: 'ingredient', id: 'ojingeo' },
        { kind: 'ingredient', id: 'honghap' },
        { kind: 'ingredient', id: 'yangbaechu' },
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochugaru' },
        { kind: 'ingredient', id: 'minced_garlic' },
        { kind: 'ingredient', id: 'soy_sauce' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [{ kind: 'ingredient', id: 'saeu' }],
    },
  },

  jjolmyeon: {
    id: 'jjolmyeon',
    label: '쫄면',
    kind: 'food',
    category: 'noodle_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'cold',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'jjolmyeon_sari' }],
      common: [
        { kind: 'ingredient', id: 'kongnamul' },
        { kind: 'ingredient', id: 'cucumber' },
        { kind: 'ingredient', id: 'yangbaechu' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'gochujang' },
        { kind: 'ingredient', id: 'vinegar' },
        { kind: 'ingredient', id: 'sugar' },
      ],
      optional: [{ kind: 'ingredient', id: 'egg' }],
    },
  },

  kimchi_mari_guksu: {
    id: 'kimchi_mari_guksu',
    label: '김치말이국수',
    kind: 'food',
    category: 'noodle_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'cold',
    foodStructure: {
      essential: [
        { kind: 'food', id: 'baechu_kimchi' },
        { kind: 'ingredient', id: 'somyeon' },
      ],
      common: [{ kind: 'ingredient', id: 'cucumber' }],
      seasoning: [
        { kind: 'ingredient', id: 'vinegar' },
        { kind: 'ingredient', id: 'sugar' },
      ],
      optional: [{ kind: 'ingredient', id: 'egg' }],
    },
  },

  kong_guksu: {
    id: 'kong_guksu',
    label: '콩국수',
    kind: 'food',
    category: 'noodle_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
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

  naengmyeon: {
    id: 'naengmyeon',
    label: '냉면',
    kind: 'food',
    category: 'noodle_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    recommendedDurations: {
      packaged: { fridge: { value: 1, unit: 'month' } },
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'cold',
  },

  pad_thai: {
    id: 'pad_thai',
    label: '팟타이',
    kind: 'food',
    category: 'noodle_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'ssal_guksu_myeon' },
        { kind: 'ingredient', id: 'egg' },
      ],
      common: [
        { kind: 'ingredient', id: 'saeu' },
        { kind: 'ingredient', id: 'sukjunamul' },
      ],
      seasoning: [
        { kind: 'ingredient', id: 'oyster_sauce' },
        { kind: 'ingredient', id: 'oligodang' },
        { kind: 'ingredient', id: 'vinegar' },
        { kind: 'ingredient', id: 'cooking_oil' },
      ],
      optional: [
        { kind: 'ingredient', id: 'peanut' },
        { kind: 'ingredient', id: 'lime' },
      ],
    },
  },

  ramen: {
    id: 'ramen',
    label: '라멘',
    kind: 'food',
    category: 'noodle_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
  },

  ramyeon: {
    id: 'ramyeon',
    label: '라면',
    kind: 'food',
    category: 'noodle_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '봉',
    unitOptions: ['봉', '개', '팩', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'ramyeon_sari' }],
      common: [],
      seasoning: [],
      optional: [
        { kind: 'ingredient', id: 'egg' },
        { kind: 'ingredient', id: 'daepa' },
      ],
    },
  },

  rose_pasta: {
    id: 'rose_pasta',
    label: '로제파스타',
    kind: 'food',
    category: 'noodle_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'spaghetti_myeon' },
        { kind: 'ingredient', id: 'rose_sauce' },
      ],
      common: [{ kind: 'ingredient', id: 'onion' }],
      seasoning: [{ kind: 'ingredient', id: 'olive_oil' }],
      optional: [
        { kind: 'ingredient', id: 'saeu' },
        { kind: 'ingredient', id: 'parmesan_cheese' },
      ],
    },
    synonyms: ['로제스파게티'],
  },

  ssal_guksu: {
    id: 'ssal_guksu',
    label: '쌀국수',
    kind: 'food',
    category: 'noodle_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'ssal_guksu_myeon' }],
      common: [
        { kind: 'ingredient', id: 'beef_brisket' },
        { kind: 'ingredient', id: 'sukjunamul' },
        { kind: 'ingredient', id: 'onion' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [],
      optional: [{ kind: 'ingredient', id: 'lime' }],
    },
  },

  tantanmen: {
    id: 'tantanmen',
    label: '탄탄멘',
    kind: 'food',
    category: 'noodle_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'junghwa_myeon' }],
      common: [
        { kind: 'ingredient', id: 'ground_pork' },
        { kind: 'ingredient', id: 'daepa' },
      ],
      seasoning: [
        { kind: 'food', id: 'peanut_butter' },
        { kind: 'ingredient', id: 'dubanjang' },
        { kind: 'ingredient', id: 'gochugaru' },
      ],
      optional: [{ kind: 'ingredient', id: 'cheonggyeongchae' }],
    },
  },

  yeolmu_guksu: {
    id: 'yeolmu_guksu',
    label: '열무국수',
    kind: 'food',
    category: 'noodle_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'cold',
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'somyeon' },
        { kind: 'food', id: 'yeolmu_kimchi' },
      ],
      common: [{ kind: 'ingredient', id: 'cucumber' }],
      seasoning: [
        { kind: 'ingredient', id: 'vinegar' },
        { kind: 'ingredient', id: 'sugar' },
      ],
      optional: [{ kind: 'ingredient', id: 'egg' }],
    },
  },

  udon: {
    id: 'udon',
    label: '우동',
    kind: 'food',
    category: 'noodle_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [{ kind: 'ingredient', id: 'udon_myeon' }],
      common: [{ kind: 'ingredient', id: 'daepa' }],
      seasoning: [{ kind: 'ingredient', id: 'tsuyu' }],
      optional: [{ kind: 'ingredient', id: 'eomuk' }],
    },
  },

  vongole_pasta: {
    id: 'vongole_pasta',
    label: '봉골레파스타',
    kind: 'food',
    category: 'noodle_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'spaghetti_myeon' },
        { kind: 'ingredient', id: 'bajirak' },
      ],
      common: [{ kind: 'ingredient', id: 'garlic' }],
      seasoning: [{ kind: 'ingredient', id: 'olive_oil' }],
      optional: [
        { kind: 'ingredient', id: 'peperoncino' },
        { kind: 'ingredient', id: 'parsley' },
      ],
    },
    synonyms: ['봉골레', '봉골레스파게티'],
  },

  tomato_pasta: {
    id: 'tomato_pasta',
    label: '토마토파스타',
    kind: 'food',
    category: 'noodle_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'spaghetti_myeon' },
        { kind: 'ingredient', id: 'tomato_sauce' },
      ],
      common: [{ kind: 'ingredient', id: 'onion' }],
      seasoning: [
        { kind: 'ingredient', id: 'olive_oil' },
        { kind: 'ingredient', id: 'minced_garlic' },
      ],
      optional: [{ kind: 'ingredient', id: 'parmesan_cheese' }],
    },
    synonyms: ['토마토스파게티'],
  },
} as const;

// 서양식
const western_meal = {
  egg_in_the_hell: {
    id: 'egg_in_the_hell',
    label: '에그인더헬',
    kind: 'food',
    category: 'western_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '개', 'g'],
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
      optional: [{ kind: 'ingredient', id: 'piman' }],
    },
    synonyms: ['샥슈카'],
  },

  gambas: {
    id: 'gambas',
    label: '감바스',
    kind: 'food',
    category: 'western_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '개', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 2, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'saeu' },
        { kind: 'ingredient', id: 'garlic' },
        { kind: 'ingredient', id: 'olive_oil' },
      ],
      common: [],
      seasoning: [
        { kind: 'ingredient', id: 'peperoncino' },
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'black_pepper' },
      ],
      optional: [{ kind: 'ingredient', id: 'yangsongi_beoseot' }],
    },
    synonyms: ['감바스알아히요'],
  },

  lasagna: {
    id: 'lasagna',
    label: '라자냐',
    kind: 'food',
    category: 'western_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', '조각', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'hard',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'lasagna_myeon' },
        { kind: 'ingredient', id: 'tomato_sauce' },
        { kind: 'ingredient', id: 'mozzarella_cheese' },
      ],
      common: [
        { kind: 'ingredient', id: 'ground_beef' },
        { kind: 'ingredient', id: 'onion' },
      ],
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
    id: 'mac_and_cheese',
    label: '맥앤치즈',
    kind: 'food',
    category: 'western_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '개', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 2, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'macaroni' },
        { kind: 'ingredient', id: 'cheddar_cheese' },
        { kind: 'ingredient', id: 'milk' },
      ],
      common: [{ kind: 'ingredient', id: 'butter' }],
      seasoning: [
        { kind: 'ingredient', id: 'salt' },
        { kind: 'ingredient', id: 'black_pepper' },
      ],
      optional: [
        { kind: 'ingredient', id: 'mozzarella_cheese' },
        { kind: 'ingredient', id: 'bacon' },
      ],
    },
  },

  gratin: {
    id: 'gratin',
    label: '그라탕',
    kind: 'food',
    category: 'western_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '개', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    // 감자·파스타·채소 등 주재료가 달라 foodStructure 보류.
  },

  pizza: {
    id: 'pizza',
    label: '피자',
    kind: 'food',
    category: 'western_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '판',
    unitOptions: ['판', '조각', '개', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 3, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
  },

  sandwich: {
    id: 'sandwich',
    label: '샌드위치',
    kind: 'food',
    category: 'western_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', '조각'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'easy',
    servingTemperature: 'cold',
    foodStructure: {
      essential: [{ kind: 'food', id: 'sandwich_bread' }],
      common: [
        { kind: 'ingredient', id: 'sandwich_ham' },
        { kind: 'ingredient', id: 'cheddar_cheese' },
        { kind: 'ingredient', id: 'yangsangchu' },
      ],
      seasoning: [{ kind: 'ingredient', id: 'mayonnaise' }],
      optional: [
        { kind: 'ingredient', id: 'egg' },
        { kind: 'ingredient', id: 'wholegrain_mustard' },
      ],
    },
  },

  rose_risotto: {
    id: 'rose_risotto',
    label: '로제리조또',
    kind: 'food',
    category: 'western_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '개',
    unitOptions: ['개', '팩', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
    difficulty: 'medium',
    servingTemperature: 'hot',
    foodStructure: {
      essential: [
        { kind: 'ingredient', id: 'baekmi' },
        { kind: 'ingredient', id: 'rose_sauce' },
      ],
      common: [{ kind: 'ingredient', id: 'onion' }],
      seasoning: [{ kind: 'ingredient', id: 'butter' }],
      optional: [{ kind: 'ingredient', id: 'parmesan_cheese' }],
    },
    synonyms: ['로제리조토'],
  },

  tomato_caprese: {
    id: 'tomato_caprese',
    label: '토마토카프레제',
    kind: 'food',
    category: 'western_meal',
    isActive: true,
    recommendLevel: 'general',
    defaultUnitLabel: '팩',
    unitOptions: ['팩', '개', 'g'],
    recommendedDurations: {
      homemade: { fridge: { value: 1, unit: 'day' } },
    },
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
} as const;

export const mealObj = {
  ...rice_meal,
  ...main_dish_meal,
  ...soup_meal,
  ...noodle_meal,
  ...western_meal,
  ...fresh_meal,
} as const;

export const foodObj = { ...mealObj, ...preparedFoodObj };

export const allFoodList: Food[] = Object.values(foodObj);
