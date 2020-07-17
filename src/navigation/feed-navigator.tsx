import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Listings from 'screens/listings';
import ListingDetails from 'screens/listing-details';

import { FeedStackParamList } from 'types';

/* -------------------------------------------------------------------------- */

const Stack = createStackNavigator<FeedStackParamList>();

export const FeedNavigator: FC = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listings" component={Listings} />
    <Stack.Screen name="ListingDetails" component={ListingDetails} />
  </Stack.Navigator>
);
