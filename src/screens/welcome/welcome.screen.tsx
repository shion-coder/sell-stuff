import React, { FC } from 'react';

import { Background, LogoContainer, Logo, Tagline, ButtonContainer, Login, Register } from './welcome.styles';

/* -------------------------------------------------------------------------- */

const Welcome: FC = () => (
  <Background blurRadius={10} source={require('assets/images/background.jpg')}>
    <LogoContainer>
      <Logo source={require('assets/images/logo-red.png')} />
      <Tagline>Sell What You Don't Need</Tagline>
    </LogoContainer>

    <ButtonContainer>
      <Login />
      <Register />
    </ButtonContainer>
  </Background>
);

export default Welcome;
