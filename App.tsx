import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';

import { AuthNavigator, navigationTheme, AppNavigator } from 'navigation';

import { theme } from 'styles';

/* -------------------------------------------------------------------------- */

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer theme={navigationTheme}>
        {/* <AuthNavigator /> */}
        <AppNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
