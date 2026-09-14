import FilterTag from '@/components/common/FilterTag';
import { difficultyObj, foodCategoryObj, servingTemperatureObj } from '@/constants';

import { EnrichedFoodWithFilter } from '@/hooks';

type FoodFilterProps = {
  type: 'difficulty' | 'category' | 'servingTemperature';
  food: EnrichedFoodWithFilter;
};

export default function FoodFilter({ type, food }: FoodFilterProps) {
  const className = '!rounded-md !px-1.5 !py-2';

  return (
    <>
      {type === 'category' ? (
        <FilterTag
          isActive
          name={foodCategoryObj[food.category].label}
          icon={foodCategoryObj[food.category].icon}
          color="blue"
          className={className}
          textClassName="!text-[11px]"
          iconSize={12}
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
          textClassName="!text-[11px]"
          iconSize={12}
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
          textClassName="!text-[11px]"
          iconSize={12}
        />
      ) : (
        <></>
      )}
    </>
  );
}
