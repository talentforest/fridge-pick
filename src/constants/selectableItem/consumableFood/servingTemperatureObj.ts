import { IconName } from '@/components/common/ui/Icon';
import { FilterColor } from '@/types/filter';
import { Consumable } from '@/types/selectableItem';

export const servingTemperatureObj: {
  [key in Consumable['servingTemperature']]: {
    label: string;
    color: FilterColor;
    icon: IconName;
  };
} = {
  hot: {
    label: '뜨거움',
    color: 'red',
    icon: 'Flame',
  },
  warm: {
    label: '따듯함',
    color: 'yellow',
    icon: 'ThermometerSun',
  },
  cold: {
    label: '차가움',
    color: 'blue',
    icon: 'ThermometerSnowflake',
  },
  either: {
    label: '상관없음',
    color: 'neutral',
    icon: 'Thermometer',
  },
};
