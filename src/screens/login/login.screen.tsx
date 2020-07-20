import React, { FC, useState } from 'react';
import * as Yup from 'yup';

import { useAuth } from 'hooks';
import { auth } from 'api';

import Screen from 'components/screen';
import { CustomForm as Form, FormField as Field, SubmitButton, ErrorMessage } from 'components/forms';

import { Container, Image } from './login.styles';

/* -------------------------------------------------------------------------- */

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const Login: FC = () => {
  const { logIn } = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }: { email: string; password: string }) => {
    const result = await auth.login(email, password);
    if (!result.ok) {
      return setLoginFailed(true);
    }

    setLoginFailed(false);
    logIn(result.data as string);
  };

  return (
    <Screen>
      <Container>
        <Image source={require('assets/images/logo-red.png')} />

        <Form initialValues={{ email: '', password: '' }} validationSchema={validationSchema} onSubmit={handleSubmit}>
          <ErrorMessage error="Invalid email or password" visible={loginFailed} />
          <Field
            name="email"
            icon="email"
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            textContentType="emailAddress"
            keyboardType="email-address"
          />

          <Field
            name="password"
            icon="lock"
            placeholder="Password"
            autoCorrect={false}
            autoCapitalize="none"
            textContentType="password"
            secureTextEntry
          />

          <SubmitButton title="Login" />
        </Form>
      </Container>
    </Screen>
  );
};

export default Login;
