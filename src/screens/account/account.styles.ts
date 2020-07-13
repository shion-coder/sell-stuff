import styled from 'styled-components/native';

import ListItem from 'components/list-item';

/* -------------------------------------------------------------------------- */

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.light};
  flex: 1;
`;

export const User = styled(ListItem)``;

export const Logout = styled(ListItem).attrs({ title: 'Log Out' })``;

export const Box = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
`;
