import React, { FC, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Notifications } from 'expo';
import * as Permission from 'expo-permissions';

import { FeedNavigator } from 'navigation/feed-navigator';
import { AccountNavigator } from 'navigation/account-navigator';
import { expoPushTokensApi } from 'api';

import ListingEdit from 'screens/listing-edit';
import ListingButton from 'components/listing-button';

import { routes } from 'navigation/route';
import navigation from './root-navigation';
import { AppTabParamList } from 'types';

/* -------------------------------------------------------------------------- */

const Tab = createBottomTabNavigator<AppTabParamList>();

export const AppNavigator: FC = () => {
  useEffect(() => {
    registerForPushNotifications();

    Notifications.addListener((notification) => navigation.navigate('Account'));
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Permission.askAsync(Permission.NOTIFICATIONS);
      if (!permission.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokensApi.register(token);
    } catch (error) {
      console.log('Error getting a push token', error);
    }
  };

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{ tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} /> }}
      />
      <Tab.Screen
        name="ListingEdit"
        component={ListingEdit}
        options={({ navigation }) => ({
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="plus-circle" color={color} size={size} />,
          tabBarButton: () => <ListingButton onPress={() => navigation.navigate(routes.LISTING_EDIT)} />,
        })}
      />

      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="account" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
};
