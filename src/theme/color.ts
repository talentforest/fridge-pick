import { palette } from '@/theme/palette';
import { vars } from 'nativewind';

export const colorTokens = {
  light: {
    // Primary
    primary: palette.indigo[500],
    primaryBackground: palette.indigo[50],

    // Background
    screen: palette.neutral[50],
    card: palette.neutral[0],
    overlay: palette.neutral[1000],

    // Border
    divider: palette.neutral[200],
    border: palette.neutral[200],
    inputBorder: palette.neutral[300],
    primaryBorder: palette.indigo[100],
    focusBorder: palette.indigo[300],

    // Text
    text: palette.neutral[950],
    textDescription: palette.neutral[500],
    textPlaceholder: palette.neutral[400],

    // Unselected
    unselectedBackground: palette.neutral[100],
    unselectedText: palette.neutral[500],
    unselectedBorder: palette.neutral[300],

    // Disabled
    disabledBackground: palette.neutral[200],
    disabledText: palette.neutral[400],
    disabledBorder: palette.neutral[200],

    // Input
    input: palette.neutral[100],

    // Status
    successText: palette.green[600],
    successBackground: palette.green[50],
    warningText: palette.amber[600],
    warningBackground: palette.amber[50],
    errorText: palette.red[500],
    errorBackground: palette.red[50],

    // Neutral scale
    neutral: {
      9: palette.neutral[950],
      7: palette.neutral[700],
      5: palette.neutral[500],
      3: palette.neutral[200],
      1: palette.neutral[50],
      0: palette.neutral[0],
    },

    // 냉장실
    blue: {
      9: palette.blue[900],
      7: palette.blue[700],
      5: palette.blue[500],
      3: palette.blue[300],
      1: palette.blue[50],
    },

    // 냉동실
    ice: {
      9: palette.ice[900],
      7: palette.ice[700],
      5: palette.ice[500],
      3: palette.ice[300],
      1: palette.ice[50],
    },

    // Success 또는 일반 Green UI
    green: {
      9: '#0D361E',
      7: palette.green[600],
      5: palette.green[500],
      3: palette.green[400],
      1: palette.green[50],
    },

    // Error 또는 일반 Red UI
    red: {
      9: '#510202',
      7: palette.red[600],
      5: palette.red[500],
      3: palette.red[400],
      1: palette.red[50],
      0: '#FEF5F5',
    },

    // Warning 또는 일반 Amber UI
    amber: {
      9: '#7C3D06',
      7: palette.amber[600],
      5: palette.amber[500],
      3: palette.amber[400],
      1: palette.amber[50],
    },
  },

  dark: {
    // Primary
    primary: palette.indigo[200],
    primaryBackground: palette.indigo[950],

    // Background
    screen: palette.neutral[950],
    card: palette.neutral[900],
    overlay: palette.neutral[1000],

    // Border
    divider: palette.neutral[800],
    border: palette.neutral[700],
    inputBorder: palette.neutral[600],
    primaryBorder: palette.indigo[700],
    focusBorder: palette.indigo[400],

    // Text
    text: palette.neutral[50],
    textDescription: palette.neutral[400],
    textPlaceholder: palette.neutral[500],

    // Unselected
    unselectedBackground: palette.neutral[850],
    unselectedText: palette.neutral[400],
    unselectedBorder: palette.neutral[700],

    // Disabled
    disabledBackground: palette.neutral[800],
    disabledText: palette.neutral[600],
    disabledBorder: palette.neutral[800],

    // Input
    input: palette.neutral[850],

    // Status
    successText: palette.green[400],
    successBackground: '#123523',
    warningText: palette.amber[400],
    warningBackground: '#3B2B0E',
    errorText: palette.red[500],
    errorBackground: '#3B1818',

    // Neutral scale
    neutral: {
      9: palette.neutral[50],
      7: palette.neutral[300],
      5: palette.neutral[400],
      3: palette.neutral[700],
      1: palette.neutral[900],
      0: palette.neutral[1000],
    },

    // 냉장실
    blue: {
      9: palette.blue[100],
      7: palette.blue[300],
      5: palette.blue[500],
      3: palette.blue[700],
      1: palette.blue[950],
    },

    // 냉동실
    ice: {
      9: palette.ice[100],
      7: palette.ice[300],
      5: palette.ice[500],
      3: palette.ice[700],
      1: palette.ice[950],
    },

    // Success 또는 일반 Green UI
    green: {
      9: palette.green[50],
      7: palette.green[400],
      5: palette.green[500],
      3: palette.green[600],
      1: '#123523',
    },

    // Error 또는 일반 Red UI
    red: {
      9: palette.red[50],
      7: palette.red[400],
      5: palette.red[500],
      3: palette.red[600],
      1: '#510202',
      0: '#1F0101',
    },

    // Warning 또는 일반 Amber UI
    amber: {
      9: palette.amber[50],
      7: palette.amber[400],
      5: palette.amber[500],
      3: palette.amber[600],
      1: '#3B2B0E',
    },
  },
} as const;

type ThemeMode = keyof typeof colorTokens;

const createTheme = (mode: ThemeMode) => {
  const colors = colorTokens[mode];

  return vars({
    // Primary
    '--color-primary': colors.primary,
    '--color-primaryBackground': colors.primaryBackground,

    // Background
    '--color-screen': colors.screen,
    '--color-card': colors.card,
    '--color-overlay': colors.overlay,

    // Border
    '--color-divider': colors.divider,
    '--color-border': colors.border,
    '--color-inputBorder': colors.inputBorder,
    '--color-focusBorder': colors.focusBorder,
    '--color-primaryBorder': colors.primaryBorder,

    // Text
    '--color-text': colors.text,
    '--color-textDescription': colors.textDescription,
    '--color-textPlaceholder': colors.textPlaceholder,

    // Unselected
    '--color-unselectedBackground': colors.unselectedBackground,
    '--color-unselectedText': colors.unselectedText,
    '--color-unselectedBorder': colors.unselectedBorder,

    // Disabled
    '--color-disabledBackground': colors.disabledBackground,
    '--color-disabledText': colors.disabledText,
    '--color-disabledBorder': colors.disabledBorder,

    // Input
    '--color-input': colors.input,

    // Status
    '--color-successText': colors.successText,
    '--color-successBackground': colors.successBackground,
    '--color-warningText': colors.warningText,
    '--color-warningBackground': colors.warningBackground,
    '--color-errorText': colors.errorText,
    '--color-errorBackground': colors.errorBackground,

    // Neutral
    '--color-neutral-9': colors.neutral[9],
    '--color-neutral-7': colors.neutral[7],
    '--color-neutral-5': colors.neutral[5],
    '--color-neutral-3': colors.neutral[3],
    '--color-neutral-1': colors.neutral[1],
    '--color-neutral-0': colors.neutral[0],

    // Blue
    '--color-blue-9': colors.blue[9],
    '--color-blue-7': colors.blue[7],
    '--color-blue-5': colors.blue[5],
    '--color-blue-3': colors.blue[3],
    '--color-blue-1': colors.blue[1],

    // Ice
    '--color-ice-9': colors.ice[9],
    '--color-ice-7': colors.ice[7],
    '--color-ice-5': colors.ice[5],
    '--color-ice-3': colors.ice[3],
    '--color-ice-1': colors.ice[1],

    // Green
    '--color-green-9': colors.green[9],
    '--color-green-7': colors.green[7],
    '--color-green-5': colors.green[5],
    '--color-green-3': colors.green[3],
    '--color-green-1': colors.green[1],

    // Amber
    '--color-amber-9': colors.amber[9],
    '--color-amber-7': colors.amber[7],
    '--color-amber-5': colors.amber[5],
    '--color-amber-3': colors.amber[3],
    '--color-amber-1': colors.amber[1],

    // Red
    '--color-red-9': colors.red[9],
    '--color-red-7': colors.red[7],
    '--color-red-5': colors.red[5],
    '--color-red-3': colors.red[3],
    '--color-red-1': colors.red[1],
    '--color-red-0': colors.red[0],
  });
};

export const theme = {
  light: createTheme('light'),
  dark: createTheme('dark'),
};
