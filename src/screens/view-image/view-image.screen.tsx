import React, { FC } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Container, Close, Delete, Image } from './view-image.styles';

/* -------------------------------------------------------------------------- */

const ViewImage: FC = () => (
  <Container>
    <Close>
      <MaterialCommunityIcons name="close" color="white" size={25} />
    </Close>

    <Delete>
      <MaterialCommunityIcons name="trash-can-outline" color="white" size={25} />
    </Delete>

    <Image resizeMode="contain" source={require('assets/images/chair.jpg')} />
  </Container>
);

export default ViewImage;
