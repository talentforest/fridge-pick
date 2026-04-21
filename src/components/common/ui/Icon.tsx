import { colorTokens } from '@/theme/color';
import {
  BadgeAlert,
  Box,
  ShelvingUnit,
  EggFried,
  Amphora,
  ExternalLink,
  House,
  SunMoon,
  Apple,
  ArrowDown,
  Siren,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Beef,
  Bell,
  Info,
  CakeSlice,
  Hourglass,
  SquircleDashed,
  Calendar,
  CalendarClock,
  CheckCircle,
  CheckCircle2,
  ChefHat,
  ChevronLeft,
  Timer,
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
  SquareCheck,
  Search,
  ShoppingBag,
  Snowflake,
  Soup,
  Square,
  SquareSlash,
  ShoppingBasket,
  Thermometer,
  ThermometerSnowflake,
  ThermometerSun,
  Trash2,
  TriangleAlert,
  Wheat,
  Wind,
  X,
} from 'lucide-react-native';
import { TouchableOpacity, useColorScheme, View } from 'react-native';

export type IconName =
  | 'BadgeAlert'
  | 'EggFried'
  | 'Amphora'
  | 'ExternalLink'
  | 'ShoppingBasket'
  | 'House'
  | 'Hourglass'
  | 'SunMoon'
  | 'X'
  | 'Bell'
  | 'Menu'
  | 'Siren'
  | 'SquircleDashed'
  | 'HandPlatter'
  | 'Clock'
  | 'ShoppingBag'
  | 'Box'
  | 'ChefHat'
  | 'SquareCheck'
  | 'RefreshCcw'
  | 'UtensilsCrossed'
  | 'Refrigerator'
  | 'Square'
  | 'Circle'
  | 'Plus'
  | 'Trash2'
  | 'ShelvingUnit'
  | 'Info'
  | 'PlusSquare'
  | 'SquircleDashed'
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
  | 'Timer'
  | 'RotateCcw'
  | 'Box'
  | 'ClockAlert'
  | 'CalendarClock'
  | 'SquareSlash'
  | 'Heart'
  | 'TriangleAlert'
  | 'OctagonAlert'
  | 'ShoppingBasket'
  | 'Snowflake'
  | 'ThermometerSnowflake'
  | 'ThermometerSun'
  | 'Calendar'
  | 'Search'
  | 'Thermometer'
  | 'Wind'
  | 'Timer'
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
  | 'text'
  | 'yellow'
  | 'neutral'
  | 'inactive'
  | 'red'
  | 'blue'
  | 'green'
  | 'indigo'
  | 'darkGray'
  | 'gray'
  | 'ice'
  | 'white';

interface IconProps {
  name: IconName | CategoryIconName;
  color?: IconColor;
  hasFill?: boolean;
}

export default function Icon({
  name,
  color = 'text',
  hasFill = false,
  ...props
}: IconProps & LucideProps) {
  const colorScheme = useColorScheme() ?? 'light';

  const scheme = colorTokens[colorScheme];

  const colorMap = {
    white: '#fff',
    text: scheme.text,
    yellow: scheme.yellow[7],
    neutral: scheme.neutral[7],
    red: scheme.red[5],
    blue: scheme.blue[7],
    darkGray: scheme.neutral[5],
    gray: scheme.inactive.bg,
    green: scheme.green[7],
    ice: scheme.ice[5],
    indigo: '#784ef8',
    inactive: scheme.inactive.text,
  };

  const iconObj: { [key in IconName | CategoryIconName]: LucideIcon } = {
    BadgeAlert,
    EggFried,
    Amphora,
    Box,
    ExternalLink,
    SquircleDashed,
    House,
    Timer,
    ShelvingUnit,
    SunMoon,
    X,
    Hourglass,
    SquareCheck,
    Bell,
    Menu,
    HandPlatter,
    Calendar,
    Siren,
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
    ShoppingBasket,
    Refrigerator,
    ArrowUp,
    ArrowDown,
    ArrowLeft,
    ArrowRight,
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

  return props.onPress ? (
    <TouchableOpacity
      activeOpacity={0.8}
      className={props.className}
      onPress={props.onPress}
    >
      <Component
        strokeWidth={2.2}
        {...props}
        stroke={colorMap[color]}
        fill={hasFill ? colorMap[color] : 'transparent'}
        onPress={undefined}
      />
    </TouchableOpacity>
  ) : (
    <View className={props.className}>
      <Component
        strokeWidth={2.2}
        {...props}
        stroke={colorMap[color]}
        fill={hasFill ? colorMap[color] : 'transparent'}
      />
    </View>
  );
}
