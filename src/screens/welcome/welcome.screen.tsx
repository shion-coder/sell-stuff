import React, { FC } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import { AuthStackParamList } from 'types';
import { routes } from 'navigation/route';

import { Background, LogoContainer, Logo, Tagline, ButtonContainer, Login, Register } from './welcome.styles';

/* -------------------------------------------------------------------------- */

interface Props {
  navigation: StackNavigationProp<AuthStackParamList, 'Welcome'>;
}

const Welcome: FC<Props> = ({ navigation }) => (
  <Background blurRadius={10} source={require('assets/images/background.jpg')}>
    <LogoContainer>
      <Logo source={require('assets/images/logo-red.png')} />
      <Tagline>Sell What You Don't Need</Tagline>
    </LogoContainer>

    <ButtonContainer>
      <Login onPress={() => navigation.navigate(routes.LOGIN)} />
      <Register onPress={() => navigation.navigate(routes.REGISTER)} />
    </ButtonContainer>
  </Background>
);

export default Welcome;
