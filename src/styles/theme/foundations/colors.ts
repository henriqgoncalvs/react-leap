import { theme } from '@chakra-ui/react';

import tailwindColors from './tailwindColors';

export const colors = {
  ...theme.colors,
  ...tailwindColors,
  brand: {
    50: '#ff7ae4',
    100: '#ff47da',
    200: '#ff2dd5',
    300: '#ff14cf',
    400: '#f900c7',
    500: '#C6009E',
    600: '#930075',
    700: '#7a0061',
    800: '#7a0061',
    900: '#2d0024',
  },
  gray: tailwindColors.blueGray,
  success: theme.colors.green,
  error: theme.colors.red,
  warning: theme.colors.yellow,
};
