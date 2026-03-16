import { colorTokens } from '@/theme/color';
import {
  Apple,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Beef,
  Bell,
  CakeSlice,
  Calendar,
  CalendarClock,
  CheckCircle,
  CheckCircle2,
  ChefHat,
  ChevronLeft,
  ChevronRight,
  Circle,
  Clock,
  ClockAlert,
  Database,
  Dessert,
  Edit,
  Edit3,
  Fish,
  GlassWater,
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
  Snowflake,
  Soup,
  Square,
  SquareCheckBig,
  SquareSlash,
  Thermometer,
  ThermometerSnowflake,
  ThermometerSun,
  Trash2,
  TriangleAlert,
  Wheat,
  Wind,
  X,
} from 'lucide-react-native';
import { useColorScheme } from 'react-native';

export type IconName =
  | 'X'
  | 'Bell'
  | 'Menu'
  | 'HandPlatter'
  | 'Clock'
  | 'ShoppingBag'
  | 'ChefHat'
  | 'Refrigerator'
  | 'SquareCheckBig'
  | 'Square'
  | 'Circle'
  | 'Trash2'
  | 'PlusSquare'
  | 'PlusCircle'
  | 'CheckCircle2'
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
  | 'Snowflake'
  | 'ThermometerSnowflake'
  | 'ThermometerSun'
  | 'Calendar'
  | 'Thermometer'
  | 'Wind'
  | 'Grid2X2Plus';

export type CategoryIconName =
  | 'Beef'
  | 'Fish'
  | 'Soup'
  | 'LeafyGreen'
  | 'Wheat'
  | 'Hamburger'
  | 'CakeSlice'
  | 'Apple'
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
  | 'cyan'
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
    red: '#a30c0c',
    blue: scheme.blue[500],
    gray: scheme.inactive,
    white: '#fff',
    green: '#296416',
    indigo: '#784ef8',
    teal: '#0e4d47',
    cyan: '#39acc3',
  };

  const iconObj: { [key in IconName | CategoryIconName]: LucideIcon } = {
    X,
    Bell,
    Menu,
    HandPlatter,
    Calendar,
    CheckCircle2,
    Circle,
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
    Snowflake,
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
    Apple,
    HeartPulse,
    Pizza,
    Database,
    Dessert,
    SquareSlash,
    Wind,
    LineSquiggle,
    Heart,
    OctagonAlert,
    TriangleAlert,
    ThermometerSnowflake,
    ThermometerSun,
    Thermometer,
    GlassWater,
  };

  const Component = iconObj[name];

  return <Component stroke={colorMap[color]} strokeWidth={2.2} {...props} />;
}
