import { DefaultTheme } from '@react-navigation/native';

import { theme } from 'styles';

/* -------------------------------------------------------------------------- */

export const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.colors.primary,
    background: theme.colors.white,
  },
};
