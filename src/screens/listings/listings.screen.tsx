import React, { FC, useEffect } from 'react';
import { FlatList } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import Screen from 'components/screen';
import Card from 'components/card';
import { CustomText, CustomButton } from 'components/elements';

import { FeedStackParamList } from 'types';
import { routes } from 'navigation/route';
import { getListings, ListingItem } from 'api';

import { Container } from './listings.styles';
import ActivityIndicator from 'components/activity-indicator';
import { useApi } from 'hooks';

/* -------------------------------------------------------------------------- */

interface Props {
  navigation: StackNavigationProp<FeedStackParamList, 'Listings'>;
}

const Listings: FC<Props> = ({ navigation }) => {
  const { data: listings, error, loading, request: loadListings } = useApi<ListingItem[]>(getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <>
      <ActivityIndicator visible={loading} />

      <Screen>
        <Container>
          {error ? (
            <>
              <CustomText>Couldn't retrieve the listings.</CustomText>
              <CustomButton title="Retry" onPress={loadListings} />
            </>
          ) : (
            <FlatList
              data={listings}
              keyExtractor={(listing) => listing.id.toString()}
              renderItem={({ item }) => (
                <Card
                  imageUrl={item.images[0].url}
                  thumbnailUrl={item.images[0].thumbnailUrl}
                  title={item.title}
                  description={`$ ${item.price}`}
                  onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                />
              )}
            />
          )}
        </Container>
      </Screen>
    </>
  );
};

export default Listings;
