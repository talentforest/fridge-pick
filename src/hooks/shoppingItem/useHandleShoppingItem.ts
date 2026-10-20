import {
  addShoppingItemAtom,
  deleteShoppingItemListAtom,
  isAllPurchasedAtom,
  isInStorageShoppingItemAtom,
  purchasedCountAtom,
  purchasedItemsAtom,
  shoppingListAtom,
  toggleAllPurchasedAtom,
} from '@/atom/shoppingListAtom';
import { useErrorHandler } from '@/hooks/common/useErrorHandler';
import { useOverlay } from '@/hooks/common/useOverlay';
import { useAtomValue, useSetAtom } from 'jotai';
import { ShoppingItem as ShoppingItemType } from '@/types/shoppingItem';
import { useHandleNavigate } from '@/hooks/common/useHandleNavigate';
import { useState, RefObject, useMemo } from 'react';

import { ScrollView } from 'react-native';
import {
  filterRecommendableCandidates,
  getCompletableFoodListBySelectableItem,
  getShoppingFoodExpansionCandidates,
  searchSelectableItem,
} from '@/utils';
import { allStorageItemListAtom } from '@/atom/storageAtom';
import { isNotInStorageFavoriteListAtom } from '@/atom/favoritesAtom';
import { allFoodList, allIngredientList } from '@/constants';

interface UseHandleShoppingItemProps {
  scrollViewRef: RefObject<ScrollView | null>;
}

export const useHandleShoppingItem = ({ scrollViewRef }: UseHandleShoppingItemProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  const purchasedItemList = useAtomValue(purchasedItemsAtom);
  const isInStorageItem = useAtomValue(isInStorageShoppingItemAtom);
  const shoppingList = useAtomValue(shoppingListAtom);
  const purchasedCount = useAtomValue(purchasedCountAtom);
  const isAllPurchased = useAtomValue(isAllPurchasedAtom);

  const isNotInStorageFavoriteList = useAtomValue(isNotInStorageFavoriteListAtom);
  const allStorageItemList = useAtomValue(allStorageItemListAtom);

  const toggleAllPurchased = useSetAtom(toggleAllPurchasedAtom);
  const addShoppingItem = useSetAtom(addShoppingItemAtom);
  const deleteShoppingItemList = useSetAtom(deleteShoppingItemListAtom);

  const { error, setError, clearError } = useErrorHandler<ShoppingItemType>();

  const { alert } = useOverlay();

  const { goNavigate } = useHandleNavigate();

  /** INPUT */
  const onChangeText = (text: string) => {
    setInputValue(text);
    if (error !== null) {
      clearError();
    }
  };

  /** INPUT SUBMIT */
  const onSubmitPress = (value?: string) => {
    if (!value) return;

    const result = addShoppingItem(value);

    if (result.type === 'duplicate') {
      return setError(result);
    }

    if (result.type === 'success') {
      scrollViewRef.current?.scrollToEnd({
        animated: true,
      });

      setInputValue('');
    }
  };

  const onAllPurchasedClick = () => {
    if (shoppingList.length === 0) return;
    toggleAllPurchased();
  };

  const onDeletePress = () => {
    deleteShoppingItemList(purchasedItemList.map(({ id }) => id));
  };

  const onAddToStoragePress = () => {
    if (isInStorageItem)
      return alert({
        message: '냉장고에 이미 존재하는 식재료는 추가할수 없어요.',
      });

    goNavigate('AddShoppingListScreen');
  };

  const suggestListInInput = useMemo(() => {
    const searchedIngredientList = searchSelectableItem(
      inputValue || '',
      [...allIngredientList, ...allFoodList],
      6,
    );

    const result = searchedIngredientList.filter(
      ({ id }) =>
        !shoppingList
          .map((item) => {
            if (item.type === 'ingredient') {
              return item.ingredientId;
            }
            return item.foodId;
          })
          .includes(id),
    );
    return result;
  }, [inputValue, shoppingList]);

  const recommendShoppingList = useMemo(() => {
    // 장보기 목록에 이미 추가된 아이템 ID
    const shoppingItemIds = new Set(
      shoppingList.map((item) =>
        item.type === 'food' ? item.foodId : item.ingredientId,
      ),
    );

    // 나의 픽 식재료가 없을 때
    const hasNotMyPickList = isNotInStorageFavoriteList.map((item) => ({
      type: 'myPick' as const,
      foodList: [],
      selectableItem: item,
    }));

    // 메뉴에서 식재료 하나가 부족할 때
    const recommendedShoppingListForFood = filterRecommendableCandidates(
      getShoppingFoodExpansionCandidates(allStorageItemList),
    );

    const result = [
      ...recommendedShoppingListForFood.slice(0, 5),
      ...hasNotMyPickList.slice(0, 4),
    ];

    const prioritizeMyPick = <T extends { type: string; selectableItem: { id: string } }>(
      list: T[],
    ) =>
      Array.from(
        list
          .reduce((map, item) => {
            const id = item.selectableItem.id;

            // 이미 장보기 목록에 있으면 제외
            if (shoppingItemIds.has(id)) {
              return map;
            }

            const existing = map.get(id);

            if (!existing || (item.type === 'myPick' && existing.type !== 'myPick')) {
              map.set(id, item);
            }

            return map;
          }, new Map<string, T>())
          .values(),
      );

    return prioritizeMyPick(result);
  }, [allStorageItemList, isNotInStorageFavoriteList, shoppingList]);

  const shoppingListInsightList = useMemo(() => {
    return shoppingList
      .map((item) => {
        return getCompletableFoodListBySelectableItem(
          allStorageItemList,
          item.type === 'ingredient'
            ? item.ingredient
            : item.type === 'food'
              ? item.food
              : undefined,
        );
      })
      .flat();
  }, [allStorageItemList, shoppingList]);

  return {
    input: { inputValue, onChangeText, error, onSubmitPress },
    list: {
      shoppingList,
      purchasedCount,
      isAllPurchased,
      onAllPurchasedClick,
      onAddToStoragePress,
      onDeletePress,
    },
    suggest: { suggestListInInput, recommendShoppingList, shoppingListInsightList },
  };
};
