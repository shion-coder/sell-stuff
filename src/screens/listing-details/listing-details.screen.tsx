import React, { FC } from 'react';

import ListItem from 'components/list-item';

import { Container, Image, Details, Title, Price, User } from './listing-details.styles';

/* -------------------------------------------------------------------------- */

const ListingDetails: FC = () => (
  <Container>
    <Image source={require('assets/images/jacket.jpg')} />

    <Details>
      <Title>Red jacket for sale</Title>
      <Price>$100</Price>

      <User>
        <ListItem image={require('assets/images/mosh.jpg')} title="Mosh Ham" description="5 Listings" />
      </User>
    </Details>
  </Container>
);

export default ListingDetails;
