import React, { FC } from 'react';
import { FlatList } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { useAuth } from 'hooks';
import { MenuItem, AccountStackParamList } from 'types';

import Screen from 'components/screen';
import Icon from 'components/icon';
import { ListItem, Separator } from 'components/lists';

import { theme } from 'styles';
import { Container, User, Logout, Box } from './account.styles';

/* -------------------------------------------------------------------------- */

const menuItems: MenuItem[] = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      background: theme.colors.primary,
    },
    targetScreen: 'Messages',
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      background: theme.colors.secondary,
    },
    targetScreen: 'Messages',
  },
];

interface Props {
  navigation: StackNavigationProp<AccountStackParamList, 'Account'>;
}

const Account: FC<Props> = ({ navigation }) => {
  const { user, logOut } = useAuth();

  return (
    <Screen>
      <Container>
        <User title={user!.name} description={user!.email} image={require('assets/images/mosh.jpg')} />

        <Box>
          <FlatList
            data={menuItems}
            keyExtractor={(menuItem) => menuItem.title}
            renderItem={({ item }) => (
              <ListItem
                title={item.title}
                IconComponent={<Icon name={item.icon.name} background={item.icon.background} />}
                onPress={() => navigation.navigate(item.targetScreen)}
              />
            )}
            ItemSeparatorComponent={Separator}
          />
        </Box>

        <Logout IconComponent={<Icon name="logout" background={theme.colors.corn} />} onPress={logOut} />
      </Container>
    </Screen>
  );
};

export default Account;
