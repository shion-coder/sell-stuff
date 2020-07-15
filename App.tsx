import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components/native';

import { theme } from 'styles';

import ListingEdit from 'screens/listing-edit';

/* -------------------------------------------------------------------------- */

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <ListingEdit />
    </ThemeProvider>
  );
};

export default App;
