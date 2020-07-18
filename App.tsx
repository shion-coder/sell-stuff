import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';

import { navigationTheme, AppNavigator } from 'navigation';

import { theme } from 'styles';
import OfflineNotice from 'components/offline-notice';

/* -------------------------------------------------------------------------- */

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <OfflineNotice />

      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
