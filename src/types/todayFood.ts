import { EnrichedFoodWithFilter } from '@/hooks';

/* -------------------------------------------------------------------------- */
/*                             Today Food Item                                */
/*                             = 이번엔 어떻게 먹는가                              */
/* -------------------------------------------------------------------------- */

/** [메인요리 | 반찬] 타입구분
 * “이 음식이 식사의 중심이면 main, 아니면 side”
 */
export type TodayFood = {
  food: EnrichedFoodWithFilter;
  role: 'main' | 'side'; // 여기서 main과 side를 한번더 구분하는 이유는 오늘 먹을 메뉴에서 메인 메뉴는 무조건 하나여야함. 만약 메인 메뉴를 두개 골랐는데 메인으로 선정된 메뉴 말고 다른 메뉴를 메인으로 올리고 싶을 때 수정 가능하도록
  selectedAt: string;
};
