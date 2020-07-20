import React, { FC, useState } from 'react';
import * as Yup from 'yup';

import Screen from 'components/screen';

import { CustomForm as Form, FormField as Field, SubmitButton as Submit, ErrorMessage } from 'components/forms';

import { IRegister, register, auth } from 'api';
import { useAuth, useApi } from 'hooks';

import { Container, Image } from './register.styles';
import ActivityIndicator from 'components/activity-indicator';

/* -------------------------------------------------------------------------- */

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const Register: FC = () => {
  const registerApi = useApi(register);

  const [error, setError] = useState<string>();
  const { logIn } = useAuth();

  const handleSubmit = async (userInfo: IRegister) => {
    const result = await registerApi.request(userInfo);

    if (!result.ok) {
      return result.data ? setError(result.data.error) : setError('An unexpected error occurred');
    }

    const { data: authToken } = await auth.login(userInfo.email, userInfo.password);
    logIn(authToken!);
  };

  return (
    <>
      <ActivityIndicator visible={registerApi.loading} />

      <Screen>
        <Container>
          <Image source={require('assets/images/logo-red.png')} />

          <Form
            initialValues={{ name: '', email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            <ErrorMessage error={error} visible={!!error} />

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
    </>
  );
};

export default Register;
