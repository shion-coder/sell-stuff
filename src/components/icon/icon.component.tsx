import React, { FC } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { theme } from 'styles';

import { Container } from './icon.styles';

/* -------------------------------------------------------------------------- */

interface Props {
  name: string;
  background?: string;
  color?: string;
  size?: number;
}

const Icon: FC<Props> = ({ name, background, color = theme.colors.white, size = 40 }) => (
  <Container background={background} size={size}>
    <MaterialCommunityIcons name={name} color={color} size={size && size * 0.5} />
  </Container>
);

export default Icon;
