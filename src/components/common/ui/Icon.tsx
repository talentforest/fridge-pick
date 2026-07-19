import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import { colorTokens } from '@/theme/color';
import {
  TrendingUp,
  ChartColumnBig,
  ThumbsUp,
  CalendarPlus,
  NotebookPen,
  MapPinned,
  NotepadText,
  Flame,
  Egg,
  Croissant,
  Salad,
  CookingPot,
  ChevronUp,
  ChevronDown,
  PackageOpen,
  ToolCase,
  Scooter,
  BadgeQuestionMark,
  Sparkles,
  BadgeAlert,
  Box,
  ShelvingUnit,
  EggFried,
  Amphora,
  ExternalLink,
  House,
  SunMoon,
  Apple,
  Zap,
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
  CalendarDays,
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
import { useColorScheme, View } from 'react-native';

export type IconName =
  | 'TrendingUp'
  | 'ChartColumnBig'
  | 'ThumbsUp'
  | 'CalendarPlus'
  | 'MapPinned'
  | 'NotebookPen'
  | 'NotepadText'
  | 'Flame'
  | 'Egg'
  | 'Croissant'
  | 'Salad'
  | 'PackageOpen'
  | 'ToolCase'
  | 'Scooter'
  | 'BadgeQuestionMark'
  | 'Sparkles'
  | 'BadgeAlert'
  | 'EggFried'
  | 'Amphora'
  | 'Zap'
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
  | 'ChevronUp'
  | 'ChevronDown'
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
  | 'CalendarDays'
  | 'Search'
  | 'Thermometer'
  | 'Wind'
  | 'Timer'
  | 'Grid2X2Plus'
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
  | 'Zap'
  | 'Milk'
  | 'CookingPot';

export type IconColor =
  | 'orange'
  | 'text'
  | 'lightYellow'
  | 'yellow'
  | 'neutral'
  | 'inactive'
  | 'red'
  | 'lightBlue'
  | 'blue'
  | 'green'
  | 'indigo'
  | 'darkGray'
  | 'gray'
  | 'ice'
  | 'black'
  | 'white';

interface IconProps {
  name: IconName;
  color?: IconColor;
  hasFill?: boolean;
  hasShadow?: boolean;
  hasBgColor?: boolean;
}

export default function Icon({
  name,
  color = 'text',
  hasFill = false,
  hasShadow,
  hasBgColor,
  ...props
}: IconProps & LucideProps) {
  const colorScheme = useColorScheme() ?? 'light';

  const scheme = colorTokens[colorScheme];

  const colorMap = {
    orange: scheme.orange[7],
    white: '#fff',
    text: scheme.text,
    lightYellow: scheme.yellow[3],
    yellow: scheme.yellow[7],
    neutral: scheme.neutral[7],
    red: scheme.red[5],
    lightBlue: scheme.blue[5],
    blue: scheme.blue[7],
    darkGray: scheme.neutral[5],
    black: scheme.neutral[9],
    gray: scheme.inactive.bg,
    green: scheme.green[7],
    ice: scheme.ice[5],
    indigo: scheme.indigo[5],
    inactive: scheme.inactive.text,
  };

  const bgColorMap = {
    orange: 'bg-orange-1',
    white: '#fff',
    text: 'bg-neutral-1',
    lightYellow: 'bg-yellow-1',
    yellow: 'bg-yellow-1',
    neutral: 'bg-neutral-1',
    red: 'bg-red-1',
    lightBlue: 'bg-blue-1',
    blue: 'bg-blue-1',
    darkGray: 'bg-neutral-1',
    black: 'bg-neutral-9',
    gray: 'bg-inactive-bg',
    green: 'bg-green-1',
    ice: 'bg-ice-1',
    indigo: 'bg-indigo-1',
    inactive: 'bg-inactive-text',
  };

  const iconObj: { [key in IconName]: LucideIcon } = {
    TrendingUp,
    ChartColumnBig,
    ThumbsUp,
    CalendarPlus,
    NotebookPen,
    MapPinned,
    NotepadText,
    Flame,
    Egg,
    Croissant,
    Salad,
    CookingPot,
    PackageOpen,
    ToolCase,
    Scooter,
    BadgeQuestionMark,
    BadgeAlert,
    Sparkles,
    Zap,
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
    CalendarDays,
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
    ChevronUp,
    ChevronDown,
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

  const shadowStyle = {
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
  };

  return props.onPress ? (
    <TouchableOpacity
      className={`${hasBgColor ? `${bgColorMap[color]} rounded-lg p-1.5` : ''} items-center justify-center ${props.className}`}
      style={hasShadow ? shadowStyle : undefined}
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
    <View
      className={`${hasBgColor ? `${bgColorMap[color]} rounded-lg p-1.5` : ''} items-center justify-center ${props.className}`}
    >
      <Component
        strokeWidth={2.2}
        {...props}
        stroke={colorMap[color]}
        fill={hasFill ? colorMap[color] : 'transparent'}
      />
    </View>
  );
}
