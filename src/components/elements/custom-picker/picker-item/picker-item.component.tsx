import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';

import { Text } from './picker-item.styles';

/* -------------------------------------------------------------------------- */

interface Props {
  label: string;
  onPress: () => void;
}

const PickerItem: FC<Props> = ({ label, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text>{label}</Text>
  </TouchableOpacity>
);

export default PickerItem;
