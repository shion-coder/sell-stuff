import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { FeedNavigator } from 'navigation/feed-navigator';
import { AccountNavigator } from 'navigation/account-navigator';

import ListingEdit from 'screens/listing-edit';
import ListingButton from 'components/listing-button';

import { routes } from 'navigation/route';
import { AppTabParamList } from 'types';

/* -------------------------------------------------------------------------- */

const Tab = createBottomTabNavigator<AppTabParamList>();

export const AppNavigator: FC = () => (
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
      options={{ tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="account" color={color} size={size} /> }}
    />
  </Tab.Navigator>
);
