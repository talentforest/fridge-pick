import { colorTokens } from '@/theme/color';
import { ShadowStyleIOS } from 'react-native';

export const iosShadowStyle: ShadowStyleIOS = {
  shadowColor: '#919191',
  shadowOpacity: 0.05,
  shadowOffset: { width: 0, height: -2 },
  shadowRadius: 3,
};

export const inputShadowStyle = (colorScheme: 'light' | 'dark') => {
  return {
    shadowColor: colorTokens[colorScheme].neutral[9],
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
  };
};

export const onBoardingShadowStyle = (colorScheme: 'light' | 'dark') => {
  return {
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowColor: colorTokens[colorScheme].neutral[7],
  };
};

export const initialShadowStyle: ShadowStyleIOS = {
  shadowColor: 'transparent',
  shadowOpacity: 0,
  shadowOffset: { width: 0, height: 0 },
  shadowRadius: 0,
};

export const shadowStyle: { elevation: number } = {
  elevation: 10,
};

export const horizontalInset = 24;

export const HEX_OPACITY = {
  10: '1A',
  20: '33',
  30: '4D',
  40: '66',
  50: '80',
  60: '99',
  70: 'B3',
  80: 'CC',
  90: 'E6',
} as const;
