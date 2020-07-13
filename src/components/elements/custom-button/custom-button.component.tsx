import React, { FC } from 'react';

import { TouchableButton, Text } from './custom-button.styles';

/* -------------------------------------------------------------------------- */

interface Props {
  style?: string;
  title: string;
  onPress?: () => void;
}

const CustomButton: FC<Props> = ({ style, title, onPress }) => (
  <TouchableButton style={style} onPress={onPress}>
    <Text>{title}</Text>
  </TouchableButton>
);

export default CustomButton;
