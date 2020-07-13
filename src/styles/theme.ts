import { Platform } from 'react-native';
import { DefaultTheme } from 'styled-components/native';

/* -------------------------------------------------------------------------- */

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      black: string;
      white: string;
      medium: string;
      light: string;
      danger: string;
      dark: string;
      corn: string;
    };
    text: {
      size: string;
      family: string;
    };
  }
}

export const theme: DefaultTheme = {
  colors: {
    primary: '#fc5c65',
    secondary: '#4ecdc4',
    black: '#000',
    white: '#fff',
    medium: '#6e6969',
    light: '#f8f4f4',
    danger: '#ff5252',
    dark: '#0c0c0c',
    corn: '#ffe66d',
  },
  text: {
    size: '18px',
    family: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
};
