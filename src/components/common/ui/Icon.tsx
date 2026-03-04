import { colorTokens } from '@/constants';
import {
  ArrowUp,
  Bell,
  ChefHat,
  Clock,
  Grid2X2Plus,
  HandPlatter,
  LeafyGreen,
  LucideIcon,
  LucideProps,
  Menu,
  PlusSquare,
  Refrigerator,
  ShoppingBag,
  Square,
  SquareCheckBig,
  Trash2,
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
  | 'Refrigerator'
  | 'SquareCheckBig'
  | 'Square'
  | 'Trash2'
  | 'PlusSquare'
  | 'ArrowUp'
  | 'Grid2X2Plus';

export type IconColor = 'yellow' | 'neutral' | 'red' | 'blue' | 'gray';

interface IconProps {
  name: IconName;
  color?: IconColor;
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
    gray: scheme.inactive,
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
    ArrowUp,
    SquareCheckBig,
    Square,
    Trash2,
    PlusSquare,
    Grid2X2Plus,
  };

  const Component = iconObj[name];
  return <Component stroke={colorMap[color]} {...props} />;
}
