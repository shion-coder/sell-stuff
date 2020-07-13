import styled from 'styled-components/native';

import { CustomText } from 'components/elements';

/* -------------------------------------------------------------------------- */

export const Container = styled.View``;

export const Image = styled.Image`
  width: 100%;
  height: 300px;
`;

export const Details = styled.View`
  padding: 20px;
`;

export const Title = styled(CustomText)`
  font-size: 24px;
  font-weight: bold;
`;

export const Price = styled(CustomText)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const User = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
`;
