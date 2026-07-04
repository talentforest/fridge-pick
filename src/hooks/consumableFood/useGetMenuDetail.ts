import { EnrichedConsumableFoodWithFilter } from '@/hooks';
import { getPossessionStatus, styleByPercentageObj } from '@/utils';
import { useCallback } from 'react';

export const useGetMenuDetail = (meal: EnrichedConsumableFoodWithFilter) => {
  const { foodStructure, requiredCount, possessedList, possessionPercent } = meal;

  const getIngredientStructureList = useCallback(
    (type?: 'required' | 'optional') => {
      if (!foodStructure) return [];

      const { essential, common, seasoning, optional } = foodStructure;

      const structureObj = {
        required: {
          label: '필요한 식재료',
          itemList: [...essential, ...common],
          color: 'blue' as const,
        },
        seasoning: {
          label: '양념 재료',
          itemList: seasoning,
          color: 'yellow' as const,
        },
        optional: {
          label: '있으면 좋은 재료',
          itemList: optional,
          color: 'neutral' as const,
        },
      };

      const requiredIngredientList = [
        structureObj['required'],
        structureObj['seasoning'],
      ];

      const optionalIngredientList =
        optional.length > 0 ? [structureObj['optional']] : [];

      if (type === 'required') {
        return requiredIngredientList;
      }

      if (type === 'optional') {
        return optionalIngredientList;
      }

      return [...requiredIngredientList, ...optionalIngredientList];
    },
    [foodStructure],
  );

  const needMoreIngredientNum = requiredCount - possessedList.length;

  const possessionPercentStatusObj = {
    complete: {
      label: '모든 식재료를 갖고 있어요',
      icon: 'HandPlatter',
      iconColor: 'green',
    },

    good: {
      label: `식재료 ${needMoreIngredientNum}개만 더 있으면 돼요`,
      icon: 'Info',
      iconColor: 'yellow',
    },

    partial: {
      label: `식재료 ${needMoreIngredientNum}개가 부족해요`,
      icon: 'Info',
      iconColor: 'yellow',
    },

    poor: {
      label: `식재료 ${needMoreIngredientNum}개가 많이 부족해요`,
      icon: 'TriangleAlert',
      iconColor: 'red',
    },

    empty: {
      label: '갖고 있는 식재료가 없어요',
      icon: 'TriangleAlert',
      iconColor: 'red',
    },
  } as const;

  const status = getPossessionStatus(possessionPercent);

  const possesionStatus = possessionPercentStatusObj[status];

  const styleByPossesionStatus = styleByPercentageObj[status];

  return {
    getIngredientStructureList,
    possesionStatus,
    styleByPossesionStatus,
  };
};
