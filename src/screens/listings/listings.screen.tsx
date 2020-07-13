import React, { FC } from 'react';
import { FlatList } from 'react-native';

import Screen from 'components/screen';
import Card from 'components/card';

import { Container } from './listings.styles';

/* -------------------------------------------------------------------------- */

interface Item {
  id: number;
  title: string;
  price: number;
  image: any; // FIXME: Fix type of any later
}

const listings: Item[] = [
  {
    id: 1,
    title: 'Red jacket for sale',
    price: 100,
    image: require('assets/images/jacket.jpg'),
  },
  {
    id: 2,
    title: 'Couch in great condition',
    price: 1000,
    image: require('assets/images/couch.jpg'),
  },
];

const Listings: FC = () => (
  <Screen>
    <Container>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Card image={item.image} title={item.title} description={`$ ${item.price}`} />}
      />
    </Container>
  </Screen>
);

export default Listings;
