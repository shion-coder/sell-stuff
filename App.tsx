import React, { FC, useState } from 'react';
import { ThemeProvider } from 'styled-components/native';

import { theme } from 'styles';

// import Welcome from 'screens/welcome';
// import ListingDetails from 'screens/listing-details';
// import Listings from 'screens/listings';
// import Messages from 'screens/messages';
// import Icon from 'components/icon';
import Screen from 'components/screen';
import CustomTextInput from 'components/custom-text-input';
import CustomPicker from 'components/custom-picker';
// import ListItem from 'components/list-item';
// import Account from 'screens/account';

/* -------------------------------------------------------------------------- */

const categories = [
  {
    id: 1,
    label: 'Furniture',
  },
  {
    id: 2,
    label: 'Clothing',
  },
  {
    id: 3,
    label: 'Camera',
  },
];

const App: FC = () => {
  const [category, setCategory] = useState(categories[0]);

  return (
    <ThemeProvider theme={theme}>
      <Screen>
        <CustomPicker
          items={categories}
          icon="apps"
          placeholder="Category"
          selectedItem={category}
          onSelectedItem={(item) => setCategory(item)}
        />

        <CustomTextInput icon="email" placeholder="Email" />
      </Screen>
    </ThemeProvider>
  );
};

export default App;
