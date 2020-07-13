import React, { FC, useState } from 'react';

import Screen from 'components/screen';
import CustomTextInput from 'components/custom-text-input';
import CustomButton from 'components/custom-button';

import { Container, Image } from './login.styles';

/* -------------------------------------------------------------------------- */

const Login: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Screen>
      <Container>
        <Image source={require('assets/images/logo-red.png')} />

        <CustomTextInput
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
          icon="email"
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />

        <CustomTextInput
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="password"
          icon="lock"
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />

        <CustomButton title="Login" onPress={() => console.log(email, password)} />
      </Container>
    </Screen>
  );
};

export default Login;
