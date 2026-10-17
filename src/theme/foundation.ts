export const typography = {
  fontFamily: {
    regular: 'NanumSquareRegular',
    medium: 'NanumSquareBold',
    bold: 'NanumSquareExtraBold',
  },

  fontSize: {
    caption: 12,
    bodySmall: 13,
    body: 14,
    bodyLarge: 16,
    titleSmall: 18,
    title: 20,
    heading: 24,
    display: 32,
  },

  lineHeight: {
    caption: 16,
    bodySmall: 18,
    body: 20,
    bodyLarge: 24,
    titleSmall: 26,
    title: 28,
    heading: 34,
    display: 42,
  },
} as const;

export const spacing = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
  16: 64,
} as const;

export const radius = {
  none: 0,
  xs: 6,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  full: 999,
} as const;

export const borderWidth = {
  none: 0,
  hairline: 0.5,
  default: 1,
  strong: 2,
} as const;

export const size = {
  icon: { sm: 16, md: 20, lg: 24 },
  control: { sm: 36, md: 44, lg: 52 },
  touchTarget: 44,
} as const;

export const motion = {
  duration: { instant: 100, fast: 160, normal: 240, slow: 320 },
  easing: {
    standard: [0.2, 0, 0, 1],
    enter: [0, 0, 0, 1],
    exit: [0.3, 0, 1, 1],
  },
} as const;

export const opacity = {
  disabled: 0.4,
  pressed: 0.72,
  overlay: 0.48,
} as const;

export const foundation = {
  typography,
  spacing,
  radius,
  borderWidth,
  size,
  motion,
  opacity,
} as const;

export type FoundationTokens = typeof foundation;
