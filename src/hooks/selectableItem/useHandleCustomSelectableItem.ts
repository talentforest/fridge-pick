import { addCustomSelectableItemAtom } from '@/atom/customSelectableItemAtom';
import { DEFAULT_EXPIRATION_DURATION } from '@/constants';
import { FoodCategoryKey, IngredientCategoryKey } from '@/types/category';
import {
  Food,
  Ingredient,
  RecommendedDurations,
  SelectableItem,
} from '@/types/selectableItem';
import { StorageTypeId } from '@/types/storage';
import { useSetAtom } from 'jotai';
import { useState } from 'react';

export type SelectableItemKindOptions =
  | {
      kind: 'food';
      category: FoodCategoryKey;
    }
  | {
      kind: 'ingredient';
      category: IngredientCategoryKey;
      defaultStorage: StorageTypeId;
      recommendedDurations: RecommendedDurations;
    };

export const useHandleCustomSelectableItem = ({
  selectableItem,
}: {
  selectableItem: SelectableItem;
}) => {
  const [newSelectableItem, setNewSelectableItem] =
    useState<SelectableItem>(selectableItem);

  const addCustomSelectableItem = useSetAtom(addCustomSelectableItemAtom);

  const onSelectableItemChange = (
    newData: Partial<Ingredient> | Partial<Food>,
    deleteKeys: (keyof Ingredient | keyof Food)[] = [],
  ) => {
    setNewSelectableItem((prev): SelectableItem => {
      const next =
        prev.kind === 'ingredient'
          ? {
              ...prev,
              ...(newData as Partial<Ingredient>),
            }
          : {
              ...prev,
              ...(newData as Partial<Food>),
            };

      deleteKeys.forEach((key) => {
        delete (next as unknown as Record<string, unknown>)[key];
      });

      return next as SelectableItem;
    });
  };

  const changeItemKind = (options: SelectableItemKindOptions) => {
    setNewSelectableItem((prev): SelectableItem => {
      /** Ingredient → Food */
      if (options.kind === 'food') {
        const { kind, id, category: _, variants: _v, ...commonAndStorageMeta } = prev;

        if (kind === 'food') return prev;

        const customId = id.replace('custom:ingredient:', '');

        return {
          ...commonAndStorageMeta,
          recommendedDurations: {
            packaged: {
              fridge: DEFAULT_EXPIRATION_DURATION,
            },
          },
          ...options,
          id: `custom:food:${customId}` as const,
        };
      }

      /** Food → Ingredient */
      if (prev.kind === 'ingredient') return prev;

      const {
        id,
        kind: _k,
        category: _c,
        variants: _v,

        // Food 전용 속성 제거
        difficulty: _d,
        servingTemperature: _s,
        availableFoodForms: _a,
        foodStructure: _f,

        // 보관 정보는 아래에서 다시 조립
        defaultStorage,
        recommendedDurations,
        ...commonProp
      } = prev;

      const customId = id.replace('custom:food:', '');

      const nextDefaultStorage = defaultStorage ?? options.defaultStorage;

      /**
       * 기존 Food가 recommended_days이거나
       * 보관 정보 자체가 없었던 경우
       */
      return {
        ...commonProp,
        kind: 'ingredient',
        id: `custom:ingredient:${customId}` as const,
        category: options.category,
        defaultStorage: nextDefaultStorage,
        recommendedDurations,
      };
    });
  };

  return {
    newSelectableItem,
    onSelectableItemChange,
    changeItemKind,
    addCustomSelectableItem,
  };
};
