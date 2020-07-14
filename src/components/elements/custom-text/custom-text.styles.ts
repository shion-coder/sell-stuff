import styled from 'styled-components/native';

/* -------------------------------------------------------------------------- */

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.text.size};
  font-family: ${({ theme }) => theme.text.family};
`;
