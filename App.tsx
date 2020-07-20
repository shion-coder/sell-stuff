import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components/native';

import { AuthProvider } from 'context';

import Root from './Root';

import { theme } from 'styles';

/* -------------------------------------------------------------------------- */

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <Root />
    </AuthProvider>
  </ThemeProvider>
);

export default App;
