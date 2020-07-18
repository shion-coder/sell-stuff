import React, { FC } from 'react';
import { RouteProp } from '@react-navigation/native';

import { ListItem } from 'components/lists';

import { FeedStackParamList } from 'types';

import { Container, Image, Details, Title, Price, User } from './listing-details.styles';

/* -------------------------------------------------------------------------- */

interface Props {
  route: RouteProp<FeedStackParamList, 'ListingDetails'>;
}

const ListingDetails: FC<Props> = ({ route: { params } }) => (
  <Container>
    <Image preview={{ uri: params.images[0].thumbnailUrl }} tint="light" uri={params.images[0].url} />

    <Details>
      <Title>{params.title}</Title>
      <Price>{params.price}</Price>

      <User>
        <ListItem image={require('assets/images/mosh.jpg')} title="Mosh Ham" description="5 Listings" />
      </User>
    </Details>
  </Container>
);

export default ListingDetails;
