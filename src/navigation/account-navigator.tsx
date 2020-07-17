import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Account from 'screens/account';
import Messages from 'screens/messages';

import { AccountStackParamList } from 'types';

/* -------------------------------------------------------------------------- */

const Stack = createStackNavigator<AccountStackParamList>();

export const AccountNavigator: FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Account" component={Account} />
    <Stack.Screen name="Messages" component={Messages} />
  </Stack.Navigator>
);
