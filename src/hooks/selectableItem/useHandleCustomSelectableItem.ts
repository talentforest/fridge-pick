import { addCustomSelectableItemAtom } from '@/atom/customSelectableItemAtom';
import { FoodCategoryKey, IngredientCategoryKey } from '@/types/category';
import {
  Food,
  Ingredient,
  SelectableItem,
  StorageDurations,
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
      recommendedDurations: StorageDurations;
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
        availableFoodForm: _a,
        foodStructure: _f,

        // 보관 정보는 아래에서 다시 조립
        defaultStorage,
        expiration,
        ...commonProp
      } = prev;

      const customId = id.replace('custom:food:', '');

      const nextDefaultStorage = defaultStorage ?? options.defaultStorage;

      /**
       * 기존 Food가 printed_date였던 경우
       */
      if (expiration?.mode === 'printed') {
        return {
          ...commonProp,

          kind: 'ingredient',
          id: `custom:ingredient:${customId}` as const,
          category: options.category,
          defaultStorage: nextDefaultStorage,
          expiration,
        };
      }

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
        expiration: {
          mode: 'recommended',
          recommendedDurations:
            expiration?.recommendedDurations ?? options.recommendedDurations,
        },
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
