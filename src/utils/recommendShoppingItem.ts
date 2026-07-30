import { allMealList, allPreparedFoodList } from '@/constants';
import { ConsumableFood, SelectableItem } from '@/types/selectableItem';
import { EnrichedShoppingItem } from '@/types/shoppingList';
import { EnrichedStorageItem } from '@/types/storage';
import { findSelectableItem, SelectableItemRef } from '@/utils/findItem';

export type ShoppingInsightResult = {
  type: 'menu' | 'myPick';
  selectableItem: SelectableItem;
  menuList: ConsumableFood[];
};

const getSelectableItemKey = ({ kind, id }: SelectableItemRef) => `${kind}:${id}`;

const getStorageItemRef = (
  item: EnrichedStorageItem | EnrichedShoppingItem,
): SelectableItemRef | null => {
  switch (item.type) {
    case 'ingredient':
      return {
        kind: 'ingredient',
        id: item.ingredientId,
      };

    case 'preparedFood':
      return {
        kind: 'preparedFood',
        id: item.preparedFoodId,
      };

    case 'meal':
      return {
        kind: 'meal',
        id: item.mealId,
      };

    default:
      return null;
  }
};

/**
 * 메뉴중 딱 1개 식재료가 부족한 걸 식재료 별로 묶어서, 가장 많은 메뉴를 완성시키는 식재료 하나를 찾는 함수
 * @param allMenuList
 * @param allStorageItemList
 * @returns
 */
export const getShoppingMenuExpansionCandidates = (
  allStorageItemList: (EnrichedStorageItem | EnrichedShoppingItem)[],
): ShoppingInsightResult[] => {
  /**
   * 현재 보유하고 있는 항목
   *
   * ingredient:chicken_breast
   * preparedFood:kimchi
   * meal:yukgaejang
   */
  const possessedItemKeySet = new Set(
    allStorageItemList
      .map(getStorageItemRef)
      .filter((item): item is SelectableItemRef => item !== null)
      .map(getSelectableItemKey),
  );

  /**
   * 식재료 하나를 추가했을 때
   * 몇 개의 메뉴가 새롭게 완성되는지 집계
   */
  const candidateMap = new Map<string, ShoppingInsightResult>();

  const allMenuList = [...allMealList, ...allPreparedFoodList];

  for (const menu of allMenuList) {
    if (!menu.foodStructure) continue;
    /**
     * 우선 essential + common + seasoning만 완성 조건으로 사용
     * optional만 제외
     */
    const requiredItemList: SelectableItemRef[] = [
      ...menu.foodStructure.essential,
      ...menu.foodStructure.common,
      ...menu.foodStructure.seasoning,
    ];

    /**
     * 메뉴에서 현재 보유하지 않은 항목 찾기
     */
    const missingItemList = requiredItemList.filter(
      (item) => !possessedItemKeySet.has(getSelectableItemKey(item)),
    );

    /**
     * 정확히 하나만 부족한 메뉴만 대상
     *
     * 0개 → 이미 만들 수 있음
     * 1개 → 하나만 사면 만들 수 있음
     * 2개 이상 → 이번 인사이트 대상 아님
     */
    if (missingItemList.length !== 1) {
      continue;
    }

    const missingItemRef = missingItemList[0];

    if (!missingItemRef) continue;

    const selectableItem = findSelectableItem(missingItemRef);

    const current = candidateMap.get(selectableItem.id);

    candidateMap.set(selectableItem.id, {
      type: 'menu',
      selectableItem,
      menuList: [...(current?.menuList ?? []), menu],
    });
  }

  /**
   * 가장 많은 메뉴를 새롭게 만들 수 있는 항목
   */
  return (
    [...candidateMap.values()].sort((a, b) => b.menuList.length - a.menuList.length) ??
    null
  );
};

/**
 * 추천 후보들 중 정책에 따라서 필터링
 * @param candidates 추천 후보들
 * @returns
 */
export const filterRecommendableCandidates = (
  candidates: ShoppingInsightResult[],
): ShoppingInsightResult[] => {
  return candidates.filter(({ selectableItem }) => {
    switch (selectableItem.recommendLevel) {
      case 'general':
        return true;

      case 'preference':
        return canRecommendPreferenceItem(selectableItem);
    }
  });
};

const canRecommendPreferenceItem = (item: SelectableItem): boolean => {
  return false;
};

/**
 * 특정 식재료(또는 간편식/식사)가 생기면 새롭게 만들 수 있는 메뉴 목록
 */
export const getCompletableMenuListBySelectableItem = (
  allStorageItemList: (EnrichedStorageItem | EnrichedShoppingItem)[],
  selectableItem?: SelectableItem,
): ConsumableFood[] => {
  if (!selectableItem) return [];
  const possessedItemKeySet = new Set(
    allStorageItemList
      .map(getStorageItemRef)
      .filter((item): item is SelectableItemRef => item !== null)
      .map(getSelectableItemKey),
  );

  const selectableItemKey = getSelectableItemKey(selectableItem);

  const allMenuList = [...allMealList, ...allPreparedFoodList];

  return allMenuList.filter((menu) => {
    if (!menu.foodStructure) return false;

    const requiredItemList: SelectableItemRef[] = [
      ...menu.foodStructure.essential,
      ...menu.foodStructure.common,
      ...menu.foodStructure.seasoning,
    ];

    const missingItemList = requiredItemList.filter(
      (item) => !possessedItemKeySet.has(getSelectableItemKey(item)),
    );

    // 이미 만들 수 있는 메뉴 제외
    if (missingItemList.length !== 1 || !missingItemList[0]) {
      return false;
    }

    // 부족한 하나가 바로 이 아이템인지 확인
    return getSelectableItemKey(missingItemList[0]) === selectableItemKey;
  });
};
