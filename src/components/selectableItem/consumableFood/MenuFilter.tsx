import FilterTag from '@/components/common/FilterTag';
import {
  difficultyObj,
  mealCategoryObj,
  preparedFoodCategoryObj,
  servingTemperatureObj,
} from '@/constants';

import { EnrichedConsumableFoodWithFilterList } from '@/hooks';

type MenuFilterProps = {
  type: 'difficulty' | 'category' | 'servingTemperature';
  food: EnrichedConsumableFoodWithFilterList;
};

export default function MenuFilter({ type, food }: MenuFilterProps) {
  const className = '!rounded-md !px-2 !py-2';
  return (
    <>
      {type === 'category' ? (
        <FilterTag
          isActive
          name={
            food.kind === 'meal'
              ? mealCategoryObj[food.category].label
              : preparedFoodCategoryObj[food.category].label
          }
          color="neutral"
          icon={
            food.kind === 'meal'
              ? mealCategoryObj[food.category].icon
              : preparedFoodCategoryObj[food.category].icon
          }
          className={className}
          textClassName="text-sm"
          iconSize={13}
        />
      ) : (
        <></>
      )}

      {type === 'difficulty' && food.difficulty ? (
        <FilterTag
          isActive
          name={difficultyObj[food.difficulty].label}
          color={difficultyObj[food.difficulty].color}
          icon="Zap"
          className={className}
          textClassName="text-sm"
          iconSize={13}
        />
      ) : (
        <></>
      )}

      {type === 'servingTemperature' && food.servingTemperature ? (
        <FilterTag
          isActive
          name={servingTemperatureObj[food.servingTemperature].label}
          color={servingTemperatureObj[food.servingTemperature].color}
          icon={servingTemperatureObj[food.servingTemperature].icon}
          className={className}
          textClassName="text-sm"
          iconSize={13}
        />
      ) : (
        <></>
      )}
    </>
  );
}
