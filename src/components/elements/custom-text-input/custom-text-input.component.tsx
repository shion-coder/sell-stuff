import React, { FC } from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput, Icon } from './custom-text-input.styles';

/* -------------------------------------------------------------------------- */

export interface CustomTextInputProps extends TextInputProps {
  icon?: string;
  width?: string | number;
}

const CustomTextInput: FC<CustomTextInputProps> = ({ icon, width, ...otherProps }) => (
  <Container width={width}>
    {icon && <Icon name={icon} />}

    <TextInput {...otherProps} />
  </Container>
);

export default CustomTextInput;
