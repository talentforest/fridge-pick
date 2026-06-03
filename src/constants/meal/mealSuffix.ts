export const suffixGroupMap = {
  // 국/탕/찌개/전골류
  soup_meal: [
    '_guk',
    '_tang',
    '_jjigae',
    '_jeongol',
    '_nabe', //
  ],

  // 조리 방식 중심
  cooking_meal: [
    '_jjim',
    '_bokkeum',
    '_muchim',
    '_namul',
    '_jorim',
    '_jeon',
    '_twigim',
    '_gui',
    '_mari', //
  ],

  // 저장/발효/밑반찬
  side_dish: [
    '_jangajji',
    '_jeotgal',
    '_kimchi',
    '_geotjeori', //
  ],

  // 면류
  noodle: [
    '_guksu',
    '_myeon',
    '_udon',
    '_ramen',
    '_pasta', //
  ],

  // 밥류
  rice: [
    '_bap',
    '_deopbap',
    '_bokkeumbap',
    '_bibimbap',
    '_rice',
    '_don', //
  ],

  // 가벼운 식사
  light_meal: [
    '_juk',
    '_soup', //
  ],

  // 서양식 메인/오븐/브런치 계열
  western: [
    '_pizza',
    '_gratin',
    '_sandwich',
    '_risotto', //
  ],

  // 신선식/비조리 계열
  fresh: [
    '_salad',
    '_poke',
    '_wrap', //
  ],

  // 분식/간식류
  snack: [
    '_mandu', //
  ],
} as const;
