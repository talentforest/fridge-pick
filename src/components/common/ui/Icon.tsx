import { colorTokens } from '@/theme/color';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Beef,
  Bell,
  CakeSlice,
  CalendarClock,
  CheckCircle,
  ChefHat,
  ChevronLeft,
  ChevronRight,
  Clock,
  ClockAlert,
  Database,
  Dessert,
  Edit,
  Edit3,
  Fish,
  GlassWater,
  Grape,
  Grid2X2Plus,
  Hamburger,
  HandPlatter,
  Heart,
  HeartPulse,
  LeafyGreen,
  LineSquiggle,
  LucideIcon,
  LucideProps,
  Menu,
  Milk,
  OctagonAlert,
  Pizza,
  PlusCircle,
  PlusSquare,
  Refrigerator,
  ShoppingBag,
  Soup,
  Square,
  SquareCheckBig,
  SquareSlash,
  Trash2,
  TriangleAlert,
  Wheat,
} from 'lucide-react-native';
import { useColorScheme } from 'react-native';

export type IconName =
  | 'Bell'
  | 'Menu'
  | 'HandPlatter'
  | 'Clock'
  | 'ShoppingBag'
  | 'ChefHat'
  | 'Refrigerator'
  | 'SquareCheckBig'
  | 'Square'
  | 'Trash2'
  | 'PlusSquare'
  | 'PlusCircle'
  | 'CheckCircle'
  | 'ArrowUp'
  | 'ArrowDown'
  | 'ArrowLeft'
  | 'ArrowRight'
  | 'ChevronLeft'
  | 'ChevronRight'
  | 'Edit'
  | 'Edit3'
  | 'ClockAlert'
  | 'CalendarClock'
  | 'SquareSlash'
  | 'Heart'
  | 'TriangleAlert'
  | 'OctagonAlert'
  | 'Grid2X2Plus';

export type CategoryIconName =
  | 'Beef'
  | 'Fish'
  | 'Soup'
  | 'LeafyGreen'
  | 'Wheat'
  | 'Hamburger'
  | 'CakeSlice'
  | 'Grape'
  | 'Dessert'
  | 'HeartPulse'
  | 'GlassWater'
  | 'Pizza'
  | 'LineSquiggle'
  | 'Database'
  | 'Milk';

export type IconColor =
  | 'yellow'
  | 'neutral'
  | 'red'
  | 'blue'
  | 'green'
  | 'indigo'
  | 'gray'
  | 'teal'
  | 'white';

interface IconProps {
  name: IconName | CategoryIconName;
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
    yellow: scheme.yellow[700],
    neutral: scheme.neutral[800],
    red: scheme.red[500],
    blue: scheme.blue[500],
    gray: scheme.inactive,
    white: '#fff',
    green: '#296416',
    indigo: '#784ef8',
    teal: '#0e4d47',
  };

  const iconObj: { [key in IconName | CategoryIconName]: LucideIcon } = {
    Bell,
    Menu,
    HandPlatter,
    Clock,
    LeafyGreen,
    ChefHat,
    ShoppingBag,
    Refrigerator,
    ArrowUp,
    ArrowDown,
    ArrowLeft,
    ArrowRight,
    SquareCheckBig,
    Square,
    Trash2,
    PlusSquare,
    PlusCircle,
    Grid2X2Plus,
    Edit,
    Edit3,
    ChevronLeft,
    ChevronRight,
    CalendarClock,
    CheckCircle,
    ClockAlert,
    Beef,
    Fish,
    Wheat,
    Hamburger,
    CakeSlice,
    Milk,
    Soup,
    Grape,
    HeartPulse,
    Pizza,
    Database,
    Dessert,
    SquareSlash,
    LineSquiggle,
    Heart,
    OctagonAlert,
    TriangleAlert,
    GlassWater,
  };

  const Component = iconObj[name];
  return <Component stroke={colorMap[color]} {...props} />;
}
