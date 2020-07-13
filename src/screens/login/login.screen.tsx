import React, { FC } from 'react';
import * as Yup from 'yup';

import Screen from 'components/screen';
import { CustomForm as Form, FormField as Field, SubmitButton } from 'components/forms';

import { Container, Image } from './login.styles';

/* -------------------------------------------------------------------------- */

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const Login: FC = () => (
  <Screen>
    <Container>
      <Image source={require('assets/images/logo-red.png')} />

      <Form
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}>
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

export default Login;
