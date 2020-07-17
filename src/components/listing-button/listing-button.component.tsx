import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { theme } from 'styles';
import { Container } from './listing-button.styles';

/* -------------------------------------------------------------------------- */

interface Props {
  onPress: () => void;
}

const ListingButton: FC<Props> = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Container>
      <MaterialCommunityIcons name="plus-circle" color={theme.colors.white} size={30} />
    </Container>
  </TouchableOpacity>
);

export default ListingButton;
