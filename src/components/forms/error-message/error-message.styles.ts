import styled from 'styled-components/native';

import { CustomText } from 'components/elements';

/* -------------------------------------------------------------------------- */

export const Container = styled.View``;

export const Error = styled(CustomText)`
  color: ${({ theme }) => theme.colors.danger};
  padding-left: 18px;
  font-size: 16px;
`;
