import { ShadowStyleIOS } from 'react-native';

export const iosShadowStyle: ShadowStyleIOS = {
  shadowColor: '#919191',
  shadowOpacity: 0.05,
  shadowOffset: { width: 0, height: -2 },
  shadowRadius: 3,
};

export const shadowStyle: { elevation: number } = {
  elevation: 10,
};

export const horizontalInset = 20;

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
