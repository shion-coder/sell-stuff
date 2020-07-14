import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from 'components/icon';

import { PickerProps } from 'types';

import { Container, Text } from './category-picker.styles';

/* -------------------------------------------------------------------------- */

const CategoryPicker: FC<PickerProps> = ({ item, onPress }) => (
  <Container>
    <TouchableOpacity onPress={onPress}>
      <Icon background={item.backgroundColor} name={item.icon} size={80} />
    </TouchableOpacity>

    <Text>{item.name}</Text>
  </Container>
);

export default CategoryPicker;
