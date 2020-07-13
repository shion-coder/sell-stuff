import styled from 'styled-components/native';

import CustomButton from 'components/custom-button';

/* -------------------------------------------------------------------------- */

export const Background = styled.ImageBackground`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

export const LogoContainer = styled.View`
  position: absolute;
  top: 70px;
  align-items: center;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  padding: 20px;
`;

export const Logo = styled.Image`
  width: 100px;
  height: 100px;
`;

export const Tagline = styled.Text`
  font-size: 20px;
  font-weight: bold;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Login = styled(CustomButton).attrs({ title: 'Login' })``;

export const Register = styled(CustomButton).attrs({ title: 'Register' })`
  background-color: ${({ theme }) => theme.colors.secondary};
`;
