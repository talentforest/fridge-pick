// src/hooks/useAppTheme.ts

import { colorTokens } from '@/theme/color';
import { Appearance, useColorScheme } from 'react-native';

export type AppColorScheme = keyof typeof colorTokens;

export const useAppTheme = () => {
  const systemColorScheme = useColorScheme();

  const colorScheme: AppColorScheme = systemColorScheme === 'dark' ? 'dark' : 'light';

  const changeMode = () =>
    Appearance.setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');

  return {
    colorScheme,
    changeMode,
  } as const;
};
