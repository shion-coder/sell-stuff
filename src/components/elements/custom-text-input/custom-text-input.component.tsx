import React, { FC } from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput, Icon } from './custom-text-input.styles';

/* -------------------------------------------------------------------------- */

export interface CustomTextInputProps extends TextInputProps {
  icon?: string;
}

const CustomTextInput: FC<CustomTextInputProps> = ({ icon, ...otherProps }) => (
  <Container>
    {icon && <Icon name={icon} />}

    <TextInput {...otherProps} />
  </Container>
);

export default CustomTextInput;
