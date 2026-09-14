import { IconName } from '@/components/common/ui/Icon';
import { FilterColor } from '@/types/filter';
import { ServingTemperature } from '@/types/selectableItem';

export const servingTemperatureObj: {
  [key in ServingTemperature]: {
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
    label: '따뜻함',
    color: 'orange',
    icon: 'ThermometerSun',
  },
  room_temperature: {
    label: '상온',
    color: 'yellow',
    icon: 'Thermometer',
  },
  cold: {
    label: '차가움',
    color: 'blue',
    icon: 'ThermometerSnowflake',
  },
  either: {
    label: '무관',
    color: 'neutral',
    icon: 'Thermometer',
  },
};
