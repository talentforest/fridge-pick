// src/hooks/useAppTheme.ts

import { colorTokens } from '@/theme/color';
import { useColorScheme } from 'react-native';

export type AppColorScheme = keyof typeof colorTokens;

export const useAppTheme = () => {
  const systemColorScheme = useColorScheme();

  const colorScheme: AppColorScheme = systemColorScheme === 'dark' ? 'dark' : 'light';

  return {
    colorScheme,
  } as const;
};
