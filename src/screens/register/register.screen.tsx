import React, { FC } from 'react';
import * as Yup from 'yup';

import Screen from 'components/screen';
import { CustomForm as Form, FormField as Field, SubmitButton as Submit } from 'components/forms';

import { Container, Image } from './register.styles';

/* -------------------------------------------------------------------------- */

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const Register: FC = () => (
  <Screen>
    <Container>
      <Image source={require('assets/images/logo-red.png')} />

      <Form
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}>
        <Field name="name" icon="account" placeholder="Name" autoCorrect={false} textContentType="name" />

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

        <Submit title="Register" />
      </Form>
    </Container>
  </Screen>
);

export default Register;
