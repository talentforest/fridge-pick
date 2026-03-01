import { FoodCategory } from '@/constants/foodCategory';
import { ImageSourcePropType } from 'react-native';

export const ingredientImagesObj: {
  [key in FoodCategory]: { [key in string]: ImageSourcePropType };
} = {
  noodle: {
    udon: require('../../assets/images/ingredients/noodle/udon.png'),
    gamja_ongsimi: require('../../assets/images/ingredients/noodle/gamja_ongsimi.png'),
    tortilla: require('../../assets/images/ingredients/noodle/tortilla.png'),
    fusilli: require('../../assets/images/ingredients/noodle/fusilli.png'),
    spaghetti: require('../../assets/images/ingredients/noodle/spaghetti.png'),
    tteokbokki_ricecake: require('../../assets/images/ingredients/noodle/tteokbokki_ricecake.png'),
    penne: require('../../assets/images/ingredients/noodle/penne.png'),
    tteok_soup_ricecake: require('../../assets/images/ingredients/noodle/tteok_soup_ricecake.png'),
    sujebi: require('../../assets/images/ingredients/noodle/sujebi.png'),
    rice_noodle: require('../../assets/images/ingredients/noodle/rice_noodle.png'),
    konjac_noodle: require('../../assets/images/ingredients/noodle/konjac_noodle.png'),
    buckwheat_noodle: require('../../assets/images/ingredients/noodle/buckwheat_noodle.png'),
    dumpling_wrapper: require('../../assets/images/ingredients/noodle/dumpling_wrapper.png'),
    kalguksu_noodle: require('../../assets/images/ingredients/noodle/kalguksu_noodle.png'),
    naengmyeon: require('../../assets/images/ingredients/noodle/naengmyeon.png'),
    chinese_noodle: require('../../assets/images/ingredients/noodle/chinese_noodle.png'),
    rice_paper: require('../../assets/images/ingredients/noodle/rice_paper.png'),
    flat_glass_noodle: require('../../assets/images/ingredients/noodle/flat_glass_noodle.png'),
  },

  vegetable: {
    radish: require('../../assets/images/ingredients/vegetable/radish.png'),
    eggplant: require('../../assets/images/ingredients/vegetable/eggplant.png'),
    green_onion: require('../../assets/images/ingredients/vegetable/green_onion.png'),
    napa: require('../../assets/images/ingredients/vegetable/napa.png'),
    chive: require('../../assets/images/ingredients/vegetable/chive.png'),
    beet: require('../../assets/images/ingredients/vegetable/beet.png'),
    cucumber: require('../../assets/images/ingredients/vegetable/cucumber.png'),
    potato: require('../../assets/images/ingredients/vegetable/potato.png'),
    chard: require('../../assets/images/ingredients/vegetable/chard.png'),
    naengi: require('../../assets/images/ingredients/vegetable/naengi.png'),
    dallae: require('../../assets/images/ingredients/vegetable/dallae.png'),
    garlic: require('../../assets/images/ingredients/vegetable/garlic.png'),
    leaf_lettuce: require('../../assets/images/ingredients/vegetable/leaf_lettuce.png'),
    onion: require('../../assets/images/ingredients/vegetable/onion.png'),
    burdock: require('../../assets/images/ingredients/vegetable/burdock.png'),
    scallion: require('../../assets/images/ingredients/vegetable/scallion.png'),
    kale: require('../../assets/images/ingredients/vegetable/kale.png'),
    taro: require('../../assets/images/ingredients/vegetable/taro.png'),
    bell_pepper: require('../../assets/images/ingredients/vegetable/bell_pepper.png'),
    sweet_potato: require('../../assets/images/ingredients/vegetable/sweet_potato.png'),
    gosari: require('../../assets/images/ingredients/vegetable/gosari.png'),
    perilla: require('../../assets/images/ingredients/vegetable/perilla.png'),
    carrot: require('../../assets/images/ingredients/vegetable/carrot.png'),
    doraji: require('../../assets/images/ingredients/vegetable/doraji.png'),
    minari: require('../../assets/images/ingredients/vegetable/minari.png'),
    bomdong: require('../../assets/images/ingredients/vegetable/bomdong.png'),
    ginger: require('../../assets/images/ingredients/vegetable/ginger.png'),
    siraegi: require('../../assets/images/ingredients/vegetable/siraegi.png'),
    crown_daisy: require('../../assets/images/ingredients/vegetable/crown_daisy.png'),
    lotus_root: require('../../assets/images/ingredients/vegetable/lotus_root.png'),
    chicory: require('../../assets/images/ingredients/vegetable/chicory.png'),
    romaine: require('../../assets/images/ingredients/vegetable/romaine.png'),
    arugula: require('../../assets/images/ingredients/vegetable/arugula.png'),
    celery: require('../../assets/images/ingredients/vegetable/celery.png'),
    spinach: require('../../assets/images/ingredients/vegetable/spinach.png'),
    korean_zucchini: require('../../assets/images/ingredients/vegetable/korean_zucchini.png'),
    cabbage: require('../../assets/images/ingredients/vegetable/cabbage.png'),
    kohlrabi: require('../../assets/images/ingredients/vegetable/kohlrabi.png'),
    kabocha: require('../../assets/images/ingredients/vegetable/kabocha.png'),
    garlic_scape: require('../../assets/images/ingredients/vegetable/garlic_scape.png'),
    lettuce: require('../../assets/images/ingredients/vegetable/lettuce.png'),
    eolgari: require('../../assets/images/ingredients/vegetable/eolgari.png'),
    red_chard: require('../../assets/images/ingredients/vegetable/red_chard.png'),
    red_onion: require('../../assets/images/ingredients/vegetable/red_onion.png'),
    chamnamul: require('../../assets/images/ingredients/vegetable/chamnamul.png'),
    bok_choy: require('../../assets/images/ingredients/vegetable/bok_choy.png'),
    kongnamul: require('../../assets/images/ingredients/vegetable/kongnamul.png'),
    broccoli: require('../../assets/images/ingredients/vegetable/broccoli.png'),
    shiitake: require('../../assets/images/ingredients/vegetable/shiitake.png'),
    wood_ear: require('../../assets/images/ingredients/vegetable/wood_ear.png'),
    sebalnamul: require('../../assets/images/ingredients/vegetable/sebalnamul.png'),
    mung_sprout: require('../../assets/images/ingredients/vegetable/mung_sprout.png'),
    red_cabbage: require('../../assets/images/ingredients/vegetable/red_cabbage.png'),
    cheongyang_chili: require('../../assets/images/ingredients/vegetable/cheongyang_chili.png'),
    enoki: require('../../assets/images/ingredients/vegetable/enoki.png'),
    oyster_mushroom: require('../../assets/images/ingredients/vegetable/oyster_mushroom.png'),
    king_oyster: require('../../assets/images/ingredients/vegetable/king_oyster.png'),
    salad_mix: require('../../assets/images/ingredients/vegetable/salad_mix.png'),
    asparagus: require('../../assets/images/ingredients/vegetable/asparagus.png'),
    yellow_paprika: require('../../assets/images/ingredients/vegetable/yellow_paprika.png'),
    beech_mushroom: require('../../assets/images/ingredients/vegetable/beech_mushroom.png'),
    brussels: require('../../assets/images/ingredients/vegetable/brussels.png'),
    button_mushroom: require('../../assets/images/ingredients/vegetable/button_mushroom.png'),
    red_pepper: require('../../assets/images/ingredients/vegetable/red_pepper.png'),
  },

  fruit: {
    apple_mango: require('../../assets/images/ingredients/fruit/apple_mango.png'),
    orange: require('../../assets/images/ingredients/fruit/orange.png'),
    dried_mango: require('../../assets/images/ingredients/fruit/dried_mango.png'),
    kiwi: require('../../assets/images/ingredients/fruit/kiwi.png'),
    chamoe: require('../../assets/images/ingredients/fruit/chamoe.png'),
    banana: require('../../assets/images/ingredients/fruit/banana.png'),
    tangerine: require('../../assets/images/ingredients/fruit/tangerine.png'),
    hallabong: require('../../assets/images/ingredients/fruit/hallabong.png'),
    watermelon: require('../../assets/images/ingredients/fruit/watermelon.png'),
    peach: require('../../assets/images/ingredients/fruit/peach.png'),
    grape: require('../../assets/images/ingredients/fruit/grape.png'),
    ginkgo_nut: require('../../assets/images/ingredients/fruit/ginkgo_nut.png'),
    fig: require('../../assets/images/ingredients/fruit/fig.png'),
    plum: require('../../assets/images/ingredients/fruit/plum.png'),
    cherry_tomato: require('../../assets/images/ingredients/fruit/cherry_tomato.png'),
    cashew: require('../../assets/images/ingredients/fruit/cashew.png'),
    tomato: require('../../assets/images/ingredients/fruit/tomato.png'),
    shine_muscat: require('../../assets/images/ingredients/fruit/shine_muscat.png'),
    lemon: require('../../assets/images/ingredients/fruit/lemon.png'),
    lime: require('../../assets/images/ingredients/fruit/lime.png'),
    avocado: require('../../assets/images/ingredients/fruit/avocado.png'),
    blueberry: require('../../assets/images/ingredients/fruit/blueberry.png'),
    pear: require('../../assets/images/ingredients/fruit/pear.png'),
    almond: require('../../assets/images/ingredients/fruit/almond.png'),
    raisin: require('../../assets/images/ingredients/fruit/raisin.png'),
    strawberry: require('../../assets/images/ingredients/fruit/strawberry.png'),
    grapefruit: require('../../assets/images/ingredients/fruit/grapefruit.png'),
    sunflower_seed: require('../../assets/images/ingredients/fruit/sunflower_seed.png'),
    pine_nut: require('../../assets/images/ingredients/fruit/pine_nut.png'),
    macadamia: require('../../assets/images/ingredients/fruit/macadamia.png'),
    pistachio: require('../../assets/images/ingredients/fruit/pistachio.png'),
    pineapple: require('../../assets/images/ingredients/fruit/pineapple.png'),
    cherry: require('../../assets/images/ingredients/fruit/cherry.png'),
    persimmon: require('../../assets/images/ingredients/fruit/persimmon.png'),
    walnut: require('../../assets/images/ingredients/fruit/walnut.png'),
    pomegranate: require('../../assets/images/ingredients/fruit/pomegranate.png'),
    melon: require('../../assets/images/ingredients/fruit/melon.png'),
    pumpkin_seed: require('../../assets/images/ingredients/fruit/pumpkin_seed.png'),
    hazelnut: require('../../assets/images/ingredients/fruit/hazelnut.png'),
    green_apple: require('../../assets/images/ingredients/fruit/green_apple.png'),
    peanut: require('../../assets/images/ingredients/fruit/peanut.png'),
    apple: require('../../assets/images/ingredients/fruit/apple.png'),
    brazil_nut: require('../../assets/images/ingredients/fruit/brazil_nut.png'),
    pecan: require('../../assets/images/ingredients/fruit/pecan.png'),
    chia_seed: require('../../assets/images/ingredients/fruit/chia_seed.png'),
  },

  seafood: {},

  meat: {
    //갈매기살
    skirt_meat: require('../../assets/images/ingredients/meat/skirt_meat.png'),
    //계란
    egg: require('../../assets/images/ingredients/meat/egg.png'),
    //계란판
    egg_tray: require('../../assets/images/ingredients/meat/egg_tray.png'),
    //구운계란
    baked_egg: require('../../assets/images/ingredients/meat/baked_egg.png'),
    //냉동삼겹살
    frozen_pork_belly: require('../../assets/images/ingredients/meat/frozen_pork_belly.png'),
    //다짐육
    ground_meat: require('../../assets/images/ingredients/meat/ground_meat.png'),
    //닭가슴살
    chicken_breast: require('../../assets/images/ingredients/meat/chicken_breast.png'),
    //닭날개
    chicken_wing: require('../../assets/images/ingredients/meat/chicken_wing.png'),
    //닭다리
    chicken_leg: require('../../assets/images/ingredients/meat/chicken_leg.png'),
    //닭볶음탕용
    chicken_stew_cut: require('../../assets/images/ingredients/meat/chicken_stew_cut.png'),
    //닭안심살
    chicken_tenderloin: require('../../assets/images/ingredients/meat/chicken_tenderloin.png'),
    //대패삼겹살
    thin_pork_belly: require('../../assets/images/ingredients/meat/thin_sliced_meat.png'),
    //등갈비
    pork_ribs: require('../../assets/images/ingredients/meat/pork_ribs.png'),
    //등심 잡채용
    pork_loin_slice: require('../../assets/images/ingredients/meat/pork_loin_slice.png'),
    //등심 카레용
    pork_loin_cube: require('../../assets/images/ingredients/meat/pork_loin_cube.png'),
    //메추리알
    quail_egg: require('../../assets/images/ingredients/meat/quail_egg.png'),
    //목살
    pork_neck: require('../../assets/images/ingredients/meat/pork_neck.png'),
    //반숙란
    soft_boiled_egg: require('../../assets/images/ingredients/meat/soft_boiled_egg.png'),
    //베이컨
    bacon: require('../../assets/images/ingredients/meat/thin_sliced_meat.png'),
    //불고기용
    bulgogi_slice: require('../../assets/images/ingredients/meat/bulgogi_slice.png'),
    //비엔나소시지
    vienna_sausage: require('../../assets/images/ingredients/meat/sausage.png'),
    //사태
    shank: require('../../assets/images/ingredients/meat/shank.png'),
    //살치살
    chuck_flap: require('../../assets/images/ingredients/meat/roast_slice.png'),
    //삼겹살
    pork_belly: require('../../assets/images/ingredients/meat/boiled_meat.png'),
    //생닭
    whole_chicken: require('../../assets/images/ingredients/meat/whole_chicken.png'),
    //소고기 갈비살
    beef_short_rib: require('../../assets/images/ingredients/meat/roast_slice.png'),
    //소고기 국거리용
    beef_soup_cut: require('../../assets/images/ingredients/meat/soup_cut.png'),
    //소고기 샤브샤브용
    beef_shabu_slice: require('../../assets/images/ingredients/meat/shabu_slice.png'),
    //소고기 스테이크
    beef_steak: require('../../assets/images/ingredients/meat/steak.png'),
    //소고기 안심
    beef_tenderloin: require('../../assets/images/ingredients/meat/beef_tenderloin.png'),
    //소고기 양지
    beef_brisket: require('../../assets/images/ingredients/meat/beef_brisket.png'),
    //소고기 차돌박이
    beef_brisket_slice: require('../../assets/images/ingredients/meat/shabu_slice.png'),
    // 우삼겹살
    beef_short_slice: require('../../assets/images/ingredients/meat/shabu_slice.png'),
    //수육용
    boiled_pork_cut: require('../../assets/images/ingredients/meat/boiled_meat.png'),
    //식단용 닭가슴살
    diet_chicken_breast: require('../../assets/images/ingredients/meat/diet_chicken_breast.png'),
    //아롱사태
    beef_shank_special: require('../../assets/images/ingredients/meat/shank.png'),
    //안창살
    outside_skirt: require('../../assets/images/ingredients/meat/roast_slice.png'),
    //앞다리살 찌개
    pork_shoulder_stew: require('../../assets/images/ingredients/meat/soup_cut.png'),
    //오리정육슬라이스
    duck_slice: require('../../assets/images/ingredients/meat/duck_slice.png'),
    //오리훈제슬라이스
    smoked_duck_slice: require('../../assets/images/ingredients/meat/smoked_duck_slice.png'),
    //우둔 장조림용
    round_braise: require('../../assets/images/ingredients/meat/round_braise.png'),
    //찜갈비
    braised_short_rib: require('../../assets/images/ingredients/meat/braised_short_rib.png'),
    //채끝 스테이크
    sirloin_steak: require('../../assets/images/ingredients/meat/steak.png'),
    //하몽
    jamon: require('../../assets/images/ingredients/meat/jamon.png'),
    //항정살
    pork_jowl: require('../../assets/images/ingredients/meat/pork_jowl.png'),
    //호마토크
    tomahawk_steak: require('../../assets/images/ingredients/meat/tomahawk_steak.png'),
    //홍두깨
    beef_round: require('../../assets/images/ingredients/meat/beef_round.png'),
    //후랑크소시지
    frank_sausage: require('../../assets/images/ingredients/meat/sausage.png'),
    //훈제닭가슴살
    smoked_chicken_breast: require('../../assets/images/ingredients/meat/smoked_chicken_breast.png'),
  },

  seasoning: {
    tomato_sauce: require('../../assets/images/ingredients/sauce/tomato_sauce.png'),
  },

  grains: {},

  dairy: {},
  sidedish: {},
  conveniencefood: {},

  powder: {},
  desert: {},
  drink: {},
  health: {},
  can: {},
} as const;
