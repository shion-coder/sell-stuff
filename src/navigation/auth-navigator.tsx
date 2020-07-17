import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from 'screens/welcome';
import Login from 'screens/login';
import Register from 'screens/register';

import { AuthStackParamList } from 'types';

/* -------------------------------------------------------------------------- */

const Stack = createStackNavigator<AuthStackParamList>();

export const AuthNavigator: FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
  </Stack.Navigator>
);
