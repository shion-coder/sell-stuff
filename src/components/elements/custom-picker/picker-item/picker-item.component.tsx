import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';

import { PickerProps } from 'types';

import { Text } from './picker-item.styles';

/* -------------------------------------------------------------------------- */

const PickerItem: FC<PickerProps> = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text>{item.name}</Text>
  </TouchableOpacity>
);

export default PickerItem;
