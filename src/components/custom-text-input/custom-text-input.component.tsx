import React, { FC } from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput, Icon } from './custom-text-input.styles';

/* -------------------------------------------------------------------------- */

interface Props extends TextInputProps {
  icon?: string;
}

const CustomTextInput: FC<Props> = ({ icon, ...otherProps }) => (
  <Container>
    {icon && <Icon name={icon} />}

    <TextInput {...otherProps} />
  </Container>
);

export default CustomTextInput;
