import { colorTokens } from '@/constants';
import {
  Bell,
  ChefHat,
  Clock,
  HandPlatter,
  LeafyGreen,
  LucideIcon,
  LucideProps,
  Menu,
  Refrigerator,
  ShoppingBag,
} from 'lucide-react-native';
import { useColorScheme } from 'react-native';

export type IconName =
  | 'Bell'
  | 'Menu'
  | 'HandPlatter'
  | 'Clock'
  | 'LeafyGreen'
  | 'ShoppingBag'
  | 'ChefHat'
  | 'Refrigerator';

interface IconProps {
  name: IconName;
  color?: 'yellow' | 'neutral' | 'red' | 'blue';
}

export default function Icon({
  name,
  color = 'neutral',
  ...props
}: IconProps & LucideProps) {
  const colorScheme = useColorScheme() ?? 'light';

  const scheme = colorTokens[colorScheme];

  const colorMap = {
    yellow: scheme.yellow[900],
    neutral: scheme.neutral[800],
    red: scheme.red[500],
    blue: scheme.blue[500],
  };

  const iconObj: { [key in IconName]: LucideIcon } = {
    Bell,
    Menu,
    HandPlatter,
    Clock,
    LeafyGreen,
    ChefHat,
    ShoppingBag,
    Refrigerator,
  };

  const Component = iconObj[name];
  return <Component stroke={colorMap[color]} {...props} />;
}
