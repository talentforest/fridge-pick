import { vars } from 'nativewind';

export const colorTokens = {
  light: {
    bg: '#F8F8F8',
    card: '#F0F0F0',
    text: '#333333',
    border: '#E9E9E9',
    inactive: '#8A8A8A',

    neutral: {
      900: '#151515',
      800: '#4f4f4f',
      500: '#8A8A8A',
      200: '#E9E9E9',
      0: '#FFFFFF',
    },

    blue: {
      500: '#3F5FFF',
      200: '#BDDFFF',
    },

    red: {
      500: '#FF0B0B',
      200: '#FF7667',
    },

    yellow: {
      900: '#625A30',
      700: '#b45309',
      400: '#FFED95',
      100: '#FFEECF',
    },
  },

  dark: {
    bg: '#151515',
    card: '#252525',
    text: '#FFFFFF',
    border: '#555555',
    inactive: '#666',

    neutral: {
      900: '#151515',
      800: '#333333',
      500: '#8A8A8A',
      200: '#E9E9E9',
      0: '#FFFFFF',
    },

    blue: {
      500: '#3F5FFF',
      200: '#BDDFFF',
    },

    red: {
      500: '#FF0B0B',
      200: '#FF7667',
    },

    yellow: {
      900: '#625A30',
      700: '#b45309',
      400: '#FFED95',
      100: '#FFEECF',
    },
  },
} as const;

export const lightTheme = vars({
  '--color-bg': colorTokens.light.bg,
  '--color-card': colorTokens.light.card,
  '--color-text': colorTokens.light.text,
  '--color-border': colorTokens.light.border,
  '--color-inactive': colorTokens.light.inactive,

  '--color-neutral-900': colorTokens.light.neutral[900],
  '--color-neutral-800': colorTokens.light.neutral[800],
  '--color-neutral-500': colorTokens.light.neutral[500],
  '--color-neutral-200': colorTokens.light.neutral[200],
  '--color-neutral-0': colorTokens.light.neutral[0],

  '--color-blue-500': colorTokens.light.blue[500],
  '--color-blue-200': colorTokens.light.blue[200],

  '--color-red-500': colorTokens.light.red[500],
  '--color-red-200': colorTokens.light.red[200],

  '--color-yellow-900': colorTokens.light.yellow[900],
  '--color-yellow-700': colorTokens.light.yellow[700],
  '--color-yellow-400': colorTokens.light.yellow[400],
  '--color-yellow-100': colorTokens.light.yellow[100],
});

export const darkTheme = vars({
  '--color-bg': colorTokens.dark.bg,
  '--color-card': colorTokens.dark.card,
  '--color-text': colorTokens.dark.text,
  '--color-border': colorTokens.dark.border,
  '--color-inactive': colorTokens.dark.inactive,

  '--color-neutral-900': colorTokens.dark.neutral[900],
  '--color-neutral-800': colorTokens.dark.neutral[800],
  '--color-neutral-500': colorTokens.dark.neutral[500],
  '--color-neutral-200': colorTokens.dark.neutral[200],
  '--color-neutral-0': colorTokens.dark.neutral[0],

  '--color-blue-500': colorTokens.dark.blue[500],
  '--color-blue-200': colorTokens.dark.blue[200],

  '--color-red-500': colorTokens.dark.red[500],
  '--color-red-200': colorTokens.dark.red[200],

  '--color-yellow-900': colorTokens.dark.yellow[900],
  '--color-yellow-400': colorTokens.dark.yellow[400],
  '--color-yellow-100': colorTokens.dark.yellow[100],
});

export const theme = {
  dark: darkTheme,
  light: lightTheme,
};
