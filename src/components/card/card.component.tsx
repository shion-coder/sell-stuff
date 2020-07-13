import React, { FC } from 'react';

import { Container, Image, Details, Title, Description } from './card.styles';

/* -------------------------------------------------------------------------- */

interface Props {
  image: any; //FIXME: Fix type any later
  title: string;
  description: string;
}

const Card: FC<Props> = ({ image, title, description }) => (
  <Container>
    <Image source={image} />

    <Details>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Details>
  </Container>
);

export default Card;
