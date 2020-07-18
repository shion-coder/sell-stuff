import styled from 'styled-components/native';
import Constants from 'expo-constants';

import { CustomText } from 'components/elements';

/* -------------------------------------------------------------------------- */

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 50px;
  width: 100%;
  align-items: center;
  justify-content: center;
  top: ${Constants.statusBarHeight + 'px'};
  position: absolute;
  z-index: 1;
`;

export const Text = styled(CustomText)`
  color: ${({ theme }) => theme.colors.white};
`;
