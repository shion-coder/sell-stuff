import React, { FC } from 'react';

import { Container, Image, Details, Title, Description } from './card.styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

/* -------------------------------------------------------------------------- */

interface Props {
  imageUrl: string;
  thumbnailUrl: string;
  title: string;
  description: string;
  onPress: () => void;
}

const Card: FC<Props> = ({ imageUrl, thumbnailUrl, title, description, onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <Container>
      <Image preview={{ uri: thumbnailUrl }} tint="light" uri={imageUrl} />

      <Details>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Details>
    </Container>
  </TouchableWithoutFeedback>
);

export default Card;
