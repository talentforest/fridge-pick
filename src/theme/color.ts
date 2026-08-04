import { vars } from 'nativewind';

/** 색상 새로 추가시 Text 컴포넌트에도 추가하기  */

export const colorTokens = {
  light: {
    bg: '#F8F8F8',
    card: '#FFFFFF',
    text: '#333333',
    border: '#efefef',
    line: '#cdcdcd',

    inactive: {
      bg: '#e7e7e7',
      text: '#aaaaaa',
    },

    neutral: {
      9: '#151515',
      7: '#4f4f4f',
      5: '#999999',
      3: '#E9E9E9',
      1: '#F8F8F8',
      0: '#fff',
    },

    green: {
      9: '#0d361e',
      7: '#15803d',
      5: '#25a264',
      3: '#62c987',
      1: '#e5ffe5',
    },

    blue: {
      9: '#1a1886',
      7: '#1d4ed8',
      5: '#3b82f6',
      3: '#93c5fd',
      1: '#f1f7ff',
      0: '#f5f9ff',
    },

    ice: {
      7: '#00779f',
      5: '#06b6d4',
      3: '#b4f5fd',
      1: '#e7fbff',
      0: '#f5fdff',
    },

    indigo: {
      5: '#4633c3',
      3: '#afa5ff',
      1: '#eeebff',
    },

    red: {
      9: '#510202',
      7: '#b91c1c',
      5: '#ef4444',
      3: '#fca5a5',
      1: '#fff0f0',
      0: '#fef5f5',
    },

    yellow: {
      9: '#5b501d',
      7: '#b77d00',
      5: '#e5b825',
      3: '#ffdc69',
      1: '#fff9bc',
      0: '#fffef3',
    },

    orange: {
      9: '#c05e03',
      7: '#f17d10',
      5: '#ffa928',
      3: '#ffd1a7',
      1: '#ffe6cf',
    },
  },

  dark: {
    bg: '#151515',
    card: '#252525',
    text: '#FFFFFF',
    border: '#2a2a2a',
    line: '#2a2a2a',
    inactive: {
      bg: '#333',
      text: '#666',
    },

    neutral: {
      9: '#F8F8F8',
      7: '#d4d4d4',
      5: '#999999',
      3: '#404040',
      1: '#171717',
      0: '#000',
    },

    blue: {
      9: '#dbeafe',
      7: '#93c5fd',
      5: '#3b82f6',
      3: '#1d4ed8',
      1: '#1a1886',
      0: '#04032a',
    },

    ice: {
      7: '#b4f4ff',
      5: '#67e8f9',
      3: '#06b6d4',
      1: '#0e7490',
      0: '#043441',
    },

    indigo: {
      5: '#d3cdff',
      3: '#6b56f2',
      1: '#3420a2',
    },

    red: {
      9: '#fee2e2',
      7: '#fca5a5',
      5: '#ef4444',
      3: '#b91c1c',
      1: '#510202',
      0: '#1f0101',
    },

    yellow: {
      9: '#fff9c9',
      7: '#eedda5',
      5: '#fcd34d',
      3: '#d29000',
      1: '#5b501d',
      0: '#382f06',
    },

    orange: {
      9: '#ffe6cf',
      7: '#ffd1a7',
      5: '#ffa928',
      3: '#f17d10',
      1: '#5d3508',
    },

    green: {
      9: '#c6ffc8',
      7: '#86efac',
      5: '#25a264',
      3: '#15803d',
      1: '#0d361e',
    },
  },
};

export const lightTheme = vars({
  '--color-bg': colorTokens.light.bg,
  '--color-card': colorTokens.light.card,
  '--color-text': colorTokens.light.text,
  '--color-border': colorTokens.light.border,
  '--color-line': colorTokens.light.line,
  '--color-inactive-bg': colorTokens.light.inactive.bg,
  '--color-inactive-text': colorTokens.light.inactive.text,

  '--color-neutral-9': colorTokens.light.neutral[9],
  '--color-neutral-7': colorTokens.light.neutral[7],
  '--color-neutral-5': colorTokens.light.neutral[5],
  '--color-neutral-3': colorTokens.light.neutral[3],
  '--color-neutral-1': colorTokens.light.neutral[1],
  '--color-neutral-0': colorTokens.light.neutral[0],

  '--color-blue-9': colorTokens.light.blue[9],
  '--color-blue-7': colorTokens.light.blue[7],
  '--color-blue-5': colorTokens.light.blue[5],
  '--color-blue-3': colorTokens.light.blue[3],
  '--color-blue-1': colorTokens.light.blue[1],
  '--color-blue-0': colorTokens.light.blue[0],

  '--color-ice-7': colorTokens.light.ice[7],
  '--color-ice-5': colorTokens.light.ice[5],
  '--color-ice-3': colorTokens.light.ice[3],
  '--color-ice-1': colorTokens.light.ice[1],
  '--color-ice-0': colorTokens.light.ice[0],

  '--color-indigo-5': colorTokens.light.indigo[5],
  '--color-indigo-3': colorTokens.light.indigo[3],
  '--color-indigo-1': colorTokens.light.indigo[1],

  '--color-red-9': colorTokens.light.red[9],
  '--color-red-7': colorTokens.light.red[7],
  '--color-red-5': colorTokens.light.red[5],
  '--color-red-3': colorTokens.light.red[3],
  '--color-red-1': colorTokens.light.red[1],
  '--color-red-0': colorTokens.light.red[0],

  '--color-yellow-9': colorTokens.light.yellow[9],
  '--color-yellow-7': colorTokens.light.yellow[7],
  '--color-yellow-5': colorTokens.light.yellow[5],
  '--color-yellow-3': colorTokens.light.yellow[3],
  '--color-yellow-1': colorTokens.light.yellow[1],
  '--color-yellow-0': colorTokens.light.yellow[0],

  '--color-orange-9': colorTokens.light.orange[9],
  '--color-orange-7': colorTokens.light.orange[7],
  '--color-orange-5': colorTokens.light.orange[5],
  '--color-orange-3': colorTokens.light.orange[3],
  '--color-orange-1': colorTokens.light.orange[1],

  '--color-green-9': colorTokens.light.green[9],
  '--color-green-7': colorTokens.light.green[7],
  '--color-green-5': colorTokens.light.green[5],
  '--color-green-3': colorTokens.light.green[3],
  '--color-green-1': colorTokens.light.green[1],
});

export const darkTheme = vars({
  '--color-bg': colorTokens.dark.bg,
  '--color-card': colorTokens.dark.card,
  '--color-text': colorTokens.dark.text,
  '--color-border': colorTokens.dark.border,
  '--color-line': colorTokens.dark.line,
  '--color-inactive-bg': colorTokens.dark.inactive.bg,
  '--color-inactive-text': colorTokens.dark.inactive.text,

  '--color-neutral-9': colorTokens.dark.neutral[9],
  '--color-neutral-7': colorTokens.dark.neutral[7],
  '--color-neutral-5': colorTokens.dark.neutral[5],
  '--color-neutral-3': colorTokens.dark.neutral[3],
  '--color-neutral-1': colorTokens.dark.neutral[1],
  '--color-neutral-0': colorTokens.dark.neutral[0],

  '--color-blue-9': colorTokens.dark.blue[9],
  '--color-blue-7': colorTokens.dark.blue[7],
  '--color-blue-5': colorTokens.dark.blue[5],
  '--color-blue-3': colorTokens.dark.blue[3],
  '--color-blue-1': colorTokens.dark.blue[1],
  '--color-blue-0': colorTokens.dark.blue[0],

  '--color-ice-7': colorTokens.dark.ice[7],
  '--color-ice-5': colorTokens.dark.ice[5],
  '--color-ice-3': colorTokens.dark.ice[3],
  '--color-ice-1': colorTokens.dark.ice[1],
  '--color-ice-0': colorTokens.dark.ice[0],

  '--color-indigo-5': colorTokens.dark.indigo[5],
  '--color-indigo-3': colorTokens.dark.indigo[3],
  '--color-indigo-1': colorTokens.dark.indigo[1],

  '--color-red-9': colorTokens.dark.red[9],
  '--color-red-7': colorTokens.dark.red[7],
  '--color-red-5': colorTokens.dark.red[5],
  '--color-red-3': colorTokens.dark.red[3],
  '--color-red-1': colorTokens.dark.red[1],
  '--color-red-0': colorTokens.dark.red[0],

  '--color-yellow-9': colorTokens.dark.yellow[9],
  '--color-yellow-7': colorTokens.dark.yellow[7],
  '--color-yellow-5': colorTokens.dark.yellow[5],
  '--color-yellow-3': colorTokens.dark.yellow[3],
  '--color-yellow-1': colorTokens.dark.yellow[1],
  '--color-yellow-0': colorTokens.dark.yellow[0],

  '--color-orange-9': colorTokens.dark.orange[9],
  '--color-orange-7': colorTokens.dark.orange[7],
  '--color-orange-5': colorTokens.dark.orange[5],
  '--color-orange-3': colorTokens.dark.orange[3],
  '--color-orange-1': colorTokens.dark.orange[1],

  '--color-green-9': colorTokens.dark.green[9],
  '--color-green-7': colorTokens.dark.green[7],
  '--color-green-5': colorTokens.dark.green[5],
  '--color-green-3': colorTokens.dark.green[3],
  '--color-green-1': colorTokens.dark.green[1],
});

export const theme = {
  dark: darkTheme,
  light: lightTheme,
};
