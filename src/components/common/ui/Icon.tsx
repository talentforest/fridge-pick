import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import { colorTokens } from '@/theme/color';
import {
  ArrowRightLeft,
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
  | 'ArrowRightLeft'
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
  | 'lightestGray'
  | 'lightYellow'
  | 'yellow'
  | 'neutral'
  | 'inactive'
  | 'red'
  | 'lightBlue'
  | 'blue'
  | 'green'
  | 'lightGreen'
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
    white: '#fff',
    black: '#000',
    text: scheme.text,
    red: scheme.red[5],
    orange: scheme.orange[7],
    // yellow
    lightYellow: scheme.yellow[3],
    yellow: scheme.yellow[7],
    // neutral
    neutral: scheme.neutral[7],
    darkGray: scheme.neutral[5],
    gray: scheme.inactive.bg,
    lightestGray: scheme.neutral[1],
    // blue
    lightBlue: scheme.blue[5],
    blue: scheme.blue[7],
    // green
    green: scheme.green[7],
    lightGreen: scheme.green[3],
    ice: scheme.ice[5],
    indigo: scheme.indigo[5],
    inactive: scheme.inactive.text,
  };

  const bgColorMap = {
    lightestGray: 'bg-neutral-3',
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
    lightGreen: 'bg-green-1',
    ice: 'bg-ice-1',
    indigo: 'bg-indigo-1',
    inactive: 'bg-border',
  };

  const iconObj: { [key in IconName]: LucideIcon } = {
    ArrowRightLeft,
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
    shadowColor: scheme.text,
    shadowOpacity: 0.3,
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
      style={hasShadow ? shadowStyle : undefined}
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
