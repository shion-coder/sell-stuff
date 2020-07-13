import React, { FC } from 'react';

import { Container, TextInput, Icon } from './custom-text-input.styles';

/* -------------------------------------------------------------------------- */

interface Props {
  icon?: string;
  placeholder?: string;
}

const CustomTextInput: FC<Props> = ({ icon, placeholder }) => (
  <Container>
    {icon && <Icon name={icon} />}

    <TextInput placeholder={placeholder} />
  </Container>
);

export default CustomTextInput;
