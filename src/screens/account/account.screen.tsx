import React, { FC } from 'react';
import { FlatList } from 'react-native';

import Screen from 'components/screen';
import Icon from 'components/icon';
import { ListItem, Separator } from 'components/lists';

import { theme } from 'styles';
import { Container, User, Logout, Box } from './account.styles';

/* -------------------------------------------------------------------------- */

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      background: theme.colors.primary,
    },
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      background: theme.colors.secondary,
    },
  },
];

const Account: FC = () => (
  <Screen>
    <Container>
      <User title="Mosh Hamedami" description="moshhamedamy@gmail.com" image={require('assets/images/mosh.jpg')} />

      <Box>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={<Icon name={item.icon.name} background={item.icon.background} />}
            />
          )}
          ItemSeparatorComponent={Separator}
        />
      </Box>

      <Logout IconComponent={<Icon name="logout" background={theme.colors.corn} />} />
    </Container>
  </Screen>
);

export default Account;
