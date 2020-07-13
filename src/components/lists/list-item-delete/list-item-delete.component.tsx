import React, { FC } from 'react';
import { GestureResponderEvent } from 'react-native';

import { TouchableWithoutFeedback, Container, TrashIcon } from './list-item-delete.styles';

/* -------------------------------------------------------------------------- */

interface Props {
  onPress: (event: GestureResponderEvent) => void;
}

const ListItemDelete: FC<Props> = ({ onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <Container>
      <TrashIcon />
    </Container>
  </TouchableWithoutFeedback>
);

export default ListItemDelete;
