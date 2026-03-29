import { colorTokens } from '@/theme/color';
import {
  Apple,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Beef,
  Bell,
  Info,
  CakeSlice,
  Calendar,
  CalendarClock,
  CheckCircle,
  CheckCircle2,
  ChefHat,
  ChevronLeft,
  RotateCcw,
  ChevronRight,
  Circle,
  Clock,
  ClockAlert,
  Plus,
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
  RefreshCcw,
  LineSquiggle,
  LucideIcon,
  LucideProps,
  Menu,
  Milk,
  UtensilsCrossed,
  OctagonAlert,
  Pizza,
  PlusCircle,
  PlusSquare,
  Refrigerator,
  Search,
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
import { useColorScheme, View } from 'react-native';

export type IconName =
  | 'X'
  | 'Bell'
  | 'Menu'
  | 'HandPlatter'
  | 'Clock'
  | 'ShoppingBag'
  | 'ChefHat'
  | 'RefreshCcw'
  | 'UtensilsCrossed'
  | 'Refrigerator'
  | 'SquareCheckBig'
  | 'Square'
  | 'Circle'
  | 'Plus'
  | 'Trash2'
  | 'Info'
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
  | 'RotateCcw'
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
  | 'Search'
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
    RefreshCcw,
    Circle,
    Info,
    Plus,
    Clock,
    LeafyGreen,
    ChefHat,
    UtensilsCrossed,
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
    RotateCcw,
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
    Search,
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

  return (
    <View className={props.className}>
      <Component stroke={colorMap[color]} strokeWidth={2.2} {...props} />
    </View>
  );
}
