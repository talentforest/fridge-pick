import TouchableOpacity from '@/components/common/ui/TouchableOpacity';
import { useAppTheme } from '@/hooks/common/useAppTheme';
import { colorTokens } from '@/theme/color';
import {
  CalendarCheck,
  CalendarX,
  Check,
  Sun,
  Citrus,
  PaperBag,
  Utensils,
  LayoutGrid,
  Lightbulb,
  Sandwich,
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
import { View } from 'react-native';

export type IconName =
  | 'CalendarCheck'
  | 'CalendarX'
  | 'Check'
  | 'Sun'
  | 'Citrus'
  | 'PaperBag'
  | 'Utensils'
  | 'LayoutGrid'
  | 'Lightbulb'
  | 'Sandwich'
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
  | 'ArrowUp'
  | 'ArrowDown'
  | 'ArrowLeft'
  | 'ArrowRight'
  | 'ChevronLeft'
  | 'ChevronRight'
  | 'ChevronUp'
  | 'ChevronDown'
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
  | 'amber'
  | 'text'
  | 'lightestGray'
  | 'amber'
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
  const { colorScheme } = useAppTheme();

  const scheme = colorTokens[colorScheme];

  const colorMap = {
    white: '#fff',
    black: scheme.neutral[9],
    text: scheme.text,
    red: scheme.red[5],
    amber: scheme.amber[7],
    // neutral
    neutral: scheme.neutral[7],
    darkGray: scheme.neutral[5],
    gray: scheme.disabledBackground,
    lightestGray: scheme.neutral[1],
    // blue
    lightBlue: scheme.blue[5],
    blue: scheme.blue[7],
    // green
    green: scheme.green[7],
    lightGreen: scheme.green[3],
    ice: scheme.ice[7],
    indigo: scheme.primary,
    inactive: scheme.disabledText,
  };

  const bgColorMap = {
    lightestGray: 'bg-neutral-3',
    amber: 'bg-amber-1',
    white: '#fff',
    text: 'bg-neutral-1',
    neutral: 'bg-neutral-1',
    red: 'bg-red-1',
    lightBlue: 'bg-blue-1',
    blue: 'bg-blue-1',
    darkGray: 'bg-neutral-1',
    black: 'bg-neutral-9',
    gray: 'bg-disabledBackground',
    green: 'bg-green-1',
    lightGreen: 'bg-green-1',
    ice: 'bg-ice-1',
    indigo: 'bg-primary',
    inactive: 'bg-border',
  };

  const iconObj: { [key in IconName]: LucideIcon } = {
    CalendarCheck,
    CalendarX,
    Sun,
    Citrus,
    PaperBag,
    Utensils,
    LayoutGrid,
    Lightbulb,
    Sandwich,
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
    Check,
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
    Edit3,
    ChevronLeft,
    ChevronRight,
    ChevronUp,
    ChevronDown,
    CalendarClock,
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

  const bigIcon = ['Edit3'];

  const commonClassName = `${hasBgColor ? `${bgColorMap[color]} rounded-lg p-1.5` : ''} items-center justify-center ${props.className}`;

  return props.onPress ? (
    <TouchableOpacity
      className={commonClassName}
      style={hasShadow ? shadowStyle : undefined}
      onPress={props.onPress}
    >
      <Component
        strokeWidth={2.5}
        {...props}
        size={bigIcon.includes(name) ? +props.size! - 2 : props.size}
        stroke={colorMap[color]}
        fill={hasFill ? colorMap[color] : 'transparent'}
        pointerEvents="none"
      />
    </TouchableOpacity>
  ) : (
    <View className={commonClassName} style={hasShadow ? shadowStyle : undefined}>
      <Component
        strokeWidth={2.5}
        {...props}
        stroke={colorMap[color]}
        fill={hasFill ? colorMap[color] : 'transparent'}
        pointerEvents="none"
      />
    </View>
  );
}
